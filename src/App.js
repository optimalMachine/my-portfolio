/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let [logo,setLogo] = useState('Jiuk Choi Portfolio');
  let [write,setWrite] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>Jiuk's React Blog</h4>
      </div>
      <div className="list">
        <h4>{write[0]}</h4>
        <i class="fa-solid fa-thumbs-up"></i>
        <p>2월17일 발행</p>
      </div>
      <div className="list">
        <h4>{write[1]}</h4>
        <p>2월17일 발행</p>
      </div>
      <div className="list">
        <h4>{write[2]}</h4>
        <p>2월17일 발행</p>
      </div>


    </div>
  );
}

export default App;
