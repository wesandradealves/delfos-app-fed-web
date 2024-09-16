'use client'
import "@/assets/styles/globals.scss";
import { Suspense } from 'react';
import { GlobalStyle } from '@/app/style';
import { ThemeProvider } from "styled-components";
import { App } from "./style";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!@/assets/styles/variables.scss');
  console.log(theme);
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <script async src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Delfos - Centro de Monitoramento de Clientes</title>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            <App id="primary" className="w-screen h-screen">
              {children}
            </App>
          </Suspense>
          <GlobalStyle/>
        </ThemeProvider>  
      </body>
    </html>
  )
}