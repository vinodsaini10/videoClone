import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes'
import { Toaster } from "@/components/ui/toaster"
import '@stream-io/video-react-sdk/dist/css/styles.css';
import "react-datepicker/dist/react-datepicker.css";

// ideally, Stream Video theme should be imported before your own styles
// as this would make it easier for you to override certain video-theme rules
// import './my-styles.css';
import {
  ClerkProvider,

} from '@clerk/nextjs'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoom Clone",
  description: "Zoom clone a Video Metting App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: [dark],
      
    }}
    >
    <html lang="en" suppressHydrationWarning>
    <head />
    <body className={inter.className}>
      <ThemeProvider
        forcedTheme="dark"
        attribute="class"
        defaultTheme="system"
        
        enableSystem
        disableTransitionOnChange
      >

        {children} 
        <Toaster />

      </ThemeProvider>
    </body>
  </html>
  </ClerkProvider>
  
  );
}
