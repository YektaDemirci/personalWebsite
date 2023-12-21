import React, { useState } from 'react';
import { Modal } from "react-responsive-modal";

import {
  mDiv,
  mImg,
  mTitle,
  mInfo,
  mDescription,
  mLinks,
  mLink,
  mBar
} from "../stylesheets/components/ProjectModals.module.sass";

const ProjectModals = () => {

  // It was tricky to make it work with sass so I am defining them here, this part can be updated!
  const customModalStyles = {
    // overlay: {
    //   backgroundColor: 'rgba(255, 0, 0, 0.5)',
    // },
    modal: {
      'border-radius': '10px'
    },
  };
  
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    setOpen(true)};
  const onCloseModal = () => setOpen(false);

  const closeIcon = (
    <button type="button" class="btn-close" aria-label="Close" onClick={onCloseModal}></button>
  );

  const modalContent = ({
    modalTitle,
    modalTech,
    modalImageLink,
    modalDescription,
    codeLink,
    reportLink,
    presentationLink}) => (
    // Once the modal is closed, there is a shift due to the scroll down button, in the future I can improve it
    <Modal
      styles={customModalStyles}
      open={open}
      onClose={onCloseModal}
      closeIcon={closeIcon}
    >
      <div className={mDiv}>
        <h1 className={mTitle}>{modalTitle}</h1>
        <p className={mInfo}> <b>Tech Stack:</b> {modalTech}</p>
        <div className={mLinks}>
          {codeLink !== '' ?(<a className={mLink} href={`${codeLink}`}>Code</a>) : null}
          {codeLink && (reportLink || presentationLink) && <p className={mBar}>|</p>}
          {reportLink !== '' ?(<a className={mLink} href={`${reportLink}`}>Report</a>) : null}
          {reportLink && presentationLink && <p className={mBar}>|</p>}
          {presentationLink !== '' ?(<a className={mLink} href={`${presentationLink}`}>Presentation</a>) : null}
        </div>
        <img
          className={mImg}
          src={modalImageLink}
          alt="Project Image"
        />
        <p className={mDescription}>{modalDescription}</p>
      </div>
    </Modal>
  );
    return ({modalContent, onOpenModal});
};

export default ProjectModals;
