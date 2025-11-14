import mongoose, { Document, Schema, Types } from "mongoose";

export interface IApplication extends Document {
  _id: Types.ObjectId;
  senderId: string;
  jobId: string;
  appliedDate: string;
  toolsSupplied: string;
  workersSent: string;
  Quote: number;
  rejected: boolean;
}

const applicationSchema = new Schema<IApplication>(
  {
    senderId: { type: String, default: "" },
    jobId: { type: String, default: "" },
    appliedDate: { type: String, default: "" },
    toolsSupplied: { type: String, default: "" },
    workersSent: { type: String, default: "" },
    Quote: { type: Number, default: 0 },
    rejected: { type: Boolean, default: false },
  },
  {
    timestamps: false,
  }
);

export const Application = mongoose.model<IApplication>(
  "Application",
  applicationSchema,
  "Applications"
);
