import React from "react";
import "./About.css";
import { Link } from "react-scroll";
import about_img from "../../Images/me.png";
import linkedin_img from "../../Images/linkedin.png";
import github_img from "../../Images/github.png";

const About = () => {
  const now = Date.now();
  const bd = new Date(1029339163000);

  let diff = (now - bd.getTime()) / 1000;
  diff /= 60 * 60;

  const diffInDays = Math.abs(Math.round(diff / 24 / 365)) 

  return (
    <div className="about-wrapper" id="about">
      <div className="about-col1">
        <div className="about-content-wrapper">
          <h1 className="about-title">About Me:</h1>
          <p className="about-text">
            I am Rainers Leitarts, a {diffInDays}-year-old Full-stack web developer based
            in Latvia. I like looking for new problems and solving them. That is
            my passion. That is why coding has always been fascinating to me.
            And since I have a strong creative side, I figured Web-development
            suits me. So I began my Web development journey. I picked up some
            Web development tools and I certainly do have have{" "}
            <Link
              className="highlight-container"
              activeClass="nav-active"
              spy={true}
              to="skills"
              smooth={"easeInOutQuart"}
              offset={-100}
              duration={500}
            >
              <span className="about-highlight">favourites</span>
            </Link>
            . Since then I have worked on a couple of{" "}
            <Link
              className="highlight-container"
              activeClass="nav-active"
              spy={true}
              to="portfolio"
              smooth={"easeInOutQuart"}
              offset={-100}
              duration={500}
            >
              <span className="about-highlight">projects</span>
            </Link>
            , from all of which I learned a lot. I am driven to learn and expand
            my skill set to become a better developer.
          </p>
          <div className="about-socials-container">
            <span>Find me on: </span>
            <a
              href="https://www.linkedin.com/in/rainers-leitarts/"
              rel="noreferrer"
              target="_blank"
            >
              <img className="about-socials-icon" alt="" src={linkedin_img} />
            </a>
            <a
              href="https://github.com/RainersLeitarts"
              rel="noreferrer"
              target="_blank"
            >
              <img className="about-socials-icon" alt="" src={github_img} />
            </a>
          </div>
        </div>
      </div>
      <div className="about-col2">
        <img id="about-img" src={about_img} alt={"about_img"} />
      </div>
    </div>
  );
};

export default About;
