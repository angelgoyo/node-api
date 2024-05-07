import mongoose from "mongoose";

const codeGroupSchema = new mongoose.Schema({
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
  secondaryCodes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SecondaryCode",
    },
  ],
  jsonVar: {
    type: String,
    required: true,
  },
});

codeGroupSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

codeGroupSchema.set("toJSON", { virtuals: true });

export const codeGroupModel = mongoose.model("CodesGroup", codeGroupSchema);
