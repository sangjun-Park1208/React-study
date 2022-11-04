import { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [count, setCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState('');
  let [inputVal, setInputVal] = useState('');

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
              <h4 onClick={() => {
                setModal(true);
                setModalTitle(title[i]);
              }}>
                { title[i] }
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    let tmpCnt = count;
                    tmpCnt[i] = tmpCnt[i] + 1;
                    setCount([...tmpCnt]);
                  }}
                >
                  👍
                </button> {count[i]} 
                <button 
                  onClick={(e)=>{
                    let copy = [...title];
                    copy.splice(i, 1);
                    setTitle([...copy])
                  }}
                >X</button>
              </h4>
              <p>2월 17일 발행</p>
            </div>
          );
        })
      }

      <input
        onChange={(e)=>{
          setInputVal(e.target.value);
          console.log(inputVal);
        }}
      />
      <button 
        onClick={()=>{
          setTitle([inputVal, ...title]);
        }}
      >글 발행하기</button>

      {/* <select></select>
      <textarea></textarea> */}

      {
        modal? <Modal setTitle={setTitle} title={title} modalTitle={modalTitle}/> : null
      }
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.modalTitle}</h4>
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
