'use client'
import "@/assets/styles/globals.scss";
import { Suspense, useContext, useEffect } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <title>Delfos - Centro de Monitoramento de Clientes</title>
        <Suspense fallback={<div>Loading...</div>}>
          <div id="primary">
            {children}
          </div>
        </Suspense>
      </body>
    </html>
  );
}
