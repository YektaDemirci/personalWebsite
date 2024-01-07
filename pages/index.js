import AboutMe from "../components/Section/AboutMe";
import NavigationBar from "../components/Navbar/NavigationBar";
import Landing from "../components/Section/Landing";
import Projects from "../components/Section/Projects";
import {
  footerSpacingBackground,
  footerPadding
} from "../stylesheets/Home.module.sass";
import Skills from "../components/Section/Skills";
// import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer/Footer";
import getMeta from "../components/Util/MetaGenerator";
import Heading from "../components/Heading";

const content = require("../data/content.json");

export default function Home() {

  const meta = getMeta(
    content.pageTitle,
    content.pageDescription,
    "/images/meta/logo.svg",
    content.metaImageAlt
  );

  return (
    <>
      {meta}
      <NavigationBar/>
      <Landing
        id={content.landingReference}
        arrowAnimationReference={content.aboutMeReference}
      />
      <Heading id={content.aboutMeReference} text={content.aboutMeTitle} sup={content.emptySub}/>
      <AboutMe />
      <Heading id={content.skillsReference} text={content.skillsTitle} sup={content.emptySub}/>
      <Skills />
      <Heading id={content.projectsReference} text={content.projectsTitle} sup={content.projectsSub}/>
      <Projects />
      {/* <Heading id={content.testimonialReference} text={content.testimonialTitle} sup={content.testimonialSub}/>
      <Testimonials /> */}
      <div
        id={content.contactReference}
        className={`${footerSpacingBackground} ${footerPadding}`}
      >
        <Footer />
      </div>
    </>
  );
}