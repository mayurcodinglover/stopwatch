import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './App.css';

function App()
{
const [time,setTime]=useState(0);
const [running,setRunning]=useState(false);
useEffect(()=>{
    let interval;
    if(running)
    {
       interval=setInterval(() => {
            setTime((prevTime)=>prevTime+10)
       }, 10);
    }
    else if(!running)
    {
        clearInterval(interval)
    }
     return ()=>clearInterval(interval);   
},[running]);

    return (
        <>
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 1000/ 60/ 60) % 24)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000/ 60) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)} className="btn">Start</button>
        <button onClick={() => setRunning(false)} className="btn">Stop</button>
        <button onClick={() => setTime(0)} className="btn">Reset</button>       
      </div>
    </div>
        </>
    )
}
export default App;