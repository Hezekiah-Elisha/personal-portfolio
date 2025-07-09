import React from "react";

function convertTechStackStringToList(techStackString) {
  if (!techStackString || typeof techStackString !== 'string') return [];
  
  try {
    return techStackString.split(",").map((tech) => {
      if (tech == null) return '';
      return String(tech).trim();
    }).filter(tech => tech.length > 0);
  } catch (error) {
    console.error('Error processing tech stack:', error, 'Input:', techStackString);
    return [];
  }
}

export default function TechStack({ techStack }) {
  const techStackList = convertTechStackStringToList(techStack);
  if (techStackList.length === 0) {
    return <div className="text-muted-foreground">No tech stack provided</div>;
  }

  return (
    <div className="flex flex-wrap gap-2 mt-2 font-space-mono" suppressHydrationWarning>
      {techStackList.map((tech, index) => (
        <span
          key={index}
          className="bg-accent/50 text-primary rounded-md px-2 py-1 text-xs"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
