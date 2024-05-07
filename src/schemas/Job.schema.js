import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  idSubscriber: {
    type: String,
    required: true,
    minlength: 6,
  },
  idOrder: {
    type: String,
    required: true,
    minlength: 6,
  },
  idPrincipalCode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PrincipalCode",
  },
  speedTest1: {
    type: Number,
    required: true,
  },
  speedTest2: {
    type: Number,
    required: true,
  },
  lightLevel1: {
    type: Number,
    required: true,
  },
  lightLevel2: {
    type: Number,
    required: true,
  },
  dropLight: {
    type: Number,
    required: true,
  },
  terminalLight: {
    type: Number,
    required: true,
  },
  terminalDamaged: {
    type: Boolean,
    required: false,
  },
  idAnotherCodesJobs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AnotherCodesJob",
  },
  idJobsObservations: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobsObservation",
  },
  anotherObservations: {
    type: String,
    required: false,
    maxlength: 500,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

jobSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

jobSchema.set("toJSON", { virtuals: true });

export const jobModel = mongoose.model("Job", jobSchema);
