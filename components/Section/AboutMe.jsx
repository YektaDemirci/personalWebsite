import Markdown from "markdown-to-jsx";
import {
  description,
  image,
  descriptionRow,
  listPadding,
  projectLink
} from "../../stylesheets/components/Section/AboutMe.module.sass";
import Section from "../Util/Section";
import Container from "../Util/Container";
import Row from "../Util/Row";
import { Link } from "react-scroll";

import { SCROLL_DURATION, SCROLL_OFFSET } from "../../utils/Constants.utils";
const content = require("../../data/navbar.json");
const aboutMe = require("../../data/aboutMe.json");

const AboutMe = () => (
  <Section>
    <Container>
      <Row className={descriptionRow}>
        <div className={description}>
          <p>{aboutMe.descriptionHead}</p>

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
        <img
          className={image}
          alt={aboutMe.portraitAlt}
          src="/images/aboutMe/yekta.png"
        />
      </Row>
    </Container>
  </Section>
);

export default AboutMe;
