import { Recruiter } from "../Models/RecruiterModel";
import { Request, Response } from "express";

export const getItems = async (_req: Request, res: Response) => {
  try {
    const items = await Recruiter.find().sort();
    console.log("fetched users");
    return res.json(items);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};
