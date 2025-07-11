"use client";
import React, { useEffect, useState } from "react";
import { instance } from "@/api";
import EducationTile from "@/components/EducationTile";
import WorkExperienceTile from "@/components/WorkExperienceTile";

export default function page() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-space-mono">
      <div>
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
      </div>
      <div className="mb-8">
        <p className="text-lg">
          Hello! I'm Hezekiah Elisha, a passionate software developer with a
          focus on building efficient and scalable web applications. I love
          exploring new technologies and continuously improving my skills.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <WorkExperienceTile />
      </div>
      <div>
        <h2 className="text-2xl font-bold">Education</h2>
        <EducationTile />
      </div>
    </div>
  );
}
