import React from "react";
import './App.css';
import Content from "./Content";
import Images from "./Images";

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
            <button onClick={this.handleLogout}>Log Out</button>
          ) : (
            <button onClick={this.handleLogin}>Log In</button>
          )}
        </div>
        <div>
          {this.state.isLoggedIn ? (
            <Content />
          ) : (
            <Images />
          )}
        </div>
      </div>
    );
  }
}

export default App;
