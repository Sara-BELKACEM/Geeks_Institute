// src/App.js
// import React from 'react';

// class App extends React.Component {
//   render() {
//     const myelement = <h1>I Love JSX!</h1>;
//     const sum = 5 + 5;

//     return (
//       <div>
//         <p>Hello World!</p>
//         {myelement}
//         <p>React is {sum} times better with JSX</p>
//       </div>
//     );
//   }
// }

// export default App;


// src/App.js
// import React from 'react';
// import UserFavoriteAnimals from './UserFavoriteAnimals';

// class App extends React.Component {
//   render() {
//     const user = {
//       firstName: 'Bob',
//       lastName: 'Dylan',
//       favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
//     };

//     return (
//       <div>
//         <h3>{user.firstName}</h3>
//         <h3>{user.lastName}</h3>
//         <UserFavoriteAnimals favAnimals={user.favAnimals} />
//       </div>
//     );
//   }
// }

// export default App;


// src/App.js
import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';

class App extends React.Component {
  render() {
    const user = {
      firstName: 'Bob',
      lastName: 'Dylan',
      favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
    };

    return (
      <div>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />
        <Exercise />
      </div>
    );
  }
}

export default App;
