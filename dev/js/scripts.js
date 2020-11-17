
// import * as Demo from './demo.js';

// console.log(Demo);
import { gsap } from "gsap";
import {lineAnimation} from "./demo.js";

const mainTl = gsap.timeline();

mainTl.add(lineAnimation());