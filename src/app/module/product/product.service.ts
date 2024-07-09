import { TProduct } from './product.interface';
import { ModelProduct } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await ModelProduct.create(payload);
  return result;
};
const getAllProductsFromDB = async (categoryId: string) => {
  if (categoryId) {
    return await ModelProduct.find({ category: categoryId });
  } else {
    return await ModelProduct.find();
  }
};
const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await ModelProduct.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};
const deleteProductfromDB = async (id: string) => {
  const result = await ModelProduct.findByIdAndDelete(id);

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  updateProductIntoDB,
  deleteProductfromDB,
};
