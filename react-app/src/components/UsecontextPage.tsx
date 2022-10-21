import React, {useContext} from "react";
import ThemeContext from "./context/ThemeContext";
import UsecontextContent from "./UsecontextContent";
import UsecontextFooter from "./UsecontextFooter";
import UsecontextHeader from "./UsecontextHeader";

type Props = {
    isDark: boolean;
    setIsDark: (dark: boolean) => void;
}

const UsecontextPage = () => {
    return (
        <div className="page">
            <UsecontextHeader />
            <UsecontextContent />
            <UsecontextFooter />
        </div>
    )
}

export default UsecontextPage;