import logo from './logo.svg';
import './App.css';
import Compo from './components/Compo';
import Button from './components/Button'
/*
    * props 
    : 부모가 자식컴포넌트에게 전달하는 데이터
      자식컴포넌트는 값 변경 불가
      자식 -> 부모 : 불가
      형제끼리 : 불가
 */

      /* 문자 혹은 변수로 값 넘겨주기
function App() {
  const name = "홍길동";
  const addr = "서초구 강남대로";

  return (
    <div className="App">
      <Compo user={"홍길동"} addr={addr}/>

    </div>
  );
}
  */

// 1.객체로 넘겨주기
function App(){
  
  const userInfo ={
    name : "범준",
    addr : "경기도 광명시",
    likeList :['게임','음악','춤']
  }

  return(
 // <Compo user={userInfo}/>  2. 객체로 넘겨주기 
 // <Compo {...userInfo}/> // 3. 객체를 스프레드 연사자로 풀어서 넘겨주기
<Compo/>
);


}

export default App;
