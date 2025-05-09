import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


import "./main.css";


export const metadata: Metadata = {
  title: "Limbus Team Sharing",
  description: "Share your Limbus Team easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${roboto.className} body`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
