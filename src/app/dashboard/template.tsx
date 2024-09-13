"use client";

import { Suspense } from "react";
import { Content } from "./style";
import Header from "@/components/Header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Content className="h-screen w-full flex justify-center items-center flex-col">
      <Header/>
      <main className="flex-1">
        {children}
      </main>
    </Content>
  )  
}
