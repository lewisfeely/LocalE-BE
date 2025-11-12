import { Router } from "express";
import { fetchUser, postUser } from "../Controllers/ProfileController";

import { verifyFirebaseToken } from "../Middleware/authMiddleware";

const router = Router();

router.get("/profile", verifyFirebaseToken, fetchUser);

export default router;
