import React, {useState, useMemo, useEffect} from "react";

const Usememo2 = () => {
    const [num, setNum] = useState(0);
    const [isKorea, setIsKorea] = useState(true);
    // const location: string = isKorea ? '한국' : '외국';
    // const location = { // object -> 새로 생성됨 -> 다시 렌더링
    //     country: isKorea ? '한국' : '외국'
    // }

    const location = useMemo(()=>{
        return {
            country: isKorea? '한국' : '외국'
        }
    }, [isKorea])


    useEffect(()=>{
        console.log('useEffect 호출');
    }, [location]);

    return (
        <div>
            <h2>숫자 증감</h2>
            <input
                type='number'
                value={num}
                onChange={(e)=>setNum(parseInt(e.target.value))}
            />
            <hr/>
            <h2>한국? 외국?</h2>
            <p>나라: {location.country}</p>
            <button onClick={()=>setIsKorea(!isKorea)}>비행기 타자</button>
        </div>
    );
};

export default Usememo2;