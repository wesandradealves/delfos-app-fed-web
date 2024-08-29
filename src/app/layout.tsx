'use client'
import { Inter } from "next/font/google";
import "@/assets/styles/globals.scss";
import { Suspense, useContext, useEffect } from 'react';
const inter = Inter({ subsets: ["latin"] });
import { LoadingContext, LoadingProvider } from '@/contexts/LoadingContext';
import LoadingIndicator from "@/components/spinner/spinner";
import { useRouter } from "next/navigation";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { isLoading, setLoading } = useContext(LoadingContext);

  // useEffect(() => {
  //   const handleStart = () => setLoading(true);
  //   const handleComplete = () => setLoading(false);

  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleComplete);
  //   router.events.on('routeChangeError', handleComplete);

  //   return () => {
  //     router.events.off('routeChangeStart', handleStart);
  //     router.events.off('routeChangeComplete', handleComplete);
  //     router.events.off('routeChangeError', handleComplete);
  //   };
  // }, [router]);
  
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <title>Delfos - Centro de Monitoramento de Clientes</title>
        <LoadingProvider>
          <LoadingIndicator />
          <SessionProvider>
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </SessionProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
