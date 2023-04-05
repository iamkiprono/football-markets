import React from "react";
import "../src/App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Tickets from "./Components/Tickets";
import Jackpot from "./Components/Jackpot";

const App = () => {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Homepage />
      </div>
      <Jackpot />
      <Tickets title={"VIP"} />
    </div>
  );
};

export default App;
