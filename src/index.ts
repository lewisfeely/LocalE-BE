import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import profileRoutes from "./Routes/ProfileRoutes";
import recruiterRoutes from "./Routes/RecruiterRoutes";
import jobRoutes from "./Routes/JobsRoutes";
import authRoutes from "./Routes/AuthRoutes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/profile", profileRoutes);
app.use("/recruiters", recruiterRoutes);
app.use("/jobs", jobRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || "";

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Failed to start:", err);
    process.exit(1);
  }
}

start();
