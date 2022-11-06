import {Outlet} from 'react-router-dom'
function About() {
    return (
        <div>
            <div>회사 정보</div>
            <Outlet></Outlet>
        </div>
    );
  }
  
  export default About;
  