import { ModelBanner } from './banner.model';

const getAllBannersFromDB = async () => {
  const result = await ModelBanner.find();
  return result;
};

export const BannerServices = {
  getAllBannersFromDB,
};
