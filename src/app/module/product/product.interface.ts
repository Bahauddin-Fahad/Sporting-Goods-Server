import { Types } from 'mongoose';

export interface TProduct {
  name: string;
  description: string;
  price: number;
  image: string;
  category: Types.ObjectId;
  brand: string;
  stockQuantity: number;
  rating: number;
}
