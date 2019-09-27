import React, { Suspense } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Accessibility } from "./Accessibility";
import { Home } from "./Home";
import { CodeSplitting } from "./CodeSplitting";
import { Context } from "./Context";

const AppContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 25px;

  background: #00b5a3;
  color: #00253e;
`;

const LoadedAlert = React.lazy(() => import("./AlertToLoad"));

const App = () => (
  <AppContainer>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/0" component={Home} />
      <Route path="/1" component={Accessibility} />
      <Route path="/2" component={CodeSplitting} />
      <Suspense fallback={null}>
        <Route exact path={`/2/route-code-splitting`} component={LoadedAlert} />
      </Suspense>
      <Route path="/3" component={Context} />
    </Router>
  </AppContainer>
);

export default App;
