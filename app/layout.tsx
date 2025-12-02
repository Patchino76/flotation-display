import type { Metadata } from "next";
import { Inter, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-led",
});

export const metadata: Metadata = {
  title: "Flotation Display",
  description: "Flotation process monitoring system",
  generator: "Flotation Display System",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/empty-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${vt323.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
