import React, { useState } from "react";

/* ===================== SVG PATTERNS ===================== */
const patterns = [
  {
    name: "Chon-Ji",
    meaning: "Heaven and Earth",
    svg: (
      <svg viewBox="0 0 200 200" width="100%">
        <line x1="50" y1="20" x2="50" y2="180" stroke="black" strokeWidth="4" />
        <line x1="150" y1="20" x2="150" y2="180" stroke="black" strokeWidth="4" />
      </svg>
    )
  },
  {
    name: "Dan-Gun",
    meaning: "Holy Founder of Korea",
    svg: (
      <svg viewBox="0 0 200 200" width="100%">
        <line x1="100" y1="20" x2="100" y2="180" stroke="black" strokeWidth="4" />
        <line x1="40" y1="100" x2="160" y2="100" stroke="black" strokeWidth="4" />
      </svg>
    )
  },
  {
    name: "Do-San",
    meaning: "Patriot Ahn Chang-Ho",
    svg: (
      <svg viewBox="0 0 200 200" width="100%">
        <polyline
          points="50,20 50,180 150,180 150,20"
          fill="none"
          stroke="black"
          strokeWidth="4"
        />
      </svg>
    )
  }
];

/* ===================== APP ===================== */
export default function App() {
  const [selected, setSelected] = useState(patterns[0]);

  return (
    <div style={{
      fontFamily: "Arial",
      background: "#f4f4f4",
      minHeight: "100vh",
      padding: 16
    }}>

      <h2 style={{ textAlign: "center" }}>🥋 ITF Taekwondo Trainer</h2>

      {/* Pattern Selector */}
      <div style={{
        display: "flex",
        gap: 8,
        overflowX: "auto",
        marginBottom: 16
      }}>
        {patterns.map((p, i) => (
          <button
            key={i}
            onClick={() => setSelected(p)}
            style={{
              padding: "8px 12px",
              borderRadius: 20,
              border: "none",
              background: selected.name === p.name ? "#111" : "#ddd",
              color: selected.name === p.name ? "#fff" : "#000",
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Pattern Card */}
      <div style={{
        background: "#fff",
        borderRadius: 12,
        padding: 16,
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>
        <h3 style={{ marginBottom: 4 }}>{selected.name}</h3>
        <p style={{ color: "#666", marginTop: 0 }}>{selected.meaning}</p>

        <div style={{
          marginTop: 16,
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 12
        }}>
          {selected.svg}
        </div>
      </div>

      {/* Credits */}
      <div style={{ marginTop: 24, fontSize: 14 }}>
        <p><b>Created by:</b> Ahmed Muhammad</p>
        <p><b>Instructor:</b> Sayimak Ibrahim</p>
        <p><b>Assistance:</b> ChatGPT (OpenAI)</p>
      </div>

    </div>
  );
}
