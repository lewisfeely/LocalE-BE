import { Router } from "express";
import {
  fetchJobs,
  fetchJobsById,
  editJobbyId,
  createJob,
  deleteById,
} from "../Controllers/JobsController";

const router = Router();

router.get("/jobs", fetchJobs);

router.get("/job/:id", fetchJobsById);

router.post("/job/:id", editJobbyId);

router.post("/newjob", createJob);

router.delete("/deletejob/:id", deleteById);

export default router;
