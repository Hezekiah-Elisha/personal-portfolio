"use server";
import { AddProjectFormSchema } from "@/lib/definitions";
import { instance } from "@/api";
import { getCookie } from "@/lib/session";

export async function addProjectAction(state, formData) {
  const validatedFields = AddProjectFormSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    type: formData.get("type"),
    tech_stack: formData.get("tech_stack"),
    source_code: formData.get("source_code"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { title, description, type, tech_stack, source_code } =
    validatedFields.data;
  const token = await getCookie("token").then((token) => {
    if (!token) {
      throw new Error("Authentication token not found");
    }
    console.log("Token retrieved:", token.value);
    return token.value;
  });
  try {
    const response = await instance.post(
      "/projects/",
      {
        title,
        description,
        type,
        tech_stack,
        source_code,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error(title, description, type, tech_stack, source_code);
    console.error("Error adding project:", error.response?.data || error);
    return {
      success: false,
      errors: {
        global: "An unexpected error occurred while adding the project.",
      },
    };
  }
}
