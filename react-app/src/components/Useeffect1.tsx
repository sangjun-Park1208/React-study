import React, {useState, useEffect} from "react";

function Useeffect1(){
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count+1);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    useEffect(() => {
        console.log('mount 될 때만 렌더링');
    }, []); // clean up
    // useEffect(() => {
    //     console.log('매번 렌더링!');
    // });
    // useEffect(() => {
    //     console.log('count 변경 시에만 렌더링!');
    // }, [count]);
    // useEffect(() => {
    //     console.log('name 변경 시에만 렌더링!');
    // }, [name]); 

    return (
        <div>
            <button onClick={handleCountUpdate}>Update</button>
            <span>count: {count}</span>
            <p></p>
            <input type={"text"} value={name} onChange={handleInputChange}/>
            <span>{name}</span>
        </div>
    )
}



export default Useeffect1;