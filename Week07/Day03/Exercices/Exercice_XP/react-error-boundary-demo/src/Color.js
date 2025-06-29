// import React, { Component } from 'react';

// class Color extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favoriteColor: "red"
//     };
//   }

//   changeColor = () => {
//     this.setState({ favoriteColor: "blue" });
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate called");
//     return true;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("componentDidUpdate called");
//   }

//   render() {
//     return (
//       <div>
//         <h1>My favorite color is {this.state.favoriteColor}</h1>
//         <button onClick={this.changeColor}>Change Color</button>
//       </div>
//     );
//   }
// }

// export default Color;



// import React, { Component } from 'react';

// class Color extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favoriteColor: "red"
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favoriteColor: "yellow" });
//     }, 1000);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("after update");
//   }

//   render() {
//     return (
//       <div>
//         <h1>My favorite color is {this.state.favoriteColor}</h1>
//       </div>
//     );
//   }
// }

// export default Color;



// import React, { Component } from 'react';

// class Color extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favoriteColor: "red"
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favoriteColor: "yellow" });
//     }, 1000);
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("in getSnapshotBeforeUpdate");
//     return null; 
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("after update");
//   }

//   render() {
//     return (
//       <div>
//         <h1>My favorite color is {this.state.favoriteColor}</h1>
//       </div>
//     );
//   }
// }

// export default Color;



import React, { Component } from 'react';

class Child extends Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true, 
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  deleteHeader = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>

        {this.state.show && <Child />}

        <button onClick={this.deleteHeader}>Delete Header</button>
      </div>
    );
  }
}

export default Color;
