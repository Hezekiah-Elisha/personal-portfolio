"use client";
import { useEffect, useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import { instance } from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function WorkExperienceTile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["workExperience"],
    queryFn: async () => {
      const response = await instance.get("/experiences/");
      return response.data;
    },
  });

  if (isLoading) return <LoadingSkeleton />;
  if (error) {
    return (
      <div className="text-red-500">Error loading work experience data.</div>
    );
  }

  return (
    <div>
      <div className="border border-accent my-4 rounded-md p-2">
        <div className="space-y-4">
          {data.map((exp) => (
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
      </div>
    </div>
  );
}
