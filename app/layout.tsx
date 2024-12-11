import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pal Bijewar",
  description: "Pal Bijewar Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
