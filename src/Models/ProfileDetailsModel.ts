import mongoose, { Document, Schema, Types } from "mongoose";

export interface IProfileDetails extends Document {
  _id: Types.ObjectId;
  userId: string;
  yearlyEarnings: number;
  totalEarnings: number;
  jobsCompleted: number;
  rating: number;
  email: string;
  profileImage: string;
  companyName: string;
  companyId: string;
  skills: string[];
  accountCreated: string;
  age: number;
  number: string;
  PersonalStatement: string;
}

const ProfileDetailsSchema = new Schema<IProfileDetails>(
  {
    userId: { type: String, default: "" },
    yearlyEarnings: { type: Number, default: 0 },
    totalEarnings: { type: Number, default: 0 },
    jobsCompleted: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    email: { type: String, default: "" },
    profileImage: { type: String, default: "" },
    companyName: { type: String, default: "" },
    companyId: { type: String, default: "" },
    skills: { type: [String], default: [] },
    accountCreated: { type: String, default: "" },
    age: { type: Number, default: 0 },
    number: { type: String, default: "" },
    PersonalStatement: { type: String, default: "" },
  },
  { timestamps: false }
);

export const ProfileDetails = mongoose.model<IProfileDetails>(
  "ProfileDetail",
  ProfileDetailsSchema,
  "ProfileDetails"
);
