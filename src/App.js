import React, { useState } from "react";

/* ===================== ITF TULS ===================== */
const tuls = [
  {
    name: "Chon-Ji",
    mv: 19,
    en: "Heaven and Earth",
    om: "Samii fi Lafaa",
    storyEn: "Symbolizes the creation of the world.",
    storyOm: "Uumama addunyaa bakka bu’a.",
    steps: ["Low block", "Middle punch", "Front stance"]
  },
  {
    name: "Dan-Gun",
    mv: 21,
    en: "Founder of Korea",
    om: "Hundeeffamaa Kooriyaa",
    storyEn: "Named after the legendary founder of Korea.",
    storyOm: "Hundeeffamaa seenaa Kooriyaa.",
    steps: ["High block", "Straight punch", "Walking stance"]
  },
  {
    name: "Do-San",
    mv: 24,
    en: "Patriot Ahn Chang Ho",
    om: "Gooticha Ahn Chang Ho",
    storyEn: "Represents patriotism and education.",
    storyOm: "Gootummaa fi barnoota bakka bu’a.",
    steps: ["Knife-hand block", "Middle punch"]
  }
  // (All others can be added the same way – structure is complete)
];

/* ===================== BELT SYLLABUS ===================== */
const syllabus = [
  { geup: "10th Geup", pattern: "None", en: "Low block, Middle punch", om: "Uggura gadi, Rukutaa jidduu" },
  { geup: "9th Geup", pattern: "Chon-Ji", en: "Middle block, Front kick", om: "Uggura jidduu, Mormii duraa" },
  { geup: "8th Geup", pattern: "Dan-Gun", en: "High block, Side kick", om: "Uggura olii, Mormii cinaa" }
];

/* ===================== QUIZ ===================== */
const quizData = [
  { q: "What does Chon-Ji mean?", a: "Heaven and Earth" },
  { q: "Who founded ITF Taekwon-Do?", a: "General Choi Hong Hi" }
];

/* ===================== APP ===================== */
export default function App() {
  const [mode, setMode] = useState("patterns");
  const [lang, setLang] = useState("en");
  const [menu, setMenu] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div style={page}>
      <header style={header}>
        <h2>🥋 ITF Taekwondo Trainer</h2>
        <button onClick={() => setMenu(!menu)} style={dots}>⋮</button>
      </header>

      {menu && (
        <div style={menuBox}>
          <p onClick={() => setMode("about")}>ℹ️ About ITF</p>
          <p onClick={() => setMode("quiz")}>🧠 Quiz</p>
          <p onClick={() => setMode("patterns")}>📐 Patterns</p>
          <p onClick={() => setMode("syllabus")}>🎓 Syllabus</p>
        </div>
      )}

      <button onClick={() => setLang(lang === "en" ? "om" : "en")} style={langBtn}>
        {lang === "en" ? "🇪🇹 Afaan Oromo" : "🇬🇧 English"}
      </button>

      {/* PATTERNS */}
      {mode === "patterns" &&
        tuls.map((t, i) => (
          <div key={i} style={card}>
            <h3>{t.name}</h3>
            <p><b>Movements:</b> {t.mv}</p>
            <p><b>Meaning:</b> {lang === "en" ? t.en : t.om}</p>
            <p>{lang === "en" ? t.storyEn : t.storyOm}</p>
            <ul>
              {t.steps.map((s, idx) => <li key={idx}>{s}</li>)}
            </ul>
          </div>
        ))}

      {/* SYLLABUS */}
      {mode === "syllabus" &&
        syllabus.map((s, i) => (
          <div key={i} style={card}>
            <h3>{s.geup}</h3>
            <p><b>Pattern:</b> {s.pattern}</p>
            <p>{lang === "en" ? s.en : s.om}</p>
          </div>
        ))}

      {/* QUIZ */}
      {mode === "quiz" && (
        <div style={card}>
          <h3>🧠 Quiz</h3>
          <p>{quizData[quizIndex].q}</p>
          {showAnswer && <p><b>{quizData[quizIndex].a}</b></p>}
          <button onClick={() => setShowAnswer(true)}>Show Answer</button>
          <button onClick={() => {
            setShowAnswer(false);
            setQuizIndex((quizIndex + 1) % quizData.length);
          }}>Next</button>
        </div>
      )}

      {/* ABOUT */}
      {mode === "about" && (
        <div style={card}>
          <h3>ℹ️ About ITF</h3>
          <p>
            ITF Taekwon-Do was founded by <b>General Choi Hong Hi</b> in 1966.
            It emphasizes discipline, moral culture, and self-defense.
          </p>
        </div>
      )}

      <footer>
        <p><b>Created by:</b> Ahmed Muhammad</p>
        <p><b>Instructor:</b> Sayimak Ibrahim</p>
        <p><b>Assistance:</b> ChatGPT (OpenAI)</p>
      </footer>
    </div>
  );
}

/* ===================== STYLES ===================== */
const page = { padding: 16, fontFamily: "Arial", background: "#f2f2f2" };
const header = { display: "flex", justifyContent: "space-between" };
const dots = { fontSize: 24, background: "none", border: "none" };
const menuBox = { background: "#fff", padding: 10, borderRadius: 10, marginBottom: 10 };
const card = { background: "#fff", padding: 14, borderRadius: 12, marginBottom: 12 };
const langBtn = { marginBottom: 10 };
