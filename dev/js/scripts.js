import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import {itemsInAnimation} from "./intro.js";
import {IntroAnimation} from "./intro.js";
import {Part2Animation} from "./part-2.js";
// import {speedCounter} from "./number-speed.js";
import {Part3Animation} from "./part-3.js";

gsap.registerPlugin(GSDevTools);

const mainTl = gsap.timeline();
mainTl.add(IntroAnimation());
mainTl.add(itemsInAnimation());
mainTl.add(Part2Animation());
// mainTl.add(speedCounter());
mainTl.add(Part3Animation());

GSDevTools.create();


