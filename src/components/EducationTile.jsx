"use client";
import LoadingSkeleton from "./LoadingSkeleton";
import { instance } from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function EducationTile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["education"],
    queryFn: async () => {
      const response = await instance.get("/educations/");
      return response.data;
    },
  });

  if (isLoading) return <LoadingSkeleton />;
  if (error) {
    return <div className="text-red-500">Error loading education data.</div>;
  }

  return (
    <div>
      <div className="border border-accent my-4 rounded-md p-2">
        <div className="space-y-4">
          {data.map((edu) => (
            <div key={edu.id} className="p-4 border border-accent rounded-md">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
              <p className="text-sm">
                {edu.start_date} - {edu.end_date}
              </p>
              <p className="mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
