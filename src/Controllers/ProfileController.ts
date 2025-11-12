import { Request, Response } from "express";
import { Profile } from "../Models/ProfileModel";
import { error } from "console";

export const fetchUser = async (req: Request, res: Response) => {
  try {
    const firebaseUser = (req as any).user;
    const user = await Profile.findOne({ userId: firebaseUser.uid });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "failed to fetch user", error: err });
  }
};

export const postUser = async (req: Request, res: Response) => {
  try {
    const {
      role,
      accountCreated,
      rating,
      profilePicture,
      age,
      skills,
      companyName,
      email,
      number,
      userId,
    } = req.body;

    const newUser = new Profile({
      role,
      accountCreated,
      rating,
      profilePicture,
      age,
      skills,
      companyName,
      email,
      number,
      userId,
    });
    await newUser.save();

    res.status(200).json({
      message: "User created successfully",
      user: newUser._id,
    });
  } catch (err) {
    return res.status(500).json({ message: "Failed to post user", error: err });
  }
};
