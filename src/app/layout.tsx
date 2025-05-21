import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({
  weight:["100","300","400","500","700","900"],
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "App Landing Page | Next Js",
  description: "App Landing Page created by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
