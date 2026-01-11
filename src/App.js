import React, { useState } from "react";

/* ===================== SVG DIAGRAMS ===================== */
const diagramPaths = {
  "Chon-Ji": "M150 260 L150 40 M80 150 L220 150",
  "Dan-Gun": "M150 260 L150 40 L220 80 M150 40 L80 80",
  "Do-San": "M80 260 L80 40 L220 40 L220 260",
  "Won-Hyo": "M150 260 L150 40 L80 150 L220 150",
  "Yul-Gok": "M80 260 L220 260 L220 40 L80 40",
  "Joong-Gun": "M150 260 L150 40 L80 80 L220 80",
  "Toi-Gye": "M80 260 L220 260 L150 40",
  "Hwa-Rang": "M150 260 L80 40 L220 40",
  "Choong-Moo": "M80 260 L220 260 L150 40",
  "Kwang-Gae": "M80 260 L80 40 L220 40",
  "Po-Eun": "M150 260 L80 150 L220 150",
  "Ge-Baek": "M80 260 L220 40",
  "Eui-Am": "M220 260 L80 40",
  "Choong-Jang": "M150 260 L80 80 L220 80",
  "Juche": "M80 260 L220 150 L80 40",
  "Sam-Il": "M220 260 L80 150 L220 40",
  "Yoo-Sin": "M80 260 L220 260 L150 40",
  "Choi-Yong": "M150 260 L220 80 L80 80",
  "Yon-Gae": "M80 260 L220 150 L80 40",
  "Ul-Ji": "M220 260 L80 150 L220 40",
  "Moon-Moo": "M150 260 L80 150 L150 40",
  "So-San": "M80 260 L220 260 L80 40",
  "Se-Jong": "M150 260 L150 40",
  "Tong-Il": "M80 260 L220 260 L220 40 L80 40"
};

/* ===================== PATTERN DATA ===================== */
const tuls = [
  { name: "Chon-Ji", mv: 19, kr: "천지", ro: "Cheon-Ji", en: "Heaven and Earth", om: "Samii fi Lafaa" },
  { name: "Dan-Gun", mv: 21, kr: "단군", ro: "Dan-Gun", en: "Founder of Korea", om: "Hundeeffamaa Kooriyaa" },
  { name: "Do-San", mv: 24, kr: "도산", ro: "Do-San", en: "Patriot Ahn Chang Ho", om: "Gooticha Ahn Chang Ho" },
  { name: "Won-Hyo", mv: 28, kr: "원효", ro: "Won-Hyo", en: "Introduced Buddhism", om: "Buddaayina galche" },
  { name: "Yul-Gok", mv: 38, kr: "율곡", ro: "Yul-Gok", en: "Scholar Yi I", om: "Barataa Yi I" },
  { name: "Joong-Gun", mv: 32, kr: "중근", ro: "Joong-Gun", en: "Patriot Ahn Joong Gun", om: "Gooticha Ahn Joong Gun" },
  { name: "Toi-Gye", mv: 37, kr: "퇴계", ro: "Toi-Gye", en: "Scholar Yi Hwang", om: "Barataa Yi Hwang" },
  { name: "Hwa-Rang", mv: 29, kr: "화랑", ro: "Hwa-Rang", en: "Youth group", om: "Garee dargaggootaa" },
  { name: "Choong-Moo", mv: 30, kr: "충무", ro: "Choong-Moo", en: "Admiral Yi Sun Sin", om: "Ajajaa Yi Sun Sin" },
  { name: "Kwang-Gae", mv: 39, kr: "광개", ro: "Kwang-Gae", en: "Great king", om: "Mootii guddaa" },
  { name: "Po-Eun", mv: 36, kr: "포은", ro: "Po-Eun", en: "Poet & loyalist", om: "Sirbaa fi amanamaa" },
  { name: "Ge-Baek", mv: 44, kr: "계백", ro: "Ge-Baek", en: "General Ge-Baek", om: "Ajajaa Ge-Baek" },
  { name: "Eui-Am", mv: 45, kr: "의암", ro: "Eui-Am", en: "Independence leader", om: "Geggeessaa bilisummaa" },
  { name: "Choong-Jang", mv: 52, kr: "충장", ro: "Choong-Jang", en: "Loyal general", om: "Ajajaa amanamaa" },
  { name: "Juche", mv: 45, kr: "주체", ro: "Ju-Che", en: "Self-reliance", om: "Of-irra-dhaabbannaa" },
  { name: "Sam-Il", mv: 33, kr: "삼일", ro: "Sam-Il", en: "March 1st movement", om: "Sochii Bitootessa 1" },
  { name: "Yoo-Sin", mv: 68, kr: "유신", ro: "Yoo-Sin", en: "General Kim Yoo Sin", om: "Ajajaa Kim Yoo Sin" },
  { name: "Choi-Yong", mv: 46, kr: "최영", ro: "Choi-Yong", en: "General Choi Yong", om: "Ajajaa Choi Yong" },
  { name: "Yon-Gae", mv: 49, kr: "연개", ro: "Yon-Gae", en: "General Yon Gae", om: "Ajajaa Yon Gae" },
  { name: "Ul-Ji", mv: 42, kr: "을지", ro: "Ul-Ji", en: "General Ul-Ji", om: "Ajajaa Ul-Ji" },
  { name: "Moon-Moo", mv: 61, kr: "문무", ro: "Moon-Moo", en: "King Moon Moo", om: "Mootii Moon Moo" },
  { name: "So-San", mv: 72, kr: "소산", ro: "So-San", en: "Monk patriot", om: "Amantii fi gootummaa" },
  { name: "Se-Jong", mv: 24, kr: "세종", ro: "Se-Jong", en: "Inventor of Hangul", om: "Uumaa Hangul" },
  { name: "Tong-Il", mv: 56, kr: "통일", ro: "Tong-Il", en: "Unification", om: "Tokkummaa" }
];

/* ===================== SVG COMPONENT ===================== */
const PatternSVG = ({ path }) => (
  <svg viewBox="0 0 300 300" width="100%" height="220">
    <rect x="5" y="5" width="290" height="290" rx="20" fill="#f0f0f0" />
    <path d={path} stroke="#000" strokeWidth="4" fill="none" />
  </svg>
);

/* ===================== APP ===================== */
export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <div style={{ padding: 16, fontFamily: "Arial", background: "#f4f4f4" }}>
      <h2>🥋 ITF Taekwondo Trainer</h2>

      <button onClick={() => setLang(lang === "en" ? "om" : "en")}>
        {lang === "en" ? "🇪🇹 Afaan Oromo" : "🇬🇧 English"}
      </button>

      {tuls.map((t, i) => (
        <div key={i} style={{ background: "#fff", padding: 14, borderRadius: 12, marginBottom: 14 }}>
          <h3>{t.name} ({t.kr})</h3>
          <p><i>{t.ro}</i></p>
          <PatternSVG path={diagramPaths[t.name]} />
          <p><b>Movements:</b> {t.mv}</p>
          <p><b>Meaning:</b> {lang === "en" ? t.en : t.om}</p>
        </div>
      ))}

      <footer>
        <p><b>Created by:</b> Ahmed Muhammad</p>
        <p><b>Instructor:</b> Sayimak Ibrahim</p>
        <p><b>Assistance:</b> ChatGPT (OpenAI)</p>
      </footer>
    </div>
  );
}
