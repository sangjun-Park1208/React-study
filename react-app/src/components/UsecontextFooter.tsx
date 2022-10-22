import React, {useContext} from "react";
import ThemeContext from "./context/ThemeContext";

type Props = {
    isDark: boolean;
    setIsDark: (dark: boolean) => void;
}

const UsecontextFooter = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <footer
            className="footer"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
            }}
        >
            <button className="button" onClick={toggleTheme}>
                Dark Mode
            </button>

        </footer>
    )
}

export default UsecontextFooter;