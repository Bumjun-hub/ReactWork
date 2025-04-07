import logo from './logo.svg';
import './App.css';
import MemberEnroll from './component/Member-enroll';
import Counter from './component/Counter';
import LightOnOff from './component/Light-on-off';
import DarkLight from './component/dark-light';


function App() {
  return (
    <div className="App">
     <MemberEnroll/>
     <Counter/><br/>
     <LightOnOff/><br/>
     <DarkLight/>
    </div>
  );
}

export default App;
