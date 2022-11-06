import { Route, useNavigate } from "react-router-dom";
import Detail from "./detail";

function Items(props) {
    let navigate = useNavigate();
  return (
    <>
        <div className='row'>
            {
                props.items.map((d, i)=>{
                    return (
                        <div className='col-md-4' onClick={()=>{
                            navigate("/items/" + i);
                        }}>
                            <img 
                                src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`}
                                width="80%"
                            />
                            <h4>{props.items[i].title}</h4>
                            <p>{props.items[i].content}</p>
                        </div>
                    );
                })
            }
        </div>
    </>
  );
}

export default Items;
