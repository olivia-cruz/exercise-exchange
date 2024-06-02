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

const Quote = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 20px;
`;

function Results() {
    return (
        <ResultSection>
            <h2>Excercise Exchange</h2>
            <Result>A result</Result>
            <Quote>A quote</Quote> {/* Display the fetched quote here */}
        </ResultSection>
    );
}

export { Results };
