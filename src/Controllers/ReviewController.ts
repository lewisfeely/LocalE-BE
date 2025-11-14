import { Request, Response } from "express";
import { Review } from "../Models/ReviewModel";
import mongoose from "mongoose";

export const fetchReviewById = async (_req: Request, res: Response) => {
  try {
    const { reviewId } = _req.params;
    const items = await Review.find({ reviewId: reviewId });
    return res.status(200).json(items);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const fetchReviewsBySenderId = async (_req: Request, res: Response) => {
  try {
    const { senderId } = _req.params;
    const items = await Review.find({ senderId: senderId });
    return res.status(200).json(items);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const fetchReviewsByReceiverId = async (
  _req: Request,
  res: Response
) => {
  try {
    const { recipientId } = _req.params;
    const items = await Review.find({ recipientId: recipientId });
    return res.status(200).json(items);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const sendReview = async (_req: Request, res: Response) => {
  try {
    const {
      recipientId,
      senderId,
      sentDate,
      rating,
      description,
      title,
      images,
    } = _req.body;

    const newReview = new Review({
      recipientId: recipientId,
      senderId: senderId,
      sentDate: sentDate,
      rating: rating,
      description: description,
      title: title,
      images: images,
      reviewId: new mongoose.Types.ObjectId().toString(),
    });
    const savedReview = await newReview.save();

    return res.status(201).json({
      message: "Review created successfully",
      review: savedReview,
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const deleteReviewByReviewId = async (_req: Request, res: Response) => {
  try {
    const { reviewId } = _req.params;

    await Review.deleteOne({ reviewId: reviewId });

    return res.status(201).json({
      message: "Review deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};
