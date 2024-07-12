import httpStatus from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { BannerServices } from './banner.service';

const getAllBanners = catchAsync(async (req, res) => {
  const result = await BannerServices.getAllBannersFromDB();
  if (result.length <= 0) {
    return sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'No Banners Found',
      data: result,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Banners retrieved successfully',
    data: result,
  });
});

export const BannerControllers = {
  getAllBanners,
};
