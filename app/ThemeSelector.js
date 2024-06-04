import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { ThemeContext } from "./ThemeContext";
import { normal } from "./defaultTheme";

function ThemeSelector({ children }) {
    const [theme, setTheme] = useState(normal);
    const handleThemeChange = (value) => {
        setTheme(value);
    } ;

    return (
        <ThemeContext.Provider value={{ theme, handleThemeChange }}>
            <ThemeProvider theme={theme} changeTheme={handleThemeChange}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
}

export { ThemeSelector };
