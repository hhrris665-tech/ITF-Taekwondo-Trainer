import React, { useState } from "react";

/* ===================== TUL DATA ===================== */
const tuls = [
  { name: "Chon-Ji", en: "Heaven and Earth", om: "Samii fi Lafaa" },
  { name: "Dan-Gun", en: "Founder of Korea", om: "Hundeeffataa Kooriyaa" },
  { name: "Do-San", en: "Patriot Ahn Chang-Ho", om: "Gocha-qabeessa Ahn Chang-Ho" },
  { name: "Won-Hyo", en: "Introduced Buddhism", om: "Budaayinaa beeksise" },
  { name: "Yul-Gok", en: "Scholar Yi I", om: "Barataa Yi I" },
  { name: "Joong-Gun", en: "Patriot An Jung-Geun", om: "Gocha-qabeessa An Jung-Geun" },
  { name: "Toi-Gye", en: "Scholar Yi Hwang", om: "Barataa Yi Hwang" },
  { name: "Hwa-Rang", en: "Youth warriors", om: "Dargaggoota loltoota" },
  { name: "Choong-Moo", en: "Admiral Yi Sun-Sin", om: "Ajajaa lolaa Yi Sun-Sin" },
  { name: "Kwang-Gae", en: "Great king Kwang-Gae", om: "Mootii guddaa Kwang-Gae" },
  { name: "Po-Eun", en: "Poet Chong Mong-Ju", om: "Barreessaa Chong Mong-Ju" },
  { name: "Ge-Baek", en: "General Ge-Baek", om: "Jeneraala Ge-Baek" },
  { name: "Eui-Am", en: "Patriot Son Byong-Hi", om: "Gocha-qabeessa Son Byong-Hi" },
  { name: "Choong-Jang", en: "Loyal general", om: "Jeneraala amanamaa" },
  { name: "Juche", en: "Self-reliance philosophy", om: "Yaada of-irra-eeggannaa" },
  { name: "Sam-Il", en: "Korean independence", om: "Bilisummaa Kooriyaa" },
  { name: "Yoo-Sin", en: "General Kim Yoo-Sin", om: "Jeneraala Kim Yoo-Sin" },
  { name: "Choi-Yong", en: "General Choi Yong", om: "Jeneraala Choi Yong" },
  { name: "Yon-Gae", en: "General Yon Gae", om: "Jeneraala Yon Gae" },
  { name: "Ul-Ji", en: "General Ul-Ji", om: "Jeneraala Ul-Ji" },
  { name: "Moon-Moo", en: "King Moon Moo", om: "Mootii Moon Moo" },
  { name: "So-San", en: "Monk Choi Hyong-Ung", om: "Luba Choi Hyong-Ung" },
  { name: "Se-Jong", en: "King Se-Jong", om: "Mootii Se-Jong" },
  { name: "Tong-Il", en: "Unification", om: "Tokkummaa" }
];

/* ===================== SVG DIAGRAM ===================== */
function TulDiagram({ type }) {
  const paths = {
    I: "M100 20 L100 180",
    CROSS: "M100 20 L100 180 M20 100 L180 100",
    T: "M40 40 L160 40 M100 40 L100 180",
    DOUBLE: "M40 40 L160 160 M160 40 L40 160",
    COMPLEX: "M40 40 L160 40 L160 160 L40 160 L40 40"
  };

  return (
    <svg viewBox="0 0 200 200" width="100%" height="220">
      <rect x="10" y="10" width="180" height="180" fill="#fafafa" stroke="#000" />
      <path
        d={paths[type]}
        stroke="black"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="100" cy="100" r="6" fill="red" />
      <text x="100" y="195" textAnchor="middle" fontSize="10">
        Start / End
      </text>
    </svg>
  );
}

/* ===================== APP ===================== */
export default function App() {
  const [lang, setLang] = useState("en");
  const [selected, setSelected] = useState(null);

  return (
    <div style={app}>
      <header style={header}>
        <h2>🥋 ITF Taekwondo Trainer</h2>
        <button onClick={() => setLang(lang === "en" ? "om" : "en")}>
          {lang === "en" ? "🇪🇹" : "🇬🇧"}
        </button>
      </header>

      <div style={card}>
        <h3>📜 ITF Tuls (24)</h3>
        <div style={grid}>
          {tuls.map((t, i) => (
            <button key={i} style={btn} onClick={() => setSelected({ ...t, i })}>
              {t.name}
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div style={card}>
          <h3>{selected.name}</h3>
          <p>
            {lang === "en" ? selected.en : selected.om}
          </p>
          <TulDiagram index={selected.i} />
        </div>
      )}

      <footer style={footer}>
        <p><b>Created by:</b> Ahmed Muhammad</p>
        <p><b>Instructor:</b> Sayimak Ibrahim</p>
        <p><b>Assistance:</b> ChatGPT</p>
      </footer>
    </div>
  );
}

/* ===================== STYLES ===================== */
const app = {
  fontFamily: "Arial",
  padding: 16,
  background: "#f2f2f2",
  minHeight: "100vh"
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const card = {
  background: "#fff",
  padding: 16,
  marginTop: 16,
  borderRadius: 12
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 8
};

const btn = {
  padding: 10,
  borderRadius: 8,
  border: "1px solid #ccc",
  background: "#eee",
  cursor: "pointer"
};

const footer = {
  marginTop: 24,
  textAlign: "center",
  fontSize: 12
};
