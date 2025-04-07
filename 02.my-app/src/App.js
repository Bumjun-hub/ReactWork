import logo from './logo.svg';

// 1. style을 별도의 파일로 저장하여 사용
// 
// -> import './App.css';

// function App() {
//   return (
//     <>
//       <h1>
//         더 조은에 오신것을 환영합니다.
//       </h1>
//       <h3>
//       JAVA 풀스택 웹&앱 개발자 취업캠프
//       </h3>
//     {/* class= 사용해도 적용 o  */}
//       <p className="class1">react class로 style적용하기</p>
//       <p id="id2">id로 스타일 적용하기</p>
//       </>
//   );
// }

// 2. style을 변수에 객체로 저장하여 사용
// function App() {
//   const style = {
//     div: {  backgroundColor:'beige',
//             padding:'50px',
//             textAlign : 'center'
//     },
//     h1 : {color:'coral'},
//     h3 : {color:'steelblue'},
//     class1 : {color:'darkblue'},
//     id2 : {color:'cadetblue'}
//   }
//   return (
//     <div style={style.div}>
//       <h1 style={style.h1}>
//         더 조은에 오신것을 환영합니다.
//       </h1>
//       <h3 style={style.h3}>
//       JAVA 풀스택 웹&앱 개발자 취업캠프
//       </h3>

//       <p className="class1" style ={style.class1} >react class로 style적용하기</p>
//       <p id="id2" style={style.id2}>id로 스타일 적용하기</p>
//       </div>
//   );
// }

//3. inline 방식으로 style주기
function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'coral' }}>
        더 조은에 오신것을 환영합니다.
      </h1>
      <h3 style={{ color: 'steelblue' }}>
        JAVA 풀스택 웹&앱 개발자 취업캠프
      </h3>

      <p className="class1" style={{ color: 'darkblue' }}>react class로 style적용하기</p>
      <p id="id2" style={{ color: 'cadetblue' }}>id로 스타일 적용하기</p>
    </div>
  );
}


export default App;
