





import { model, models, Schema } from "mongoose";

export interface IJobs {
  jobTitle: string;
  jobCategory: string;
  location: string;
  employmentType: string;
  yearsOfExperience: string;
  companyDescription: string;
  qualifications: string;
  additionalInfo?: string;
}
const JobSchema = new Schema<IJobs>({
  jobTitle: { type: String, required: true },
  jobCategory: {
    type: String,
    enum: ["Engineering", "Marketing", "Sales", "Design", "Operations"],
    required: true,
  },
  location: { type: String, required: true },
  employmentType: {
    type: String,
    enum: ["Full-time", "Part-time", "Contract"],
    required: true,
  },
  yearsOfExperience: { type: String, required: true },
  companyDescription: { type: String, required: true },
  qualifications: { type: String, required: true },
  additionalInfo: { type: String },
});
const Job = models.Job || model("Job", JobSchema);
export default Job;
