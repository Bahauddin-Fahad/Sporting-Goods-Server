import { Router } from 'express';
import { ProductRoutes } from '../module/product/product.route';
import { CategoryRoutes } from '../module/category/category.route';
import { BannerRoutes } from '../module/banners/banner.route';

const router = Router();

const moduleRoutes = [
  { path: '/products', route: ProductRoutes },
  { path: '/categories', route: CategoryRoutes },
  { path: '/banners', route: BannerRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
