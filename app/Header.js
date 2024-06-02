import styled from "styled-components";

const StyledHeadeer =  styled.header`
    width: 100%;
    background-color: #353535;
    color: #ffffff;
    text-align: center;
    padding: 20px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function Header() {
    return (
        <StyledHeadeer>
            <h1>Excercise Exchange</h1>
        </StyledHeadeer>
    )
}

export { Header };