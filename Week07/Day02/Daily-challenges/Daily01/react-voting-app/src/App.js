import React, { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 2 },
    { name: "Python", votes: 4 },
    { name: "JavaSript", votes: 5 }, 
    { name: "Java", votes: 1 },
  ]);

  const handleVote = (index) => {
    const updatedLanguages = [...languages]; 
    updatedLanguages[index].votes += 1; 
    setLanguages(updatedLanguages); 
  };

  return (
    <div className="App">
      <h1>Vote Your Language!</h1>

      {languages.map((lang, index) => (
        <div key={index} className="vote-box">
          <span>{lang.votes}</span>
          <span>{lang.name}</span>
          <button onClick={() => handleVote(index)}>Click Here</button>
        </div>
      ))}
    </div>
  );
}

export default App;
