import React from 'react';

const today = new Date()

const Footer = () => {
    return (
        <footer>
            
              <p> &copy; SalesAtWork {today.getFullYear()}</p>
        </footer>
    );
}

export default Footer;
