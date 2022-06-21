/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let [write,setWrite] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [likeIt, setLikeIt] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title,setTitle] = useState(0);
  let [message, setMessage] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Jiuk's React Blog</h4>
      </div>
      
      {/* <div className="list">
        <h4>{write[0]} <span onClick={()=>{setLikeIt(likeIt+1);}}><i class="fa-solid fa-thumbs-up"></i></span> {likeIt}</h4>
        <p>2월17일 발행</p>
      </div>
      <div className="list">
        <h4>{write[1]}</h4>
        <p>2월17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{write[2]}</h4>
        <p>2월17일 발행</p>
      </div>  */}
      {
        write.map((number,i)=>{
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{
                setModal(!modal); setTitle(i);
              }}>{number} </h4><span onClick={()=>{
                let copy = [...likeIt]
                copy[i] = copy[i]+1;
                setLikeIt(copy);
              }}><i class="fa-solid fa-thumbs-up"></i></span> {likeIt[i]}
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...write]
                copy.splice(i,1);
                setWrite(copy);
              }}>Delete</button>
            </div>
        )})
      }
      {
        modal === true ? <Modal title={title} color='#387373' names={write} /> : null
      }
      <input onChange={(e)=>{
        setMessage(e.target.value);

      }}/>
      <button onClick={()=>{
        let copy = [...write]
        copy.unshift(message)
        setWrite(copy)

      }}>Upload</button>

    </div>

  );
}

const Modal = (props) => {
  return (
    <div className="modal" style={{background: props.color}}>
      <h4>{props.names[props.title]}</h4>
      <p>Date</p>
      <p>Detail explanation</p>
    </div>
  )
};


export default App;
