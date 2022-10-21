import React, {useContext} from "react";
import ThemeContext from "./context/ThemeContext";
import UserContext from "./context/UserContext";

type Props = {
    isDark: boolean;
}

type Props1 = {
    name: string
}

const UsecontextHeader = () => {
    const {isDark} = useContext(ThemeContext);
    const user: Props1 | JSX.Element = useContext(UserContext);
    
    return(
        <header
            className="header"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'while' : 'black',
            }}
        >
            <>
                Welcome {user}!
            </>
        </header>
    );
};

export default UsecontextHeader;