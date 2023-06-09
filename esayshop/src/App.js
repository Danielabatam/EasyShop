import React from "react";
import "./App.css"
import Header from "./common/header/Header";
// import {BrowserRouter as Routes, Route} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
  return (
      // <Routes>
      //     <Route path={"/"} element={<Home/>}></Route>

    // <BrowserRouter>
    // <BrowserRouter>
    //   <Header/>
    //     <Route>
    //         <Route path={"/"} exact><Header/></Route>
    //     </Route>
    // </BrowserRouter>

      <Router>
          <Header/>
          <Switch>
              {/*<Route path={"/"} exact><Header/></Route>*/}
          </Switch>
      </Router>
  )
}

export default App