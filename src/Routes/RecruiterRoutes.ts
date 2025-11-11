import { Router } from "express";
import { getItems } from "../Controllers/RecruiterController";

const router = Router();

router.get("/recruiters", getItems);

export default router;
