import React, { useState } from "react";
import quotes from "./quotes";
import "./App.css";

const getRandomIndex = (excludedIndex) => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === excludedIndex);
  return newIndex;
};

const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * quotes.length)
  );
  const [bgColor, setBgColor] = useState(getRandomColor());

  const handleClick = () => {
    const newIndex = getRandomIndex(currentIndex);
    setCurrentIndex(newIndex);
    setBgColor(getRandomColor());
  };

  const { quote, author } = quotes[currentIndex];

  return (
    <div className="App" style={{ backgroundColor: bgColor, color: bgColor }}>
      <div className="quote-box">
        <h1 className="quote-text">"{quote}"</h1>
        <h4 className="quote-author">— {author || "Unknown"}</h4>
        <button
          className="new-quote"
          style={{ backgroundColor: bgColor, borderColor: bgColor }}
          onClick={handleClick}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
