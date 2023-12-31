import type { Metadata } from 'next'

import "./globals.css";
import Mainheader from "@/components/main-header/main-header";

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Mainheader />
        {children}
      </body>
    </html>
  );
}
