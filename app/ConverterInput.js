import styled from "styled-components";
import React, { useEffect, useState } from "react";

import { DurationInput } from "./DurationInput";

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
`;
  
  const StyledSelect = styled.select`
  width: 50%;
  padding: 10px;
  border-radius: 5px;
  border: 3px solid #284b63;
  font-size: 16px;
  margin-bottom: 10px;
`;

const ConvertButton = styled.button`
  width: 15%;
  padding: 10px;
  border-radius: 5px;
  border: solid #353535;
  background-color: ${({ theme }) => theme.primary};
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.primary_hover};
    color: #ffffff;}
`;

const ResetButton = styled.button`
  width: 15%;
  padding: 10px;
  border-radius: 5px;
  border: solid #353535;
  background-color: ${({ theme }) => theme.secondary};
  color: #353535;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.secondary_hover};
  }
`;

const ButtonRow = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const options = [
    {value: "cycling", label: "Cycling"},
    {value: "running", label: "Running"},
    {value: "swimming", label: "Swimming"},
    {value: "walking", label: "Walking"}
];

function ConverterInput({ updateResults }) {
    const [firstExercise, setFirstExercise] = useState("cycling");
    const [comparisonExercise, setComparisonExercise] = useState("cycling");
    const [duration, setDuration] = useState("");
    const [exercises, setExercises] = useState({});

    useEffect(() => {
      fetch("http://localhost:5001/exercises")
        .then(response => response.json())
        .then(data => setExercises(data));
    }, [setExercises]);
  
    const handleDurationChange = (value) => {
      setDuration(value);
    };
  
    const convertExercise = async () => {
      const activity1Cph = exercises[firstExercise].calories_per_hour
      const activity2Cph = exercises[comparisonExercise].calories_per_hour
      try {
      const response = await fetch(`http://localhost:5050/conversions?activity1_cph=${activity1Cph}&activity2_cph=${activity2Cph}&duration=${duration}`)
      const conversion = await response.json();
      const resultMessage = `
        ${duration} minutes of ${firstExercise} burns ${conversion.activity1} calories.  
        ${duration} minutes of ${comparisonExercise} burns ${conversion.activity2} calories. 
      `
      updateResults(resultMessage);
      } catch (err) {
        console.log(err);
      }
    };
  
    const resetForm = () => {
      setFirstExercise("biking");
      setComparisonExercise("biking");
      setDuration("");
      updateResults(""); // Clear results
    };
  
    return (
      <StyledSection>
        <StyledLabel htmlFor="first-exercise-input">
          Select the first exercise:
        </StyledLabel>
        <StyledSelect
          id="first-exercise-input"
          name="first-exercise-input"
          value={firstExercise}
          onChange={(e) => setFirstExercise(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <StyledLabel htmlFor="comparison-exercise-input">
          Select the exercise you want to compare:
        </StyledLabel>
        <StyledSelect
          id="comparison-exercise-input"
          name="comparison-exercise-input"
          value={comparisonExercise}
          onChange={(e) => setComparisonExercise(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <DurationInput onDurationChange={handleDurationChange} duration={duration} />

        <ButtonRow>
          <ConvertButton onClick={convertExercise}>Convert</ConvertButton>
          <ResetButton onClick={resetForm}>Click to Start Over</ResetButton>
        </ButtonRow>
      </StyledSection>
    );
  }
  
  export { ConverterInput };
