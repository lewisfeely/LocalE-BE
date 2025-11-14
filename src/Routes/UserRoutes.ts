import { Router } from "express";
import {
  editProfile,
  fetchProfile,
  postUser,
} from "../Controllers/UserController";

import { verifyFirebaseToken } from "../ZMiddleware/authMiddleware";

const router = Router();

router.get("/profile", verifyFirebaseToken, fetchProfile);

router.post("/editProfile/:userId", verifyFirebaseToken, editProfile);

export default router;
