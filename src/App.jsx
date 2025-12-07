import { BrowserRouter , Routes , Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Body from "./Components/Body"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appstore"
import Feed from "./Components/Feed"

function App() {

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      {/* <Route path="/" element = {<div> Base page </div>} />
      <Route path="/login" element= {<div> Login page </div> } /> */}
      {/* so until of doing these things i want to render the body component there */}
      <Route path="/" element = {<Body />}>
        <Route path="/" element = { <Feed /> } />
        <Route path="/login" element = { <Login />} />
        <Route path="/profile" element = { <Profile /> } />
      </Route>
    </Routes>
    </BrowserRouter>
    {/* <NavBar />
      <h1 class="text-3xl font-bold underline"> Hello world </h1> 
      we render this in body component*/}
    </Provider>
    </>
  )
}

export default App
