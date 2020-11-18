import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

// var RBSpeed = .8;

// var tl = gsap.timeline({ease: "power2.out"});


const Part2TL = gsap.timeline();




export function Part2Animation() {
    Part2TL.to("#Toxic-BritneySpears",{duration:5, x:-180},"play4")
        .to("#play-1",{duration:1, morphSVG:"#pause-1"},"play4")
        .to("#play-2",{duration:1, morphSVG:"#pause-2"},"play4")
        .fromTo("#blue-line",{drawSVG:"0%"}, {duration: 5, drawSVG:"100%"}, "play4")
        .to("#music-stuff",{duration:2, scale: .75, x:-50},"play5")
        .to("#HC-stuff",{duration:2, scale: 1.25, x:-70, y:30},"play5")
        .to("#nav-stuff",{duration:2, y:70},"play5")

        .to("#music-stuff",{duration:2, scale: .75, x:-50},"play6")
        .to("#HC-stuff",{duration:2, scale: 1, x:70, y:-50},"play6")
        .to("#nav-stuff",{duration:2, scale: 1.25, x:-30, y:-65},"play6")
        .to("#phone-stuff",{duration:2, x:-40},"play6")

        .to("#home",{duration:2, scale:2, fill:"#BBD7FF", transformOrigin: "left"},"play7")

        .to("#music-stuff",{duration:2, scale: .32, x:5, y:-100},"play8")
        .to("#HC-stuff",{duration:2, scale: .45, x:-250, y:-40},"play8")
        .to("#nav-stuff",{duration:2, x:-340, y:-150},"play8")
        .to("#phone-stuff",{duration:2, scale: .46, x:-70, y:-470},"play8")
        .to("#speedometer",{duration:2, scale: .85, x:-10, y:-20, transformOrigin: "right bottom"},"play8")

        .to("#nav-map",{duration:2, opacity:1},"play9")
    return Part2TL;
}