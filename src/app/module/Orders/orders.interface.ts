import { Types } from 'mongoose';

export type TOrder = {
  name: string;
  email: string;
  address: string;
  phone: string;
  delivery: string;
  products: Types.ObjectId[];
};
