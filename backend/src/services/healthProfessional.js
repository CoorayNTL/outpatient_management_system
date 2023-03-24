import {
  findHealthProfessional,
  insertHealthProfessional,
  getAllHealthProfessionals,
} from "../repository/healthProfessionals";

export const createHealthProfessional = async (data) => {
  const healthProfessional = await findHealthProfessional({
    email: data.email,
  });
  if (healthProfessional)
    return { status: 400, message: "This company  already added" };

  const healthProfessionalExist = await findHealthProfessional({
    name: data.name,
  });
  if (healthProfessionalExist)
    return { status: 400, message: "Company Already Exist " };

  return await insertHealthProfessional({ ...data });
};

export const retrieveAllHealthProfessional = async (data) => {
  return getAllHealthProfessionals(data);
};

export const getHealthProfessionalDetails = async (company_id) => {
  const result = await findHealthProfessional({ _id: company_id });

  if (result) {
    return {
      status: 400,
      message: "This comapany details doesn't exist ",
    };
  }
  return {
    status: 200,
    data: result,
    message: "Company details retrieved successfully",
  };
};
