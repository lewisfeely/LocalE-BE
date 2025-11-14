import { Request, Response } from "express";
import { Profile } from "../Models/UserModel";
import { error } from "console";
import { ProfileDetails } from "../Models/ProfileDetailsModel";

export const fetchProfileDetailsById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await ProfileDetails.findOne({ userId: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "failed to fetch user", error: err });
  }
};

export const editProfileDetailsById = async (req: Request, res: Response) => {
  try {
    const userId = req.params;
    const updates = req.body;
    const user = await ProfileDetails.findOneAndUpdate(
      { userId: userId },
      updates
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "failed to fetch user", error: err });
  }
};
