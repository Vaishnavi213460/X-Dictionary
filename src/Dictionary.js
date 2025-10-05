import React, { useState } from "react";

function XDictionary() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchWord, setSearchWord] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const foundWord = dictionary.find(
      (item) => item.word.toLowerCase() === searchWord.trim().toLowerCase()
    );

    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Dictionary App</h1>

      <input
        type="text"
        placeholder="Search for a word..."
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        style={{
          padding: "8px",
          width: "200px",
          marginRight: "10px",
          borderRadius: "5px",
          border: "1px solid gray"
        }}
      />

      <button
        onClick={handleSearch}
        style={{
          padding: "8px 16px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "white",
          cursor: "pointer"
        }}
      >
        Search
      </button>

      <div style={{ marginTop: "30px" }}>
        <h3>Definition:</h3>
        <p>
          {result
            ? result
            : "Search for a word to see its definition here."}
        </p>
      </div>
    </div>
  );
}

export default XDictionary;
