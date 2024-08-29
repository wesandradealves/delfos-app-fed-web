"use client";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div id="primary" className="dashboard">
      {children}
    </div>
  );
}