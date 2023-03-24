import User from "../models/user";
import bcrypt from "bcrypt";
import { getOneUser, createUser } from "../repository/user";
import { createSuperAdmin } from "../repository/superAdmin";
import { createPatient } from "../repository/patient";
import { insertHealthProfessional } from "../repository/healthProfessionals";

export const loginUser = async ({ email, password }) => {
    const user = await getOneUser({ email }, true);
    if (!user) return false;
    const isPasswordMatch = await new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (err, hash) => {
            if (err) reject(err);
            resolve(hash);
        });
    });
    if (!isPasswordMatch) return false;
    delete user.password;
    return user;
};

export const registerUser = async ({ user, specificData }) => {

    const userExists = await getOneUser({ email: user.email }, false);
    if (userExists) return -1;


    const encryptedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(
            user.password,
            parseInt(process.env.BCRYPT_SALT_ROUNDS),
            (err, hash) => {
                if (err) reject(err);
                resolve(hash);
            }
        );
    });

    // const userExists = await getOneUser({}, false);
    // if (userExists) return -1;

    if (user.role === "PATIENT") {
        var newCustomer = await createPatient(specificData);
    } else if (user.role === "SUPER_ADMIN") {
        var newAdmin = await createSuperAdmin(specificData);
    } else if (user.role === "HEALTH_PROF") {
        var newCompany = await insertHealthProfessional(specificData);
    }

    const registeredUser = await createUser({
        ...user,
        password: encryptedPassword,
        superAdmin: user.role === "SUPER_ADMIN" ? newAdmin._id : null,
        patient: user.role === "PATIENT" ? newCustomer._id : null,
        healthProfessional: user.role === "HEALTH_PROF" ? newCompany._id : null,
    });

    delete registeredUser.password;

    return registeredUser;
};
