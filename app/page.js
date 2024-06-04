"use client";

import styled from "styled-components";
import React, { useState } from "react";
import { ConverterInput } from "./ConverterInput";
import { Header } from "./Header";
import { Main } from "./Main";
import { Results } from "./Results";
import { HelpButton } from "./HelpButton";

const StyledDiv = styled.div`
  font-family: Arial, sans-serif;
  background-color: #3c6e71;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HelpButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

const PrivacyMessage = styled.p`
  color: #353535;
  font-size: 14px;
  margin-top: 10px;
`;

export default function Home() {
  const [result, setResult] = useState("");

  const updateResults = (value) => {
    setResult(value);
  };

  return (
    <StyledDiv>
      <Header />
      <Main>
        <HelpButtonWrapper>
          <HelpButton />
        </HelpButtonWrapper>
        <ConverterInput updateResults={updateResults} />
        <Results result={result} />
        <PrivacyMessage> "We will not share or sell your data. It is only used for generating equivalent exercises."</PrivacyMessage>
      </Main>
    </StyledDiv>
  );
}
