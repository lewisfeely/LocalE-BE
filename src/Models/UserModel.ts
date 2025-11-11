import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  _id: string;
  email: string;
  refreshToken: string;
  accessToken: string;
}

const userSchema = new Schema<IUser>(
  {
    _id: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    refreshToken: { type: String, required: true },
    accessToken: { type: String, required: true },
  },
  { timestamps: false }
);

export const User = mongoose.model<IUser>("User", userSchema, "Users");
