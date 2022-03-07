import React,{useState,useEffect} from "react";
import axios from "axios";
import dice from "./images/icon-dice.svg"

function App() {
  const [data,setData] = useState([])

  const getQuote = async () => {
    try{
      const response = await axios.get('https://api.adviceslip.com/advice')
      const data = response;
      setData(data.data.slip)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getQuote()
  },[])
  return (
    <div className="container">
      <h5>advice #{data.id}</h5>
      <p>"{data.advice}"</p>
      <div className="divider"></div>
      <div onClick={getQuote} className="dice">
        <img src={dice} alt="dice"></img>
      </div>
    </div>
  );
}

export default App;
