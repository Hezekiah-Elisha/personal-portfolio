import { Globe, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FrontendProject({
  title = "SokoMax",
  description = "A platform for managing and optimizing supply chain operations.",
  imageUrl = "/sample.png",
  siteUrl = "/",
  codeUrl = "/",
  technologies = ["React", "Next.js", "Tailwind CSS", "Redux"],
}) {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-stretch space-x-8 w-full min-h-[600px]">
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <h3 className="text-3xl font-bold">SokoMax</h3>
          <p className="mb-4">
            {description ||
              "A platform for managing and optimizing supply chain operations."}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Responsive web applications</li>
            <li>Single Page Applications (SPAs)</li>
            <li>Progressive Web Apps (PWAs)</li>
            <li>UI/UX design implementations</li>
            <li>State management with Redux and Context API</li>
            <li>Integration with RESTful APIs</li>
            <li>Performance optimization techniques</li>
          </ul>
          <h4 className="text-2xl font-semibold mt-6">Project Technologies</h4>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-end items-center gap-2 mt-auto">
          <Link
            href={siteUrl || "/"}
            className="flex items-center text-primary"
          >
            <Globe className="inline-block mr-2" />
            <span>See Site</span>
          </Link>
          <Link
            href={codeUrl || "/"}
            className="flex items-center text-primary"
          >
            <Link2 className="inline-block mr-2" />
            <span className="">View Code</span>
          </Link>
        </div>
      </div>
      <Image
        src={imageUrl || "/sample.png"}
        width={800}
        height={400}
        alt={title || "Project Image"}
        className="rounded-lg mt-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 object-cover grayscale hover:grayscale-0"
      />
    </section>
  );
}
