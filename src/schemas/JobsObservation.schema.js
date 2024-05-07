import mongoose from "mongoose";

const jobsObservationSchema = new mongoose.Schema({
  idObservation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Observation",
  },
  idPlace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
  },
});

jobsObservationSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

jobsObservationSchema.set("toJSON", { virtuals: true });

export const jobsObservationModel = mongoose.model(
  "JobsObservation",
  jobsObservationSchema
);
