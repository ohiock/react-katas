import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Accessibility } from "./Accessibility";
import { Home } from "./Home";

const AppContainer = styled.div`
  height: 100vh;

  background: #00b5a3;
  color: #00253e;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/accessibility" component={Accessibility} />
      </Router>
    </AppContainer>
  );
}

export default App;
