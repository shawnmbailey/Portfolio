import React from 'react';
import '../Portfolio.css';
import ImgWrapper from './ImgWrapper';

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
              <div style={{display:'flex', marginRight: '10%'}}>
              <ImgWrapper link={"https://github.com/shawnmbailey/CalculatorProject"} type={"dark"}imgSrc={require('../Media/Darkmode.png')}/><ImgWrapper link={"https://github.com/shawnmbailey/CalculatorProject"} type={"light"}imgSrc={require('../Media/LightMode.png')}/>
              </div>
              <ImgWrapper link={"https://github.com/shawnmbailey/Game-Project"} type={"game"}imgSrc={require('../Media/SEV9.png')}/>
              </li>
            </div>
          </ul>
        </div>
      </div>
      </section>
    );
  }
  