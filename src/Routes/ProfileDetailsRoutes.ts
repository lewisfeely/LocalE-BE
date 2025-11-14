import { Router } from "express";

import { verifyFirebaseToken } from "../ZMiddleware/authMiddleware";
import {
  editProfileDetailsById,
  fetchProfileDetailsById,
} from "../Controllers/ProfileDetailsController";

const router = Router();

router.get("/:userId", verifyFirebaseToken, fetchProfileDetailsById);

router.post(
  "/editprofile/:userId",
  verifyFirebaseToken,
  editProfileDetailsById
);

export default router;
