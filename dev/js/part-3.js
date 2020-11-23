import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, MotionPathPlugin);

// var RBSpeed = .8;

// var tl = gsap.timeline({ease: "power2.out"});


const Part3TL = gsap.timeline();




export function Part3Animation() {
    Part3TL.to("#P",{duration:.5, scale:.78, fill:"#6FA3FF", transformOrigin: "left bottom"},"play10")

            .to("#R",{duration:.5, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play10")
            .to("#R",{duration:.5, scale:1, fill:"#6FA3FF", transformOrigin: "left bottom"},"play11")

            .to("#N",{duration:.5, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play11")
            .to("#N",{duration:.5, scale:1, fill:"#6FA3FF", transformOrigin: "left bottom"},"play12")

            .to("#D",{duration:.5, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play12")

            
            .to("#pointer",{duration:3, rotate:60, transformOrigin: "right"},"play13")

            .fromTo("#nav-white-line",{drawSVG:"10%"}, {duration: 15, drawSVG:"100%"}, "play13")

            // .to("#car-pointer-2", {motionPath: {path: "#nav-white-line", align: "#car-pointer", alignOrigin: [.5, .5], autoRotate: true}, duration: 15}, "play13")

            .to("#car-pointer-2", {motionPath: {path: "#nav-white-line", align: "#car-pointer", alignOrigin: [0, 0], autoRotate: true}, transformOrigin: "50% 50%", duration: 15, ease: "power1.inOut"}, "play13")

            .to("#pointer",{duration:3, rotate:0, transformOrigin: "right"},"play14")

    return Part3TL;
}