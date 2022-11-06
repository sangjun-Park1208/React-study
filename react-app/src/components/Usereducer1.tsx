import React, {useReducer, useState} from "react";

const ACTION_TYPES = {
    deposit: 'deposit',
    withdraw: 'withdraw'
}

// reducer : state 업데이트
// dispatch : state 업데이트를 위한 요구
// action : 요구 내용

// state 가 바뀔 때 렌더링

const reducer = (state: number, action:any) : number => { // state : reducer()가 불리는 시점에서의 money값,  action : 요구 내용
    console.log('redecer is working', state, action); // dispatch 함수의 인자값 == action

    switch(action.type){
        case ACTION_TYPES.deposit:
            return state + action.payload;
        case ACTION_TYPES.withdraw:
            return state - action.payload;
        default:
            return state;
    }

};

const Usereducer1 = () => {
    const [num, setNum] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0); // 두 번째 인자 : money의 초깃값
    return (
        <div>
            <h2>useReducer bank</h2>
            <p>잔고: {money}원</p>
            <input
                type='number'
                value={num}
                onChange={(e)=>setNum(parseInt(e.target.value))}
                step="1000"
            />
            <button onClick={()=>{
                dispatch({type: ACTION_TYPES.deposit, payload: num});
            }}>예금</button>

            <button onClick={()=>{
                dispatch({type: ACTION_TYPES.withdraw, payload: num})
            }}
            >출금</button>
        </div>
    )
};

export default Usereducer1;