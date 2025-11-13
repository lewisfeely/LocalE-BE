import { Schema, model, Types, Document } from "mongoose";

export interface IReview extends Document {
  _id: Types.ObjectId;
  recipientId: string;
  senderId: string;
  sentDate: string;
  rating: number;
  description: string;
  title: string;
  images: string[];
  reviewId: string;
}

const ReviewSchema = new Schema<IReview>({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  recipientId: { type: String, default: "" },
  senderId: { type: String, default: "" },
  sentDate: { type: String, default: "" },
  rating: { type: Number, required: true },
  description: { type: String, default: "" },
  title: { type: String, default: "" },
  images: { type: [String], default: [] },
  reviewId: { type: String, default: "" },
});

export const Review = model<IReview>("Review", ReviewSchema);
