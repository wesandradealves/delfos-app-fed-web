"use client";
import { Aside, Title, Arrow, Content } from "@/app/login/style";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="flex h-full w-full items-stretch"
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 90,
            }}
            >          
            <Content className="flex h-full w-full items-stretch">
                <Aside className="hidden xl:flex w-1/2 xl:w-1/3 justify-center items-end flex-col">
                    <Title className="title">
                        Monitoramento<br/>
                        completo do<br/>
                        atendimento ao<br/>
                        cliente.          
                    </Title>
                    <Arrow className="block" width="213" height="213" viewBox="0 0 213 213" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9625 69.8466C13.9701 68.753 14.8548 67.8683 15.9484 67.8606L146.749 66.9411C147.865 66.9333 148.771 67.8395 148.763 68.955L147.897 192.872C147.889 193.966 147.005 194.85 145.911 194.858L122.153 195.024C121.038 195.032 120.131 194.126 120.139 193.01L120.811 96.9073C120.819 95.7918 119.912 94.8855 118.797 94.8934L15.8104 95.6184C14.6949 95.6262 13.7886 94.72 13.7964 93.6045L13.9625 69.8466Z" fill="#E7C148"/>
                        <path d="M85.649 150.693L143.707 92.6349C144.488 91.8539 144.488 90.5875 143.707 89.8065L127.044 73.1431C126.262 72.3621 124.996 72.3621 124.215 73.1431L66.1572 131.201C65.3762 131.982 65.3762 133.248 66.1572 134.029L82.8206 150.693C83.6016 151.474 84.8679 151.474 85.649 150.693Z" fill="#E7C148"/>
                    </Arrow>
                </Aside>      
                <main className="flex-1 flex items-center justify-center">
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 0, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 100,
                        }}
                        > 
                        {children}
                    </motion.div>
                </main>
            </Content>
        </motion.div>
    )
  }