import { model, Schema } from 'mongoose';

const CategorySchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

export const ModelCategory = model('Category', CategorySchema);
