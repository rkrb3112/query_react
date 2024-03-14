import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [genExcuse, setGenExcuse] = useState("");

  const getExcuse = (excuse) =>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
    .then((res) => {
      setGenExcuse(res.data[0].excuse);
    })
  };

  return ( 
    <div className='App'>
      <h1>Generate an excuse</h1>
      <button onClick={() => {getExcuse("party")}}>Party</button>
      <button onClick={() => {getExcuse("family")}}>Family</button>
      <button onClick={() => {getExcuse("office")}}>Office</button>
      <p>{genExcuse}</p>
    </div>
  );
};



export default App;
