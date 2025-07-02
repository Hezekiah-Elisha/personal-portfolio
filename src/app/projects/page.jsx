import FrontendProject from "@/components/FrontendProject";
import React from "react";

export default function page() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-space-mono">
      <h1 className="text-3xl font-bold text-center mt-10">Projects</h1>
      <p className="text-center mt-4">Here are some of my recent projects.</p>
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-6">Frontend Projects</h2>
        <div className="space-y-8">
          <FrontendProject />
          <FrontendProject
            title="SokoMax"
            description="A platform for managing and optimizing supply chain operations."
            imageUrl="/sample.png"
            siteUrl="/"
            codeUrl="/"
            technologies={["React", "Next.js", "Tailwind CSS", "Redux"]}
          />
          <FrontendProject
            title="SokoMax"
            description="A platform for managing and optimizing supply chain operations."
            imageUrl="/sample.png"
            siteUrl="/"
            codeUrl="/"
            technologies={["React", "Next.js", "Tailwind CSS", "Redux"]}
          />
        </div>
      </div>
    </div>
  );
}
