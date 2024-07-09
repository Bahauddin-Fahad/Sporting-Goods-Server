import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  brand: { type: String, required: true },
  stockQuantity: { type: Number, required: true },
  rating: { type: Number, required: true },
});

export const ModelProduct = model<TProduct>('Product', ProductSchema);
