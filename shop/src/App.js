import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet, NavLink } from 'react-router-dom';
import Detail from './routes/detail';
import Mypage from './routes/mypage';
import About from './routes/about';
import Match from './routes/match';
import Member from './routes/member';
import Location from './routes/location';
import data from './routes/data.js';
import Items from './routes/items.js'

function App() {
  let navigate = useNavigate();
  let [items, setItems] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Hibit</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {
              navigate('/items');
            }}>상품목록</Nav.Link>

            <Nav.Link onClick={() => {
              navigate('/mypage');
            }}>마이페이지</Nav.Link>

            <Nav.Link onClick={() => {
              navigate('/match');
            }}>매칭</Nav.Link>

            <Nav.Link onClick={() => {
              navigate('/about');
            }}>회사 소개</Nav.Link>
          </Nav>

        </Container>
      </Navbar>

      <img src='/img/bg.png'/>


      <Routes>
        <Route path='/' element={<div>메인 페이지</div>}/>
        <Route path='/items' element={<Items items={items}/>}/>
        <Route path='/items/:id' element={<Detail items={items}/>}/>
        <Route path='/mypage' element={<Mypage></Mypage>}/>
        <Route path='/match' element={<Match></Match>}/>
        <Route path='/about' element={<About></About>}>
          <Route path='member' element={<Member></Member>}/>
          <Route path='location' element={<Location></Location>}/>
        </Route>
        <Route path='*' element={<div>404 없는 페이지임</div>}/>
        <Route path='/exhibit'/>
      </Routes>

    </div>
  );
}


export default App;
