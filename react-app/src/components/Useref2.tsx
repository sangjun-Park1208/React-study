import React, {useRef, useState} from "react";
function Useref2(){ // ref와 변수의 차이
    const [renderer, setRenderer] = useState(0);
    const countRef = useRef(0);
    let countVal = 0;

    const rendering = () => {
        setRenderer(renderer+1); // 함수 불릴 때마다 변수 초기화됨
    }

    const increaseRef = () => {
        countRef.current = countRef.current+1;
        console.log('Ref: ', countRef.current);
    }

    const increaseVal = () => {
        countVal++;
        console.log('Val: ', countVal);
    }
    // 둘 다 렌더링 안 됨

    return (
        <div>
            <p>Ref: {countRef.current}</p>
            <p>Val: {countVal}</p>
            <button onClick={increaseRef}>Ref up</button>
            <button onClick={increaseVal}>Val up</button>
            <button onClick={rendering}>Render</button>
        </div>
    )
}

export default Useref2;