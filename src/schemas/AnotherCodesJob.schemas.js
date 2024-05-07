import mongoose from "mongoose";

const anotherJobSchema = new mongoose.Schema({
  idSecondaryCode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SecondaryCode",
  },
  jsonValues: {
    type: String,
    required: false,
  },
});

anotherJobSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

anotherJobSchema.set("toJSON", { virtuals: true });

export const anotherJobModel = mongoose.model(
  "AnotherCodesJob",
  anotherJobSchema
);
