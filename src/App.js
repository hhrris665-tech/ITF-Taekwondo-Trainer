import React, { useState, useEffect } from "react";

/* =====================================================
   DATA — TULS (SVG STEP PATHS, OFFLINE)
===================================================== */

const TULS = {
  "Chon-Ji": {
    movements: 19,
    meaning: "Heaven and Earth",
    history:
      "Chon-Ji represents the creation of the world and the beginning of human history.",
    steps: [
      { x: 150, y: 40, foot: "L", text: "Low block" },
      { x: 150, y: 80, foot: "R", text: "Middle punch" },
      { x: 120, y: 120, foot: "L", text: "Turn & low block" },
      { x: 180, y: 160, foot: "R", text: "Middle punch" }
    ]
  },

  "Dan-Gun": {
    movements: 21,
    meaning: "Holy Dangun",
    history:
      "Named after Dangun, the legendary founder of Korea in 2333 BC.",
    steps: [
      { x: 150, y: 40, foot: "L", text: "High block" },
      { x: 150, y: 80, foot: "R", text: "Middle punch" }
    ]
  }

  const TULS = {
  "Chon-Ji": {
    movements: 19,
    meaning: "Heaven and Earth",
    history: "Creation of the world and the beginning of human history.",
    steps: basicIPath()
  },
  "Dan-Gun": {
    movements: 21,
    meaning: "Holy Dangun",
    history: "Founder of Korea in 2333 BC.",
    steps: basicIPath()
  },
  "Do-San": {
    movements: 24,
    meaning: "Patriot Ahn Chang-Ho",
    history: "Dedication to Korean independence.",
    steps: basicIPath()
  },
  "Won-Hyo": {
    movements: 28,
    meaning: "Monk Won-Hyo",
    history: "Introduction of Buddhism to Korea.",
    steps: basicIPath()
  },
  "Yul-Gok": {
    movements: 38,
    meaning: "Scholar Yi I",
    history: "Represents birth year 1536.",
    steps: advancedPath()
  },
  "Joong-Gun": {
    movements: 32,
    meaning: "Patriot Ahn Joong-Gun",
    history: "Assassinated Hirobumi Ito.",
    steps: advancedPath()
  },
  "Toi-Gye": {
    movements: 37,
    meaning: "Scholar Yi Hwang",
    history: "Authority on Neo-Confucianism.",
    steps: advancedPath()
  },
  "Hwa-Rang": {
    movements: 29,
    meaning: "Hwa-Rang Youth Group",
    history: "Foundation of Korean military spirit.",
    steps: advancedPath()
  },
  "Choong-Moo": {
    movements: 30,
    meaning: "Admiral Yi Sun-Sin",
    history: "Inventor of the turtle ship.",
    steps: advancedPath()
  },

  /* BLACK BELT */
  "Kwang-Gae": { movements: 39, meaning: "Expander of Territory", history: "King Kwang-Gae-Toh-Wang", steps: blackPath() },
  "Po-Eun": { movements: 36, meaning: "Loyal Poet", history: "Chong Mong-Chu", steps: blackPath() },
  "Ge-Baek": { movements: 44, meaning: "General Ge-Baek", history: "Baekje Dynasty", steps: blackPath() },
  "Eui-Am": { movements: 45, meaning: "Patriot Son Byong-Hi", history: "Leader of independence movement", steps: blackPath() },
  "Choong-Jang": { movements: 52, meaning: "General Kim Duk Ryang", history: "Yi Dynasty", steps: blackPath() },
  "Juche": { movements: 45, meaning: "Self Reliance", history: "Philosophical tul", steps: blackPath() },
  "Sam-Il": { movements: 33, meaning: "March 1st Movement", history: "1919 independence", steps: blackPath() },
  "Yoo-Sin": { movements: 68, meaning: "General Kim Yoo-Sin", history: "Silla Dynasty", steps: blackPath() },
  "Choi-Yong": { movements: 46, meaning: "General Choi Yong", history: "Loyalty to king", steps: blackPath() },
  "Yon-Gae": { movements: 49, meaning: "General Yon-Gae Somoon", history: "Koguryo defense", steps: blackPath() },
  "Ul-Ji": { movements: 42, meaning: "General Ul-Ji Moon Dok", history: "Defense of Korea", steps: blackPath() },
  "Moon-Moo": { movements: 61, meaning: "King Moon-Moo", history: "Unification of Korea", steps: blackPath() },
  "So-San": { movements: 72, meaning: "Monk So-San", history: "Scholar & patriot", steps: blackPath() },
  "Se-Jong": { movements: 24, meaning: "King Se-Jong", history: "Inventor of Hangul", steps: blackPath() }
};

/* =====================================================
   BELT SYLLABUS
===================================================== */

const BELTS = [
  "10th Geup",
  "9th Geup",
  "8th Geup",
  "7th Geup",
  "6th Geup",
  "5th Geup",
  "4th Geup",
  "3rd Geup",
  "2nd Geup",
  "1st Geup",
  "1st Dan"
];

/* =====================================================
   SVG FOOTSTEP ANIMATOR
===================================================== */

function FootPathAnimator({ steps }) {
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!play) return;
    if (index >= steps.length - 1) return;

    const t = setTimeout(() => setIndex(index + 1), 800);
    return () => clearTimeout(t);
  }, [play, index, steps.length]);

  return (
    <div>
      <svg width="300" height="220" style={{ border: "1px solid #aaa" }}>
        {steps.slice(0, index + 1).map((s, i) => (
          <g key={i}>
            <circle
              cx={s.x}
              cy={s.y}
              r="10"
              fill={s.foot === "L" ? "#1976d2" : "#d32f2f"}
            />
            <text
              x={s.x}
              y={s.y - 12}
              fontSize="10"
              textAnchor="middle"
              fontWeight="bold"
            >
              {i + 1}
            </text>
            <text
              x={s.x}
              y={s.y + 4}
              fontSize="9"
              textAnchor="middle"
              fill="#fff"
              fontWeight="bold"
            >
              {s.foot}
            </text>
          </g>
        ))}
      </svg>

      <p>{steps[index]?.text}</p>

      <button onClick={() => setPlay(!play)}>
        {play ? "Pause" : "Play"}
      </button>
      <button onClick={() => {
        setIndex(0);
        setPlay(false);
      }}>
        Reset
      </button>
    </div>
  );
function AnimatedPerson({ x, y, direction }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${direction})`}>
      {/* Head */}
      <circle cx="0" cy="-18" r="6" fill="#000" />

      {/* Body */}
      <line x1="0" y1="-12" x2="0" y2="12" stroke="#000" strokeWidth="2" />

      {/* Arms */}
      <line x1="-10" y1="-5" x2="10" y2="-5" stroke="#000" strokeWidth="2" />

      {/* Legs */}
      <line x1="0" y1="12" x2="-8" y2="26" stroke="#000" strokeWidth="2" />
      <line x1="0" y1="12" x2="8" y2="26" stroke="#000" strokeWidth="2" />
    </g>
  );
}


/* =====================================================
   COACH / INSTRUCTOR MODE
===================================================== */

function CoachMode({ progress }) {
  return (
    <div style={{ background: "#111", color: "#fff", padding: 12 }}>
      <h3>👨‍🏫 Coach Mode</h3>

      <p><b>Current Belt:</b> {progress.belt}</p>
      <p><b>Completed Tuls:</b> {progress.completedTuls.length}</p>
      <p><b>Training Time:</b> {progress.minutes} minutes</p>

      <p>Status: {progress.completedTuls.length >= 1 ? "Active" : "Beginner"}</p>
    </div>
  );
}

/* =====================================================
   MAIN APP
===================================================== */

export default function App() {
  const [selectedTul, setSelectedTul] = useState("Chon-Ji");
  const [showCoach, setShowCoach] = useState(false);

  const progress = {
    belt: "9th Geup",
    completedTuls: ["Chon-Ji"],
    minutes: 120
  };

  const tul = TULS[selectedTul];

  return (
    <div style={{ padding: 16, fontFamily: "Arial" }}>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>🥋 ITF Taekwondo Trainer</h2>
        <button onClick={() => setShowCoach(!showCoach)}>
          {showCoach ? "Hide Coach" : "Coach Mode"}
        </button>
      </header>

      {showCoach && <CoachMode progress={progress} />}

      <hr />

      <h3>📐 Tul Selection</h3>
      <select value={selectedTul} onChange={e => setSelectedTul(e.target.value)}>
        {Object.keys(TULS).map(t => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <h3>{selectedTul}</h3>
      <p><b>Movements:</b> {tul.movements}</p>
      <p><b>Meaning:</b> {tul.meaning}</p>
      <p><b>History:</b> {tul.history}</p>

      <FootPathAnimator steps={tul.steps} />

      <hr />

      <h4>🎗️ Belt System</h4>
      <ul>
        {BELTS.map(b => <li key={b}>{b}</li>)}
      </ul>

                   function TulAnimator({ steps }) 
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      if (i < steps.length - 1) setI(i + 1);
    }, 900);
    return () => clearTimeout(t);
  }, [i, steps.length]);

  return (
    <svg width="300" height="260" style={{ border: "1px solid #aaa" }}>
      <AnimatedPerson
        x={steps[i].x}
        y={steps[i].y}
        direction={steps[i].dir}
      />
    </svg>
  );

      <footer>
        <p><b>Instructor:</b> Sayimak Ibrahim</p>
        <p><b>Created by:</b> Ahmed Muhammad</p>
      </footer>
    </div>
  );
}
