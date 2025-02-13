import { Router } from 'express';
import { ProductRoutes } from '../module/product/product.route';
import { OrderRoutes } from '../module/Orders/orders.route';

const router = Router();

const moduleRoutes = [
  { path: '/products', route: ProductRoutes },
  {
    path: '/orders',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
