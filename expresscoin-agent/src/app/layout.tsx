import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import App from "@/components/App";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ExpressCoin Agent - GameFi Delivery Simulation",
  description: "Platform GameFi untuk Agent Pengiriman Koin",
};

export default function RootLayout() {
  return (
    <html lang="id" data-theme="light">
      <body className={inter.className}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </body>
    </html>
  );
}
