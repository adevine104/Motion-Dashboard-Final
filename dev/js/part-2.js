import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

// var RBSpeed = .8;

// var tl = gsap.timeline({ease: "power2.out"});



const Part2TL = gsap.timeline();




export function Part2Animation() {
    Part2TL.to("#touch",{duration:.1, x:-435, y:10},"play3")
            .to("#touch-print, #outside-ring",{duration:1, opacity: 1},"play3-1")
            .to("#touch-print",{duration:1, scale:.65, transformOrigin: "center"},"play3-1")
            .to("#outside-ring",{duration:1, scale:.85, transformOrigin: "center"},"play3-1")
            .to("#touch-print",{duration:1, scale:1, opacity:0, transformOrigin: "center"},"play3-2")
            .to("#outside-ring",{duration:1, scale:1.5, opacity:0, transformOrigin: "center"},"play3-2")
    
        .to("#Toxic-BritneySpears",{duration:5, x:-180},"play4")
        .to("#play-1",{duration:1, morphSVG:"#pause-1"},"play4")
        .to("#play-2",{duration:1, morphSVG:"#pause-2"},"play4")
        .fromTo("#blue-line",{drawSVG:"0%"}, {duration: 5, drawSVG:"100%"}, "play4")
        
        .to("#music",{duration:2, scale: .75, x:40, y:100},"play5")
        .to("#heatcool",{duration:2, scale: 1.25, x:-100, y:0},"play5")
        .to("#Nav",{duration:2, y:225},"play5")


            .to("#touch",{duration:.1, x:-49, y:45},"play5-0")
            .to("#touch-print, #outside-ring",{duration:1, opacity: 1},"play5-1")
            .to("#touch-print",{duration:1, scale:.65, transformOrigin: "center"},"play5-1")
            .to("#outside-ring",{duration:1, scale:.85, transformOrigin: "center"},"play5-1")
            .to("#touch-print",{duration:1, scale:1, opacity:0, transformOrigin: "center"},"play5-2")
            .to("#outside-ring",{duration:1, scale:1.5, opacity:0, transformOrigin: "center"},"play5-2")


        .to("#Triangle-2",{duration:.5, scale: .8, transformOrigin: "center"},"play5-1")
        .to("#Triangle-2",{duration:.75, scale: 1, transformOrigin: "center"},"play5-2")
        // .to("#Triangle-2",{duration:.75, scale: .8, transformOrigin: "center"},"play5-4")
        // .to("#Triangle-2",{duration:.5, scale: 1, transformOrigin: "center"},"play5-5")
        .to("#up-down",{duration:2, y:10},"play5-5")

        // .to("#72",{duration:2,},"play5-5")

        .to("#music",{duration:2, scale: .75, x:-50},"play6")
        .to("#heatcool",{duration:2, scale: 1, x:70, y:-50},"play6")
        .to("#Nav",{duration:2, scale: 1.20, x:-70, y:30},"play6")
        .to("#phone",{duration:2, x:-60},"play6")



        .to("#touch",{duration:.1, x:-290, y:205},"play6-0")
        .to("#touch-print, #outside-ring",{duration:1, opacity: 1},"play6-1")
        .to("#touch-print",{duration:1, scale:.65, transformOrigin: "center"},"play6-1")
        .to("#outside-ring",{duration:1, scale:.85, transformOrigin: "center"},"play6-1")
        .to("#touch-print",{duration:1, scale:1, opacity:0, transformOrigin: "center"},"play6-2")
        .to("#outside-ring",{duration:1, scale:1.5, opacity:0, transformOrigin: "center"},"play6-2")

        .to("#Home",{duration:1, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play7")

        .to("#music",{duration:2, scale: .32, x:230, y:45, opacity: 1},"play8")
        .to("#heatcool",{duration:2, scale: .45, x:-160, y:45, opacity: 1},"play8")
        .to("#phone",{duration:2, scale: .46, x:10, y:-260, opacity: 1},"play8")

        .to("#music-stuff",{duration:2, opacity: 0},"play8")
        .to("#HC-stuff",{duration:2, opacity: 0},"play8")
        .to("#phone-stuff",{duration:2, opacity: 0},"play8")

        .to("#radio-icon-big",{duration:2, opacity: 1},"play8")
        .to("#fan-icon-big",{duration:2, opacity: 1},"play8")
        .to("#phone-icon-big",{duration:2, opacity: 1},"play8")

        .to("#Nav",{duration:2, x:-360, y:-50},"play8")
        .to("#speedometer",{duration:2, scale: .85, x:-10, y:-20, transformOrigin: "right bottom"},"play8")

        .to("#nav-map",{duration:2, opacity:1},"play9")

        .to("#nav-stuff",{duration:1, opacity:0},"play9-1")
        .to("#directions",{duration:1, opacity:1},"play9-1")

    return Part2TL;
}