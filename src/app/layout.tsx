import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

// BoardUI reads its typeface from --font-inter; shadcn reads --font-sans.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI kits",
  description: "shadcn/ui, Aceternity UI, ObsidianUI and BoardUI in one Next.js app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${geistMono.variable} h-full antialiased`}
      style={{ ["--font-sans" as string]: "var(--font-inter)" }}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
