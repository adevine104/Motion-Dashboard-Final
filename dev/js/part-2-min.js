import{gsap}from"gsap";import{DrawSVGPlugin}from"gsap/DrawSVGPlugin";gsap.registerPlugin(DrawSVGPlugin);const Part2TL=gsap.timeline();Part2TL.fromTo("#blue-line",{drawSVG:"0%"},{duration:1.5,drawSVG:"100%"},"play4");export function IntroAnimation(){return Part2TL}