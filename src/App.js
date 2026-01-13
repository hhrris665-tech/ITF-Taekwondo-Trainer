import React, { useState, useEffect } from "react";

/* =========================
   DATA
========================= */
   // quiz mode
const quizQuestions = [
  {
    q_en: "What does 'Ap Chagi' mean?",
    q_om: "Ap Chagi jechuun maal jechuudha?",
    options: ["Front kick", "Side kick", "Back kick", "Turning kick"],
    answer: "Front kick"
  },
  {
    q_en: "Which stance is called 'Niunja Sogi'?",
    q_om: "Niunja Sogi jechuun seera kami?",
    options: ["Walking stance", "L-stance", "Sitting stance", "Parallel stance"],
    answer: "L-stance"
  },
  {
    q_en: "What is Arae Makgi?",
    q_om: "Arae Makgi jechuun maal?",
    options: ["High block", "Middle block", "Low block", "Knife-hand block"],
    answer: "Low block"
  },
  {
    q_en: "How many movements are in Chon-Ji Tul?",
    q_om: "Chon-Ji Tul tarkaanfii meeqa qaba?",
    options: ["18", "19", "20", "21"],
    answer: "19"
  }
   const beltQuiz = {
  "10th Geup": [
    {
      q_en: "Which block is learned first?",
      q_om: "Uggura jalqabaa kam?",
      options: ["Low block", "High block", "Knife-hand block"],
      answer: "Low block"
    }
  ],
  "9th Geup": [
    {
      q_en: "What kick is Ap Chagi?",
      q_om: "Ap Chagi mormii kami?",
      options: ["Front kick", "Side kick", "Back kick"],
      answer: "Front kick"
    }
  ]
};
function TimedExam({ lang }) {
  const [time, setTime] = useState(60);
  const [done, setDone] = useState(false);

  React.useEffect(() => {
    if (time === 0) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(t);
  }, [time]);

  return (
    <div>
      <h3>⏱️ ITF Exam Mode</h3>
      <p>
        {lang === "en" ? "Time left:" : "Yeroo hafe:"} {time}s
      </p>

      {done ? (
        <p>{lang === "en" ? "Exam finished" : "Qormaanni xumurame"}</p>
      ) : (
        <p>{lang === "en" ? "Answer quickly!" : "Deebii saffisaan kenni!"}</p>
      )}
    </div>
  );
}
];
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
<Menu lang={lang} />
   
<Quiz lang={lang} />
<hr/>
   <BeltQuiz lang={lang} />

<hr />
<TimedExam lang={lang} />
function Menu({ lang }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)}>⋮</button>

      {open && (
        <div style={{
          position: "absolute",
          right: 0,
          background: "#222",
          color: "#fff",
          padding: 10,
          width: 200
        }}>
          <p><b>ℹ️ ITF Info</b></p>
          <p>
            {lang === "en"
              ? "ITF founded in 1966 by Gen. Choi Hong Hi."
              : "ITF bara 1966tti Gen. Choi Hong Hi'n hundeeffame."}
          </p>

          <p><b>⚙️ Settings</b></p>
          <p>Offline Mode ✔</p>
        </div>
      )}
    </div>
  );
           }
function BeltQuiz({ lang }) {
  const [belt, setBelt] = useState("10th Geup");
  const questions = beltQuiz[belt] || [];
  const q = questions[0];

  return (
    <div>
      <h3>🎗️ Belt Quiz</h3>

      <select onChange={e => setBelt(e.target.value)}>
        {Object.keys(beltQuiz).map((b, i) => (
          <option key={i}>{b}</option>
        ))}
      </select>

      {q && (
        <>
          <p>{lang === "en" ? q.q_en : q.q_om}</p>
          {q.options.map((o, i) => (
            <button key={i}>{o}</button>
          ))}
        </>
      )}
    </div>
  );
                                     }
function Quiz({ lang }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = quizQuestions[index];

  function answer(option) {
    if (option === q.answer) setScore(score + 1);

    if (index + 1 < quizQuestions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  }

  if (finished) {
    return (
      <div>
        <h3>🏁 Quiz Finished</h3>
        <p>
          {lang === "en"
            ? `Score: ${score} / ${quizQuestions.length}`
            : `Bu’aa: ${score} / ${quizQuestions.length}`}
        </p>
        <button onClick={() => {
          setIndex(0);
          setScore(0);
          setFinished(false);
        }}>
          Restart
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3>🧠 ITF Quiz</h3>
      <p>{lang === "en" ? q.q_en : q.q_om}</p>
<hr />
      {q.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => answer(opt)}
          style={{
            display: "block",
            margin: "6px 0",
            width: "100%"
          }}
        >
          {opt}
        </button>
      ))}

      <p>
        {lang === "en"
          ? `Question ${index + 1} / ${quizQuestions.length}`
          : `Gaaffii ${index + 1} / ${quizQuestions.length}`}
      </p>
    </div>
  );
}
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
