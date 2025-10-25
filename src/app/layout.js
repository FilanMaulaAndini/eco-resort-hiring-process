import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Welcome • Ulaman Luxury Resort",
  description: "Discover Ulaman's sustainable luxury resort in Bali.",
  icons: {
    icon: "/logo-icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo-icon.svg"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} >
        {children}
      </body>
    </html>
  );
}
