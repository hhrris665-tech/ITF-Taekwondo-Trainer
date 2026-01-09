import React, { useState } from "react";

/* ================= DATA ================= */

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

const danPatterns = [
  { dan: "1st Dan", pattern: "Chon-Ji (Review)" },
  { dan: "2nd Dan", pattern: "Kwang-Gae, Po-Eun, Ge-Baek" },
  { dan: "3rd Dan", pattern: "Eui-Am" },
  { dan: "4th Dan", pattern: "Choong-Jang, Juche, Sam-Il" },
  { dan: "5th Dan", pattern: "Yoo-Sin" },
  { dan: "6th Dan", pattern: "Choi-Yong, Yon-Gae, Ul-Ji, Moon-Moo" },
  { dan: "7th Dan", pattern: "So-San, Se-Jong" }
];

const beltTechniques = [
  { geup: "10th Geup", en: "Parallel stance, Low block, Middle punch", om: "Seera walqixa, Uggura gadi, Rukutaa jidduu" },
  { geup: "9th Geup", en: "Walking stance, Middle block, Front kick", om: "Seera deemsa, Uggura jidduu, Mormii duraa" },
  { geup: "8th Geup", en: "High block, Side kick", om: "Uggura olii, Mormii cinaa" },
  { geup: "7th Geup", en: "L-stance, Knife-hand guarding block", om: "Seera L, Uggura harka billaa" },
  { geup: "6th Geup", en: "Turning kick, Twin forearm block", om: "Mormii marsaa, Uggura harka lama" },
  { geup: "5th Geup", en: "Back kick, Elbow strike", om: "Mormii duubaa, Dha’icha jilbaa harka" },
  { geup: "4th Geup", en: "Reverse turning kick", om: "Mormii marsaa faallaa" },
  { geup: "3rd Geup", en: "Jump front kick", om: "Mormii duraa sakatta’aa" },
  { geup: "2nd Geup", en: "Jump side kick", om: "Mormii cinaa sakatta’aa" },
  { geup: "1st Geup", en: "Combination techniques", om: "Teeknika walitti makamaa" }
];

const stances = [
  { en: "Parallel stance", om: "Seera walqixa" },
  { en: "Walking stance", om: "Seera deemsa" },
  { en: "L-stance", om: "Seera L" },
  { en: "Sitting stance", om: "Seera taa’aa" },
  { en: "Rear foot stance", om: "Seera miila duubaa" },
  { en: "Fixed stance", om: "Seera dhaabbataa" },
  { en: "Close stance", om: "Seera dhihoo" }
];

const blocks = [
  { en: "Low block", kr: "Arae Makgi", om: "Uggura gadi" },
  { en: "Middle block", kr: "Momtong Makgi", om: "Uggura jidduu" },
  { en: "High block", kr: "Olgul Makgi", om: "Uggura olii" },
  { en: "Inside forearm block", kr: "An Palmok Makgi", om: "Uggura keessaa harka" },
  { en: "Outside forearm block", kr: "Bakat Palmok Makgi", om: "Uggura alaa harka" },
  { en: "Knife-hand guarding block", kr: "Sonkal Daebi Makgi", om: "Uggura harka billaa eegumsaa" },
  { en: "Knife-hand low block", kr: "Sonkal Arae Makgi", om: "Uggura harka billaa gadi" },
  { en: "Twin forearm block", kr: "Sang Palmok Makgi", om: "Uggura harka lama" },
  { en: "X-fist block", kr: "Kyocha Joomuk Makgi", om: "Uggura harka ce’umsaa" },
  { en: "Wedging block", kr: "Hechyo Makgi", om: "Uggura baninsaa" },
  { en: "Palm pushing block", kr: "Sonbadak Miro Makgi", om: "Uggura riixaa harka" },
  { en: "Checking block", kr: "Momchau Makgi", om: "Uggura to’annoo" }
];

const kicks = [
  { en: "Front kick", kr: "Ap Chagi", om: "Mormii duraa" },
  { en: "Side kick", kr: "Yop Chagi", om: "Mormii cinaa" },
  { en: "Turning kick", kr: "Dollyo Chagi", om: "Mormii marsaa" },
  { en: "Back kick", kr: "Dwit Chagi", om: "Mormii duubaa" },
  { en: "Reverse turning kick", kr: "Bandae Dollyo Chagi", om: "Mormii marsaa faallaa" },
  { en: "Crescent kick", kr: "Bandal Chagi", om: "Mormii marsaa gogaa" },
  { en: "Downward kick", kr: "Naeryo Chagi", om: "Mormii gadi buusaa" },
  { en: "Hook kick", kr: "Huryeo Chagi", om: "Mormii harkisaa" },
  { en: "Jump front kick", kr: "Twimyo Ap Chagi", om: "Mormii duraa sakatta’aa" },
  { en: "Jump side kick", kr: "Twimyo Yop Chagi", om: "Mormii cinaa sakatta’aa" },
  { en: "Jump turning kick", kr: "Twimyo Dollyo Chagi", om: "Mormii marsaa sakatta’aa" },
  { en: "Flying side kick", kr: "Ttwieo Yop Chagi", om: "Mormii cinaa balali’aa" }
];

const handTechniques = [
  { en: "Middle punch", kr: "Momtong Jireugi", om: "Rukutaa jidduu" },
  { en: "High punch", kr: "Olgul Jireugi", om: "Rukutaa olii" },
  { en: "Low punch", kr: "Arae Jireugi", om: "Rukutaa gadi" },
  { en: "Reverse punch", kr: "Bandae Jireugi", om: "Rukutaa faallaa" },
  { en: "Double punch", kr: "Doo Jireugi", om: "Rukutaa lama" },
  { en: "Knife-hand strike", kr: "Sonkal Taerigi", om: "Dha’icha harka billaa" },
  { en: "Back fist strike", kr: "Dung Joomuk Taerigi", om: "Dha’icha harka duubaa" },
  { en: "Ridge-hand strike", kr: "Yuk Sonkal Taerigi", om: "Dha’icha cinaa harka" },
  { en: "Palm heel strike", kr: "Sonbadak Taerigi", om: "Dha’icha lafee harka" },
  { en: "Elbow strike", kr: "Palkup Taerigi", om: "Dha’icha jilbaa harka" },
  { en: "Hammer fist strike", kr: "Me Joomuk Taerigi", om: "Dha’icha harka rukuttaa" }
];

/* ================= APP ================= */

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <div style={{ padding: 16, fontFamily: "Arial" }}>
      <h2>🥋 ITF Taekwondo Trainer</h2>

      <button onClick={() => setLang(lang === "en" ? "om" : "en")}>
        {lang === "en" ? "🇪🇹 Afaan Oromo" : "🇬🇧 English"}
      </button>

      <h3>🎗️ Colored Belts</h3>
      <ul>{belts.map((b,i)=>(
        <li key={i}><b>{b.geup}</b> – {lang==="en"?`${b.color} | ${b.pattern}`:b.om}</li>
      ))}</ul>

      <h3>⚫ Black Belt Patterns</h3>
      <ul>{danPatterns.map((d,i)=>(
        <li key={i}><b>{d.dan}</b> – {d.pattern}</li>
      ))}</ul>

      <h3>📚 Techniques per Belt</h3>
      <ul>{beltTechniques.map((t,i)=>(
        <li key={i}><b>{t.geup}</b> – {lang==="en"?t.en:t.om}</li>
      ))}</ul>

      <h3>🧍‍♂️ Stances</h3>
      <ul>{stances.map((s,i)=><li key={i}>{lang==="en"?s.en:s.om}</li>)}</ul>

      <h3>🛡️ Blocks</h3>
      <ul>{blocks.map((b,i)=><li key={i}>{lang==="en"?b.en:b.om}</li>)}</ul>

      <h3>🦶 Kicks</h3>
      <ul>{kicks.map((k,i)=><li key={i}>{lang==="en"?k.en:k.om}</li>)}</ul>

      <h3>👊 Hand Techniques</h3>
      <ul>{handTechniques.map((h,i)=><li key={i}>{lang==="en"?h.en:h.om}</li>)}</ul>

      <hr />
      <p><b>Created by:</b> Ahmed Muhammad</p>
      <p><b>Instructor:</b> Sayimak Ibrahim</p>
      <p><b>Assistance:</b> ChatGPT</p>
    </div>
  );
}
