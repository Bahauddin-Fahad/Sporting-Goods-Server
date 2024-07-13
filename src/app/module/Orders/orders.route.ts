import express from 'express';
import { OrderValidations } from './orders.validation';
import { OrderControllers } from './orders.controller';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/',
  validateRequest(OrderValidations.createOrderValidationSchema),
  OrderControllers.createOrder,
);

router.get('/', OrderControllers.getAllOrders);

export const OrderRoutes = router;
