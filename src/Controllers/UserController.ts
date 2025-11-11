import { Request, Response } from "express";
import { User } from "../Models/UserModel";
import { error } from "console";

export const fetchUser = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "successfully connected" });
  } catch (err) {
    res.status(500).json({ message: "failed to fetch user", error: err });
  }
};

export const getItems = async (_req: Request, res: Response) => {
  try {
    const items = await User.find().sort();
    console.log("fetched users");
    return res.json(items);
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

export const postUser = async (req: Request, res: Response) => {
  try {
    const { _id, email, refreshToken, accessToken } = req.body;

    const newUser = new User({
      _id,
      email,
      refreshToken,
      accessToken,
    });
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: newUser._id,
    });
  } catch (err) {
    return res.status(500).json({ message: "Failed to post user", error: err });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    User.deleteOne();

    res.status(201).json({});
  } catch (err) {
    return res.status(500).json({ message: "Failed to post user", error: err });
  }
};
