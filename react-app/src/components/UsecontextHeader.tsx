import React from "react";

const UsecontextHeader = ({isDark}) => {
    return(
        <header
            className="header"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'while' : 'black',
            }}
        >
            <h1>Welcom 홍길동!</h1>
        </header>
    );
};

export default UsecontextHeader;