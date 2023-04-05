import React from "react";
import "../src/App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Tickets from "./Components/Tickets";
import Jackpot from "./Components/Jackpot";
import Winnings from "./Components/Winnings";

const App = () => {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Homepage />
      </div>
      <Jackpot />
      <Tickets title={"VIP"} />
      <Winnings/>
    </div>
  );
};

export default App;
