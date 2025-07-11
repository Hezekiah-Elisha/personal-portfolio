import { z } from "zod";

export const SigninFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z.string().min(1, { message: "Password is required" }).trim(),
});

export const AddProjectFormSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }).trim(),
  description: z.string().min(1, { message: "Description is required" }).trim(),
  type: z.string().min(1, { message: "Type is required" }).trim(),
  techStack: z.string().optional().default(""),
  sourceCode: z.string().optional().default("https://github.com"),
});

export const AddEducationFormSchema = z.object({
  institution: z.string().min(1, { message: "Institution is required" }).trim(),
  degree: z.string().min(1, { message: "Degree is required" }).trim(),
  skills: z.string().min(1, { message: "Skills are required" }).trim(),
  location: z.string().trim().optional(),
  field_of_study: z.string().trim().optional(),
  start_date: z.string().trim().optional(),
  end_date: z.string().trim().optional(),
});

export const AddExperienceFormSchema = z.object({
  company: z.string().min(1, { message: "Company is required" }).trim(),
  title: z.string().min(1, { message: "Position is required" }).trim(),
  startDate: z.string().trim().optional(),
  endDate: z.string().trim().optional(),
  description: z.string().trim().optional(),
  location: z.string().trim().optional(),
});
