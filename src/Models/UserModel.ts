import mongoose, { Document, Schema, Types } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;
  role: "worker" | "recruiter" | string;
  accountCreated: string;
  rating: string;
  profilePicture: string;
  age: string;
  skills: string[];
  companyName: string;
  email: string;
  number: string;
  userId: string;
}

const profileSchema = new Schema<IUser>(
  {
    role: { type: String, default: "worker" },
    accountCreated: { type: String, default: "" },
    rating: { type: String, default: "" },
    profilePicture: { type: String, default: "" },
    age: { type: String, default: "" },
    skills: { type: [String], default: [] },
    companyName: { type: String, default: "" },
    email: { type: String, default: "" },
    number: { type: String, default: "" },
    userId: { type: String, default: "" },
  },
  { timestamps: false }
);

export const Profile = mongoose.model<IUser>("User", profileSchema, "Users");
