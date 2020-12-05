import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

// var RBSpeed = .8;

// var introTL = gsap.timeline({ease: "power2.out"});


// const fanTL = gsap.timeline({repeat: -1});

// fanTL.to("#fan", {duration: 3, rotate: 360, repeat: -1, transformOrigin: "center"})

// function animateFan(){

//     if(introTL === true){

//         fanTL.play();
// }
// }



const introTL = gsap.timeline();


export function IntroAnimation() {
    introTL.from("#spikey-shape-big", {duration: 1.5, scale: 0, transformOrigin: "center"}, "play")
    // .to("#pause-1, #pause-2",{duration:3, rotate:-90},"play")
        .to("#Toxic-2",{duration:.01, x:720},"play")
        .to("#phone",{duration: .01, y:125},"play")
        .to("#Nav",{duration: .01, y:125},"play")
        .from("#logo-circle-big", {duration: 3, scale: 10, transformOrigin: "center"}, "play")
        .to("#big-logo", {duration: 2, scale: .2, y: -320, transformOrigin: "center"}, "play2")

        .to("#speed-circle", {duration: .01, rotate:30, transformOrigin: "center"}, "play2")
        
        .fromTo("#speed-circle, #HC-circle, #music-circle, #nav-circle, #phone-circle",{drawSVG:"0%"}, {duration: 1.5, drawSVG:"100%"}, "play2.5")
        
        .to("#music-stuff, #HC-stuff, #nav-stuff, #phone-stuff, #speed-stuff", {duration: 1, opacity: 1, transformOrigin: "center"}, "play3")


        .from("#clock-weather-date", {duration: 1, opacity: 0, x: 30, transformOrigin: "center"}, "play3")
        .to("#clock-weather-date", {duration: 1, opacity: 1, transformOrigin: "center"}, "play3")
        .from("#prndl", {duration: 1, opacity: 0, x: -30, transformOrigin: "center"}, "play3")
        .to("#prndl", {duration: 1, opacity: 1, transformOrigin: "center"}, "play3")

        
        // .to("#music-circle",{duration: 3, opacity:0},"play3")
        // .to("#HC-circle",{duration: 3, opacity:0},"play3")
        // .to("#nav-circle",{duration: 3, opacity:0},"play3")
        // .to("#phone-circle",{duration: 3, opacity:0},"play3");
    return introTL;
}


const itemsInTL = gsap.timeline();


export function itemsInAnimation() {
    itemsInTL.fromTo("#fuel-filler",{drawSVG:"0%"}, {duration: 1, drawSVG:"100%"}, "play3")
    .fromTo("#fuel-line",{drawSVG:"0%"}, {duration: 1, drawSVG:"100%"}, "play3")
    .from("#F, #E", {duration: 1, opacity: 0, transformOrigin: "left bottom"}, "play3")

    .from("#tick-1", {duration: 1, opacity: 0, scaleX:1, transformOrigin: "left bottom"}, "play3")
    .from("#tick-2", {duration: 1, opacity: 0, scaleX:1, transformOrigin: "left"}, "play3")
    .from("#tick-3", {duration: 1, opacity: 0, scaleX:1, transformOrigin: "left top"}, "play3")
    .from("#tick-4", {duration: 1, opacity: 0, scaleY:1, transformOrigin: "top"}, "play3")
    .from("#tick-5", {duration: 1, opacity: 0, scaleY:1, transformOrigin: "right top"}, "play3")


    .from("#hotseat, #fan, #border-seat", {duration: 1, opacity: 0, x:30, stagger:.2, transformOrigin: "right"}, "play3")
    .from("#Triangle-1", {duration: 1, opacity: 0, y:10, transformOrigin: "right"}, "play3")
    .from("#Triangle-2", {duration: 1, opacity: 0, y:5, transformOrigin: "right"}, "play3")
    .from("#HC-counter", {duration: 1, opacity: 0}, "play3")
    .from("#H, #C, #degree", {duration: 1, opacity: 0, transformOrigin: "left bottom"}, "play3")
    



    return itemsInTL;
}