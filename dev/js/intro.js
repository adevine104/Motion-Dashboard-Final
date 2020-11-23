import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

// var RBSpeed = .8;

// var tl = gsap.timeline({ease: "power2.out"});


const introTL = gsap.timeline();


export function IntroAnimation() {
    introTL.from("#spikey-shape-big", {duration: 1.5, scale: 0, transformOrigin: "center"}, "play")
        .to("#phone",{duration: 3, y:125},"play")
        .to("#Nav",{duration: 3, y:125},"play")
        .from("#logo-circle-big", {duration: 3, scale: 10, transformOrigin: "center"}, "play")
        .to("#big-logo", {duration: 2, scale: .2, y: -320, transformOrigin: "center"}, "play2")
        .fromTo("#speed-circle, #HC-circle, #music-circle, #nav-circle, #phone-circle",{drawSVG:"0%"}, {duration: 1.5, drawSVG:"100%"}, "play2.5")
        .to("#music-stuff, #HC-stuff, #nav-stuff, #phone-stuff, #speed-stuff", {duration: 3, opacity: 1, transformOrigin: "center"}, "play3")
        .from("#clock-weather-date", {duration: 3, opacity: 0, x: 30, transformOrigin: "center"}, "play3")
        .to("#clock-weather-date", {duration: 3, opacity: 1, transformOrigin: "center"}, "play3")
        .from("#prndl", {duration: 3, opacity: 0, x: -30, transformOrigin: "center"}, "play3")
        .to("#prndl", {duration: 3, opacity: 1, transformOrigin: "center"}, "play3")
        // .to("#music-circle",{duration: 3, opacity:0},"play3")
        // .to("#HC-circle",{duration: 3, opacity:0},"play3")
        // .to("#nav-circle",{duration: 3, opacity:0},"play3")
        // .to("#phone-circle",{duration: 3, opacity:0},"play3");
    return introTL;
}