import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "./Navbar";
import AuthProvider from "./auth/Provider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });
const signika = localFont({
  src: "../public/fonts/signika.woff2",
  variable: "--font-signika",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={signika.variable}>
        <AuthProvider> 
          <Navbar />
          <main className="m-5">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}