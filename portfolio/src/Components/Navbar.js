import React from 'react';
import '../Navbar.css';

export default function Navbar() {
    return (
      <div>
        <ul className="nav">
          <li>
           <a href ="#Home">Home</a>
          </li>
          <li>
          <a href ="#About">About</a>
          </li>
          <li>
          <a href ="#projects">Portfolio</a>
          </li>
          <li>
          <a href ="#resume"> Resume</a>
          </li>
          <li>
          <a href ="#contact">Contact</a>
          </li>
        </ul>
        </div>
      );
}