import React from 'react';

class App extends React.Component {
  state = {
    messageFromGet: '',
    userInput: '',
    responseMessage: '',
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:5000/api/hello');
    const data = await response.json();
    this.setState({ messageFromGet: data.message });
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: this.state.userInput }),
      });

      const data = await response.json();
      this.setState({ responseMessage: data.message });
    } catch (err) {
      console.error('POST error:', err);
    }
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>{this.state.messageFromGet}</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
            placeholder="Type something..."
          />
          <button type="submit">Send</button>
        </form>

        <p>{this.state.responseMessage}</p>
      </div>
    );
  }
}

export default App;
