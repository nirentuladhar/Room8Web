import React, { Component } from "react";
import Login from './routes/Login/';
import Nav from './components/Nav/';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Nav
            navItems={['Dashboard', 'User']}></Nav>
          <Login></Login>
        </div>

      </div>
    );
  }
}

export default App;
