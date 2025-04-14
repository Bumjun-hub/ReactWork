import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import { getEmotionImg } from './util/emotion-img';
import Button from './components/Button';

function App() {

  let navigate = useNavigate();
  return (


    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>

          <Navbar.Brand onClick={() => navigate('/')}>Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">


            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/new') }}>New</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/edit') }}>Edit</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
      <div>
        <img src={getEmotionImg(1)} />
        <img src={getEmotionImg(2)} />
        <img src={getEmotionImg(3)} />
        <img src={getEmotionImg(4)} />
        <img src={getEmotionImg(5)} />
        <img src={getEmotionImg(6)} />
        <img src={getEmotionImg(7)} />
      </div>

      <Button text={"일반버튼"}
        onClick={() => console.log("일반버튼 클릭")}
      />

      <Button text={"빨간버튼"} type="red"
        onClick={() => console.log("빨간버튼 클릭")}
      />

      <Button text={"초록버튼"} type="green"
        onClick={() => console.log("초록버튼 클릭")}
      />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/new' element={<New />}></Route>
        <Route path='/detail' element={<Detail />}></Route>
        <Route path='/edit' element={<Edit />}></Route>
      </Routes><br />
      <Button />
    </div>
  );
}

export default App;
