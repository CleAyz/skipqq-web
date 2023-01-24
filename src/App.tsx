import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import AboutUs from "./screens/aboutus/AboutUs";
import Home from "./screens/home/Home";
import Profile from "./screens/profile/Profile";
import RoadMap from "./screens/roadmap/RoadMap";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/profile"} element={<Profile />}></Route>
          <Route path={"/about-us"} element={<AboutUs />}></Route>
          <Route path={"/roadmap"} element={<RoadMap />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
