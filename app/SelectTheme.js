import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { ThemeContext } from './ThemeContext';
import { normal } from "./defaultTheme";

const StyledSelect = styled.select`
    padding: 8px 16px;
    border: solid;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.primary};
    color: #ffffff;
    // cursor: pointer;
    font-size: 14px;

    &:hover {
        background-color: ${({ theme }) => theme.primary_hover};
    }
`

function SelectTheme() {
    const [selected, setSelected] = useState("");
    const [themes, setThemes] = useState(normal);
    const { handleThemeChange } = useContext(ThemeContext);

    const handleChange = (e) => {
        const name = e.target.value;
        const selectedTheme = getTheme(name);
        setSelected(name);
        handleThemeChange(selectedTheme);
    };

    useEffect(() => {
        fetch("http://localhost:5002/themes")
            .then(response => response.json())
            .then(data => setThemes({
                normal,
                ...data
            }));
    }, [setThemes])

    const getTheme = (themeName) => {
        return themes[themeName];
    }

    return (
        <StyledSelect
            value={selected}
            onChange={handleChange}
        >
            <option value=""disabled hidden> Select a theme</option>
            <option value="normal">Normal</option>
            <option value="dark">Dark</option>
            <option value="warm">Warm</option>
            <option value="fun">Fun</option>
        </StyledSelect>
    );
}

export { SelectTheme };
