import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp()//always capitalize this func name otherwise error
{
  return (
    <div>
      <h1>this is my app!.....</h1>
      <p>processing react....</p>
    </div>
  )
}

// const ReactElem={
//     type:'a',
//     props:{
//         href:"https://google.com",
//         target:"_blank"
//     },
//     children:'click me to visit Google'

// }


const anotherElem=(
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
)
const anotherUser = "santa aur react"

const reactElement = React.createElement(
    'a',//tags
    {href: 'https://google.com',target: '_blank' },//all properties of the tag in an object structure
    'click me to visit google ',// any text
    anotherUser//variable to be injected
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App/>
  
      //  <MyApp /> /* //here app is a function so can we have a function declared here? *///yes we can use any function here
      // MyApp()-donot use this way is not good for standard 
      // if MyApp is just a func , so<MyApp/> is a jsx syntax from where is this syntax coming from?
      //every react uses a bundler-> to do magic bts and to improve syntax or maybe upgrade it
      //react also doesnot understand that html code that MyApp is using hence thos code is convereted to a tree structure code like reactElem at the 
      // end of the day

      // now we know that MyApp() will convert to something like reactElem type tree structure , what if i write that here?

      // <ReactElem/>
      //prints nothing but we know that objects are used directly and not like this
      // ReactElem// this also doesnot work

      // .render code is provided by react here whereas when we were using customReact we had already defined the render logic so in that .render 
      // func pf react we have a particular syntax of which type of object this expects- now create another Element

      // anotherElem// now this works fine
      reactElement

)

