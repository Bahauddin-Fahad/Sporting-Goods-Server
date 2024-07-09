import { model, Schema } from 'mongoose';
import { TCategory } from './category.interface';

const CategorySchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

export const ModelCategory = model<TCategory>('Category', CategorySchema);
