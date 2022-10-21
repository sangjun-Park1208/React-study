import React, {useState} from 'react';

const heavyWork = () => {
  console.log('무거운 작업');
  return ['홍길동', '박상준'];
}


function Usestate() {
  const [names, setNames] = useState(()=>{
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }
  console.log(input);

  const handleUpload = () => {
    setNames((prevState)=>{
      console.log("이전 상태: ", prevState);
      return [input, ...prevState];
    });
  }

  return (
    <div className="App">
      <input type="text" value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx)=>{
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default Usestate;
