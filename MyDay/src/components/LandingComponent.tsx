import React from "react";
import Events from "./Events";
import Journal from "./Journal"
import Workouts from "./Workouts";
import Navbar from "./Navbar";
const LandingComponent = () => {
  return (
    <div >
        <Navbar/>
        <div id="grid-container">
          <Events/>
          <Workouts/>
          <Journal/>
        </div>
       
    </div>
  );
};

export default LandingComponent;
