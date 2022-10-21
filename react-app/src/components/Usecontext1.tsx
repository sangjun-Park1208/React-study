import React, {useContext, useState, Dispatch} from "react";
import UsecontextPage from "./UsecontextPage";
import ThemeContext from "./context/ThemeContext";
import UserContext from "./context/UserContext";

type Props = {
    name: string
}

const userVal: Props = {
    name: '사용자'
}

const Usecontext1 = () => { // 단순히 pror drilling을 피하기 위함이라면
                        // 차라리 Component composition을 먼저 고려 하자(react document)

    const [isDark, setIsDark] = useState(false);
    return (
        <UserContext.Provider value={userVal}>
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
                <UsecontextPage />
            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}

export default Usecontext1;