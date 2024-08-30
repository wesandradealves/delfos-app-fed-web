"use client";

import { Suspense } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div id="primary" className="dashboard">
        {children}
      </div>
    </Suspense>
  );
}