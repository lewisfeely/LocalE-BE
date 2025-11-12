import axios from "axios";
import { Request, Response } from "express";
import { error } from "console";
import { Profile } from "../Models/ProfileModel";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
        process.env.FIREBASE_API_KEY,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );

    const idToken = response.data.idToken;

    res.status(200).json({
      message: "Login successful",
      token: idToken,
      userId: response.data.localId,
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const {
      email,
      password,
      role,
      accountCreated,
      rating,
      profilePicture,
      age,
      skills,
      companyName,
      number,
    } = req.body;

    const apiKey = process.env.FIREBASE_API_KEY;

    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );

    const { idToken, localId } = response.data;

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
      localId,
    });
    await newUser.save();

    res.status(201).json({
      token: idToken,
      newUser: newUser,
    });
  } catch (err: any) {
    console.error(err.response?.data || err.message);
    res.status(400).json({
      message: "Failed to register user",
      error: err.response?.data || err.message,
    });
  }
};

export const resetpass = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const apiKey = process.env.FIREBASE_API_KEY;

    if (!apiKey) {
      return res
        .status(500)
        .json({ message: "Firebase API key not configured" });
    }

    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`,
      {
        requestType: "PASSWORD_RESET",
        email,
      }
    );

    return res.status(200).json({
      message: `Password reset email sent to ${email}`,
      response: response.data,
    });
  } catch (err: any) {
    console.error(err.response?.data || err.message);
    res.status(400).json({
      message: "Failed to send reset password",
      error: err.response?.data || err.message,
    });
  }
};
