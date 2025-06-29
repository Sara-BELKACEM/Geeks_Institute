// import React from 'react';

// function Car(props) {
//   return (
//     <div>
//       <h2>This car is a {props.carinfo.model}</h2>
//     </div>
//   );
// }

// export default Car;

// import React, { useState } from 'react';

// function Car({ carinfo }) {
//   const [color] = useState('red');

//   return (
//     <div>
//       <h2>This car is a {color} {carinfo.model}</h2>
//     </div>
//   );
// }

// export default Car;


import React, { useState } from 'react';
import Garage from './Garage';

function Car({ carinfo }) {
  const [color] = useState('red');

  return (
    <div>
      <h2>This car is a {color} {carinfo.model}</h2>
      <Garage size="small" />
    </div>
  );
}

export default Car;
