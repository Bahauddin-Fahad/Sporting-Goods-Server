import { model, Schema } from 'mongoose';

const BannerSchema = new Schema({
  name: { type: String, required: true },
  bannerImage: { type: String, required: true },
});

export const ModelBanner = model('Banner', BannerSchema);
