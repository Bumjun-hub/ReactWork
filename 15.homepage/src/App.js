import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import plist from './data/productList';
import { Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Cart from './pages/Cart';
import Detail from './pages/Detail';

/*
  * react-router-dom
   : 페이지를 교체시켜주는 api -> router-dom

  * 사용하려면
   1. 설치 : npm i react-router-dom
   2. index.js에 <BrowserRouter>태그 넣어주기
*/


function App() {
  const [clothes, setClothes] = useState(plist);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
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
