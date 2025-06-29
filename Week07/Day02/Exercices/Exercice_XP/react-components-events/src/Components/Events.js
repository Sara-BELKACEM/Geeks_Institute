import React, { useState } from 'react';

function Events() {
  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`You pressed Enter. Input: ${event.target.value}`);
    }
  };

  // Part III: 
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleButton = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click me</button>
      <br /><br />
      <input
        type="text"
        placeholder="Press the ENTER key!"
        onKeyDown={handleKeyDown}
      />
      <br /><br />
      <h3>Exercise 9:</h3>
      <button onClick={toggleButton}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Events;
