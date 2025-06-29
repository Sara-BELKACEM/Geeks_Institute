import React, { useState, useEffect } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]); 

  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        My Favorite Color is <em>{favoriteColor}</em>
      </h1>
      <button onClick={changeColor}>Change to Blue</button>
    </div>
  );
}

export default Color;
