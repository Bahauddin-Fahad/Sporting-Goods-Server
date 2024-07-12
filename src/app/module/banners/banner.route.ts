import express from 'express';
import { BannerControllers } from './banner.controller';

const router = express.Router();

router.get('/', BannerControllers.getAllBanners);

export const BannerRoutes = router;
