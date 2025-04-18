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
import Update from './pages/update';



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
      <DiaryStateContext.Provider value={data}>
        <DiaryDispathContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/new' element={<New />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
            <Route path='/edit' element={<Edit />}></Route>
            <Route path='/update/:id' element={<Update/>}></Route>
          </Routes>
        </DiaryDispathContext.Provider>
      </DiaryStateContext.Provider><br />
    </div>

  );
}

export default App;
export { DiaryStateContext, DiaryDispathContext };