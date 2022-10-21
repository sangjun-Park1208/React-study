import React, {useContext, useState} from "react";
import UsecontextPage from "./UsecontextPage";

const Props = (
    isDark: boolean,
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>
);

function Usecontext1(){ // 단순히 pror drilling을 피하기 위함이라면
                        // 차라리 Component composition을 먼저 고려 하자(react document)

    const [isDark, setIsDark] = useState<boolean>(false);
    return <UsecontextPage isDark={isDark} setIsDark={setIsDark}/>
}

export default Usecontext1;