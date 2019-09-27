import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Accessibility } from "./Accessibility";
import { Home } from "./Home";

const AppContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 25px;

  background: #00b5a3;
  color: #00253e;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/0" exact component={Home} />
        <Route path="/1" component={Accessibility} />
      </Router>
    </AppContainer>
  );
}

export default App;
