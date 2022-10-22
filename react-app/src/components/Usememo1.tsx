import React, {useState, useMemo} from "react";

const hardCalculate = (num: number) => {
    console.log("어려운 계산");
    for(let i=0; i<999999999; i++) {}
    return num+10000;
};

const easyCalculate = (num: number) => {
    console.log("쉬운 계산");
    return num+1;
};

const Usememo1 = () => {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    // const hardSum: number = hardCalculate(hardNumber);
    const hardSum: number = useMemo(()=>{
        return hardCalculate(hardNumber)
    }, [hardNumber]);
    
    const easySum: number = easyCalculate(easyNumber);

    return (
        <div>
            <h3>어려운 계산기</h3>
            <input
                type="number"
                value={hardNumber}
                onChange={(e)=>setHardNumber(parseInt(e.target.value))}
            />
            <span> + 10000 = {hardSum}</span>

            <h3>쉬운 계산기</h3>
            <input
                type="number"
                value={easyNumber}
                onChange={(e)=>setEasyNumber(parseInt(e.target.value))}
            />
            <span> + 1 = {easySum}</span>
        </div>
    )
}

export default Usememo1;