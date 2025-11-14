import { Request, Response } from "express";
import { error } from "console";
import { Application } from "../Models/ApplicationsModel";
import { Job } from "../Models/JobsModel";

export const fetchApplicationsToJob = async (_req: Request, res: Response) => {
  try {
    const { jobId } = _req.params;
    const items = await Application.find({ jobId: jobId });
    if (!items) {
      return res.status(400).json({ message: "no application matching" });
    }
    return res.status(200).json(items);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const rejectApplication = async (_req: Request, res: Response) => {
  try {
    const { applicationId } = _req.params;
    const items = await Application.findByIdAndUpdate(applicationId, {
      rejected: true,
    });

    if (!items) {
      return res.status(400).json({ message: "no application matching" });
    }

    return res.status(200).json({ message: "rejceted" });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const sendApplication = async (_req: Request, res: Response) => {
  try {
    const { senderId, jobId, appliedDate, toolsSupplied, workersSent, quote } =
      _req.body;

    const newApplication = new Application({
      senderId,
      jobId,
      appliedDate,
      toolsSupplied,
      workersSent,
      quote,
    });

    const savedApplication = await newApplication.save();

    return res.status(201).json({
      message: "Application submitted successfully",
      application: savedApplication,
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const acceptApplication = async (_req: Request, res: Response) => {
  try {
    const { applicationId } = _req.params;
    const application = await Application.findById(applicationId);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    const { senderId, jobId } = application;

    const newJob = await Job.findByIdAndUpdate(
      jobId,
      { workerId: senderId },
      { new: true }
    );
    return res.status(200).json(newJob);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};
