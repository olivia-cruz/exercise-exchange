import styled from "styled-components";

const ResultSection = styled.section`
  width: 100%;
  text-align: center;
  padding: 20px;
  border-top: 2px solid #f0f0f0;
`;

const Result = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #0073e6;
`;

function Results() {
    return (
        <ResultSection>
            <h2>Equivalent Exercise</h2>
            <Result>{"result"}</Result>
        </ResultSection>
    );
}

export { Results };
