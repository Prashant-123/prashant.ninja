import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./horoscope.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horoscope - Daily Astrological Predictions",
  description:
    "Get your personalized daily, weekly, monthly, and yearly horoscope predictions based on your zodiac sign.",
  keywords: [
    "horoscope",
    "astrology",
    "zodiac signs",
    "daily horoscope",
    "predictions",
    "astrological forecast",
  ],
};

export default function HoroscopeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="horoscope-layout">
      <div className="horoscope-background">
        <div className="horoscope-aurora">
          <div className="horoscope-aurora-item"></div>
          <div className="horoscope-aurora-item"></div>
          <div className="horoscope-aurora-item"></div>
          <div className="horoscope-aurora-item"></div>
        </div>
      </div>

      <div className="horoscope-main-content">{children}</div>
    </div>
  );
}
