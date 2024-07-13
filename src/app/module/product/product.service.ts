import { TProduct } from './product.interface';
import { ModelProduct } from './product.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { productSearchableFields } from './product.constant';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await ModelProduct.create(payload);
  return result;
};
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(ModelProduct.find(), query)
    .search(productSearchableFields)
    .filter()
    .sort()
    .paginate()
    .filterFields();
  const meta = await productQuery.countTotal();
  const result = await productQuery.modelQuery;
  return { meta, result };
};
const getSingleProductFromDB = async (id: string) => {
  return await ModelProduct.findById(id).populate('category');
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
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductfromDB,
};
