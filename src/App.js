import React, { Component } from "react";

import Header from "./components/UI/Header/Header";
import Dashboard from "./containers/Dashboard";

class App extends Component {
  render() {
    return (
      <>
        <Header title="Plentific"> </Header>
        <Dashboard />
      </>
    );
  }
}

export default App;
