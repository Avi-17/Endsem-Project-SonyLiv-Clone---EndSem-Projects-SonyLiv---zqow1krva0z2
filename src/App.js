import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Navbar from "./Components/Navabar";
import Home from "./Home/Home";
import Trailer from "./Vdo/Trailer";

function App() {
  const [isSignedIn, setSignedIn] = useState(false)
  return (
    // <Trailer />
    <Router>
       {/* Always place the Navbar outside Routes */}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn isSignedIn = {isSignedIn}  setSignedIn = {setSignedIn}/>} />
        <Route path="/" element={<Home isSignedIn = {isSignedIn}  setSignedIn = {setSignedIn}/>}/>
        <Route path="/movie" element={<Trailer />}/>
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
