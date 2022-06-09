import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

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
.from("#Waves", {duration: 2, drawSVG:0})
.from("#BirdFlying", {x: -300, y: -500, duration:4}, "arrival")
.to("#awing", {opacity:0, delay:0, duration:0.05})
.to("#BirdFlying", {delay:0, duration:0.05, opacity: 0}, "standup")
.from("#Bird" ,{delay:0, duration:0.05, opacity: 0}, "standup")

// .to("#eye", {delay:3, duration: 2, morphSVG:"#blink"}, "blink1")
.to("#Bird", {delay:1.5, x:480, duration: 13, ease: "back.out(1)"}, "moveRight1")
.to("#Helmet", {delay:1.5, x:480, duration: 13, ease: "back.out(1)"}, "moveRight1")
.add(motionoftheocean(), "moveRight1")
// .add(forwardsplashes(), "moveRight1" )
// .from("#RightSplash", {delay:0.1, opacity:0}, "moveRight1" )
// .to("#RightSplash", {delay:1, opacity:0}, "moveRight1")
// .from("#RightSplash", {delay: 4, opacity:0}, "moveRight1")
// .to("#RightSplash", {delay:5, opacity:0}, "moveRight1")
.to("#Bird", {delay:"none", x:20, duration: 13, ease: "back.out(1)"}, "moveLeft1")
.to("#Helmet", {delay:0, x:20, duration: 13, ease: "back.out(1)"}, "moveLeft1")
.from("#LeftSplash", {delay:1.5, opacity:0}, "moveLeft1" )
.to("#LeftSplash", {delay:2, opacity:0}, "moveLeft1")
.to("#Bird", {delay:0, x:250, duration: 7, ease: "back.out(1)"}, "moveRight2")
.to("#Helmet", {delay:0, x:250, duration: 7, ease: "back.out(1)"}, "moveRight2")
.to("#Bird", {delay:0, y:-250, duration: 7}, "moveUp")
.to("#Helmet", {delay:0, y:-250, duration: 7}, "moveUp")
.from("#MiddleSplash", {opacity:0, delay:.2}, "moveUp")
.to("#MiddleSplash", {opacity:0, delay:.4}, "moveUp")

.from("#awing",{opacity: 0, delay: 1.5, duration:0.05}, "goodbye" )
.to("#Bird", {delay: 0.5, x:500, y: -500, duration: 2}, "goodbye2")


.to("#Waves", {duration: 2, drawSVG:0}, "wavesgone")
.to("#WaveMask", {delay: 0.5, opacity: 0, duration: 0.5}, "wavesgone")

// .to("Helmet", {y:250 }, "finalpositioning")



;


// function forwardsplashes(){
//     let tl = gsap.timeline ({});

//     tl

//     .from("#RightSplash", {delay:1.6, opacity:0}, "splash1a" )
// .to("#RightSplash", {delay:1.8, opacity:0}, "splash1a")
// .to("#RightSplash", {delay: 3, opacity:100}, "splash1b")
// .to("#RightSplash", {delay:3.2, opacity:0}, "splash1b")

// return tl; 

// }

function motionoftheocean(){
    let tl = gsap.timeline ({repeat:-1});

    tl 
    .to("#Waves", {delay:0, duration: 2, morphSVG:"#WavesReverse"}, "tide1")
    .to("#WaveMask", {delay:0, duration: 2, morphSVG:"#WaveMask2"}, "tide1")
    .to("#Waves", {delay:0, duration: 2, morphSVG:"#Waves"}, "tide2")
    .to("#WaveMask", {delay:0, duration: 2, morphSVG:"WaveMask"}, "tide2")

}

gsap.set("#WavesReverse", {opacity:0})
gsap.set("#WaveMask2", {opacity:0})

// function birdswap(){

//     let tl =gsap.timeline({});

//     tl
//     // .to("#Bird", {delay:2, duration:0, opacity: 0}, "switchem")

//     .from("#flyaway", {delay:2, duration:0, opacity:0}, "switchem")
// }




// 