import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import {
  contentDiv,
  description,
  image,
  imageDiv
} from "../stylesheets/components/SkillCard.module.sass";

const SkillCard = ({ pid, imageLink, imageAlt, text }) => {

  useEffect(() => {
    const paragraph = document.getElementById(pid);
    if (paragraph){
      paragraph.innerHTML=text;
      if(pid=="system"){
        const anchor1 = document.getElementById("arch");
        anchor1.style.color = '#212529';
      }
      if(pid=="product"){
        const anchor2 = document.getElementById("pspo");
        const anchor3 = document.getElementById("pmcert");
        anchor2.style.color = '#212529';
        anchor3.style.color = '#212529';
      }
    }
  }, [text, pid]);

  return (
    <div className={contentDiv}>
      <div className={imageDiv}>
        <img className={image} src={imageLink} alt={imageAlt} />
      </div>
      <p id={pid} className={description}>{text}</p>
    </div>
  );
};

SkillCard.propTypes = {
  pid: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default SkillCard;