import logo from './logo.svg';
import './App.css';

function App() {
  // 변수
  //출력시 {} 안에 넣어서 출력
  const name = 'Tjoeun';
  let classname = 'java취업캠프';
  var value = '변수';
  

  return (
    <div>
      <h1>{name}에 오신것을 환영합니다.</h1>
      <h2>과정명 : {classname}</h2>
      <h3>중괄호 안에 넣을 수 있는것들</h3>
      <ul>
        <li>{'문자'}와 {1 + 6}</li>
        <li>함수 가능</li>
        <li>변수에 들어있는 값 출력가능</li>
      </ul>
      <h3>중괄호 안에 넣을 수 없는 것들</h3>
      <ul>
        <li>{true} 불리언 불가</li>
        <li>{[]} 배열 불가</li>
      </ul>
    </div>
  );
}

export default App;
