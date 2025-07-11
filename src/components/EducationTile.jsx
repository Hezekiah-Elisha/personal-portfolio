"use client";
import { useEffect, useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import { instance } from "@/api";

export default function EducationTile() {
  const [loading, setLoading] = useState(true);
  const [education, setEducation] = useState([]);

  const fetchEducation = async () => {
    try {
      const response = await instance.get("/educations/");
      setEducation(response.data);
    } catch (error) {
      console.error("Error fetching education data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);
  return (
    <div>
      <div className="border border-accent my-4 rounded-md p-2">
        {/* Skeleton Loader */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <ul className="space-y-4">
            {education.map((edu) => (
              <li key={edu.id} className="p-4 border border-accent rounded-md">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">
                  {edu.institution}
                </p>
                <p className="text-sm">
                  {edu.start_date} - {edu.end_date}
                </p>
                <p className="mt-2">{edu.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
