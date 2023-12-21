import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import {
  point,
  imageDiv,
  description,
  contentDiv,
  mobileDescription,
  desktopDescription
} from "../stylesheets/components/ProjectCard.module.sass";
import 'react-responsive-modal/styles.css';
import ProjectModals from "./ProjectModals";


const ProjectCard = ({
  imageLink,
  imageAlt,
  title,
  subtitle,
  text,
  modalTitle,
  modalTech,
  modalImageLink,
  modalDescription,
  codeLink,
  reportLink,
  presentationLink
}) => {

  const { modalContent, onOpenModal } = ProjectModals();

  return (
    <div  className={point}>
      <div className={contentDiv} >
        <img className={imageDiv} src={imageLink} alt={imageAlt}  onClick={onOpenModal}/>
        <div className={description} onClick={onOpenModal}>
          <h4>{title}</h4>
          <h6>{subtitle}</h6>
          <p className={desktopDescription}>{text}</p>
        </div>
        {modalContent({ modalTitle,
                        modalTech,
                        modalImageLink,
                        modalDescription,
                        codeLink,
                        reportLink,
                        presentationLink })}
        <p className={mobileDescription}>{text}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imageLink: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  modalTitle: PropTypes.string,
  modalTech: PropTypes.string,
  modalImageLink: PropTypes.string,
  modalDescription: PropTypes.string,
  codeLink: PropTypes.string,
  reportLink: PropTypes.string,
  presentationLink: PropTypes.string,
};

ProjectCard.defaultProps = {
  imageLink: null,
  imageAlt: null,
  title: null,
  subtitle: null,
  text: null,
  modalTitle: null,
  modalTech: null,
  modalImageLink: null,
  modalDescription: null,
  codeLink: null,
  reportLink: null,
  presentationLink: null,
};

export default ProjectCard;
