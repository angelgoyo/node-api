import mongoose from "mongoose";

const rolSchema = new mongoose.Schema({
  name: { required: true, type: String },
  permissions: [{ required: true, type: String }],
});

rolSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

rolSchema.set("toJSON", { virtuals: true });

export const rolModel = mongoose.model("Rol", rolSchema);
