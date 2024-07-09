import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { ProductValidations } from './product.validation';
import { ProductControllers } from './product.controller';

const router = express.Router();

router
  .route('/')
  .post(
    validateRequest(ProductValidations.CreateProductValidationSchema),
    ProductControllers.createProduct,
  )
  .get(ProductControllers.getAllProducts);

router
  .route('/:id')
  .put(ProductControllers.updateProduct)
  .delete(ProductControllers.deleteProduct);

export const ProductRoutes = router;
