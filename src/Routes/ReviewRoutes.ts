import { Router } from "express";
import { fetchReviewById } from "../Controllers/ReviewController";

const router = Router();

router.get("/reviews/:reviewId", fetchReviewById);

export default router;
