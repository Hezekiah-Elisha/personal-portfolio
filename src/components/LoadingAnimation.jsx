import React from "react";

export default function LoadingAnimation() {
  return (
    <div>
      <div class="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-secondary via-primary to-accent md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
        <div class="rounded-full h-full w-full bg-secondary background-blur-md"></div>
      </div>
    </div>
  );
}
