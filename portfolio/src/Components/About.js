import React from 'react';
import '../About.css';

export default function About() {
    return (
      <section id ="About">
      <div className = "About">
        <img id ="Apic" src={require('../Media/About.jpg')}/> 
        <div className='greeting'>
        <h2 id ="title">Who am I?</h2>
        <p>I am Full-Stack Web Developer from  Long Island, NY specializing in Front-End Development.
        I am a graduate of the Nebula Academy Software Engineering Bootcamp 
        with experience in Web Application creation using Javascript , HTML , CSS , and ReactJS. Lets Work.

        </p>
        </div>
      </div>
      </section>
    );
  }