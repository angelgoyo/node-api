import mongoose from "mongoose";

const observationSchema = new mongoose.Schema({
  observation: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
  },
  places: {
    type: Boolean,
    required: false,
  },
});

observationSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

observationSchema.set("toJSON", { virtuals: true });

export const observationModel = mongoose.model(
  "Observation",
  observationSchema
);
