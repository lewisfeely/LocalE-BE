import mongoose, { Document, Schema, Types } from "mongoose";

export interface IJob extends Document {
  _id: Types.ObjectId;
  address1: string;
  address2: string;
  address3: string;
  postcode: string;
  jobDate: string;
  posted: string;
  cardPayment: boolean;
  pay: number;
  recruiterId: string;
  category: string;
  images: string[]; // assuming array of image URLs or paths
  description: string;
  completed: boolean;
  recruiterName: string;
  workerId: string;
}

const jobSchema = new Schema<IJob>(
  {
    address1: { type: String, default: "" },
    address2: { type: String, default: "" },
    address3: { type: String, default: "" },
    postcode: { type: String, default: "" },
    jobDate: { type: String, default: "" },
    posted: { type: String, default: "" },
    cardPayment: { type: Boolean, default: false },
    pay: { type: Number, default: 0 },
    recruiterId: { type: String, default: "" },
    category: { type: String, default: "" },
    images: { type: [String], default: [] },
    description: { type: String, default: "" },
    completed: { type: Boolean, default: false },
    recruiterName: { type: String, default: "" },
    workerId: { type: String, default: "" },
  },
  { timestamps: false }
);

export const Job = mongoose.model<IJob>("Job", jobSchema, "Jobs");
