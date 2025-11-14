import { Request, Response } from "express";
import { Profile } from "../Models/UserModel";
import { error } from "console";
import { ProfileDetails } from "../Models/ProfileDetailsModel";

export const fetchProfile = async (req: Request, res: Response) => {
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
      profilePicture,
      age,
      skills,
      companyName,
      email,
      number,
      userId,
      companyId,
    } = req.body;

    const newUser = new Profile({
      role,
      accountCreated,
      profilePicture,
      age,
      skills,
      companyName,
      email,
      number,
      userId,
    });

    const newProfile = new ProfileDetails({
      role,
      accountCreated,
      profilePicture,
      age,
      skills,
      companyName,
      email,
      number,
      userId,
      companyId,
    });
    await newProfile.save();
    await newUser.save();

    res.status(200).json({
      message: "User created successfully",
      user: newUser._id,
    });
  } catch (err) {
    return res.status(500).json({ message: "Failed to post user", error: err });
  }
};

export const editProfile = async (req: Request, res: Response) => {
  try {
    const updates = req.body;
    const userId = req.params;

    const profile = Profile.updateOne({ userId: userId }, updates);

    res.status(200).json({ message: "successfully edited" });
  } catch (err) {
    return res.status(500).json({ message: "Failed to post user", error: err });
  }
};
