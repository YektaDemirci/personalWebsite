import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { SCROLL_DURATION, SCROLL_OFFSET } from "../../utils/Constants.utils";

const DRAW_IN_TIME = 1.5;
const DRAW_OUT_TIME = 0.6;
const EASE_IN_OUT_BEZIER_SPLINES = "0.42, 0, 0.58, 1";

const ArrowAnimation = ({ className, reference }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!clicked) {
      document.getElementById("exit").onend = () => {
        setClicked(true);
      };
    }
  });

  return (
    clicked === false && (
      <Link
        aria-label="Scroll Down Prompt"
        to={reference}
        smooth
        offset={SCROLL_OFFSET}
        duration={SCROLL_DURATION}
        ignoreCancelEvents={false}
        href="/"
      >
        <svg
          id="trigger"
          className={className}
          viewBox="12 0 62 130"
          visibility="hidden"
          version="1.1"
        >
          <polygon points="0,8 0,-8 16,0" fill="#fafafa">
            <animateMotion
              dur={DRAW_IN_TIME}
              rotate="auto"
              fill="freeze"
              calcMode="spline"
              keySplines={EASE_IN_OUT_BEZIER_SPLINES}
              keyPoints="0;1"
              // required for Firefox. See: https://bugzilla.mozilla.org/show_bug.cgi?id=1105912
              keyTimes="0;1"
            >
              <mpath xlinkHref="#linePath" />
            </animateMotion>
            <set
              begin="exit.end"
              attributeName="visibility"
              from="visible"
              to="hidden"
            />
          </polygon>
          <path
            id="linePath"
            fill="transparent"
            stroke="#fafafa"
            strokeWidth="2.5"
            strokeDasharray="320"
              d="m 12 20
              c 13 -8 8 -22 5 -12
              c -2 13 -2 20 -2 24
              c 0 8 5 13 20 13
              c 19 -2 18 -24 19 -36 
              c 0 -5 -3 -6 -4 0
              c -1 7 -2 51 -2 52
              c 0 30 -18 29 -18 30
              c -13 1 -18 -7 -18 -13 
              c 0 -6 3 -12 11 -12 
              c 12 0 12 6 12 39"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="320"
              to="0"
              dur={DRAW_IN_TIME}
              fill="freeze"
              calcMode="spline"
              keySplines={EASE_IN_OUT_BEZIER_SPLINES}
              keyTimes="0;1"
            />
            <animate
              id="exit"
              begin="trigger.click"
              attributeName="stroke-dashoffset"
              from="640"
              to="320"
              dur={DRAW_OUT_TIME}
              fill="freeze"
            />
          </path>
          <set attributeName="visibility" from="hidden" to="visible" />
        </svg>
      </Link>
    )
  );
};

ArrowAnimation.propTypes = {
  className: PropTypes.string,
  reference: PropTypes.string
};

ArrowAnimation.defaultProps = {
  className: null,
  reference: null
};

export default ArrowAnimation;
