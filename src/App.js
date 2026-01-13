import React, { useState, useEffect } from "react";

/* =========================
   DATA
========================= */

// Belt syllabus
const belts = [
  { geup: "10th Geup", en: "White Belt", om: "Qal’ee adii" },
  { geup: "9th Geup", en: "White–Yellow Belt", om: "Adii–Balleessa" },
  { geup: "8th Geup", en: "Yellow Belt", om: "Balleessa" },
  { geup: "7th Geup", en: "Yellow–Green Belt", om: "Balleessa–Magariisa" },
  { geup: "6th Geup", en: "Green Belt", om: "Magariisa" },
  { geup: "5th Geup", en: "Green–Blue Belt", om: "Magariisa–Cuquliisa" },
  { geup: "4th Geup", en: "Blue Belt", om: "Cuquliisa" },
  { geup: "3rd Geup", en: "Blue–Red Belt", om: "Cuquliisa–Diimaa" },
  { geup: "2nd Geup", en: "Red Belt", om: "Diimaa" },
  { geup: "1st Geup", en: "Red–Black Belt", om: "Diimaa–Gurraacha" }
];

// Techniques
const stances = [
  { en: "Walking stance", om: "Seera deemsa" },
  { en: "L-stance", om: "Seera L" },
  { en: "Sitting stance", om: "Seera taa’aa" },
  { en: "Parallel stance", om: "Seera walqixa" }
];

const blocks = [
  { en: "Low block (Arae Makgi)", om: "Uggura gadi" },
  { en: "Middle block (Momtong Makgi)", om: "Uggura jidduu" },
  { en: "High block (Olgul Makgi)", om: "Uggura olii" },
  { en: "Knife-hand guarding block", om: "Uggura harka billaa" }
];

const kicks = [
  { en: "Front kick (Ap Chagi)", om: "Mormii duraa" },
  { en: "Side kick (Yop Chagi)", om: "Mormii cinaa" },
  { en: "Turning kick (Dollyo Chagi)", om: "Mormii marsaa" },
  { en: "Back kick (Dwi Chagi)", om: "Mormii duubaa" }
];

const handTechniques = [
  { en: "Middle punch (Momtong Jirugi)", om: "Rukutaa jidduu" },
  { en: "High punch (Olgul Jirugi)", om: "Rukutaa olii" },
  { en: "Knife-hand strike", om: "Dha’icha harka billaa" }
];

// Example Tul footstep path (offline SVG data)
const tulPaths = {
  "Chon-Ji": [
    { x: 150, y: 40, foot: "L", text: "Low block", om: "Uggura gadi" },
    { x: 150, y: 80, foot: "R", text: "Middle punch", om: "Rukutaa jidduu" },
    { x: 120, y: 120, foot: "L", text: "Turn & block", om: "Marsaa fi uggura" },
    { x: 180, y: 160, foot: "R", text: "Punch", om: "Rukutaa" }
  ]
};

/* =========================
   FOOTSTEP SVG COMPONENT
========================= */

function FootPathAnimator({ steps, lang }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setCurrentStep((s) => (s < steps.length - 1 ? s + 1 : s));
    }, 900);
    return () => clearInterval(timer);
  }, [playing, steps.length]);

  return (
    <div>
      <svg width="300" height="220" style={{ border: "1px solid #ccc" }}>
        {steps.slice(0, currentStep + 1).map((p, i) => (
          <g key={i}>
            {/* Foot */}
            <circle
              cx={p.x}
              cy={p.y}
              r="10"
              fill={p.foot === "L" ? "#1976d2" : "#d32f2f"}
            />
            {/* Step number */}
            <text
              x={p.x}
              y={p.y - 12}
              textAnchor="middle"
              fontSize="10"
              fontWeight="bold"
            >
              {i + 1}
            </text>
            {/* L / R */}
            <text
              x={p.x}
              y={p.y + 4}
              textAnchor="middle"
              fontSize="9"
              fill="white"
              fontWeight="bold"
            >
              {p.foot}
            </text>
          </g>
        ))}
      </svg>

      <p>
        {steps[currentStep] &&
          (lang === "en"
            ? steps[currentStep].text
            : steps[currentStep].om)}
      </p>

      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Pause" : "Play"}
      </button>
      <button onClick={() => setCurrentStep(0)}>Reset</button>
    </div>
  );
      }
/* =========================
   MAIN APP
========================= */

export default function App() {
  const [lang, setLang] = useState("en");
  const [selectedTul] = useState("Chon-Ji");

  return (
    <div style={{ padding: 16, fontFamily: "Arial" }}>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>🥋 ITF Taekwondo Trainer</h2>
        <button onClick={() => setLang(lang === "en" ? "om" : "en")}>
          {lang === "en" ? "🇪🇹 Oromo" : "🇬🇧 English"}
        </button>
      </header>

      <h3>🎗️ Belt Syllabus</h3>
      <ul>
        {belts.map((b, i) => (
          <li key={i}>
            <b>{b.geup}</b> – {lang === "en" ? b.en : b.om}
          </li>
        ))}
      </ul>

      <h3>🧍‍♂️ Stances</h3>
      <ul>
        {stances.map((s, i) => (
          <li key={i}>{lang === "en" ? s.en : s.om}</li>
        ))}
      </ul>

      <h3>🛡️ Blocks</h3>
      <ul>
        {blocks.map((b, i) => (
          <li key={i}>{lang === "en" ? b.en : b.om}</li>
        ))}
      </ul>

      <h3>🦶 Kicks</h3>
      <ul>
        {kicks.map((k, i) => (
          <li key={i}>{lang === "en" ? k.en : k.om}</li>
        ))}
      </ul>

      <h3>👊 Hand Techniques</h3>
      <ul>
        {handTechniques.map((h, i) => (
          <li key={i}>{lang === "en" ? h.en : h.om}</li>
        ))}
      </ul>

      <h3>📐 Tul Diagram — {selectedTul}</h3>
      <FootPathAnimator
        steps={tulPaths[selectedTul]}
        lang={lang}
      />

      <hr />
      <p><b>Instructor:</b> Sayimak Ibrahim</p>
      <p><b>Created by:</b> Ahmed Muhammad</p>
      <p><b>Assisted by:</b> ChatGPT</p>
    </div>
  );
        }
