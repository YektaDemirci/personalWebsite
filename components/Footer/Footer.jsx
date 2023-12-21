import Row from "../Util/Row";
import {
  footerStyle,
  footerDarkText,
  footerLightText,
  leftText,
  lineSeparator,
  footerName,
  footerList,
  footerLinks,
  footerLeft,
  footerRight,
  footerListDescription,
  footerListContainer,
  footerLocation
} from "../../stylesheets/components/Footer/Footer.module.sass";

import SocialMediaBar from "./SocialMediaBar";
import Container from "../Util/Container";

const footer = require("../../data/footer.json");

const Footer = () => (
  <footer className={footerStyle}>
    <Container noPadding>
      <Row>
        <div className={`${footerLeft} ${lineSeparator}`}>
          <p className={`${leftText} ${footerLightText}`}>{footer.leftText}</p>
        </div>

        <div className={`${footerRight}`}>
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
