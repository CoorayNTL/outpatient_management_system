import { error } from "winston";
import asyncHandler from "../middleware/async";
import HealthProfessional from "../models/healthProfesional";
import {
    createHealthProfessional,
    retrieveAllHealthProfessional,
    getHealthProfessionalDetails,
} from "../services/healthProfessional";
import { makeResponse } from "../utils/response";

//Adding a Company
const addHealthProfessional = asyncHandler(async (req, res) => {
    const result = await createHealthProfessional(req.body);
    if (!result)
        return makeResponse({
            res,
            status: 500,
            message: "Failed to add Company",
        });
    if (result.status) return makeResponse({ res, ...result });
    return makeResponse({
        res,
        message: "HealthProfessionals added successfully",
    });
});

export const getAllHealthProfessionals = asyncHandler(async (req, res) => {
    const data = await retrieveAllHealthProfessional(
        req.query.page,
        req.query.limit
    );
    return makeResponse({
        res,
        data,
        message: "Companies retrieved successfully",
    });
});

export const getHealthProfessionalsById = asyncHandler(async (req, res) => {
    const result = await getHealthProfessionalDetails(req.params.id);

    if (result.status != 200) return makeResponse({ res, ...result });
    return makeResponse({ res, data: result.data, message: result.message });
});

//Update a HealthProfessionals
const updateHealthProfessional = async (req, res) => {
    const healthProfessionalsId = req.params.id;

    try {
        const healthProfessional = await HealthProfessional.findById(
            healthProfessionalsId
        );

        if (!healthProfessional) {
            return res.status(404).json("There is no HealthProfessionals");
        }

        const {
            name,
            email,
            address,
            telephone,
            customers,
            centers,
            logo,
            openhour,
            closehour,
            opendays,
            slogan,
            about,
        } = req.body;

        const com = await HealthProfessional.findByIdAndUpdate(
            healthProfessionalsId,
            {
                name,
                email,
                address,
                telephone,
                customers,
                centers,
                logo,
                openhour,
                closehour,
                opendays,
                slogan,
                about,
            }
        );

        res.status(200).json(com);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

//Delete a HealthProfessionals
const deleteHealthProfessional = async (req, res) => {
    const id = req.params.id;
    let healthProfessional;
    try {
        healthProfessional = await HealthProfessional.findByIdAndRemove(id);
    } catch (error) {
        console.log(error.message);
    }
    if (!healthProfessional) {
        return res.status(404).json({ message: "HealthProfessionals not found" });
    }
    return res.status(200).json({ healthProfessional });
};

module.exports = {
    addHealthProfessional,
    getAllHealthProfessionals,
    getHealthProfessionalsById,
    updateHealthProfessional,
    deleteHealthProfessional,
};
