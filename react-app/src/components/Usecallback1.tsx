import React, {useState, useCallback, useEffect} from "react";

const Usecallback1 = () => { // 콜백함수 그 자체를 메모이제이션 (함수를 새로 생성x)
    const [num, setNum] = useState(0);
    const [toggle, setToggle] = useState(true);

    const someFunc = useCallback(()=>{
        console.log(`someFunc: num: ${num}`);
        return;
    }, [num]);


    useEffect(()=>{
        console.log('someFunc 변경됨');
    }, [someFunc]);

    return (
        <div>
            <input
                type='number'
                value={num}
                onChange={(e)=>setNum(parseInt(e.target.value))}
            />
            <button onClick={()=>setToggle(!toggle)}>{toggle.toString()}</button>
            <br/>
            <button onClick={someFunc}>Call someFunc</button>
        </div>
    );
};

export default Usecallback1;