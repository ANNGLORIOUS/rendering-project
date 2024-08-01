import React from "react";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.isLoggedIn ? (
            <p>Welcome back!</p>
          ) : (
            <p>Please log in.</p>
          )}
        </div>
        <div>
          {this.state.isLoggedIn ? (
            <button onClick={this.handleLogout}>Log Out</button>
          ) : (
            <button onClick={this.handleLogin}>Log In</button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
