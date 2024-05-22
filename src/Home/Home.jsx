import React from "react";
import Navbar from "../Components/Navabar";
import Craousel from "../Components/Craousel";

export default function Home(props) {
  return (
    <div className="bg-black">
      <Navbar isSignedIn={props.isSignedIn} />
      <Craousel isSignedIn={props.isSignedIn} setSignedIn={props.setSignedIn} />
    </div>
  );
}
