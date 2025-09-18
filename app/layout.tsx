import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
     variable: "--font-geist-sans",
     subsets: ["latin"],
});

const geistMono = Geist_Mono({
     variable: "--font-geist-mono",
     subsets: ["latin"],
});

export const metadata: Metadata = {
     title: "CodeRun 2025",
     description: "Placeholder",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <head>
                    <link rel="icon" href="./logo.png" sizes="any" />
               </head>
               <body
                    className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-cover bg-center bg-no-repeat`}
                    style={{
                         backgroundImage: "url('./bg.png')",
                    }}
               >
                    {children}
               </body>
          </html>
     );
}
