import styled from "styled-components";
import React, { useState } from "react";

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
  width: 10%;
  padding: 10px;
  border-radius: 5px;
  border: solid #353535;
  background-color: #284b63;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #3c6e71;
    color: #ffffff;}
`;

const ResetButton = styled.button`
  width: 30%;
  padding: 10px;
  border-radius: 5px;
  border: solid #353535;
  background-color: #f4d35e;
  color: #353535;
  font-size: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: center;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;

  &:hover {
    background-color: #3c6e71;
    color: #ffffff;
  }
`;

const ButtonRow = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const options = [
    {value: "biking", label: "Biking"},
    {value: "running", label: "Running"},
    {value: "swimming", label: "Swimming"}
];

function ConverterInput({ updateResults }) {
    const [firstExercise, setFirstExercise] = useState("biking");
    const [comparisonExercise, setComparisonExercise] = useState("biking");
    const [duration, setDuration] = useState("");
  
    const handleDurationChange = (e) => {
      setDuration(e.target.value);
    };
  
    const convertExercise = () => {
      if (firstExercise === "biking" && comparisonExercise === "swimming") {
        updateResults(`Swimming for ${duration}`);
      } else {
        updateResults("Unknown exercise conversion");
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
        <DurationInput value={duration} onDurationChange={handleDurationChange} />

        {/* <DurationInput onDurationChange={(e) => setDuration(e)} /> */}
        <ButtonRow>
          {/* <ConvertButton onClick={convertExercise}>Convert</ConvertButton> */}
          <ResetButton onClick={resetForm}>Click to Start Over</ResetButton>
        </ButtonRow>
      </StyledSection>
    );
  }
  
  export { ConverterInput };

// function ConverterInput() {
//     return (
//         <StyledSection>
//             <StyledLabel htmlFor="exercise-input">Select the first exercise:</StyledLabel>
//             <StyledSelect
//             //   type="text"
//             id="exercise-input"
//             name="exercise-input"
//             //   placeholder="e.g., Running 2 miles"
//             defaultValue={"biking"}
//             >
//                 {options.map((option) => (
//                     <option value={option.value}>{option.label}</option>
//                 ))}
//             </StyledSelect>
//             <StyledLabel htmlFor="exercise-input">Select the exercise you want to compare:</StyledLabel>
//             <StyledSelect
//             //   type="text"
//             id="exercise-input"
//             name="exercise-input"
//             //   placeholder="e.g., Running 2 miles"
//             defaultValue={"biking"}
//             >
//                 {options.map((option) => (
//                     <option value={option.value}>{option.label}</option>
//                 ))}
//             </StyledSelect>
//             <DurationInput onDurationChange={(e) => { console.log(e) }}/>
//             {/* <ConvertButton onClick={() => {}}>Convert</ConvertButton> */}
//         </StyledSection>
//     )
// }

// export { ConverterInput };
