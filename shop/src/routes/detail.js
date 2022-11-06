// import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

// let Btn = styled.button`
//   background: ${ props => props.bg };
//   color: ${ props => props.bg == 'blue' ? 'white' : 'black'};
//   padding: 10px;
// `

function Detail(props) {
  let [isValid, setisValid] = useState(true);
  let [inputVal, setInputVal] = useState('');
  useEffect(()=>{
    let timer = setTimeout(()=>{
      setisValid(false);
    }, 2000);
    return ()=>{
      // useEffect 동작 전에 실행되는 코드 부분
      // clean up function 
      // -> ex) 기존 타이머 제거 or 기존 데이터 요청 제거
      clearTimeout(timer);
    }
  }, []); // 렌더링 이후에 실행됨. 서버에서 데이터 가져오는 작업. 타이머 장착 등
  // Side Effect 코드들 

  useEffect(()=>{
    if(isNaN(inputVal)) alert('그거 숫자 아님');
  }, [inputVal]);


  let {id} = useParams();
  let item = props.items.find((x)=>x.id==id);
  
  return (
      <>
        <div className='col-md-4'>
          {/* <Btn bg='blue'>파란버튼</Btn>
          <Btn bg='orange'>오렌지버튼</Btn> */}
          { isValid &&
            (<div className="alert alert-warning">
              2초 이내 구매시 할인
            </div>)
          }

          <img 
            src={`https://codingapple1.github.io/shop/shoes${+item.id+1}.jpg`} 
            width="100%" 
          />
          <h4>{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}원</p>
          <input onChange={(e)=>{
              setInputVal(e.target.value);
              console.log('input', inputVal);
            }}
          />
          <Button>주문하기</Button>
        </div>
      </>
  );
}

export default Detail;
