import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import { getEmotionImg } from './util/emotion-img';
import { createContext, useReducer, useRef } from 'react';



const mockData = [
  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: "1번내용 일기"
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 2,
    content: "2번내용 일기"
  }
]

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      )
    case "DELETE":
      return state.filter((item) => String(item.id) != String(action.id))
  }
}

const DiaryStateContext = createContext(); // 상태 저장용
const DiaryDispathContext = createContext(); // dispath(액션처리용)

function App() {
  /**
    useReducer() :상태관리, 상태 업데이트를 해주는 훅
   */

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createDate,
        emotionId,
        content
      }
    })
  }

  // 일기 Updates
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createDate,
        emotionId,
        content
      }
    })
  }

  //일기 delete
  const onDelete = id => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  /*
     * createContext() : 전역상태를 공유하여 관리
   */



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




      <DiaryStateContext.Provider value={data}>
        <DiaryDispathContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/new' element={<New />}></Route>
            <Route path='/detail' element={<Detail />}></Route>
            <Route path='/edit' element={<Edit />}></Route>
          </Routes>
        </DiaryDispathContext.Provider>
      </DiaryStateContext.Provider><br />

      <button className='btn' onClick={() => {
        onCreate(new Date().getTime(), 3, "Hello")
        console.log(data);
      }}>일기 추가</button>
      <button className='btn' onClick={() => {
        onUpdate(1, new Date().getTime(), 3, "수정된 일기 입니다")
      }}>일기 수정</button>

      <button className='btn' onClick={() => {
        onDelete(1)
        console.log(data);
      }}>일기 삭제</button>

    </div>

  );
}

export default App;
