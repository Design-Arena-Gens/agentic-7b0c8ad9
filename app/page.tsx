"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

type Slide = {
  title: string;
  summary: string;
  points: string[];
  Visual: () => JSX.Element;
};

function AuthorityIcon() {
  return (
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradAuthority" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      <rect
        x="18"
        y="18"
        width="124"
        height="124"
        rx="24"
        fill="url(#gradAuthority)"
        opacity="0.18"
      />
      <circle cx="80" cy="68" r="30" fill="url(#gradAuthority)" />
      <path
        d="M40 130c6-24 22-36 40-36s34 12 40 36"
        stroke="#2563eb"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <circle cx="80" cy="68" r="12" fill="#eff6ff" />
    </svg>
  );
}

function TimelineIcon() {
  return (
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradTimeline" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path
        d="M36 80h88"
        stroke="url(#gradTimeline)"
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="40" cy="80" r="18" fill="url(#gradTimeline)" />
      <circle cx="80" cy="80" r="18" fill="url(#gradTimeline)" opacity="0.85" />
      <circle cx="120" cy="80" r="18" fill="url(#gradTimeline)" />
      <path
        d="M80 30v20M80 110v20"
        stroke="#0ea5e9"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

function VerdictIcon() {
  return (
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradVerdict" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <rect
        x="26"
        y="26"
        width="108"
        height="108"
        rx="20"
        fill="url(#gradVerdict)"
        opacity="0.15"
      />
      <path
        d="M50 60h42l18 40h-42z"
        fill="url(#gradVerdict)"
        opacity="0.9"
      />
      <rect
        x="102"
        y="64"
        width="16"
        height="52"
        rx="4"
        fill="url(#gradVerdict)"
        opacity="0.8"
      />
      <rect x="40" y="110" width="80" height="12" rx="6" fill="#fbcfe8" />
      <path
        d="M60 44h40"
        stroke="#f97316"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Presentation() {
  const slides = useMemo<Slide[]>(
    () => [
      {
        title: "Jogerő fogalma",
        summary:
          "A szabálysértési eljárásban a határozat jogerőre emelkedik, ha azt nem lehet fellebbezéssel megtámadni, illetve amikor a fellebbezésnek nincs halasztó hatálya.",
        points: [
          "Megállapítja a jogvita lezárását és a döntés véglegességét.",
          "Fellebbezési határidő eredménytelen elteltével áll be.",
          "Biztosítja a döntés végrehajthatóságát és a jogbiztonságot."
        ],
        Visual: AuthorityIcon
      },
      {
        title: "Jogerő kialakulásának lépései",
        summary:
          "A határozat jogerős, ha a felek lemondtak a jogorvoslatról, ha a jogorvoslati kérelemről lemondtak vagy azt visszavonták, illetve a másodfokú döntésről nincs további jogorvoslat.",
        points: [
          "Kézbesítéstől számított 8 nap áll rendelkezésre fellebbezésre.",
          "Jogorvoslat benyújtása esetén a másodfok vizsgálja a döntést.",
          "Másodfokú határozat ellen rendes jogorvoslat nincs."
        ],
        Visual: TimelineIcon
      },
      {
        title: "Jogerő következményei",
        summary:
          "A jogerős határozat azonnal végrehajtható, és végleges jogi helyzetet teremt, amelyhez további eljárási garanciák is kapcsolódnak.",
        points: [
          "Megnyílik a végrehajtás lehetősége (pl. pénzbírság behajtása).",
          "Újrafelvétel vagy rendkívüli jogorvoslat csak kivételesen kérhető.",
          "Jogerős döntés adatait a szabálysértési nyilvántartás kezeli."
        ],
        Visual: VerdictIcon
      }
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Jogerő a szabálysértési törvény alapján
        </h1>
        <p className={styles.subtitle}>
          Három részből felépített, lényegre törő áttekintés a jogerő
          szabályairól és gyakorlati jelentőségéről.
        </p>
      </header>

      <section className={styles.slidesWrapper}>
        <div
          className={styles.slides}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <article className={styles.slide} key={slide.title}>
              <div className={styles.visual}>
                <slide.Visual />
              </div>
              <div className={styles.content}>
                <h2 className={styles.slideTitle}>
                  {index + 1}. {slide.title}
                </h2>
                <p className={styles.slideText}>{slide.summary}</p>
                <ul className={styles.points}>
                  {slide.points.map((point) => (
                    <li className={styles.point} key={point}>
                      <span className={styles.pointMarker} aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.controls}>
        <div className={styles.navButtons}>
          <button
            className={styles.button}
            onClick={previousSlide}
            disabled={currentSlide === 0}
            aria-label="Előző dia"
          >
            Előző
          </button>
          <button
            className={styles.button}
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            aria-label="Következő dia"
          >
            Következő
          </button>
        </div>
        <div className={styles.dots}>
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              className={`${styles.dot} ${
                currentSlide === index ? styles.dotActive : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`${index + 1}. dia`}
            />
          ))}
        </div>
      </footer>
    </main>
  );
}
