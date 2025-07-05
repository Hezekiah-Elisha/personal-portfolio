"use server";
import { instance } from "@/api";
import { SigninFormSchema } from "@/lib/definitions";
import { createCookie } from "@/lib/session";

export async function signin(state, formData) {
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { email, password } = validatedFields.data;

  try {
    const response = await instance.post("/auth/login", {
      email,
      password,
    });
    await createCookie("token", response.data.token);
    await createCookie("user", JSON.stringify(response.data.user));

    return { success: true, user: response.data.user };
  } catch (error) {
    console.error("Error during sign-in:", error);
    return {
      success: false,
      errors: { global: "An unexpected error occurred." },
    };
  }
}
