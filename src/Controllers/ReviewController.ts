import { Recruiter } from "../Models/RecruiterModel";
import { Request, Response } from "express";
import { Review } from "../Models/ReviewModel";

export const fetchReviewById = async (_req: Request, res: Response) => {
  try {
    const reviewId = _req.params;
    const items = await Review.find({ reviewId: reviewId });
    return res.status(200).json(items);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};
