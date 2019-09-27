import React, { useRef } from "react";
import styled from "styled-components";

import { Page } from "./Page";
import { Button, Input, Section } from "./Shared";

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const listItems = {
  "some term": "a definition",
  "another term": "and definition",
  "last term": "final definition"
};

const FocusControlDemo = () => {
  const inputRef = useRef(null);

  return (
    <>
      <ManualFocusInput inputRef={inputRef} />
      <Button onClick={() => inputRef.current.focus()}>Focus!</Button>
    </>
  );
};

const ManualFocusInput = ({ inputRef }) => <Input type="text" ref={inputRef} />;

const Accessibility = () => (
  <Page title="Accessibility">
    <Section>
      <p>
        "A more complex user experience should not mean a less accessible one."
      </p>
      <a
        href="https://reactjs.org/docs/accessibility.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Accessibility Docs
      </a>
    </Section>
    <Section>
      <h2>Aria attributes</h2>
      <p>
        Aria attributes are slightly special for React in that they maintain
        dashed prop names (ie <code>aria-label</code>)
      </p>
      <Input
        aria-label="Name"
        placeholder="This input has an aria-label of Name"
        type="text"
      />
    </Section>
    <Section>
      <h2>Semantic HTML</h2>
      <p>
        The code below uses fragments to group similar elements instead of the
        typical, incorrect usage of a <code>div</code>
      </p>
      <dl>
        {Object.keys(listItems).map(key => (
          <React.Fragment key={key}>
            <dt>{key}</dt>
            <dd>{listItems[key]}</dd>
          </React.Fragment>
        ))}
      </dl>
    </Section>
    <Section>
      <h2>Accessible Forms</h2>
      <p>
        All form controls must be labled accessibly. You can implement this with
        the standard HTML practice, but React also gives you an{" "}
        <code>htmlFor</code> prop.
      </p>
      <Label htmlFor="namedInput">Name:</Label>
      <Input id="namedInput" type="text" name="name" />
    </Section>
    <Section>
      <h2>Focus Control</h2>
      <p>In React, we use refs to manage focus control.</p>
      <FocusControlDemo />
    </Section>
  </Page>
);

export { Accessibility };
