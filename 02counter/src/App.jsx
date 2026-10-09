import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  //using useState-responsible for changing states -not the values, like updating values/propagationg changes  in UIor DOM
  //useState(init value) and setCounter is a method that will control the counter variable
  let [counter,setCounter]=useState(0)



  // let counter=15
  const addValue=()=>{
    console.log("add value clicked",counter)//here in console the values are getting updated but not on the webpage, this is problem of UI updation
    //react decides which things to change in the ui -> react reacts to variable updation
    //so if there is a change in the ui , then react will control , so react gives some methods which are called hooks and 
    // data can be updated using hooks only
    // counter=counter+1;
    setCounter(counter+1)
  };

  const remValue=()=>{
    console.log("remove value clicked",counter)
    setCounter(counter-1)

  }
  return (
    <>
    <h1> Santa aur React</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}> Add Value {counter}</button>
    <br/>
    <button onClick={remValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
