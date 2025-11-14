import { Router } from "express";
import { getItems } from "../Controllers/RecruiterController";
import { verifyFirebaseToken } from "../ZMiddleware/authMiddleware";

const router = Router();

router.get("/recruiters", verifyFirebaseToken, getItems);

export default router;
