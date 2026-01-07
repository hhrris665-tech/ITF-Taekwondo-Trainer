import React, { useState } from "react";

const patterns = [
  { name: "Chon-Ji", moves: 19, meaning: { en: "Heaven and Earth", om: "Samii fi lafa" } },
  { name: "Dan-Gun", moves: 21, meaning: { en: "Founder of Korea", om: "Abbaa seenaa Kooriyaa" } },
  { name: "Do-San", moves: 24, meaning: { en: "Patriot", om: "Lammii bilisummaa" } },
];

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <div style={{ padding: 16, fontFamily: "Arial" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>🥋 ITF Taekwondo Trainer</h2>
        <button onClick={() => setLang(lang === "en" ? "om" : "en")}>
          {lang === "en" ? "🇪🇹" : "🇬🇧"}
        </button>
      </div>

      <h3>Patterns (Tuls)</h3>
      <ul>
        {patterns.map((p, i) => (
          <li key={i}>
            <b>{p.name}</b> – {p.meaning[lang]} ({p.moves})
          </li>
        ))}
      </ul>

      <hr />
      <p><b>Created by:</b> Ahmed Muhammad</p>
      <p><b>Instructor:</b> Sayimak Ibrahim</p>
      <p><b>Assistance:</b> ChatGPT (OpenAI)</p>
    </div>
  );
}
