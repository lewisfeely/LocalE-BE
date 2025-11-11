import mongoose, { Document, Schema } from "mongoose";

interface IReview {
  clientId: string;
  client: string;
  reviewDate: string;
  rating: number;
  comment: string;
}

interface IJobPosted {
  jobId: string;
  recruiterId: string;
  jobDate: string;
  pay: number;
  jobDescription: string;
  category: string;
}

export interface IRecruiter extends Document {
  _id: string;
  hireCount: number;
  Reviews: IReview[];
  location: string;
  createdDate: string;
  jobsPosted: IJobPosted[];
  emailAddress: string;
  phoneNumber: string;
  profileImage: string;
}

// Review subdocument schema
const reviewSchema = new Schema<IReview>({
  clientId: { type: String, required: true },
  client: { type: String, required: true },
  reviewDate: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

// Job subdocument schema
const jobSchema = new Schema<IJobPosted>({
  jobId: { type: String, required: true },
  recruiterId: { type: String, required: true },
  jobDate: { type: String, required: true },
  pay: { type: Number, required: true },
  jobDescription: { type: String, required: true },
  category: { type: String, required: true },
});

const RecruiterSchema = new Schema<IRecruiter>(
  {
    _id: { type: String, required: true },
    hireCount: { type: Number, default: 0 },
    Reviews: { type: [reviewSchema], default: [] },
    location: { type: String, required: true },
    createdDate: { type: String, required: true },
    jobsPosted: { type: [jobSchema], default: [] },
    emailAddress: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    profileImage: { type: String, required: false },
  },
  { timestamps: false }
);

export const Recruiter = mongoose.model<IRecruiter>(
  "Recruiter",
  RecruiterSchema,
  "Recruiters"
);
