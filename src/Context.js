import React, { useState } from "react";
import styled from "styled-components";
import { Page } from "./Page";
import { Input, Section } from "./Shared";

const LevelContainer = styled.div`
  padding: 10px;

  border: 1px solid #ffffff;
  border-radius: 5px;
`;

const ContextInput = styled(Input)`
  margin-bottom: 25px;
`;

const InputContext = React.createContext();

const LevelOne = () => (
  <LevelContainer>
    <p>This is level one. It has no props.</p>
    <LevelTwo />
  </LevelContainer>
);

const LevelTwo = () => (
  <LevelContainer>
    <p>This is level two. It has no props.</p>
    <LevelThree />
  </LevelContainer>
);

const LevelThree = () => (
  <InputContext.Consumer>
    {value => (
      <LevelContainer>
        <p>
          This is level three. It has no props. The value from context is "
          {value}".
        </p>
      </LevelContainer>
    )}
  </InputContext.Consumer>
);

const Context = () => {
  const [color, setColor] = useState("green");

  return (
    <Page title="Context">
      <Section>
        <p>
          "Context provides a way to pass data through the component tree
          without having to pass props down manually at every level."
        </p>
        <a
          href="https://reactjs.org/docs/context.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Context Docs
        </a>
      </Section>
      <Section>
        <h2>Example</h2>
        <p>
          Instead of passing a prop down between these 3 components, we can use
          context to avoid the middle man.
        </p>
        <p>
          Outside of the below components, context has been created. The value
          of this context is:
        </p>
        <ContextInput
          type="text"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <InputContext.Provider value={color}>
          <LevelOne>Here</LevelOne>
        </InputContext.Provider>
      </Section>
    </Page>
  );
};

export { Context };
