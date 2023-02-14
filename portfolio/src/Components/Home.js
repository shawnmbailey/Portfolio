import React from 'react';
import '../Home.css';

export default function Home() {
    return (
      <section id="Home">
      <div className="landing">
        <div className = "headshot">
        <img id ="face" src={require('../Media/Headshot.jpg')}/> 
        </div>
        <div className='greeting'>
        <h1>Hello,</h1>
        <h2>I'm Shawn Bailey</h2>
        <h3>I am a Web Developer.</h3>
        <div className="btn">
          <button id="navigate">
            <a href ="#projects">View My Work ➡</a>
          </button>
        </div>
        </div>
      </div>
      </section>
    );
  }