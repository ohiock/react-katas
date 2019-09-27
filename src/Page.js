import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 800px;
  margin: auto;

  overflow: hidden;
`;

const PageHeader = styled.header`
  margin: 25px 0;
`;

const PageContent = styled.div``;

const Page = ({ title, children }) => (
  <PageContainer>
    <PageHeader>
      <h1>{title}</h1>
    </PageHeader>
    <PageContent>{children}</PageContent>
  </PageContainer>
);

export { Page };
