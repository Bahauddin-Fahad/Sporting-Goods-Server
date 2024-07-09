import { ModelCategory } from './category.model';

const getAllCategoriesFromDB = async () => {
  const result = await ModelCategory.find();
  return result;
};

export const CategoryServices = {
  getAllCategoriesFromDB,
};
