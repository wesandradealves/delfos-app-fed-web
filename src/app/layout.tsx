'use client'
import "@/assets/styles/globals.scss";
import { Suspense } from 'react';
import { GlobalStyle } from '@/app/login/style';
import { ThemeProvider } from "styled-components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!@/assets/styles/variables.scss');

  console.log(theme);

  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <script async src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>  
        <title>Delfos - Centro de Monitoramento de Clientes</title>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
        </ThemeProvider>
        <GlobalStyle />
      </body>
    </html>
  );
}
