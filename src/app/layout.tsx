import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Responsive from "./components/Home/Navbar/Responsive";

const font = Poppins({
  weight:["100","300","400","500","700","900","200","600","800"],
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
        <Responsive/>
        {children}
      </body>
    </html>
  );
}
