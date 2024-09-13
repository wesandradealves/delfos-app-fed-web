"use client";
import { Content, Dashboard, Container } from "./style";
import Header from "@/components/Header";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <Content className="flex h-full w-full flex-col">
            <Header />
            <Dashboard className="flex-1">
                <Container>
                    {children}
                </Container>
            </Dashboard>
        </Content>
    )
  }