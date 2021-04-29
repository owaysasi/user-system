import React, { useState } from 'react';

export const ThemeContext = React.createContext();

function ThemeProvider(Props){
    const [theme, setTheme] = useState("light");

    function toggleTheme(){
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return(
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {Props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;