import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, MotionPathPlugin);

// var RBSpeed = .8;

// var tl = gsap.timeline({ease: "power2.out"});


const Part3TL = gsap.timeline();

gsap.set("#car-pointer", {transformOrigin: "50% 50%", xPercent: -50, yPercent: -50});


export function Part3Animation() {
    Part3TL.to("#P",{duration:.5, scale:.78, fill:"#6FA3FF", transformOrigin: "left bottom"},"play10")

            .to("#R",{duration:.5, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play10")
            .to("#R",{duration:.5, scale:1, fill:"#6FA3FF", transformOrigin: "left bottom"},"play11")

            .to("#N",{duration:.5, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play11")
            .to("#N",{duration:.5, scale:1, fill:"#6FA3FF", transformOrigin: "left bottom"},"play12")

            .to("#D",{duration:.5, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play12")

            
            .to("#pointer",{duration:3, rotate:60, transformOrigin: "right"},"play13")

            //.fromTo("#nav-white-line",{drawSVG:"10%"}, {duration: 15, drawSVG:"100%"}, "play13")
            .from("#nav-white-line",{duration: 12, drawSVG:"0%" , ease: "none"}, "play13")

            // .to("#car-pointer-2", {motionPath: {path: "#nav-white-line", align: "#car-pointer", alignOrigin: [.5, .5], autoRotate: true}, duration: 15}, "play13")

            .to("#car-pointer", {motionPath: {path: "#nav-blue-line", align: "#nav-white-line", autoRotate: true}, duration: 12, ease: "none"}, "play13")

            .to("#directions-1",{duration:1, opacity:0},"play14")
            .to("#directions-5",{duration:1, opacity:1},"play14")

            .to("#pointer",{duration:3, rotate:0, transformOrigin: "right"},"play14")

    return Part3TL;
}