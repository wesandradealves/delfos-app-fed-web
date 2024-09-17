'use client'
import "@/assets/styles/globals.scss";
import { Suspense } from 'react';
import { GlobalStyle } from '@/app/style';
import { ThemeProvider } from "styled-components";
import { App } from "./style";
import { general } from '@/assets/styles/general';
import { fontSize } from '@/assets/styles/fontSize';
import { colors } from '@/assets/styles/colors';
import { breakpoints } from '@/assets/styles/breakpoints';
import StyledJsxRegistry from "./registry";
import { AnimatePresence } from 'framer-motion';

const theme = {
  general,
  fontSize,
  colors,
  breakpoints
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log(theme);
  
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <script async src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Delfos - Centro de Monitoramento de Clientes</title>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>

          <Suspense fallback={<div>Loading...</div>}>
            <App id="primary" className="w-screen h-screen overflow-hidden">
              <StyledJsxRegistry>
                <AnimatePresence 
                  mode="wait" 
                  initial={true}
                  onExitComplete={() => window.scrollTo(0, 0)}
                  >
                  {children}
                </AnimatePresence>
              </StyledJsxRegistry>
            </App>
          </Suspense>
        </ThemeProvider>  
      </body>
    </html>
  )
}