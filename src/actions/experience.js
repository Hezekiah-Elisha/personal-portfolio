"use server";
import { AddExperienceFormSchema } from "@/lib/definitions";
import { instance } from "@/api";
import { getCookie } from "@/lib/session";

export async function addExperienceAction(state, formData) {
  const validatedFields = AddExperienceFormSchema.safeParse({
    company: formData.get("company"),
    title: formData.get("title"),
    description: formData.get("description"),
    location: formData.get("location"),
    start_date: formData.get("start_date"),
    end_date: formData.get("end_date"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { company, title, description, location, start_date, end_date } =
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
      "/experiences",
      {
        company,
        title,
        description,
        location,
        start_date,
        end_date,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error(company, title, description, location, start_date, end_date);
    console.error("Error adding experience:", error.response?.data || error);
    console.error("Error adding experience:", error);
    return {
      success: false,
      errors: {
        global: "An unexpected error occurred while adding experience.",
      },
    };
  }
}
