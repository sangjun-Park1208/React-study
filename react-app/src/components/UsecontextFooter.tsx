import React from "react";

const UsecontextFooter = ({isDark, setIsDark}) => {
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
                Dark Mode;
            </button>

        </footer>
    )
}

export default UsecontextFooter;