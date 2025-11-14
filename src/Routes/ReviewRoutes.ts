import { Router } from "express";
import {
  fetchReviewById,
  fetchReviewsByReceiverId,
  fetchReviewsBySenderId,
  sendReview,
} from "../Controllers/ReviewController";
import { verifyFirebaseToken } from "../ZMiddleware/authMiddleware";
import { deleteById } from "../Controllers/JobsController";

const router = Router();

router.get("/review/:reviewId", verifyFirebaseToken, fetchReviewById);

router.get("/sent/:senderId", verifyFirebaseToken, fetchReviewsBySenderId);

router.get(
  "/received/:recipientId",
  verifyFirebaseToken,
  fetchReviewsByReceiverId
);

router.post("/sendreview", verifyFirebaseToken, sendReview);

router.delete("/delete/:reviewId", verifyFirebaseToken, deleteById);

export default router;
