import styled from "styled-components";

const Main = styled.main`
  width: 50%;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.main};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Main }