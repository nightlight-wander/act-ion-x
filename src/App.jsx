import Mockman from "mockman-js";
import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import {Login} from "./pages/Auth/Login";
import {Signup} from "./pages/Auth/Signup";
import "./App.css";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/videos" element={<Home/>}></Route> */}
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/mock" element={<Mockman/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
