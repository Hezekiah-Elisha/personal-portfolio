"use client";
import { useEffect, useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import { instance } from "@/api";

export default function WorkExperienceTile() {
  const [loading, setLoading] = useState(true);
  const [workExperience, setWorkExperience] = useState([]);

  const fetchWorkExperience = async () => {
    try {
      const response = await instance.get("/experiences/");
      setWorkExperience(response.data);
    } catch (error) {
      console.error("Error fetching work experience data:", error);
      return (
        <div className="text-red-500">Error loading work experience data.</div>
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWorkExperience();
  }, []);

  return (
    <div>
      <div className="border border-accent my-4 rounded-md p-2">
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <div className="space-y-4">
            {workExperience.map((exp) => (
              <div key={exp.ID} className="p-4 border border-accent rounded-md">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="text-sm">
                  {exp.start_date} - {exp.end_date}
                </p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
