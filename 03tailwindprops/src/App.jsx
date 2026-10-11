import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Santa",
    age:22
  }
  return (
    <>
    <h1 className='bg-blue-400 text-black p-4 rounded-xl'>Testing Tailwind</h1>
    <Card/>
    <Card/>
    {/* now here we have the same information in both the cards but lets say i want some other information in some of the card
    console.log(props) in card.jsx
    gives 4times loaded Object -has all hidden scoped values, directly nothing is accessible so it is empty
    to give any value to this whenever u write something after Card here it can be passed as a value to it
    */}
    <Card username="santa" someobj={myObj}/>
    {/*  myArr=[1,2,3] if we pass this it give errors
    In JSX, attribute values must be strings in quotes or JavaScript expressions inside curly braces.
    okk this is done now but now is the card using my properties passed? NO like my card should use my username -- can also use {username } in place
    of function Card(props) , props.username works fine too

    if somewhere u want to pass a default value like user didnt defined for a card then use this || default value eg-{props.username || "nothing"}
    but its readability is not good. when i have 1000 of things then i have to searrch this and write it so while defining in the function give its default value like
    function Card({username="nothing"})
    */}
    </>
  )
}

export default App
