"use client";
import { Content, Dashboard, Container } from "@/app/dashboard/style";
import Header from "@/components/Header";
import Hello from "@/components/Hello";
import { motion } from "framer-motion";
import { CustomScroll } from "react-custom-scroll";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            className="flex h-full w-full flex-col"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 90,
            }}
            >          
            <Content className="flex h-full w-full flex-col">
                <Header />
                <Dashboard className="flex-1 overflow-hidden">
                    <CustomScroll className="w-full" heightRelativeToParent="100%">
                        <Hello />
                        <Container className="flex flex-wrap items-stretch justify-start">
                            {children}
                        </Container>
                    </CustomScroll>
                </Dashboard>
            </Content>
        </motion.div>
    )
  }