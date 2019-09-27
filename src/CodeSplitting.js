import React, { useState, Suspense } from "react";
import { Link } from "react-router-dom";
import { Page } from "./Page";
import { Button, Section } from "./Shared";

const CodeSplitting = () => {
  const [showComponent, setShowComponent] = useState(false);

  const loadStuff = () => {
    import("./StuffToLoad").then(({ doAThing }) => {
      doAThing();
    });
  };

  const LoadedComponent = React.lazy(() => import("./ComponentToLoad"));

  return (
    <Page title="Code Splitting">
      <Section>
        <p>
          "Code-splitting your app can help you 'lazy-load' just the things that
          are currently needed by the user, which can dramatically improve the
          performance of your app."
        </p>
        <a
          href="https://reactjs.org/docs/code-splitting.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Code Splitting Docs
        </a>
      </Section>
      <Section>
        <h2>import()</h2>
        <p>
          Modules can be dynamically imported using <code>import()</code>.
          <Button onClick={loadStuff}>Load some stuff!</Button>
        </p>
      </Section>
      <Section>
        <h2>React.lazy()</h2>
        <p>
          <code>React.lazy()</code> takes this to another level with dynamic
          components.
          <Button onClick={() => setShowComponent(!showComponent)}>
            {!showComponent ? "Load a component!" : "Hide the component"}
          </Button>
        </p>
        {showComponent && (
          <Suspense fallback={<div>Loading...</div>}>
            <LoadedComponent />
          </Suspense>
        )}
      </Section>
      <Section>
        <h2>Route Based Code Splitting</h2>
        <p>
          A common usage of code splitting is by route. If a user never
          navigates to certain parts of your app, you don't need to bother
          loading the files to render it.
        </p>
        <p>
          <Link to="/2/route-code-splitting">Test lazy route</Link>
        </p>
      </Section>
    </Page>
  );
};

export { CodeSplitting };
