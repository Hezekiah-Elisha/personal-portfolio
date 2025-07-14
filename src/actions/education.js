"use server";
import { AddEducationFormSchema } from "@/lib/definitions";
import { instance } from "@/api";
import { getCookie } from "@/lib/session";

export async function addEducationAction(state, formData) {
  const validatedFields = AddEducationFormSchema.safeParse({
    institution: formData.get("institution"),
    degree: formData.get("degree"),
    skills: formData.get("skills"),
    location: formData.get("location"),
    field_of_study: formData.get("field_of_study"),
    start_date: formData.get("start_date"),
    end_date: formData.get("end_date"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const {
    institution,
    degree,
    skills,
    location,
    field_of_study,
    start_date,
    end_date,
  } = validatedFields.data;

  const token = await getCookie("token").then((token) => {
    if (!token) {
      throw new Error("Authentication token not found");
    }
    console.log("Token retrieved:", token.value);
    return token.value;
  });
  try {
    // const parsedData = AddEducationFormSchema.parse(formData);
    const response = await instance.post(
      "/educations",
      {
        institution,
        degree,
        skills,
        location,
        field_of_study,
        start_date,
        end_date,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      success: true,
      message: response.data.message || "Education added successfully!",
      data: response.data,
    };
  } catch (error) {
    console.log("Error adding education:", error);
    return {
      success: false,
      error: error.message || "An error occurred while adding education",
    };
  }
}
