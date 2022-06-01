import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { TweenLite } from "gsap/gsap-core";

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";


//  Register Pluging
gsap.registerPlugin(DrawSVGPlugin); 
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

const logoanim = gsap.timeline ({repeat: -1});


// const randomX = random(1, 10);

// const tlarray = [svganim, svganim2, svganim3]; 
// let randomtl = gsap.utils.random([0,1,2]); //[0,1,2] - Replace after third timeline
// // console.log(randomtl);

// tlarray[randomtl].play();

logoanim
.from("#BirdFlying", {x: -300, y: -500, duration:4}, "arrival")
.to("#BirdFlying", {delay:0, duration:0.05, opacity: 0}, "standup")
.from("#Bird" ,{delay:0, duration:0.05, opacity: 0}, "standup")
// .to("#eye", {delay:3, duration: 2, morphSVG:"#blink"}, "blink1")
.to("#Bird", {delay:0, x:500, duration: 13, ease: "back.out(1)"}, "moveRight1")
.to("#Helmet", {delay:0, x:500, duration: 13, ease: "back.out(1)"}, "moveRight1")
.from("#Splash1", {delay:0.2, opacity:0}, "moveRight1" )
.to("#Splash1", {delay:1, opacity:0}, "moveRight1")
.from("#Splash2", {delay: 4, opacity:0}, "moveRight1" )
.to("#Splash2", {delay:5, opacity:0}, "moveRight1")
.to("#Bird", {delay:0, x:0, duration: 13, ease: "back.out(1)"}, "moveLeft1")
.to("#Helmet", {delay:0, x:0, duration: 13, ease: "back.out(1)"}, "moveLeft1")
.from("#Splash3", {delay:1.5, opacity:0}, "moveLeft1" )
.to("#Splash3", {delay:2, opacity:0}, "moveLeft1")
.to("#Bird", {delay:0, x:250, duration: 7, ease: "back.out(1)"}, "moveRight2")
.to("#Helmet", {delay:0, x:250, duration: 7, ease: "back.out(1)"}, "moveRight2")
.to("#Bird", {delay:0, y:-250, duration: 7}, "moveUp")
.to("#Helmet", {delay:0, y:-250, duration: 7}, "moveUp")



.from("#flyaway", {opacity:0})



;






// 