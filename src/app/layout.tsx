import Script from "next/script";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

const title = "Prashant | Android Developer | Bangalore, India.";
const description =
  "An experienced Software Development Engineer specializing in Android development. Explore his portfolio to see his work on high-performance apps, innovative projects, and contributions to the developer community.";
const url = "https://pklabs.in/";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Prashant Kumar",
    "Software Development Engineer",
    "Mobile App Development",
    "Android Developer",
    "Android Development",
    "Android Engineer",
  ],
  creator: "Prashant Kumar",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/images/open-graph-prashant.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@pk021998",
    images: "/images/open-graph-prashant.png",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

// Particle Background Component
const ParticleBackground = () => {
  return (
    <div className="particles">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 20 + 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-anayltics-script">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
          </Script>
        </head>
      ) : null}
      <body
        className={`${inter.className} relative overflow-x-hidden text-gray-600 antialiased`}
      >
        <Providers>
          <ParticleBackground />
          <div className="relative z-10">
            <Header />
            <main className="flex min-h-screen w-full flex-col">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
