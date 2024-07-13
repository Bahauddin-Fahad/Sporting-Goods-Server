import { TOrder } from './orders.interface';
import { ModelOrder } from './orders.model';

const createOrderIntoDB = async (payload: Partial<TOrder>) => {
  const result = await ModelOrder.create(payload);
  return result;
};

const getAllOrders = async () => {
  const result = await ModelOrder.find();

  if (result.length === 0) {
    return null;
  }
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrders,
};
