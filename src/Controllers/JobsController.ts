import { Request, Response } from "express";
import mongoose from "mongoose";
import { Job } from "../Models/JobsModel";

export const fetchJobs = async (_req: Request, res: Response) => {
  try {
    const items = await Job.find({ workerId: "" });
    return res.json(items);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const fetchJobsById = async (_req: Request, res: Response) => {
  try {
    const { id } = _req.params;
    const job = await Job.findOne({ _id: id });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    return res.status(200).json(job);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const editJobbyId = async (_req: Request, res: Response) => {
  try {
    const { id } = _req.params;
    const updates = _req.body;
    const job = await Job.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    return res.json(job);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const createJob = async (_req: Request, res: Response) => {
  try {
    const newJob = _req.body;
    await Job.create(newJob);

    return res.status(201).json({ message: "job created" });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const deleteById = async (_req: Request, res: Response) => {
  try {
    const { id } = _req.params;
    const job = await Job.findByIdAndDelete(id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "job deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};
