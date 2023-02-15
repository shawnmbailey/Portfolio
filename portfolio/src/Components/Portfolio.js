import React from 'react';
import '../Portfolio.css';

export default function Portfolio() {
    return (
      <section id ="projects">
      <div>
        <div>
        <h2 id="projectCon">Projects</h2>
        </div>
        <div className="pBtns">
          <button id='all'>ALL</button>
          <button id='js'>JAVASCRIPT</button>
          <button id='react'>REACT-JS</button>
        </div>
        <div className='display'>
          <ul>
            <div id='calc'>
            <li className="calcImg">
              <img id ="dark" src={require('../Media/Darkmode.png')}/><img id ="light" src={require('../Media/LightMode.png')}/><img id ="game" src={require('../Media/SEV9.png')}/></li>
            </div>
          </ul>
        </div>
      </div>
      </section>
    );
  }
  