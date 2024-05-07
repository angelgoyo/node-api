import mongoose from "mongoose";

const secondaryCodeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 5,
  },
  description: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100,
  },
  price: {
    type: Number,
    required: true,
  },
  jsonBetween: {
    type: String,
    required: true,
  },
});

secondaryCodeSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

secondaryCodeSchema.set("toJSON", { virtuals: true });

export const secondaryCodeModel = mongoose.model(
  "SecondaryCode",
  secondaryCodeSchema
);
