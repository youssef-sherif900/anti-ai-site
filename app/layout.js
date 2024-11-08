import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import NavBar from "./(components)/NavBar";

const geistMono = localFont({
  src: "./fonts/ethnocentric_rg.otf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Anti-Ai",
  description: "Anti is a software company that help in protection against Ai ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} bg-[#030303] antialiased overflow-y-scroll`}
      >
      <NavBar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
