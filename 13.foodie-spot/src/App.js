import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

/*
  * 동적 UI를 만드는법 ( 모달창 만들기 )
  : 유저가 조작시 형태가 바뀌는 모달창, 탭, 서브메뉴, 툴팁, 경고문등 UI들

  * 순서
  1. html과 css로 UI 디자인하기
  2. UI의 현재 상태를 state에 저장
  3. state에 따라 UI가 어떻게 보일지 조건문 등으로 작성
   
 
 */

function App() {
  const [count, setCount] = useState([0, 0, 0, 0]);
  const [title, setTitle] = useState(['역전우동', '오토김밥', '맘스터치', '에그드랍']);
  const [date, setDate] = useState(['04월 04일', '04월 07일', '04월 08일', '04월 09일'])
  const [modal, setModal] = useState(false);
  const [selectedtitle, setSelectedtitle] = useState('');
  const [selecteddate, setSelecteddate] = useState('');
  const [inputValue, setInputvalue] = useState('');
  const [indexValue, setIndexValue] = useState(null);

  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>

      {title.map((v, i) => (
        <div className="list" key={i}>
          <h4 onClick={() => {
            setSelectedtitle(title[i]);
            setSelecteddate(date[i]);
            setIndexValue(i);
            setModal(!modal); // true를 넣었으나 상시 true가 되어 눌렀을때 안 꺼짐. 
            // !modal을 넣어주어누를 때마다 boolean값을 부정하여 false와 true반환
          }}>{title[i]}</h4>

          <p>{date[i]}<span onClick={() => {
            let copy = [...count] // count배열 복사  
            copy[i] += 1;         // 클릭을 했을때[i]값에 1을 추가
            setCount(copy);        // 새로운 배열로 state 업데이트
          }}>👍 </span>{count[i]}</p>
        </div>
      ))}

      <button onClick={() => setModal(false)}>
        {modal ? '닫기' : '모달 열기'}
      </button><br/>

      <input //입력값 안보이는 문제 해결
          onChange={(e) => {
            setInputvalue(e.target.value); // 부모 상태 업데이트
          }} /><br />

      {modal ? <Modal title={selectedtitle} setTitle={setTitle} key={indexValue}
        date={selecteddate} setDate={setDate}
        titlelist={title}
        inputValue={inputValue}
        setInputvalue={setInputvalue}
        indexValue={indexValue}
        setIndexValue={setIndexValue} /> : null}
    </div>

  );

  function Modal(props) {
    return (

      <div className='modal'>
        <h4>{props.title}</h4>
        <p>{props.date}</p>
        <p>상세 내용</p>
       

       
        <button onClick={() => {
          let copy = [...props.titlelist]; // titlelist를 만든 이유 : copy 변수에 배열 저장하기 위해
          // titlelist = {title}로 titlelist에 title배열 저장
          copy[props.indexValue] = props.inputValue;
          props.setTitle(copy);

        }}>이름 바꾸기</button><br />

      </div>
    )





  }
}

export default App;
