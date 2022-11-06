import { type } from "@testing-library/user-event/dist/type";
import React, {useReducer, useState} from "react";
import Student from "./Student";

const INITIAL_STATE = {
    count: 0,
    students: [
        {
            id: Date.now(),
            name: 'James',
            isHere: false
        }
    ]
}

const reducer = (state: any, action: any): any=> {

}



const Usereducer2 = () => {
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, INITIAL_STATE);
    
    return (
        <div>
            <h2>명단</h2>
            <p>총 학생 수: {studentsInfo.count}</p>
            <input
                type='text'
                value={name}
                placeholder="이름을 입력 해 주세요"
                onChange={(e)=>setName(e.target.value)}
            />
            <button>추가</button>
            {studentsInfo.students.map((student: any) => {
                return (<Student key={student.id} name={student.name}/>);
            })}
        </div>
    )
};

export default Usereducer2;