import React from 'react'
import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { AiTwotoneMail} from "react-icons/ai"
import '../Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="cntct">
        <h1 id='hire'>
          Contact Me
        </h1>
        <p id='info'>
          Actively seeking employment. Let's Work.
        </p>
        <p id='hireme'>
          Hire Me ⬇
        </p>
        <div className='icons'>
          <div className='Github'>
            <a href="https://github.com/shawnmbailey">
              <FaGithubSquare />
            </a>
          </div>
          <div className='linkedin'>
            <a href="https://www.linkedin.com/in/shawn-bailey-b2837b190/">
              <FaLinkedin/>
            </a>
          </div>
          <div className='email'>
            <a href='mailto:shwnmbailey@gmail.com'>
              <AiTwotoneMail/>
            </a>
        </div>
          </div>
      </div>
    </section>
  );
}