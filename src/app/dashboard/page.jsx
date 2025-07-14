"use client";
import { useEffect, useState } from "react";
import { instance } from "@/api";
import LoadingAnimation from "@/components/LoadingAnimation";
import TechStack from "@/components/TechStack";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const [isProjectsLoading, setIsProjectsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isEducationsLoading, setIsEducationsLoading] = useState(true);
  const [isExperiencesLoading, setIsExperiencesLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const fetchProjects = async () => {
    setIsProjectsLoading(true);
    try {
      const response = await instance.get("/projects/");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setIsProjectsLoading(false);
    }
  };

  const fetchEducations = async () => {
    setIsEducationsLoading(true);
    try {
      const response = await instance.get("/educations/");
      setEducations(response.data);
    } catch (error) {
      console.error("Error fetching educations:", error);
    } finally {
      setIsEducationsLoading(false);
    }
  };

  const fetchExperiences = async () => {
    setIsExperiencesLoading(true);
    try {
      const response = await instance.get("/experiences/");
      setExperiences(response.data);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    } finally {
      setIsExperiencesLoading(false);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([
        fetchProjects(),
        fetchEducations(),
        fetchExperiences(),
      ]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 font-space-mono">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl flex flex-col items-center justify-center">
          <span className="capitalize">Projects Number:</span>
          {isProjectsLoading ? (
            <div className="flex items-center justify-center h-full">
              <LoadingAnimation />
            </div>
          ) : (
            <span className="text-9xl font-bold">
              {isProjectsLoading ? "Loading projects..." : projects.length}
            </span>
          )}
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl flex flex-col items-center justify-center">
          <span className="capitalize">Education number:</span>
          {isEducationsLoading ? (
            <div className="flex items-center justify-center h-full">
              <LoadingAnimation />
            </div>
          ) : (
            <span className="text-9xl font-bold">
              {isEducationsLoading
                ? "Loading educations..."
                : educations.length}
            </span>
          )}
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl flex flex-col items-center justify-center">
          <span className="capitalize">Experience number:</span>
          {isExperiencesLoading ? (
            <div className="flex items-center justify-center h-full">
              <LoadingAnimation />
            </div>
          ) : (
            <span className="text-9xl font-bold">
              {isExperiencesLoading
                ? "Loading experiences..."
                : experiences.length}
            </span>
          )}
        </div>
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min p-4 space-y-2">
        <div className="">
          <h3 className="text-2xl font-bold mb-4">Available projects</h3>
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <LoadingAnimation />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="rounded-lg shadow w-full hover:shadow-lg transition-colors cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-bold capitalize">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className={"p-4"}>
                    <p className="text-sm text-gray-600">
                      {project.description}
                    </p>
                    <div className="mt-2">
                      <span className="text-xs text-gray-500">
                        <TechStack techStack={project.tech_stack} />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Available educations</h3>
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <LoadingAnimation />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {educations.map((education) => (
                <Card
                  key={education.id}
                  className="rounded-lg shadow w-full hover:shadow-lg transition-colors cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-bold capitalize">
                      {education.institution}
                    </CardTitle>
                    <CardDescription>
                      {education.field_of_study}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className={"p-4"}>
                    <p className="text-sm text-gray-600">
                      {education.description}
                    </p>
                    <div className="mt-2">
                      <span className="text-xs text-gray-500">
                        <TechStack techStack={education.skills} />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Available experiences</h3>
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <LoadingAnimation />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {experiences.map((experience) => (
                <Card
                  key={experience.ID}
                  className="rounded-lg shadow w-full hover:shadow-lg transition-colors cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-bold capitalize">
                      {experience.company}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className={"p-4"}>
                    <p className="text-sm text-gray-600">
                      {experience.description}
                    </p>
                    <div className="mt-2">
                      <span className="text-xs text-gray-500">
                        <TechStack techStack={experience.tech_stack} />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
