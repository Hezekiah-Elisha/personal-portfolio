import LoadingAnimation from "@/components/LoadingAnimation";
import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-full">
      <LoadingAnimation />
    </div>
  );
}
