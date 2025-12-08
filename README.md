# DevTinder 

- Created a Vite + React application
- Remove unnecessary code and create a hello world app
- Install TailwindCSS
- Install Daisy UI 
- Add Navbar component to our app.jsx
- Create a NavBar.jsx separate component file 
- Install React-router-dom
- Create a BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlet in your Body Component 
- Create a footer
- Create a Login Page
- Install axios 
- CORS - Install cors in backend => add middleware to withconfigurations : origin , credentials : true
- Whenever you're making an API call so pass { withCredentials : true }
- Install react-redux + @reduxjs/toolkit => https://redux-toolkit.js.org/tutorials/quick-start
- configureStore => provider => createSlice => addreducer to store 
- Add redux devTools in chrome
- Login and see if our data is coming properly in the store 
- NavBar should update as soon as the user logs in 
- Refactor our code to add constants file + create a component folder
- You should not be able to access other routes without login
- If token is not present redirect user to login page
- Logout feature 
- Get the feed and add the feed in the store
- build the userCard on feed


Body 
    NavBar 
    Route = / => Feed
    Route = /login => Login 
    Route = /connections => Connections
    Route = /profile => Profile 
