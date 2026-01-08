import React, { useState } from "react";

const belts = [
  {
    geup: "10th Geup",
    color: "White Belt",
    pattern: "None",
    om: "10ffaa – Qal’ee adii – Hin jiru"
  },
  {
    geup: "9th Geup",
    color: "White–Yellow Belt",
    pattern: "Chon-Ji",
    om: "9ffaa – Adii-balleessa – Chon-Ji"
  },
  {
    geup: "8th Geup",
    color: "Yellow Belt",
    pattern: "Dan-Gun",
    om: "8ffaa – Balleessa – Dan-Gun"
  },
  {
    geup: "7th Geup",
    color: "Yellow–Green Belt",
    pattern: "Do-San",
    om: "7ffaa – Balleessa-Magariisa – Do-San"
  },
  {
    geup: "6th Geup",
    color: "Green Belt",
    pattern: "Won-Hyo",
    om: "6ffaa – Magariisa – Won-Hyo"
  },
  {
    geup: "5th Geup",
    color: "Green–Blue Belt",
    pattern: "Yul-Gok",
    om: "5ffaa – Magariisa-Cuquliisa – Yul-Gok"
  },
  {
    geup: "4th Geup",
    color: "Blue Belt",
    pattern: "Joong-Gun",
    om: "4ffaa – Cuquliisa – Joong-Gun"
  },
  {
    geup: "3rd Geup",
    color: "Blue–Red Belt",
    pattern: "Toi-Gye",
    om: "3ffaa – Cuquliisa-Diimaa – Toi-Gye"
  },
  {
    geup: "2nd Geup",
    color: "Red Belt",
    pattern: "Hwa-Rang",
    om: "2ffaa – Diimaa – Hwa-Rang"
  },
  {
    geup: "1st Geup",
    color: "Red–Black Belt",
    pattern: "Choong-Moo",
    om: "1ffaa – Diimaa-Gurraacha – Choong-Moo"
  }
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

      <h3>🎗️ ITF Colored Belt Syllabus (Geup)</h3>

      <ul>
        {belts.map((b, i) => (
          <li key={i} style={{ marginBottom: 8 }}>
            <b>{b.geup}</b> – {lang === "en"
              ? `${b.color} | Pattern: ${b.pattern}`
              : b.om}
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
<h3>⚫ ITF Black Belt Patterns (Dan)</h3>
<ul>
  {danPatterns.map((d, i) => (
    <li key={i}>
      <b>{d.dan}</b> – {d.pattern}
    </li>
  ))}
</ul>
const danPatterns = [
  { dan: "1st Dan", pattern: "Chon-Ji (Review)" },
  { dan: "2nd Dan", pattern: "Kwang-Gae, Po-Eun, Ge-Baek" },
  { dan: "3rd Dan", pattern: "Eui-Am" },
  { dan: "4th Dan", pattern: "Choong-Jang, Juche, Sam-Il" },
  { dan: "5th Dan", pattern: "Yoo-Sin" },
  { dan: "6th Dan", pattern: "Choi-Yong, Yon-Gae, Ul-Ji, Moon-Moo" },
  { dan: "7th Dan", pattern: "So-San, Se-Jong" }
];
