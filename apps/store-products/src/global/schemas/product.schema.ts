import { Schema } from 'mongoose';

export const productSchema = new Schema({
  name: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },

  imageUrl: {
    type: String,
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
