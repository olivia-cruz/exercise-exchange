import { useState } from 'react';
import styled from 'styled-components';

const DurationInput = ({ onDurationChange, duration }) => {

  const handleDurationChange = (e) => {
    onDurationChange(e.target.value);
  };

  return (
    <StyledDiv>
      <StyledLabel>Time Duration (minutes):</StyledLabel>
      <StyledInput
        type="number"
        id="duration-input"
        value={duration}
        onChange={handleDurationChange}
      />
    </StyledDiv>
  );
};

// Styled Components
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  border: 3px solid #645554;
  font-size: 16px;
`;

export { DurationInput };
