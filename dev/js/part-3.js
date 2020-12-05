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

            
            // .to("#pointer",{duration:3, rotate:60, transformOrigin: "right"},"play13")
            .to("#speed-pointer",{duration:.01, rotate:0, transformOrigin: "center"},"play13")
            .fromTo("#speed-pointer",{drawSVG:"41% 42%"}, {duration: 1.5, drawSVG:"57.5% 58.5%"}, "play13")


            // .to("#zero",{duration:.15, opacity:0},"play13-11")
            // .to("#five",{duration:.15, opacity:1},"play13-11")
            // .to("#five",{duration:.15, opacity:0},"play13-22")
            // .to("#ten",{duration:.15, opacity:1},"play13-22")

            // .to("#ten",{duration:.15, opacity:0},"play13-33")
            // .to("#fifteen",{duration:.15, opacity:1},"play13-33")
            // .to("#fifteen",{duration:.15, opacity:0},"play13-44")
            // .to("#twenty",{duration:.15, opacity:1},"play13-44")

            // .to("#twenty",{duration:.15, opacity:0},"play13-55")
            // .to("#twentyfive",{duration:.15, opacity:1},"play13-55")
            // .to("#twentyfive",{duration:.15, opacity:0},"play13-6")
            // .to("#thirty",{duration:.15, opacity:1},"play13-6")
            
            // .to("#thirty",{duration:.15, opacity:0},"play13-7")
            // .to("#thirtyfive",{duration:.15, opacity:1},"play13-7")
            // .to("#thirtyfive",{duration:.15, opacity:0},"play13-8")
            // .to("#fourty",{duration:.15, opacity:1},"play13-8")

            

            
            .fromTo("#nav-white-line",{drawSVG:"0%"}, {duration: 2, drawSVG:"25%", ease: "none"}, "play13-0")
            .to("#directions-1",{duration:.5, opacity:0},"play13-1")
            .to("#directions-2",{duration:.5, opacity:1},"play13-1")

            .to("#C-thirty",{duration:.15, opacity:0},"play13-1")
            .to("#C-thirtythree",{duration:.15, opacity:1},"play13-1")

            .to("#S-nineeight",{duration:.15, opacity:0},"play13-1")
            .to("#S-ninenine",{duration:.15, opacity:1},"play13-1")


            .fromTo("#nav-white-line",{drawSVG:"25%"}, {duration: 2, drawSVG:"50%", ease: "none"}, "play13-1")
            .to("#directions-2",{duration:.5, opacity:0},"play13-2")
            .to("#directions-3",{duration:.5, opacity:1},"play13-2")

            .to("#C-thirtythree",{duration:.15, opacity:0},"play13-2")
            .to("#C-thirtysix",{duration:.15, opacity:1},"play13-2")

            .to("#S-ninenine",{duration:.15, opacity:0},"play13-2")
            .to("#S-onehun",{duration:.15, opacity:1},"play13-2")


            .fromTo("#nav-white-line",{drawSVG:"50%"}, {duration: 2, drawSVG:"75%", ease: "none"}, "play13-2")
            .to("#directions-3",{duration:.5, opacity:0},"play13-3")
            .to("#directions-4",{duration:.5, opacity:1},"play13-3")

            .to("#C-thirtysix",{duration:.15, opacity:0},"play13-3")
            .to("#C-thirtynine",{duration:.15, opacity:1},"play13-3")

            .to("#S-onehun",{duration:.15, opacity:0},"play13-3")
            .to("#S-oneOone",{duration:.15, opacity:1},"play13-3")


            .fromTo("#nav-white-line",{drawSVG:"75%"}, {duration: 2, drawSVG:"100%", ease: "none"}, "play13-3")
            .to("#directions-4",{duration:.5, opacity:0},"play13-4")
            .to("#directions-5",{duration:.5, opacity:1},"play13-4")

            .to("#C-thirtynine",{duration:.15, opacity:0},"play13-4")
            .to("#C-fourtyone",{duration:.15, opacity:1},"play13-4")

            .to("#S-oneOone",{duration:.15, opacity:0},"play13-4")
            .to("#S-oneOtwo",{duration:.15, opacity:1},"play13-4")


            .to("#car-pointer", {motionPath: {path: "#nav-blue-line", align: "#nav-white-line", autoRotate: true}, duration: 8, ease: "none"}, "play13-0")


            // .to("#pointer",{duration:3, rotate:0, transformOrigin: "right"},"play14")
            .fromTo("#speed-pointer",{drawSVG:"57.5% 58.5%"}, {duration: 1.5, drawSVG:"41% 42%"}, "play14")

            // .to("#fourty",{duration:.15, opacity:0},"play14-11")
            // .to("#thirtyfive",{duration:.15, opacity:1},"play14-11")
            // .to("#thirtyfive",{duration:.15, opacity:0},"play14-22")
            // .to("#thirty",{duration:.15, opacity:1},"play14-22")

            // .to("#thirty",{duration:.15, opacity:0},"play14-33")
            // .to("#twentyfive",{duration:.15, opacity:1},"play14-33")
            // .to("#twentyfive",{duration:.15, opacity:0},"play14-44")
            // .to("#twenty",{duration:.15, opacity:1},"play14-44")

            // .to("#twenty",{duration:.15, opacity:0},"play14-55")
            // .to("#fifteen",{duration:.15, opacity:1},"play14-55")
            // .to("#fifteen",{duration:.15, opacity:0},"play14-6")
            // .to("#ten",{duration:.15, opacity:1},"play14-6")

            // .to("#ten",{duration:.15, opacity:0},"play14-7")
            // .to("#five",{duration:.15, opacity:1},"play14-7")
            // .to("#five",{duration:.15, opacity:0},"play14-8")
            // .to("#zero",{duration:.15, opacity:1},"play14-8")

    return Part3TL;
}