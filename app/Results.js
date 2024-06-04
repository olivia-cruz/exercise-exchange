import { useEffect, useState } from "react";
import styled from "styled-components";

const ResultSection = styled.section`
  width: 100%;
  text-align: center;
  padding: 20px;
  border-top: 2px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Result = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #0073e6;
  background-color: #f0f0f0;
  align-items: flex;
  border: solid #f4d35e;
`;

const Quote = styled.p`
  font-size: 25px;
  color: #284b63;
  font-weight: bold;
  width: flex;
  margin-top: 30px;
  margin-bottom: 0px;
  font-family: Lucida Handwriting, cursive;
  align-items: flex;
`;

function Results({ result }) {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("/api/quotes")
      .then(response => response.json())
      .then(({ quote }) => setQuote(quote))
      .catch((err) =>  {
        console.log(err)
        setQuote("No quote today.  Have fun!")
    });
  }, [setQuote])

  return (
      <ResultSection>
          <h2>Results</h2>
          <Result>{result}</Result>
          <Quote>{quote}</Quote>
      </ResultSection>
  );
}

export { Results };
