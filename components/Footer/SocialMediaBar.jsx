import PropTypes from "prop-types";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import SocialMediaIcon from "./SocialMediaIcon";
import {
  github,
  instagram,
  linkedin,
  mail,
  socialMediaButton,
  noVerticalMargin,
  inlineList
} from "../../stylesheets/components/Footer/SocialMediaBar.module.sass";

const SocialMediaBar = ({ socialMediaLinks, buttonBackground }) => (
  <>
    <ul className={`${inlineList} ${noVerticalMargin}`}>
      <SocialMediaIcon
        className={`${linkedin} ${socialMediaButton} ${buttonBackground}`}
        link={socialMediaLinks.linkedinLink}
        ariaLabel={socialMediaLinks.linkedinAriaLabel}
      >
        <FaLinkedinIn />
      </SocialMediaIcon>
      <SocialMediaIcon
        className={`${github} ${socialMediaButton} ${buttonBackground}`}
        link={socialMediaLinks.githubLink}
        ariaLabel={socialMediaLinks.githubAriaLabel}
      >
        <FaGithub />
      </SocialMediaIcon>
      <SocialMediaIcon
        className={`${instagram} ${socialMediaButton} ${buttonBackground}`}
        link={socialMediaLinks.instagramLink}
        ariaLabel={socialMediaLinks.instagramAriaLabel}
      >
        <FaInstagram />
      </SocialMediaIcon>
      <SocialMediaIcon
        className={`${mail} ${socialMediaButton} ${buttonBackground}`}
        link={socialMediaLinks.emailLink}
        ariaLabel={socialMediaLinks.emailAriaLabel}
      >
        <FaEnvelope />
      </SocialMediaIcon>
    </ul>
  </>
);

SocialMediaBar.propTypes = {
  socialMediaLinks: PropTypes.shape({
    linkedinLink: PropTypes.string.isRequired,
    linkedinAriaLabel: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    githubAriaLabel: PropTypes.string.isRequired,
    instagramLink: PropTypes.string.isRequired,
    instagramAriaLabel: PropTypes.string.isRequired,
    emailLink: PropTypes.string.isRequired,
    emailAriaLabel: PropTypes.string.isRequired
  }).isRequired,
  buttonBackground: PropTypes.string
};

SocialMediaBar.defaultProps = {
  buttonBackground: null
};

export default SocialMediaBar;
