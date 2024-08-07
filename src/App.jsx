import "./App.css";
import profile from "./assets/profile.png";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Info() {
  const myData = {
    name: "Orlando Flores",
    title: "Fullstack Developer",
    web: "https://lalomaxportfolio.netlify.app/",
    email: "emailto:createc.bo@gmail.com",
    linkedin: "https://www.linkedin.com/in/orlando-flores365/",
  };
  return (
    <div className="info">
      <img className="info__image" src={profile} alt="a profile picture" />
      <div className="data">
        <h1 className="name">{myData.name}</h1>
        <h2 className="title">{myData.title}</h2>
        <p><a href={myData.web} target="_blank" title="Open My Portfolio">My Portfolio</a></p>
        <div className="button__container">
          <a className="button__email button" href={myData.email}>
            <MdMarkEmailUnread/>
            <span>Email</span>
          </a>
          <a className="button__LinkedIn button" target="_blank" href={myData.linkedin}>
            <BsLinkedin/>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function About() {
  const aboutText =
    "I am a frontend developer with a particular interest in making things simple and automating tasks for people who share with me its own every day tasks. I try to keep up with security and best practices, and am always looking for new things to learn.";
  return (
    <div className="About">
      <h2>About</h2>
      <p>{aboutText}</p>
    </div>
  );
}

function Interests() {
  const interestsText =
    "Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.";
  return (
    <div className="About">
      <h2>Interests</h2>
      <p>{interestsText}</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* twitter icon */}
        <FaSquareXTwitter />
        
        {/* facebook icon */}
        <FaFacebookSquare />

        {/* instagram icon */}
        <FaInstagramSquare />
        
        {/* github icon */}

        <FaSquareGithub />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Info />
      <section className="middle-container">
        <About />
        <Interests />
      </section>
        <Footer />
    </div>
  );
}

export default App;
