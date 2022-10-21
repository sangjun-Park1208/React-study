import React, {useState} from "react";
import { PageType } from "./Usecontext1";
import UsecontextContent from "./UsecontextContent";
import UsecontextFooter from "./UsecontextFooter";
import UsecontextHeader from "./UsecontextHeader";

const UsecontextPage = ({isDark}: {isDark : boolean}, {setIsDark}: {setIsDark:any}) => {
    return (
        <div className="page">
            <UsecontextHeader isDark={isDark}/>
            <UsecontextContent isDark={isDark}/>
            <UsecontextFooter isDark={isDark}/>
        </div>
    )
}

export default UsecontextPage;