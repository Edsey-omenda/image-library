import React from 'react';

const Header = ({ title }) => {
    return (
        <header>
          <a href="https://vitejs.dev" target="_blank">
           <img src={viteLogo} className="logo" alt="Salesatwork logo" />
          </a>
            <h2>{title}</h2>
        </header>
    );
}

export default Header;
