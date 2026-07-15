import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trika HealthOS",
  description: "Advanced healthcare workspace and HRMS application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Spectral:wght@400;600;700&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var ignoreErrors = function(e) {
                  if (e && (
                    (e.filename && e.filename.includes('chrome-extension')) ||
                    (e.message && e.message.includes('MetaMask')) ||
                    (e.stack && e.stack.includes('chrome-extension'))
                  )) {
                    e.stopImmediatePropagation();
                    return true;
                  }
                };
                window.addEventListener('error', ignoreErrors, true);
                window.addEventListener('unhandledrejection', function(e) {
                  var reason = e.reason;
                  if (reason && (
                    (reason.stack && reason.stack.includes('chrome-extension')) ||
                    (reason.message && reason.message.includes('MetaMask'))
                  )) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                  }
                }, true);
              })();
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8f2e4] text-[#1b1b1a]">{children}</body>
    </html>
  );
}
