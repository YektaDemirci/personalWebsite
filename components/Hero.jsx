import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";
// import { introdata } from "../../content_option";

import {
  introFont,
  introMargin,
  introHeadingStyle,
  introSubHeadingStyle,
  box,
  firstBox,
  secondBox,
  ring,
  one,
  two,
  link
} from "../stylesheets/components/Hero.module.sass";
// Some are coming from style.css

const Hero = ({ introHeading,  introLeadIn, resumeButtonText, resumeLink, setLandingState}) => {
  const [showTP, setShowTP] = useState(true);
  const [lastMessage, setLastMessage] = useState("");


  function slowAppear(element, duration) {
    const startOpacity = 0;
    const targetOpacity = 1;
    const steps = 60; // Number of animation steps
    const interval = duration / steps;

    let currentOpacity = startOpacity;

    function updateOpacity() {
      element.style.opacity = currentOpacity;
    }

    function animate() {
      currentOpacity += (targetOpacity - startOpacity) / steps;
      updateOpacity();

      if (currentOpacity < targetOpacity) {
        setTimeout(animate, interval);
      }
    }

    animate();
  }

  const cb = async function() {
    const valuesArray = Object.values(introHeading);
    const lastValue = valuesArray[valuesArray.length - 1];
    setLastMessage(lastValue)
    setShowTP(false);
    var subText = document.getElementById('subText');
    var resume = document.getElementById('resume_btn');
    subText.classList.add('visible');
    await new Promise(resolve => setTimeout(resolve, 1000));
    resume.classList.add("justVisible")
    slowAppear(resume, 500);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLandingState(true);
    return null;
    
  }

  const renderHTML = (
    <div className={`${introMargin}`}>
      <div className={`${introHeadingStyle} ${introFont}`}>
        {showTP && <Typewriter
          options={{
            delay: 130,
            deleteSpeed: 10
          }}
          onInit={(typewriter) => {
            const entries = Object.entries(introHeading);
            Object.entries(introHeading).forEach(([key, value], index, array) => {
              if (index < array.length - 1) {
                typewriter.typeString(`${value}`)
                  .pauseFor(1000)
                  .deleteAll();
              }
            });
            typewriter.typeString(`${entries[entries.length - 1][1]}`).callFunction(cb).start();
          }}
        />}
        {!showTP && <div className={`${introHeadingStyle} ${introFont}`}>I ENGINEER SOLUTIONS &nbsp;</div>}
      </div>
      <div id="subText" className={`fade-in ${introSubHeadingStyle} ${introFont}`}>{introLeadIn}</div>

      <div id="resume_btn" className={"btn ac_btn fade-in"}>
        {/* <dev className={`${introFont} ring btn_resume`}></dev> */}
        <a href={resumeLink} className={`${introFont} ring btn_resume`}>{resumeButtonText}</a>
        <div className={`${introFont} ring one`}></div>
        <div className={`${introFont} ring two`}></div>
      </div> 
    </div>
  );
  return renderHTML;
};

Hero.propTypes = {
  introHeading: PropTypes.object.isRequired,
  introLeadIn: PropTypes.string.isRequired,
  resumeButtonText: PropTypes.string.isRequired,
  resumeLink: PropTypes.string.isRequired,
  // Proper types should be used
  setLandingState: PropTypes.any.isRequired
};

export default Hero;
