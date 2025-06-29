import React from 'react';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';


function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
      <h1>React Practice</h1>
      <Color />
      <Phone />
      <Car carinfo={carinfo} />
      <Events />
    </div>
  );
}

export default App;
