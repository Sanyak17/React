import Chai from  "./chai"
function App() {
  const username="santa";
  return (
    <>
    <Chai/>
    <h1>chai aur react{username}</h1>
    </>
  )
}
// The tag <chai> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
export default App
// chai aur react{username}-- this is known as evaluated expression- so here we can write evaluated ans of any JS code 
// here i cant write {if(true) uusername} so do all this working in the function or somewhere else and write the evaluated expression here
