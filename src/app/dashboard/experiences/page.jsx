"use client";
import { instance } from "@/api";
import LoadingAnimation from "@/components/LoadingAnimation";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExperiences = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/experiences/");
      setExperiences(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching experiences:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 font-space-mono">
      <div className="flex flex-row items-center justify-between mb-4">
        <h2 className="text-2xl font-bold mb-4">Experiences</h2>
        <div>
          <Button onClick={fetchExperiences} className="">
            <RotateCcw className="inline hover:rotate-180 transition-transform duration-1000" />
          </Button>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <LoadingAnimation />
        </div>
      ) : (
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {experiences.map((exp) => (
            <div
              key={exp.ID}
              className="bg-muted/50 aspect-video rounded-xl p-4"
            >
              <div className="flex flex-row justify-between items-center mb-2">
                <h3 className="text-sm">{exp.title}</h3>
                <div className="text-xs text-muted-foreground italic">
                  <span>{exp.start_date}</span>
                  <span>-</span>
                  <span>{exp.end_date || "Present"}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold capitalize">
                  {exp.company}
                </p>
                <p className="text-xs text-muted-foreground">
                  {exp.description}
                </p>
              </div>
              <a href={exp.url} className="text-blue-500 hover:underline">
                View Experience
              </a>
            </div>
          ))}
        </div>
      )}
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        {/* Placeholder for additional content */}
      </div>
    </div>
  );
}
