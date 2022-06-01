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
.to("#Bird", {x:500, duration: 7, ease: "back.out(1.7)"}, "moveRight1")
.to("#Helmet", {x:500, duration: 7, ease: "back.out(1.7)"}, "moveRight1")
.to("#Bird", {x:0, duration: 7, ease: "back.out(1.7)"}, "moveLeft1")
.to("#Helmet", {x:0, duration: 7, ease: "back.out(1.7)"}, "moveLeft1")
.to("#Bird", {x:250, duration: 7, ease: "back.out(1.7)"}, "moveRight2")
.to("#Helmet", {x:250, duration: 7, ease: "back.out(1.7)"}, "moveRight2")


.from("#BirdFlying2", {opacity:0})







;



// 