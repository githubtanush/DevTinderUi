import { BrowserRouter , Routes , Route } from "react-router-dom"
import NavBar from "./NavBar"
import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"

function App() {

  return (
    <>
    <BrowserRouter basename="/">
    <Routes>
      {/* <Route path="/" element = {<div> Base page </div>} />
      <Route path="/login" element= {<div> Login page </div> } /> */}
      {/* so until of doing these things i want to render the body component there */}
      <Route path="/" element = {<Body />} />
      <Route path="/login" element = { <Login />} />
      <Route path="/profile" element = { <Profile /> } />
    </Routes>
    </BrowserRouter>
    {/* <NavBar />
      <h1 class="text-3xl font-bold underline"> Hello world </h1> 
      we render this in body component*/}
    </>
  )
}

export default App
