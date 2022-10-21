import React, {useEffect} from "react";

function Useeffect2(){

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('타이머 돌아가는 중');
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log('타이머 종료');
        } // useEffect의 리턴값으로 콜백함수 넣어서 타이머 종료
    }, [])

    return (
        <div>
            <span>타이머시작. 콘솔확인</span>
        </div>
    )
}

export default Useeffect2;