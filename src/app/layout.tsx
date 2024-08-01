// Import the Metadata type from Next.js for type-checking metadata objects
import type { Metadata } from "next";

// Import the Inter font configuration from Google Fonts via Next.js
import { Inter } from "next/font/google";

// Import global CSS styles
import "./globals.css";

// Import the Script component from Next.js for embedding external scripts
import Script from 'next/script';

import * as Alerty from "@alerty/nextjs";

Alerty.configure({
  dsn: "https://01j4727jpvm35gsdrwffrr3vf6@ingest.alerty.ai/54b4a59e-9ec4-4c29-bbc1-ae50a1e81727",
});

// Configure the Inter font to include only the Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the application, including the title and description
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Define the RootLayout component, which serves as the root layout for the application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Define the type of the children prop
}>) {
  return (
    <html lang="en"> {/* Set the language of the document to English */}
      <head>
        {/* Any other head elements can go here */}
      </head>
      <body className={inter.className}> {/* Apply the Inter font class to the body */}
        {children} {/* Render child components */}
        <Script src="./node_modules/preline/dist/preline.js" /> {/* Include an external script */}
      </body>
    </html>
  );
}
