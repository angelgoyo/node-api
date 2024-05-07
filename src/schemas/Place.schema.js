import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  place: {
    type: String,
    required: false,
    minlength: 5,
    maxlength: 100,
  },
});

placeSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

placeSchema.set("toJSON", { virtuals: true });

export const placeModel = mongoose.model("Place", placeSchema);
