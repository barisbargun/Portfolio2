import type { Metadata } from "next";
import "./globals.css";
import { sora, sourceCodePro } from "./fonts";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "Hello, I'm Baris, a fullstack developer. I develop websites using React.js, Next.js, Express.js, and Tailwind CSS",
  applicationName: "Portfolio",
  keywords: ["portfolio", "barış", "olgun", "nextjs", "web"],
  authors: [{ url: "https://barisolgun.com", name: "Barış Olgun" }],
  creator: "Barış Olgun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${sourceCodePro.variable}`}>
      <body className="font-sora">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
