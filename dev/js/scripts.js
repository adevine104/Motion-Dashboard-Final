
// import * as Demo from './demo.js';

// console.log(Demo);
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import {IntroAnimation} from "./intro.js";
import {Part2Animation} from "./part-2.js";
import {Part3Animation} from "./part-3.js";

gsap.registerPlugin(GSDevTools);

const mainTl = gsap.timeline();
mainTl.add(IntroAnimation());
mainTl.add(Part2Animation());
mainTl.add(Part3Animation());

GSDevTools.create();