import { Router } from "express";
import {
  fetchJobs,
  fetchJobsById,
  editJobbyId,
  createJob,
  deleteById,
} from "../Controllers/JobsController";
import { verifyFirebaseToken } from "../ZMiddleware/authMiddleware";

const router = Router();

router.get("/jobs", verifyFirebaseToken, fetchJobs);

router.get("/job/:id", verifyFirebaseToken, fetchJobsById);

router.post("/job/:id", verifyFirebaseToken, editJobbyId);

router.post("/newjob", verifyFirebaseToken, createJob);

router.delete("/deletejob/:id", verifyFirebaseToken, deleteById);

export default router;
