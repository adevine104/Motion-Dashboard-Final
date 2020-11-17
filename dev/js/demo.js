

import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

// var RBSpeed = .8;

// var tl = gsap.timeline({ease: "power2.out"});



const drawInTL = gsap.timeline();


drawInTL.from("#spikey-shape-big", {
        duration: 1.5,
        scale:0,
        transformOrigin: "center"
    }, "play");

drawInTL.from("#logo-circle-big", {
    duration: 3,
    scale:10,
    transformOrigin: "center"
}, "play");



// drawInTL.from("#speed-circle-2", {
//     duration: 3,
//     scale:.75,
//     y: -260,
//     x: -420,
//     transformOrigin: "center"
// }, "play2");

// drawInTL.to("#speed-circle-2", {
//     duration: 3,
//     opacity: 1,
//     transformOrigin: "center"
// }, "play2");

// drawInTL.from("#HC-circle-2", {
//     duration: 3,
//     scale:1.4,
//     x: -20,
//     y: 30,
//     transformOrigin: "center"
// }, "play2");

// drawInTL.to("#HC-circle-2", {
//     duration: 3,
//     opacity: 1,
//     transformOrigin: "center"
// }, "play2");

// drawInTL.from("#music-circle", {
//     duration: 3,
//     scale:1,
//     x: 400,
//     y: 25,
//     transformOrigin: "center"
// }, "play2");

// drawInTL.to("#music-circle", {
//     duration: 3,
//     opacity: 1,
//     transformOrigin: "center"
// }, "play2");

// drawInTL.from("#nav-circle", {
//     duration: 3,
//     scale:1.1,
//     x: 115,
//     y: -350,
//     transformOrigin: "center"
// }, "play2");

// drawInTL.to("#nav-circle", {
//     duration: 3,
//     opacity: 1,
//     transformOrigin: "center"
// }, "play2");

// drawInTL.from("#phone-circle-2", {
//     duration: 3,
//     scale:1.35,
//     x: 460,
//     y: -350,
//     transformOrigin: "center"
// }, "play2");

// drawInTL.to("#phone-circle-2", {
//     duration: 3,
//     opacity: 1,
//     transformOrigin: "center"
// }, "play2");

drawInTL.to("#big-logo", {
    duration: 3,
    scale:.2,
    y: -320,
    transformOrigin: "center"
}, "play2");





drawInTL.to("#music-stuff, #HC-stuff, #nav-stuff, #phone-stuff, #speed-stuff", {
    duration: 3,
    opacity: 1,
    transformOrigin: "center"
}, "play3");

drawInTL.from("#clock-weather-date", {
    duration: 3,
    opacity: 0,
    x:30,
    transformOrigin: "center"
}, "play3");

drawInTL.to("#clock-weather-date", {
    duration: 3,
    opacity: 1,
    transformOrigin: "center"
}, "play3");

drawInTL.from("#prndl", {
    duration: 3,
    opacity: 0,
    x:-30,
    transformOrigin: "center"
}, "play3");

drawInTL.to("#prndl", {
    duration: 3,
    opacity: 1,
    transformOrigin: "center"
}, "play3");


export function lineAnimation(){
    return drawInTL;
}
