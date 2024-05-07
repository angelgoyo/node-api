import mongoose from "mongoose";

const boreTypeSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100,
  },
});

boreTypeSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

boreTypeSchema.set("toJSON", { virtuals: true });

export const boreTypeModel = mongoose.model("BoreType", boreTypeSchema);
