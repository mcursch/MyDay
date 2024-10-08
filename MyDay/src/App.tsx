import "./App.css";
import WelcomeComponent from "./components/WelcomeComponent";
import LandingComponent from "./components/LandingComponent";
import Events from "./components/Events";
import React, { useState } from "react";
const isPacked = false;

function App(isPacked: boolean) {
  const [transitioned, setTransitioned] = useState(false);
  const handleMouseEnter = () => {
    setTimeout(() => {
      setTransitioned(true);
    }, 500);
  };
  return (
    <div
      className={`index-container ${transitioned ? "transitioning" : ""}`}

      onMouseEnter={handleMouseEnter}
    >
      <WelcomeComponent />
      <LandingComponent />

    </div>
    
    
  );
}

export default App;
