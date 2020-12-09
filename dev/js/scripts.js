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




fanTimeline();
musicTimeline();

function fanTimeline(){
    const fanTimeline = gsap.timeline({repeat:10});

    // tell timeoine to play
    fanTimeline.to("#fan, #fan-icon-big", {duration: 3, rotate: 360, ease: "Linear.easeNone", transformOrigin: "center"});

}

function musicTimeline(){
    const musicTimeline = gsap.timeline({repeat:2});

    // tell timeoine to play
    musicTimeline
    // .to("#Toxic-1",{duration:.01, x:720})
    .to("#Toxic-1",{duration:2, x:-480, ease:"none"})
    .to("#Toxic-2",{duration:4, x:-10, ease:"none"})
    .fromTo("#blue-line",{drawSVG:"25%"}, {duration: 4, drawSVG:"100%"});


}