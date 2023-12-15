import PropTypes from "prop-types";
import { colorTransition } from "../../stylesheets/components/Animations/BrandingLogo.module.sass";

const DRAW_IN_TIME = 0.01;
const EASE_IN_OUT_BEZIER_SPLINES = "0.55, 0, 0.1, 1";

const BrandingLogo = ({ className, fillColor, strokeColor }) => (
  <svg
    id="branding"
    className={className}
    viewBox="0 0 100 100"
    visibility="hidden"
    version="1.1"
  >
    <path
      fill="transparent"
      className={colorTransition}
      stroke={strokeColor}
      strokeWidth="3"
      strokeDasharray="1170"
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
        c 12 0 12 5 12 6"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="1170"
        to="0"
        dur={DRAW_IN_TIME}
        fill="freeze"
        calcMode="spline"
        keySplines={EASE_IN_OUT_BEZIER_SPLINES}
        keyTimes="0;1"
        id="enter"
      />
    </path>
    <set attributeName="visibility" from="hidden" to="visible" />
  </svg>
);

BrandingLogo.propTypes = {
  className: PropTypes.string,
  fillColor: PropTypes.string.isRequired,
  strokeColor: PropTypes.string.isRequired
};

BrandingLogo.defaultProps = {
  className: null
};

export default BrandingLogo;
