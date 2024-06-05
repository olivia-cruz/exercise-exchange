import styled from "styled-components";

const StyledHeadeer =  styled.header`
    width: 100%;
    font-family: Monaco, monospace;
    background-color: ${({ theme }) => theme.header};
    color: #ffffff;
    text-align: center;
    font-size: 27px; 
    padding: 0px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function Header() {
    return (
        <StyledHeadeer>
            <h1>Exercise Exchange</h1>
        </StyledHeadeer>
    )
}

export { Header };