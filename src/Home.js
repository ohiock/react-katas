import React from "react";
import { Page } from "./Page";
import { Link } from "react-router-dom";

const Home = () => (
  <Page title="React Katas">
    <p>
      There's a bunch of stuff in React that I rarely leverage, so this is an
      opportunity to practice using them.
    </p>
    <p>
      <Link to="/accessbility">Check it out</Link>
    </p>
  </Page>
);

export { Home };
