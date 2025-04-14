import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row, Col, Nav, Navbar,Button } from 'react-bootstrap';
import './App.css';
import plist from './data/productList';
import { Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import axios from 'axios';

/**
 
/*  
  * SPA의 단점
    - 컴포넌트간의 STATE공유 어려움

  * 공유저장 공간 사용
    1. Context Api : 기본 탑재되어 있음
       잘 안쓰는 이유 : 성능 이슈(하나만 변해도 하위의 모든것들을 재랜더링)
                       재사용이 어렵다
    2. Redux : 외부 라이브러리
       주로 사용

       설치하기 : npm install @reduxjs/toolkit react-redux
*/


function App() {
 /*
  // [object Object]의 문자열로 들어감 쓸 수 없음
  let obj = {addr : '강남구'}
  localStorage.setItem('addr', obj);
  */

  // JSON으로 모두 문자열로 변환하여 넣는다
  let obj = {addr : '강남구'}
  let addr = JSON.stringify(obj)
  localStorage.setItem('addr', addr);

  let user = {
    name: 'kim',
    age : 25,
    hobbies : ['programing', 'gaming']
  }
  localStorage.setItem('user', JSON.stringify(user))

  // 가져올 때 json의 형태로 들어옴
  let getUser = localStorage.getItem('user');
  console.log(getUser)
  console.log(getUser.name)  // 사용못함

  // 가져올 때 json -> object 형태로 변환
  let storageUser = localStorage.getItem('user');
  let u = JSON.parse(storageUser) // object로 변경
  console.log(u.name)

  // 문. 최근에 본 상품 보여주기
  useEffect(() => {
    localStorage.setItem('recentProduct', JSON.stringify( [] ))
  },[])



  const [clothes, setClothes] = useState(plist);
  const [clickCount, setClickCount] = useState(2);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* -------------------------------------------- */}

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'>
              <img src={`${process.env.PUBLIC_URL}/images/img01.jpg`} alt="쇼핑몰 배너" className="banner" />
            </div>
            <div className="containerimg">
              <Container>
                <Row>
                  {
                    clothes.map((v, i) => {
                      return (
                        <ListColumn clothes={v} key={i} />
                      )
                    })
                  }
                </Row>
              </Container>
              <Button variant="outline-warning" onClick={() => {
                axios.get(`https://raw.githubusercontent.com/professorjiwon/data/refs/heads/main/data${clickCount}.json`)
                  .then((result) => {
                    console.log(result);
                    console.log(result.data);
                    setClothes([...clothes, ...result.data])
                    setClickCount(clickCount + 1);
                  })
                  .catch(() => {
                    console.log('데이터 가져오기 실패');
                    alert('더이상 상품이 없습니다');
                  })
              }}>서버에서 데이터 가져오기</Button>
            </div>
          </>
        } />
        <Route path='/detail/:pid' element={<Detail clothes={clothes} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>

  );
}

function ListColumn(props) {
  let navigate = useNavigate();
  return (
    <>
      <Col>
        <img src={`${process.env.PUBLIC_URL}/images/img0${props.clothes.id + 1}.jpg`} width="75%"
          onClick={() => navigate(`/detail/${props.clothes.id - 1}`)} />
        <h4>{props.clothes.title}</h4>
        <p>{props.clothes.price}</p>
      </Col>
    </>






  );
}

export default App;
