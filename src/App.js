import React, { useState, useEffect } from "react";

/* =========================
   DATA
========================= */

// Quiz (general)
const quizQuestions = [
  {
    q_en: "What does Ap Chagi mean?",
    q_om: "Ap Chagi jechuun maal jechuudha?",
    options: ["Front kick", "Side kick", "Back kick", "Turning kick"],
    answer: "Front kick"
  },
  {
    q_en: "Which stance is Niunja Sogi?",
    q_om: "Niunja Sogi seera kami?",
    options: ["Walking stance", "L-stance", "Parallel stance"],
    answer: "L-stance"
  },
  {
    q_en: "What is Arae Makgi?",
    q_om: "Arae Makgi jechuun maal?",
    options: ["High block", "Middle block", "Low block"],
    answer: "Low block"
  }
];

// Belt quiz
const beltQuiz = {
  "10th Geup": [
    {
      q_en: "Which block is learned first?",
      q_om: "Uggura jalqabaa kam?",
      options: ["Low block", "High block"],
      answer: "Low block"
    }
  ],
  "9th Geup": [
    {
      q_en: "What kick is Ap Chagi?",
      q_om: "Ap Chagi mormii kami?",
      options: ["Front kick", "Side kick"],
      answer: "Front kick"
    }
  ]
};

// Belt syllabus
const belts = [
  { geup: "10th Geup", en: "White Belt", om: "Qal’ee adii" },
  { geup: "9th Geup", en: "White–Yellow Belt", om: "Adii–Balleessa" },
  { geup: "8th Geup", en: "Yellow Belt", om: "Balleessa" },
  { geup: "7th Geup", en: "Yellow–Green Belt", om: "Balleessa–Magariisa" },
  { geup: "6th Geup", en: "Green Belt", om: "Magariisa" }
];

// Techniques
const stances = [
  { en: "Walking stance (Gunnun Sogi)", om: "Seera deemsa" },
  { en: "L-stance (Niunja Sogi)", om: "Seera L" },
  { en: "Parallel stance (Narani Sogi)", om: "Seera walqixa" }
];

const blocks = [
  { en: "Low block (Arae Makgi)", om: "Uggura gadi" },
  { en: "Middle block (Momtong Makgi)", om: "Uggura jidduu" },
  { en: "High block (Olgul Makgi)", om: "Uggura olii" }
];

const kicks = [
  { en: "Front kick (Ap Chagi)", om: "Mormii duraa" },
  { en: "Side kick (Yop Chagi)", om: "Mormii cinaa" },
  { en: "Turning kick (Dollyo Chagi)", om: "Mormii marsaa" }
];

// Tul SVG path (example)
const tulPaths = {
  "Chon-Ji": [
    { x: 150, y: 40, foot: "L", en: "Low block", om: "Uggura gadi" },
    { x: 150, y: 80, foot: "R", en: "Middle punch", om: "Rukutaa jidduu" },
    { x: 120, y: 120, foot: "L", en: "Turn", om: "Marsaa" }
  ]
};
/* =========================
   COMPONENTS
========================= */

function Menu({ lang }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)}>⋮</button>
      {open && (
        <div style={{ background: "#222", color: "#fff", padding: 10 }}>
          <p>
            {lang === "en"
              ? "ITF founded in 1966 by Gen. Choi Hong Hi."
              : "ITF bara 1966tti Gen. Choi Hong Hi'n hundeeffame."}
          </p>
          <p>Offline Mode ✔</p>
        </div>
      )}
    </div>
  );
}

function Quiz({ lang }) {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const q = quizQuestions[i];

  function answer(a) {
    if (a === q.answer) setScore(score + 1);
    if (i < quizQuestions.length - 1) setI(i + 1);
  }

  return (
    <div>
      <h3>🧠 Quiz</h3>
      <p>{lang === "en" ? q.q_en : q.q_om}</p>
      {q.options.map((o, idx) => (
        <button key={idx} onClick={() => answer(o)}>
          {o}
        </button>
      ))}
      <p>{score} / {quizQuestions.length}</p>
    </div>
  );
}

function BeltQuiz({ lang }) {
  const [belt, setBelt] = useState("10th Geup");
  const q = beltQuiz[belt][0];

  return (
    <div>
      <h3>🎗️ Belt Quiz</h3>
      <select onChange={e => setBelt(e.target.value)}>
        {Object.keys(beltQuiz).map(b => (
          <option key={b}>{b}</option>
        ))}
      </select>
      <p>{lang === "en" ? q.q_en : q.q_om}</p>
    </div>
  );
}

function TimedExam({ lang }) {
  const [t, setT] = useState(30);
  useEffect(() => {
    if (t === 0) return;
    const i = setTimeout(() => setT(t - 1), 1000);
    return () => clearTimeout(i);
  }, [t]);

  return <p>{lang === "en" ? "Time:" : "Yeroo:"} {t}</p>;
}

function FootPath({ steps, lang }) {
  const [s, setS] = useState(0);

  return (
    <div>
      <svg width="300" height="200">
        {steps.slice(0, s + 1).map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="8" fill="red" />
        ))}
      </svg>
      <p>{steps[s] && (lang === "en" ? steps[s].en : steps[s].om)}</p>
      <button onClick={() => setS(s + 1)}>Next</button>
    </div>
  );
}

/* =========================
   APP
========================= */

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <div style={{ padding: 16 }}>
      <Menu lang={lang} />

      <h2>🥋 ITF Taekwondo Trainer</h2>
      <button onClick={() => setLang(lang === "en" ? "om" : "en")}>
        {lang === "en" ? "🇪🇹 Oromo" : "🇬🇧 English"}
      </button>

      <Quiz lang={lang} />
      <BeltQuiz lang={lang} />
      <TimedExam lang={lang} />

      <h3>📐 Chon-Ji Tul</h3>
      <FootPath steps={tulPaths["Chon-Ji"]} lang={lang} />

      <p><b>Instructor:</b> Sayimak Ibrahim</p>
      <p><b>Created by:</b> Ahmed Muhammad</p>
    </div>
  );
        }
