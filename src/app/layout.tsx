'use client'
import "@/assets/styles/globals.scss";
import { Suspense, useContext, useEffect } from 'react';
import { SessionProvider } from "next-auth/react";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { LoadingContext } from "@/contexts/LoadingContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoading } = useContext(LoadingContext);

  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <title>Delfos - Centro de Monitoramento de Clientes</title>
        <SessionProvider>
          <LoadingProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <div id="primary">
                {children}
              </div>
            </Suspense>
          </LoadingProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
