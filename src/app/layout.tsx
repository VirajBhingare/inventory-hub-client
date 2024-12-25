import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import DashboardWrapper from "@/app/dashboardWrapper";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InventoryHub. | Home",
  description: "The one-stop portal to manage your Inventory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
