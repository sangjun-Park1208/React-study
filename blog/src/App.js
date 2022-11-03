import { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [count, setCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  let logo = 'React Blog'
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'pink', fontSize: '16px'}}>
          {logo}
        </h4>
      </div>

      <button onClick={() => setTitle([...title.sort()])}>가나다순 정렬</button>

      <button onClick={()=>{
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        setTitle([...copy]);
        }}>글 수정</button>


      {
        title.map((d, i)=>{
          return (
            <div className="list" key={i}>
              <h4 onClick={() => setModal(!modal)}>
                { title[i] }
                <button onClick={() => {
                  let tmpCnt = count;
                  tmpCnt[i] = tmpCnt[i] + 1;
                  setCount([...tmpCnt]);
                  }}>👍</button> {count[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          );
        })
      }

      {
        modal? <Modal setTitle={setTitle} title={title}/> : null
      }
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.title}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={()=>{
        let copy = [...props.title];
        copy[0] = '여자 코트 추천';
        props.setTitle([...copy]);
      }}>글 수정</button>
    </div>
  );
}

export default App;
