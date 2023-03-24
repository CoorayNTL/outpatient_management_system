import Patient from "../models/patient";
import logger from '../utils/logger'

export const createPatient = async (customer) => {
  const customerMade = (await new Patient(customer).save()).toObject();
  return customerMade
}

export const getAllPatients = async ({ sort = {}, filter = {}, page, limit = 10 }) => {
  const options = {
    page,
    limit,
    collation: {
      locale: "en",
    },
  };

  if (Object.keys(sort).length > 0) options.sort = sort;

  if (filter.member_count) {
    filter.members = { $size: Number(filter.member_count) };
    delete filter.member_count;
  }

  const aggregateQuery = () =>
    Patient.aggregate([
      {
        $match: filter,
      },
      { $unset: ["password", "verification_code"] },
    ]);

  return await (page
    ? Patient.aggregatePaginate(aggregateQuery(), options)
    : aggregateQuery()
  ).catch((err) => {
    logger.error(
      `An error occurred when retrieving customers - err: ${err.message}`
    );
    throw err;
  });
};

export const getOnePatient = async (filters, returnPassword = false) => {
  const customer = await Patient.findOne(filters).lean();
  if (!customer) return null;

  if (!returnPassword) delete customer.password;
  return customer;
};

export const findOneAndUpdatePatient = async (filters, data) => {
  const customer = await Patient.findOneAndUpdate(filters, data, {
    new: true,
  }).lean();
  if (!customer) return null;

  delete customer.password;
  return customer;
};

export const findOneAndRemovePatient = async (filters) => {
  return await Patient.findOneAndRemove(filters);
};

export const likeHealProfessionals = async (customerId, companyId) => {
  const user = await Patient.findById(customerId);
  let subscribed
  if (user?.liked_healProfessionals?.includes(companyId)) {
    await user.liked_healProfessionals.pull(companyId);
    subscribed = false;
  } else {
    await user.liked_healProfessionals.push(companyId);
    subscribed = true;
  }
  user.save()
  return subscribed
}