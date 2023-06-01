import React from 'react';
import salesatwork from "../assets/salesatwork.png"

const Header = ({ title }) => {
    return (
        <header>
          <a href="https://vitejs.dev" target="_blank">
           <img src={salesatwork} className="logo" alt="Salesatwork logo" />
          </a>
            <h2>{title}</h2>
        </header>
    );
}

export default Header;
