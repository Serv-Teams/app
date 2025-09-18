import * as React from 'react';
import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import theme from '@/theme';
import AdSense from './components/AdSense';

export const metadata: Metadata = {
  title: 'Serv',
  description: 'Kami bergerak dan berfokus di jasa pemasaran',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="google-site-verification" content="i_iHZjIzVBn2v96YaU660334m93uYMroJHTrC5uV4x8" />
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
      <AdSense Id="5669338318384920" />
    </html>
  );
}