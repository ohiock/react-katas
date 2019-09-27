import styled from "styled-components";

const Section = styled.section`
  margin-bottom: 35px;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 5px 10px;

  border: none;
  border-radius: 5px;
  background: #f9dd5d;

  &:active {
    background: #00253e;
    color: #ffffff;
  }
`;

export { Section, Button };
