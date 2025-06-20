import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavPills from "@/components/ui/nav";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Marengo Bros",
  description: "Custom Writing content",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children} <NavPills />
      </body>
    </html>
  );
}
