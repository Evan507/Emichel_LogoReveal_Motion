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
.from("Waves", 1, {drawSVG:"100% 100%"})
.from("#BirdFlying", {x: -300, y: -500, duration:4}, "arrival")
.to("#BirdFlying", {delay:0, duration:0.05, opacity: 0}, "standup")
.from("#Bird" ,{delay:0, duration:0.05, opacity: 0}, "standup")
// .to("#eye", {delay:3, duration: 2, morphSVG:"#blink"}, "blink1")
.to("#Bird", {delay:1.5, x:500, duration: 13, ease: "back.out(1)"}, "moveRight1")
.to("#Helmet", {delay:1.5, x:500, duration: 13, ease: "back.out(1)"}, "moveRight1")
.add(forwardsplashes(), "moveRight1" )
// .from("#RightSplash", {delay:0.1, opacity:0}, "moveRight1" )
// .to("#RightSplash", {delay:1, opacity:0}, "moveRight1")
// .from("#RightSplash", {delay: 4, opacity:0}, "moveRight1")
// .to("#RightSplash", {delay:5, opacity:0}, "moveRight1")
.to("#Bird", {delay:0, x:0, duration: 13, ease: "power.out(4), power.in(4)"}, "moveLeft1")
.to("#Helmet", {delay:0, x:0, duration: 13, ease: "power.out(4), power.in(4)"}, "moveLeft1")
.from("#LeftSplash", {delay:1.5, opacity:0}, "moveLeft1" )
.to("#LeftSplash", {delay:2, opacity:0}, "moveLeft1")
.to("#Bird", {delay:0, x:250, duration: 7, ease: "power.out(4), power.in(4)"}, "moveRight2")
.to("#Helmet", {delay:0, x:250, duration: 7, ease: "power.out(4), power.in(4)"}, "moveRight2")
.to("#Bird", {delay:0, y:-250, duration: 7}, "moveUp")
.to("#Helmet", {delay:0, y:-250, duration: 7}, "moveUp")
.from("#MiddleSplash", {opacity:0, delay:.2}, "moveUp")
.to("#MiddleSplash", {opacity:0, delay:.4}, "moveUp")
// .add(birdswap(), "moveUp")
// .to("#Bird", {delay:2, duration:0, opacity: 0}, "moveUp")
.from("#flyaway", {delay:2, duration:0, opacity:0})



;


function forwardsplashes(){
    let tl = gsap.timeline ({});

    tl

    .from("#RightSplash", {delay:2.1, opacity:0}, "splash1a" )
.to("#RightSplash", {delay:2.3, opacity:0}, "splash1a")
.to("#RightSplash", {delay: 3.5, opacity:100}, "splash1b")
.to("#RightSplash", {delay:3.7, opacity:0}, "splash1b")

return tl; 

}

// function birdswap(){

//     let tl =gsap.timeline({});

//     tl
//     // .to("#Bird", {delay:2, duration:0, opacity: 0}, "switchem")

//     .from("#flyaway", {delay:2, duration:0, opacity:0}, "switchem")
// }




// 