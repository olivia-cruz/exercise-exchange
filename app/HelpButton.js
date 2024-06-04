import { useState } from 'react';
import styled from 'styled-components';

const HelpButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleTooltip = () => {
    setVisible(!visible);
  };

  return (
    <Wrapper>
        <Button onClick={toggleTooltip}>Help</Button>
      {visible && (
        <Tooltip>
            <h4>How to Use the Converter</h4>
            <ol type="1">
                <li>Select the first exercise.</li>
                <li>Select the exercise to compare.</li>
                <li>Input the time duration as minutes.</li>
                <li>Click "Convert" to see the equivalent exercise.</li>
            </ol>
            <CloseButton onClick={toggleTooltip}>Close</CloseButton>
        </Tooltip>
      )}
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: solid;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.secondary};
  color: #353535;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.secondary_hover};
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 220px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 12px;
  z-index: 10;

  h4 {
    margin-top: 0;
  }

  ul {
    margin: 0;
    padding-left: 16px;
  }

  li {
    margin-bottom: 4px;
  }
`;

const CloseButton = styled.button`
  padding: 6px 12px;
  margin-top: 8px;
  border: none;
  border-radius: 4px;
  background-color: #284b63;
  color: #ffffff;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #005bb5;
  }
`;

export { HelpButton };
