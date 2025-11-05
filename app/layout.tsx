import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Jogerő a Szabálysértési tv alapján",
  description:
    "Háromdiás prezentáció a szabálysértési törvény szerinti jogerő ismertetésére."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
