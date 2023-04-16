import React from "react";
import { FaWhatsapp,FaTelegramPlane } from "react-icons/fa"
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <h1>BL Tips</h1>
        </div>
        <div className="navlinks">
            <ul>
                <li><a href="#jackpot">Jackpot</a></li>
                <li><a href="#tickets">Tickets</a></li>
                <li><a href="#winnings">Winnings</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div className="socials">
              <a target="_blank" href="https://wa.me/+254700000000"><FaWhatsapp/></a>
              <a target="_blank" href="https://t.me/joinchat/U7NTq-f9ooxWa1Gm"><FaTelegramPlane/></a>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
