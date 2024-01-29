import Row from "../Util/Row";
import {
  footerStyle,
  footerLightText,
  bigText,
  lineSeparator,
  footerName,
  footerLeft,
  footerRight,
  footerLocation
} from "../../stylesheets/components/Footer/Footer.module.sass";

import World from "./World";
import SocialMediaBar from "./SocialMediaBar";
import Container from "../Util/Container";

const footer = require("../../data/footer.json");

const Footer = () => (
  <footer className={footerStyle}>
    <Container noPadding>
      <Row>
        <div className={`${footerLeft} ${lineSeparator}`}>
          <World/>
        </div>
        <div className={`${footerRight}`}>
          <p className={`${bigText} ${footerLightText}`}>{footer.bigText}</p>
          <p className={`${footerLightText} ${footerName}`}>{footer.title}</p>
          <p className={`${footerLightText} ${footerLocation}`}>
            {footer.location}
          </p>
          <SocialMediaBar socialMediaLinks={footer.socialMediaLinks} />
        </div>
      </Row>
    </Container>
  </footer>
);

export default Footer;
