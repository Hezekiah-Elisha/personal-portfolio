import { z } from "zod";

export const SigninFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z.string().min(1, { message: "Password is required" }).trim(),
});
