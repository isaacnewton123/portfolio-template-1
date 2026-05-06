import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hanif Maulana | The Next-Gen Developer",
  description:
    "Portfolio of Hanif Maulana – Full-Stack Developer specializing in AI-augmented workflows, 2D & 3D design, and immersive digital experiences.",
  keywords: [
    "Hanif Maulana",
    "Full-Stack Developer",
    "AI-assisted development",
    "3D modeling",
    "web development",
    "portfolio",
    "MultiPost",
  ],
  authors: [{ name: "Hanif Maulana" }],
  openGraph: {
    type: "website",
    title: "Hanif Maulana | The Next-Gen Developer",
    description:
      "Full-Stack Developer: Human Intelligence, AI Efficiency & Immersive Visuals.",
    url: "https://isaacnewton.store",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1813811823050956800/iHOWSEHB_400x400.jpg",
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanif Maulana | The Next-Gen Developer",
    description:
      "Full-Stack Developer: Human Intelligence, AI Efficiency & Immersive Visuals.",
    images: [
      "https://pbs.twimg.com/profile_images/1813811823050956800/iHOWSEHB_400x400.jpg",
    ],
  },
  metadataBase: new URL("https://isaacnewton.store"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0a0f1a" />
        <meta name="apple-mobile-web-app-title" content="Hanif Maulana Portfolio" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else if (!theme) {
                    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                      document.documentElement.classList.add('light');
                    }
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
