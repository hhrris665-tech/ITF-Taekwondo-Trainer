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

  // ⚠️ You will continue adding up to 24 Tuls here
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

      <footer>
        <p><b>Instructor:</b> Sayimak Ibrahim</p>
        <p><b>Created by:</b> Ahmed Muhammad</p>
      </footer>
    </div>
  );
}
