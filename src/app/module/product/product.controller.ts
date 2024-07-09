/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { ProductServices } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product added successfully',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const categoryId: any = req.query.category;
  const result = await ProductServices.getAllProductsFromDB(categoryId);
  if (result.length <= 0) {
    return sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'No Product Found',
      data: result,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Products retrieved successfully',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const bikeData = req.body;
  const result = await ProductServices.updateProductIntoDB(id, bikeData);

  if (!result) {
    return sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'Product Not Found',
      data: result,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product updated successfully',
    data: result,
  });
});
const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ProductServices.deleteProductfromDB(id);

  if (!result) {
    return sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'Product Not Found',
      data: result,
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product deleted successfully',
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
