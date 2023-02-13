import '../Home.css';

export default function Home() {
    return (
      <div class ="landing">
        <div class = "headshot">
        <img id ="face" src={require('../Media/Headshot.jpg')}/> 
        </div>
        <div class='greeting'>
        <h1>Hello,</h1>
        <h2>I'm Shawn Bailey</h2>
        <h3>I am a Web Developer.</h3>
        <div class="btn">
          <button id="navigate">
            View My Work ➡
          </button>
        </div>
        </div>
      </div>
    );
  }