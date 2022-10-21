import React, {useEffect, useRef, useState} from "react";

function Useref3(){ // input element focusing하기
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        console.log(inputRef);
        inputRef.current?.focus();
    }, []);

    const popAlert = () => {
        alert(`입력한 값 : ${inputRef.current?.value}`);
        inputRef.current?.focus();
    }

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="username"/>
            <button onClick={popAlert}>로그인</button>
        </div>
    );
}

export default Useref3;