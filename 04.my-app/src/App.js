import logo from './logo.svg';
import './App.css';

function App() {
  const isStudent = true;
  
  return (
    // return문 안에서는 if문을 쓸수없음
    // 문자로인식 
    // <div className="App">
    // isStudent == true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>
    
    // </div>
    
    // 삼항 연산자로 인식하게 하려면 {}안에 넣어준다
    <div className="App">
    {isStudent == true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>}
    
    </div>

  );
}

export default App;
