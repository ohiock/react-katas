import React, { useState } from "react";
import { Page } from "./Page";
import { Button, Section } from "./Shared";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Shit's broke, yo");
  }

  render() {
    if (this.state.hasError) {
      return <p>Shit's broke, yo.</p>;
    }

    return this.props.children;
  }
}

class FailingComponent extends React.Component {
  render() {
    if (this.props.throwError) {
      throw new Error("It's broken!!1!ONE");
    }

    return (
      <p>
        This button is gonna break some stuff.
        <Button onClick={() => this.props.setThrowError(true)}>Break it</Button>
      </p>
    );
  }
}

const ErrorBoundaries = () => {
  const [throwError, setThrowError] = useState(false);

  return (
    <Page title="Error Boundaries">
      <Section>
        <p>
          "Error boundaries catch errors during rendering, in lifecycle methods,
          and in constructors of the whole tree below them."
        </p>
        <a
          href="https://reactjs.org/docs/error-boundaries.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Error Boundaries Docs
        </a>
      </Section>
      <Section>
        <h2>Error Boundaries and Hooks</h2>
        <p>
          Turns out this feature of React has not yet been implemented in hooks.
        </p>
        <a
          href="https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes"
          target="_blank"
          rel="noopener noreferrer"
        >
          See React Hooks FAQ for more info
        </a>
      </Section>
      <Section>
        <h2>Example</h2>
        <ErrorBoundary>
          <FailingComponent
            throwError={throwError}
            setThrowError={setThrowError}
          />
        </ErrorBoundary>
      </Section>
    </Page>
  );
};

export { ErrorBoundaries };
