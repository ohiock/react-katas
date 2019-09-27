import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  width: 800px;
  margin: auto;
  padding-bottom: 10px;

  overflow: hidden;
`;

const PageHeader = styled.header`
  margin-top: 15px;
`;

const getPageNumber = path => path.split("/")[1];

const Page = ({ title, children }) => {
  document.title = title;

  let pageNumber = parseInt(getPageNumber(window.location.pathname));

  return (
    <PageContainer>
      <PageHeader>
        <h1>{title}</h1>
      </PageHeader>
      <div>{children}</div>
      <footer>
        {!!pageNumber && <Link to={`/${pageNumber - 1}`}>{`< Previous`}</Link>}
        <Link to={`/${pageNumber + 1}`}>{`Next >`}</Link>
      </footer>
    </PageContainer>
  );
};

export { Page };
