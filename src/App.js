import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <MyCompunent barnd='Apple' price='5000'></MyCompunent>
      <MyCompunent barnd='Microsoft' price='10000'></MyCompunent>
      <MyCompunent barnd='Google' price='15000'></MyCompunent>
      <MyCompunent barnd='Amazon' price='12000'></MyCompunent>
      <MyCompunent></MyCompunent>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return (
    <div>
      {
        posts.map(post=><DisplayPosts title={post.title} desc={post.body}></DisplayPosts>)
      }
    </div>
  )
}

function DisplayPosts(props) {
  const myStyle = {
    backgroundColor: 'gray',
    width: '75%',
    margin: '15px auto',
    padding: '15px',
    border: '2px solid white',
    borderRadius:'10px'
  }
  return (
    <div style={myStyle}>
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
    </div>
  )
}


function MyCompunent(props) {
  const [points, setPoints] = useState(1);
  const myStyle = {
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    margin: '10px',
    padding: '5px',
    borderRadius:'10px'
  }
  const handleAddPoint = () => {
    setPoints(points*2)
  }
  return (
    <div style={myStyle}>
      <h1>Yo yo mama! {props.barnd}!!!!</h1>
      <h4>Asking money: {props.price},I have point:{points}</h4>
      <button onClick={handleAddPoint}>Add Point</button>
      <p style={{color:'magenta',fontWeight:'bold'}}>I can write own component</p>
    </div>
  )
}


export default App;
