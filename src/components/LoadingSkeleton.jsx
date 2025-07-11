import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-2">
      <div className="h-6 bg-accent/30 rounded w-3/4"></div>
      <div className="h-4 bg-accent/20 rounded w-5/6"></div>
      <div className="h-4 bg-accent/20 rounded w-2/3"></div>
      <div className="h-4 bg-accent/20 rounded w-1/2"></div>
    </div>
  );
}
