import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  landingBackground,
  landingContainer,
  arrowMargin,
  arrowSize
} from "../../stylesheets/components/Section/Landing.module.sass";
import Container from "../Util/Container";
import Hero from "../Hero";
import { getRandomInt } from "../../utils/FileManager.utils";
import ArrowAnimation from "../Animations/ArrowAnimation";

const hero = require("../../data/hero.json");

const imagePaths = [
  "/images/hero/waterloo.jpg",
  "/images/hero/canyon.jpg",
  "/images/hero/sunset.jpeg",
  "/images/hero/desk.jpeg",
];

const Landing = ({ id, arrowAnimationReference}) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [landingState, setLandingState] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' &&  window.innerWidth > 1000) {
      const randomLandingImageNumber = getRandomInt(imagePaths.length);
      setImageUrl(imagePaths[randomLandingImageNumber]);
    }
    else{
      const randomLandingImageNumber = getRandomInt(2);
      setImageUrl(imagePaths[randomLandingImageNumber]);
    }
  }, []);
  
  const basicPrerender = (
    <header
      id={id}
      style={
        imageUrl && {
          backgroundImage: `url(${imageUrl})`
        }
      }
      className={`${landingBackground}`}
    >
      <Container className={landingContainer}>
        <Hero
          introHeading={hero.introHeading}
          introLeadIn={hero.introLeadIn}
          resumeButtonText={hero.resumeButtonText}
          resumeLink={hero.resumeButtonLink}
          setLandingState={setLandingState}
        />
      </Container>

      {landingState && <ArrowAnimation
        className={`${arrowMargin} ${arrowSize}`}
        reference={arrowAnimationReference}
      />}
    </header>
  );

  return basicPrerender;
};
Landing.propTypes = {
  id: PropTypes.string.isRequired,
  arrowAnimationReference: PropTypes.string.isRequired
};

export default Landing;
