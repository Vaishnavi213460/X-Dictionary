import React, { useState } from "react";

function XDictionary() {
  // Initialize dictionary data
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  // State for input and search result
  const [searchWord, setSearchWord] = useState("");
  const [result, setResult] = useState("");

  // Function to handle search
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
        {result && (
          result === "Word not found in the dictionary." ? (
            <p>{result}</p>
          ) : (
            <>
              <h3>Definition:</h3>
              <p>{result}</p>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default XDictionary;
