import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Aside from "./Components/Aside";
import Home from "./Components/Home";

import "./App.css";

function App() {
  return(
    <div className="Wrapper grid grid-rows-2 grid-cols-[auto_1fr] h-screen">
      <Router>
        <NavBar />
        <Aside />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  ) 
}

export default App;
