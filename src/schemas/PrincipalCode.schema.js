import mongoose from "mongoose";

const principalCodeSchema = new mongoose.Schema({
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
  codesGroups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CodesGroup",
    },
  ],
});

principalCodeSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

principalCodeSchema.set("toJSON", { virtuals: true });

export const principalCodeModel = mongoose.model(
  "PrincipalCode",
  principalCodeSchema
);
