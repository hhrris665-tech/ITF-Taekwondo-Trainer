import React, { useState, useEffect } from "react";

/* ===================== BELTS ===================== */
const belts = [
  { geup: "10th Geup", color: "White Belt", pattern: "None", om: "10ffaa – Qal’ee adii – Hin jiru" },
  { geup: "9th Geup", color: "White–Yellow Belt", pattern: "Chon-Ji", om: "9ffaa – Adii-balleessa – Chon-Ji" },
  { geup: "8th Geup", color: "Yellow Belt", pattern: "Dan-Gun", om: "8ffaa – Balleessa – Dan-Gun" },
  { geup: "7th Geup", color: "Yellow–Green Belt", pattern: "Do-San", om: "7ffaa – Balleessa-Magariisa – Do-San" },
  { geup: "6th Geup", color: "Green Belt", pattern: "Won-Hyo", om: "6ffaa – Magariisa – Won-Hyo" },
  { geup: "5th Geup", color: "Green–Blue Belt", pattern: "Yul-Gok", om: "5ffaa – Magariisa-Cuquliisa – Yul-Gok" },
  { geup: "4th Geup", color: "Blue Belt", pattern: "Joong-Gun", om: "4ffaa – Cuquliisa – Joong-Gun" },
  { geup: "3rd Geup", color: "Blue–Red Belt", pattern: "Toi-Gye", om: "3ffaa – Cuquliisa-Diimaa – Toi-Gye" },
  { geup: "2nd Geup", color: "Red Belt", pattern: "Hwa-Rang", om: "2ffaa – Diimaa – Hwa-Rang" },
  { geup: "1st Geup", color: "Red–Black Belt", pattern: "Choong-Moo", om: "1ffaa – Diimaa-Gurraacha – Choong-Moo" }
];

/* ===================== TECHNIQUES ===================== */
const blocks = [
  { geup: "10th Geup", en: "Low block", kr: "Arae Makgi", om: "Uggura gadi" },
  { geup: "9th Geup", en: "Middle block", kr: "Momtong Makgi", om: "Uggura jidduu" },
  { geup: "8th Geup", en: "High block", kr: "Olgul Makgi", om: "Uggura olii" },
  { geup: "7th Geup", en: "Knife-hand guarding block", kr: "Sonkal Daebi Makgi", om: "Uggura harka billaa" },
  { geup: "6th Geup", en: "Twin forearm block", kr: "Sang Palmok Makgi", om: "Uggura harka lama" }
];

const kicks = [
  { geup: "9th Geup", en: "Front kick", kr: "Ap Chagi", om: "Mormii duraa" },
  { geup: "8th Geup", en: "Side kick", kr: "Yop Chagi", om: "Mormii cinaa" },
  { geup: "7th Geup", en: "Turning kick", kr: "Dollyo Chagi", om: "Mormii marsaa" },
  { geup: "6th Geup", en: "Back kick", kr: "Dwit Chagi", om: "Mormii duubaa" }
];

const punches = [
  { geup: "10th Geup", en: "Middle punch", kr: "Momtong Jireugi", om: "Rukutaa jidduu" },
  { geup: "9th Geup", en: "High punch", kr: "Olgul Jireugi", om: "Rukutaa olii" },
  { geup: "8th Geup", en: "Knife-hand strike", kr: "Sonkal Taerigi", om: "Dha’icha harka billaa" }
];

/* ===================== PATTERNS ===================== */
const patterns = [
  {
    geup: "9th Geup",
    name: "Chon-Ji",
    meaning: "Heaven and Earth",
    moves: 19,
    steps: ["Low block", "Middle punch", "Repeat opposite side"]
  },
  {
    geup: "8th Geup",
    name: "Dan-Gun",
    meaning: "Legendary founder of Korea",
    moves: 21,
    steps: ["High block", "Middle punch", "Front kick"]
  }
];

/* ===================== QUIZ ===================== */
const quizzes = [
  {
    geup: "9th Geup",
    question: "What is the pattern for 9th Geup?",
    options: ["Dan-Gun", "Chon-Ji", "Do-San"],
    answer: "Chon-Ji"
  },
  {
    geup: "8th Geup",
    question: "How many movements are in Dan-Gun?",
    options: ["19", "21", "24"],
    answer: "21"
  }
];

export default function App() {
  const [lang, setLang] = useState("en");
  const [selectedBelt, setSelectedBelt] = useState("10th Geup");

  /* ===== SAVED STATES ===== */
  const [checked, setChecked] = useState(() =>
    JSON.parse(localStorage.getItem("checked") || "{}")
  );
  const [stepIndex, setStepIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    localStorage.setItem("checked", JSON.stringify(checked));
  }, [checked]);

  useEffect(() => {
    setStepIndex(0);
    setQuizIndex(0);
    setScore(0);
  }, [selectedBelt]);

  const toggle = key =>
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div style={{ padding: 16, fontFamily: "Arial" }}>
      <h2>🥋 ITF Taekwondo Trainer</h2>

      <button onClick={() => setLang(lang === "en" ? "om" : "en")}>
        {lang === "en" ? "🇪🇹 Afaan Oromo" : "🇬🇧 English"}
      </button>

      <hr />

      <label>
        <b>Select Belt:</b>{" "}
        <select value={selectedBelt} onChange={e => setSelectedBelt(e.target.value)}>
          {belts.map((b, i) => (
            <option key={i}>{b.geup}</option>
          ))}
        </select>
      </label>

      <h3>🛡️ Blocks</h3>
      <ul>
        {blocks.filter(b => b.geup === selectedBelt).map((b, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={checked[`${selectedBelt}-${b.en}`] || false}
              onChange={() => toggle(`${selectedBelt}-${b.en}`)}
            />{" "}
            {lang === "en" ? `${b.en} (${b.kr})` : b.om}
          </li>
        ))}
      </ul>

      <h3>🦶 Kicks</h3>
      <ul>
        {kicks.filter(k => k.geup === selectedBelt).map((k, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={checked[`${selectedBelt}-${k.en}`] || false}
              onChange={() => toggle(`${selectedBelt}-${k.en}`)}
            />{" "}
            {lang === "en" ? `${k.en} (${k.kr})` : k.om}
          </li>
        ))}
      </ul>

      <h3>📘 Pattern</h3>
      {patterns.filter(p => p.geup === selectedBelt).map((p, i) => (
        <div key={i}>
          <b>{p.name}</b> – {p.meaning} ({p.moves})
          <p>Step {stepIndex + 1}: {p.steps[stepIndex]}</p>
        </div>
      ))}

      <h3>📝 Quiz</h3>
      {quizzes.filter(q => q.geup === selectedBelt)[quizIndex] ? (
        <div>
          <p>{quizzes.filter(q => q.geup === selectedBelt)[quizIndex].question}</p>
          {quizzes.filter(q => q.geup === selectedBelt)[quizIndex].options.map((o, i) => (
            <button
              key={i}
              onClick={() => {
                if (o === quizzes.filter(q => q.geup === selectedBelt)[quizIndex].answer)
                  setScore(score + 1);
                setQuizIndex(quizIndex + 1);
              }}
            >
              {o}
            </button>
          ))}
          <p>Score: {score}</p>
        </div>
      ) : (
        <p>Quiz finished! Score: {score}</p>
      )}

      <hr />
      <p><b>Created by:</b> Ahmed Muhammad</p>
      <p><b>Instructor:</b> Sayimak Ibrahim</p>
      <p><b>Assistance:</b> ChatGPT (OpenAI)</p>
    </div>
  );
}
