import { Router } from "express";
import { verifyFirebaseToken } from "../ZMiddleware/authMiddleware";
import {
  acceptApplication,
  fetchApplicationsToJob,
  rejectApplication,
  sendApplication,
} from "../Controllers/ApplicationsControllers";

const router = Router();

router.post("/apply", verifyFirebaseToken, sendApplication);

router.get("/applications/:jobId", verifyFirebaseToken, fetchApplicationsToJob);

router.post("/accept/:applicationId", verifyFirebaseToken, acceptApplication);

router.delete("/reject/:applicationId", verifyFirebaseToken, rejectApplication);

export default router;
