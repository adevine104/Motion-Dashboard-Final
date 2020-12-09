import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, MotionPathPlugin);

// var RBSpeed = .8;

// var tl = gsap.timeline({ease: "power2.out"});

var counterSpeed = 100;
// Set this number you want your counter to count up to. Default is 20
var topSpeed = 40;
// If yu don't want your speed to start at 0, change it here. Default is 0.
var speedNumber = 0;

var myVar;

function startTimer(){
    myVar = setInterval(speedCounter, counterSpeed);
}

export function speedCounter() {
	if (speedNumber < topSpeed) {
        speedNumber++;
       $("#speed-counter").html(speedNumber);
		//document.getElementById("HC-counter").innerHTML = speedNumber;
	} else {
		clearInterval(myVar);
	}
	return speedNumber;
}


const Part3TL = gsap.timeline();

gsap.set("#car-pointer", {transformOrigin: "50% 50%", xPercent: -50, yPercent: -50});


export function Part3Animation() {

    Part3TL.to("#phone-circle",{duration:1, morphSVG:"#phone-box"},"play9-5")

    
            
            .to("#P",{duration:.5, scale:.78, fill:"#6FA3FF", transformOrigin: "left bottom"},"play10")

            .to("#R",{duration:.5, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play10")
            .to("#R",{duration:.5, scale:1, fill:"#6FA3FF", transformOrigin: "left bottom"},"play11")

            .to("#N",{duration:.5, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play11")
            .to("#N",{duration:.5, scale:1, fill:"#6FA3FF", transformOrigin: "left bottom"},"play12")

            .to("#D",{duration:.5, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play12")

            
            // .to("#pointer",{duration:3, rotate:60, transformOrigin: "right"},"play13")
            .to("#speed-pointer",{duration:.01, rotate:0, transformOrigin: "center"},"play13")
            .fromTo("#speed-pointer",{drawSVG:"41% 42%"}, {duration: 1.5, drawSVG:"57.5% 58.5%"}, "play13")
  
            .from("#speed-counter", {duration: 1, onComplete: startTimer}, "play13")
            
            .fromTo("#nav-white-line",{drawSVG:"0%"}, {duration: 2, drawSVG:"25%", ease: "none"}, "play13-0")
            .to("#directions-1",{duration:.5, opacity:0},"play13-1")
            .to("#directions-2",{duration:.5, opacity:1},"play13-1")


            .fromTo("#nav-white-line",{drawSVG:"25%"}, {duration: 2, drawSVG:"50%", ease: "none"}, "play13-1")
            .to("#directions-2",{duration:.5, opacity:0},"play13-2")
            .to("#directions-3",{duration:.5, opacity:1},"play13-2")


            .fromTo("#nav-white-line",{drawSVG:"50%"}, {duration: 2, drawSVG:"75%", ease: "none"}, "play13-2")
            .to("#directions-3",{duration:.5, opacity:0},"play13-3")
            .to("#directions-4",{duration:.5, opacity:1},"play13-3")


            .fromTo("#nav-white-line",{drawSVG:"75%"}, {duration: 2, drawSVG:"100%", ease: "none"}, "play13-3")
            .to("#directions-4",{duration:.5, opacity:0},"play13-4")
            .to("#directions-5",{duration:.5, opacity:1},"play13-4")


            .to("#car-pointer", {motionPath: {path: "#nav-blue-line", align: "#nav-white-line", autoRotate: true}, duration: 8, ease: "none"}, "play13-0")


            // .to("#pointer",{duration:3, rotate:0, transformOrigin: "right"},"play14")
            .fromTo("#speed-pointer",{drawSVG:"57.5% 58.5%"}, {duration: 1.5, drawSVG:"41% 42%"}, "play14")


    return Part3TL;
}