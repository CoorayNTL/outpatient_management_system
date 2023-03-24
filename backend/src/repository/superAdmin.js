import SuperAdmin from "../models/superAdmin";
import logger from '../utils/logger'

export const createSuperAdmin = async (admin) => {
  const adminMade = (await new SuperAdmin(admin).save()).toObject();
  return adminMade
}

export const getAllSuperAdmins = async ({ sort = {}, filter = {}, page}) => {
  const options = {
    page,
    collation: {
      locale: 'en'
    }
  }

  if (Object.keys(sort).length > 0) options.sort = sort


  const aggregateQuery = () =>
    SuperAdmin.aggregate([
      {
        $match: filter,
      },
      { $unset: ["password", "verification_code"] },
    ]);

  return await (page
    ? SuperAdmin.aggregatePaginate(aggregateQuery(), options)
    : aggregateQuery()
  ).catch((err) => {
    logger.error(
      `An error occurred when retrieving admins - err: ${err.message}`
    );
    throw err;
  });
}

export const getOneSuperAdmin = async (filters, returnPassword = false) => {
  const admin = await SuperAdmin.findOne(filters).lean();
  if (!admin) return null

  if (!returnPassword) delete admin.password
  return admin
}

export const findOneAndUpdateSuperAdmin = async (filters, data) => {
  const admin = await SuperAdmin.findOneAndUpdate(filters, data, {
    new: true,
  }).lean();
  if (!admin) return null;

  delete admin.password;
  return admin;
};

export const findOneAndRemoveSuperAdmin = async (filters) => {
  return await SuperAdmin.findOneAndRemove(filters);
};