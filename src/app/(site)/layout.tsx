import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart/Cart";
import { Suspense } from "react";
import Loading from "./Loading";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Braids Wigs Extra",
  description: "Where you get more than wigs, you get AURA!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          <NavBar />
          {children}
          <Footer />
          <Cart />
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
