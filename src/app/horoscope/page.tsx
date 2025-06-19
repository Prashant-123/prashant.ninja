"use client";

import { useState, useEffect, useCallback } from "react";
import { Globe, Heart, Activity, DollarSign, Briefcase } from "lucide-react";
import Image from "next/image";

const categoryIcons: { [key: string]: React.ComponentType<{ size?: number }> } =
  {
    general: Globe,
    love: Heart,
    health: Activity,
    money: DollarSign,
    career: Briefcase,
  };

interface HoroscopeData {
  general: string[];
  date: string;
  sign: string;
  period: string;
  love: string;
  health: string;
  money: string;
  career: string;
  sign_image: string;
}

const zodiacSigns = [
  { value: "aries", label: "Aries (मेष)" },
  { value: "taurus", label: "Taurus (वृषभ)" },
  { value: "gemini", label: "Gemini (मिथुन)" },
  { value: "cancer", label: "Cancer (कर्क)" },
  { value: "leo", label: "Leo (सिंह)" },
  { value: "virgo", label: "Virgo (कन्या)" },
  { value: "libra", label: "Libra (तुला)" },
  { value: "scorpio", label: "Scorpio (वृश्चिक)" },
  { value: "sagittarius", label: "Sagittarius (धनु)" },
  { value: "capricorn", label: "Capricorn (मकर)" },
  { value: "aquarius", label: "Aquarius (कुम्भ)" },
  { value: "pisces", label: "Pisces (मीन)" },
];

const timePeriods = [
  { value: "yesterday", label: "Yesterday" },
  { value: "today", label: "Today" },
  { value: "tomorrow", label: "Tomorrow" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

const Loader = () => (
  <div style={{ padding: "48px 0", textAlign: "center" }}>
    <div className="horoscope-spinner"></div>
    <p style={{ marginTop: "16px", color: "rgba(255, 255, 255, 0.7)" }}>
      Loading your horoscope...
    </p>
  </div>
);

const ErrorDisplay = ({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) => (
  <div style={{ padding: "48px 0", textAlign: "center" }}>
    <p className="horoscope-error-text">Error: {message}</p>
    <button onClick={onRetry} className="horoscope-btn">
      Try Again
    </button>
  </div>
);

const HoroscopeContent = ({
  data,
  selectedCategory,
  onCategoryChange,
  getCurrentSignLabel,
}: {
  data: HoroscopeData;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  getCurrentSignLabel: () => string;
}) => {
  let categoryContent;
  switch (selectedCategory) {
    case "love":
      categoryContent = <p>{data.love}</p>;
      break;
    case "health":
      categoryContent = <p>{data.health}</p>;
      break;
    case "money":
      categoryContent = <p>{data.money}</p>;
      break;
    case "career":
      categoryContent = <p>{data.career}</p>;
      break;
    default:
      categoryContent = data.general.map((p, i) => (
        <p key={i} className="horoscope-mb-4">
          {p}
        </p>
      ));
  }

  return (
    <div>
      <div className="horoscope-mb-6 horoscope-flex horoscope-items-center horoscope-gap-4">
        {data.sign_image && (
          <Image
            src={data.sign_image}
            alt={data.sign}
            style={{ width: "64px", height: "64px", filter: "invert(1)" }}
          />
        )}
        <div>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              marginBottom: "4px",
            }}
          >
            {getCurrentSignLabel()}
          </h2>
          <p
            className="horoscope-text-sm"
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            {data.date}
          </p>
        </div>
      </div>

      <div
        className="horoscope-mb-4 horoscope-flex horoscope-flex-wrap horoscope-gap-2"
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          paddingBottom: "16px",
        }}
      >
        {Object.keys(categoryIcons).map((category) => {
          const Icon = categoryIcons[category];
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`horoscope-btn-tab ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              <Icon size={18} />
              <span>{category}</span>
            </button>
          );
        })}
      </div>

      <div style={{ paddingTop: "16px" }}>
        <div style={{ lineHeight: "1.8", color: "rgba(255, 255, 255, 0.8)" }}>
          {categoryContent}
        </div>
      </div>
    </div>
  );
};

export default function HoroscopePage() {
  const [selectedSign, setSelectedSign] = useState("pisces");
  const [selectedPeriod, setSelectedPeriod] = useState("today");
  const [horoscopeData, setHoroscopeData] = useState<HoroscopeData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("general");

  const fetchHoroscope = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.pklabs.in/horoscope?sign=${selectedSign}&duration=${selectedPeriod}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch horoscope data.");
      }
      const data = await response.json();

      const formattedData = {
        sign: data.sign,
        date: data.date,
        period: data.duration,
        general: data.general,
        love: data.love,
        health: data.health,
        money: data.money,
        career: data.career,
        sign_image: data.sign_image,
      };

      setHoroscopeData(formattedData);
      setSelectedCategory("general");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setHoroscopeData(null);
    } finally {
      setLoading(false);
    }
  }, [selectedSign, selectedPeriod]);

  useEffect(() => {
    fetchHoroscope();
  }, [fetchHoroscope]);

  const getCurrentSignLabel = useCallback(() => {
    return (
      zodiacSigns.find((sign) => sign.value === selectedSign)?.label ||
      selectedSign
    );
  }, [selectedSign]);

  return (
    <div className="horoscope-container">
      {/* Header */}
      <div className="horoscope-text-center horoscope-mb-12">
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "8px" }}>
          Cosmic Insights
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          Your daily portal to the stars
        </p>
      </div>

      {/* Controls */}
      <div className="horoscope-card horoscope-mb-8">
        <div className="horoscope-grid horoscope-grid-cols-2">
          {/* Zodiac Sign Dropdown */}
          <div>
            <label className="horoscope-label">Your Sign</label>
            <select
              value={selectedSign}
              onChange={(e) => setSelectedSign(e.target.value)}
              className="horoscope-select"
            >
              {zodiacSigns.map((sign) => (
                <option key={sign.value} value={sign.value}>
                  {sign.label}
                </option>
              ))}
            </select>
          </div>

          {/* Time Period Dropdown */}
          <div>
            <label className="horoscope-label">Time Period</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="horoscope-select"
            >
              {timePeriods.map((period) => (
                <option key={period.value} value={period.value}>
                  {period.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Horoscope Content */}
      <div className="horoscope-card">
        {loading && <Loader />}
        {error && !loading && (
          <ErrorDisplay message={error} onRetry={fetchHoroscope} />
        )}
        {horoscopeData && !loading && !error && (
          <HoroscopeContent
            data={horoscopeData}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            getCurrentSignLabel={getCurrentSignLabel}
          />
        )}
      </div>

      {/* Disclaimer */}
      <div className="horoscope-text-center" style={{ marginTop: "32px" }}>
        <p
          className="horoscope-text-xs"
          style={{ color: "rgba(255, 255, 255, 0.5)" }}
        >
          * Horoscope predictions are for entertainment purposes only.
        </p>
      </div>
    </div>
  );
}
