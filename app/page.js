"use client";

import styled from "styled-components";
import React, { useState } from "react";
import { ConverterInput } from "./ConverterInput";
import { Header } from "./Header";
import { Main } from "./Main";
import { Results } from "./Results";
import { HelpButton } from "./HelpButton";
import { ThemeSelector } from "./ThemeSelector";
import { SelectTheme } from "./SelectTheme";

const StyledDiv = styled.div`
  font-family: Arial, sans-serif;
  background-color: ${({ theme }) => theme.page};
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

const ThemeButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
    <ThemeSelector>
      <StyledDiv>
        <Header />
        <Main>
          <HelpButtonWrapper>
            <HelpButton />
          <ThemeButtonWrapper>
          <SelectTheme />
          </ThemeButtonWrapper>
          </HelpButtonWrapper>
          <ConverterInput updateResults={updateResults} />
          <Results result={result} />
          <PrivacyMessage> "We will not share or sell your data. It is only used for generating equivalent exercises."</PrivacyMessage>
        </Main>
      </StyledDiv>
    </ThemeSelector>
  );
}
