import type { Metadata } from "next";
import "../globals.css";

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
          {children}
      </body>
    </html>
  );
}
