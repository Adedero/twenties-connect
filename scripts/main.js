import changeHeaderOnScroll from "./utils/header.js";
import useIcons from "./utils/icons.js";
import setActiveLink from "./utils/links.js";
import tiltText from "./utils/tilt.js";
import { createAbstractDesign } from "./utils/twenties.js";

AOS.init({
  duration: 600,
  easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
  once: true,
});
setActiveLink();
changeHeaderOnScroll('.hero');
useIcons();
createAbstractDesign();
tiltText();