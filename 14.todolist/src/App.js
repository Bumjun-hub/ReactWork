import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useRef, useState } from 'react';


const tmpData = [

  {
    id: 0,
    isDone: false, // 체크박스 false 표시
    content: 'React 공부하기',
    date: new Date().getTime()
  },

  {
    id: 1,
    isDone: false, // 체크박스 false 표시
    content: '음악듣기',
    date: new Date().getTime()
  },
  {
    id: 2,
    isDone: false, // 체크박스 false 표시
    content: '게임하기',
    date: new Date().getTime()
  }
]

function App() {
  const [todos, setTodos] = useState(tmpData);

  /**
   * useRef()
    : 변하는값 저장(변경되는값)
      DOM 요소에 접근가능
      재랜더링 되지 않음
   */
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {

      id: idRef.current++,
      isDone: false, // 체크박스 false 표시
      content: content,
      date: new Date().getTime()
    }
    setTodos([newItem, ...todos]) // 위에서 임의로 저장한 todos 배열 전체를 저장
  }

  const onUpdate = (targetId) => {
    setTodos(todos.map((todo) => {
      if (todo.id == targetId) {
        return {
          ...todo,
          isDone: !todo.isDone

        }
      }
      return todo;
    })
    )
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter(todo => {
      if (todo.id === targetId && todo.isDone) {
        return false; // 체크된 애만 삭제
      }
      return true;
    }))
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />

    </div>
  );
}

export default App;
