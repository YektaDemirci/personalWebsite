import React, {useState, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';

import {
  customTestimonialContainer,
  foreItem,
  backItem,
  testimonialRound,
  testimonialArrow,
  quoteBox,
  quoteImage,
  quoteText,
  quoteLink,
  refBox,
  refImage,
  refTitles,
  refName,
  refTitle
} from "../stylesheets/components/Testimonials.module.sass";

const testimons = require("../data/testimonials.json");

const Testimonials = () => {
  const [currID, setCurrID] = useState(1);
  const [largeScreen, setLargeScreen] = useState(false);
  const [ratio, setRatio] = useState(50);



  useEffect(() => {
    const elementsWithCurr = document.querySelectorAll('div[id*="curr"]');
    elementsWithCurr.forEach((element) => {
      const id = element.id;
      const match = id.match(/curr(\d+)/);
      if (match) {
        const parsedInteger = parseInt(match[1], 10);
        if (parsedInteger === currID) {
          element.classList.remove(backItem);
          element.classList.add(foreItem);
        } else {
          element.classList.add(backItem);
          element.classList.remove(foreItem);
        }
      }
    });
  }, [currID]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 1400){
        setLargeScreen(true);
        setRatio(50);
      }
      else{
        setLargeScreen(false);
        setRatio(65);
      }
    }
  }, []);

  return (
    <div className={customTestimonialContainer}>
      <div className="testimonial-container">
        <Carousel
          infiniteLoop={true}
          showArrows={true}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={60}
          autoFocus={true}
          useKeyboardArrows={true}
          selectedItem={1}
          swipeable={true}
          showStatus={false}
          showIndicators={false}
          transitionTime={750}
          onChange={(i) => {setCurrID(i)}}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (<button type="button" class={`btn ${testimonialRound}`} onClick={onClickHandler} style={{left:`1.5%`}}>
              <img className={testimonialArrow} src="/images/testimonials/left.svg" alt="left arrow"/>
            </button>)
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (<button type="button" class={`btn ${testimonialRound}`} onClick={onClickHandler} style={{right:`1.5%`}}>
              <img className={testimonialArrow} src="/images/testimonials/right.svg" alt="right arrow"/>
            </button>)
          }
        >
          {/* I actually tried to use a json with map and a card to avoid following lines of repetition but Carousel didnt render properly
          The following code smell can be improved */}

          <div id={testimons.curr0.id} className={`testimonial-item ${backItem}`}>
            <div className={quoteBox}>
                <img  className={quoteImage}  src={testimons.svgLink} alt="quote image" />
                <p className={quoteText}> {largeScreen ? (<>{testimons.curr0.textShort} <br/> <br/> {testimons.curr0.textLong}</>):(<>{testimons.curr0.textShort} </>)} <br/>  <a className={quoteLink} href={testimons.curr1.link}>.....</a> </p>
                
            </div>
            <div className={refBox}>
                <img  className={refImage}  src={testimons.curr0.picLink} alt="quote image" />
                <div className={refTitles}>
                  <h4 className={refName} >{testimons.curr0.refName}</h4>
                  <h5 className={refTitle} >{testimons.curr0.refTitle}</h5>
                </div>
            </div>
          </div>

          <div id={testimons.curr1.id} className={`testimonial-item ${foreItem}`}>
            <div className={quoteBox}>
                <img  className={quoteImage}  src={testimons.svgLink} alt="quote image" />
                <p className={quoteText}> {largeScreen ? (<>{testimons.curr1.textShort} <br/> <br/> {testimons.curr1.textLong}</>):(<>{testimons.curr1.textShort} </>)} <br/>  <a className={quoteLink} href={testimons.curr1.link}>.....</a> </p>
                
            </div>
            <div className={refBox}>
                <img  className={refImage}  src={testimons.curr1.picLink} alt="quote image" />
                <div className={refTitles}>
                  <h4 className={refName} >{testimons.curr1.refName}</h4>
                  <h5 className={refTitle} >{testimons.curr1.refTitle}</h5>
                </div>
            </div>
          </div>

          <div id={testimons.curr2.id} className={`testimonial-item ${backItem}`}>
            <div className={quoteBox}>
                <img  className={quoteImage}  src={testimons.svgLink} alt="quote image" />
                <p className={quoteText}> {largeScreen ? (<>{testimons.curr2.textShort} <br/> <br/> {testimons.curr2.textLong}</>):(<>{testimons.curr2.textShort} </>)} <br/>  <a className={quoteLink} href={testimons.curr1.link}>.....</a> </p>
                
            </div>
            <div className={refBox}>
                <img  className={refImage}  src={testimons.curr2.picLink} alt="quote image" />
                <div className={refTitles}>
                  <h4 className={refName} >{testimons.curr2.refName}</h4>
                  <h5 className={refTitle} >{testimons.curr2.refTitle}</h5>
                </div>
            </div>
          </div>

        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;