import { useState } from 'react';
import styled from 'styled-components';

const DurationInput = ({ onDurationChange, duration }) => {

  const handleDurationChange = (e) => {
    onDurationChange(e.target.value);
  };

  return (
    <StyledDiv>
      <StyledLabel>Time Duration (minutes):</StyledLabel>
      <InputWrapper>
        <StyledInput
          type="number"
          id="duration-input"
          value={duration}
          onChange={handleDurationChange}
        />
        <PlaceholderText>minutes</PlaceholderText>
      </InputWrapper>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 200px;
`;

const StyledInput = styled.input`
  width: 225px;
  padding: 10px 10px 10px 40px;
  border-radius: 50px;
  border: 3px solid #284b63;
  box-sizing: border-box;
  font-size: 20px;
`;

const PlaceholderText = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #aaa;
  pointer-events: none;
`;

export { DurationInput };
