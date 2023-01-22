import React from "react";
import "./App.scss";
import Home from "./screens/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./screens/profile/Profile";
import AboutUs from "./screens/aboutus/AboutUs";
import RoadMap from "./screens/roadmap/RoadMap";

function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <Routes>
          {/* <Route path={"/"} element={<Home />}></Route> */}
          <Route path={"/profile"} element={<Profile />}></Route>
          <Route path={"/about-us"} element={<AboutUs />}></Route>
          <Route path={"/roadmap"} element={<RoadMap />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
