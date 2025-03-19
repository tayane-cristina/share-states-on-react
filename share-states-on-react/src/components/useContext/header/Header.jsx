import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../createContextTest';

const Header = () => {

    const { theme, togglerTheme } = useContext(ThemeContext);

return(
    <header
    style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
     >
        <h2>Challenges</h2>
        <button onClick={togglerTheme}>{theme}</button>
    </header>
)
}
export default Header;