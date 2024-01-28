import Markdown from "markdown-to-jsx";
import React, {useState, useEffect} from 'react';
import {
  description,
  image,
  descriptionRow,
  listPadding,
  projectLink,
  smallScreenImage
} from "../../stylesheets/components/Section/AboutMe.module.sass";
import Section from "../Util/Section";
import Container from "../Util/Container";
import Row from "../Util/Row";
import { Link } from "react-scroll";

import { SCROLL_DURATION, SCROLL_OFFSET } from "../../utils/Constants.utils";
const content = require("../../data/navbar.json");
const aboutMe = require("../../data/aboutMe.json");

const AboutMe = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [bigScreen, setBigScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 767){
        setSmallScreen(true);
      }
      else{
        setBigScreen(true);
      }
    }
  }, []);
  
  return (
    <Section>
      <Container>
        <Row className={descriptionRow}>
          <div className={description}>
            <div className={smallScreenImage}>
              <p>{aboutMe.descriptionHead}</p>
              {smallScreen && <img
                className={image}
                alt={aboutMe.portraitAlt}
                src="/images/aboutMe/yekta.png"
              />}
            </div>            

            <Markdown className={listPadding}>
              {aboutMe.items.join("\n")}
            </Markdown>

            <p>{aboutMe.descriptionTail} 
              <Link
                className={projectLink}
                to={content.items[1].reference}
                smooth
                offset={SCROLL_OFFSET}
                duration={SCROLL_DURATION}
                ignoreCancelEvents={false}
              >
              projects!
              </Link>
            </p>
          </div>
          {bigScreen && <img
            className={image}
            alt={aboutMe.portraitAlt}
            src="/images/aboutMe/yekta.png"
          />}
        </Row>
      </Container>
    </Section>
  );
};

export default AboutMe;
