import logo from './logo.svg';
import './App.css';
import Views from './component/View';
import Controller from './component/Controller';
import { useState } from 'react';




function App() {
  const [count, setCount] = useState(0);

  const onClickBtn = (value)=>{
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <section>
  
        <Views count={count}/>
      </section>
      <section>
        <Controller onClickBtn={onClickBtn}/>
      </section>
    </div>
  )
}

export default App;
