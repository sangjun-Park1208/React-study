import React, {useState, useRef} from "react";
function Useref1(){ // ref 사용법
    const [count, setCount] = useState(0); 
    const countRef = useRef(0);

    console.log(countRef);
    const increaseCountState = () => {
        setCount(count+1);
    };

    const increaseRefState = () => {
        countRef.current = countRef.current + 1;
        console.log('Ref: ', countRef.current);
    }

    return (
        <div>
            <p>State: {count}</p>
            <p>Ref: {countRef.current}</p>
            <button onClick={increaseCountState}>State up</button>
            <button onClick={increaseRefState}>Ref up</button> 
        </div>
    )
}
// ref : state와 마찬가지로 저장공간의 역할을 함
// state 변화 -> 렌더링 -> 컴포넌트 내부 변수 초기화 (원치않는 렌더링 발생 가능)
// ref 변화 -> no 렌더링 -> 변수 값 유지 (변경 시 바뀌면 안 되는 값들 저장할때 유용)

// 다시 렌더링 된다 == Useref1() 함수가 매번 불려진다


// ref에서 DOM 요소 접근 가능 
export default Useref1;