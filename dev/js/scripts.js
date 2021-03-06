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
.from("#blink" , {delay:1, duration: 0, opacity:0}, "blinking1")
.to("#eye" , {delay:1, duration: 0, opacity:0}, "blinking1")
.to("#blink" , {delay:0.1, duration: 0, opacity:0}, "blinking2")
.to("#eye" , {delay:0.1, duration: 0, opacity:100}, "blinking2")
.to("#blink", {delay:0.1, duration: 0, opacity:100}, "blinking3")
.to("#eye" , {delay:0.1, duration: 0, opacity:0}, "blinking3")
.to("#blink", {delay:0.1, duration: 0, opacity:0}, "blinking4")
.to("#eye" , {delay:0.1, duration: 0, opacity:100}, "blinking4")
// .to("#eye", {delay:3, duration: 2, morphSVG:"#blink"}, "blink1")
.to("#Bird", {delay:1.5, x:480, duration: 10, ease: "back.out(0.7), power1.in(0.7)"}, "moveRight1")
.to("#Helmet", {delay:1.5, x:480, duration: 10, ease: "back.out(0.7), power1.in(0.7)"}, "moveRight1")
.add(motionoftheocean(), "moveRight1")
// .add(forwardsplashes(), "moveRight1" )
// .from("#RightSplash", {delay:0.1, opacity:0}, "moveRight1" )
// .to("#RightSplash", {delay:1, opacity:0}, "moveRight1")
// .from("#RightSplash", {delay: 4, opacity:0}, "moveRight1")
// .to("#RightSplash", {delay:5, opacity:0}, "moveRight1")
.from("#Birdreverse", {opacity:0, duration: 0.01, delay:0}, "flipit")
.to("#Bird", {opacity:0, duration: 0.01, delay:0}, "flipit")
.to("#Bird", {delay:"none", x:20, duration: 10, ease: "back.inOut(0.7)"}, "moveLeft1")
.to("#Helmet", {delay:0, x:20, duration: 10, ease: "back.inOut(0.7)"}, "moveLeft1")
.to("#Birdreverse", {opacity:0, duration: 0.01, delay:0}, "flipit2")
.to("#Bird", {opacity:100, duration: 0.01, delay:0}, "flipit2")
.to("#Bird", {delay:0, x:250, duration: 6, ease: "back.inOut(0.7)"}, "moveRight2")
.to("#Helmet", {delay:0, x:250, duration: 6, ease: "back.inOut(0.7)"}, "moveRight2")
.to("#Bird", {delay:0, y:-250, duration: 2.5}, "moveUp")
.to("#Helmet", {delay:0, y:-250, duration: 2.5}, "moveUp")
// .from("#MiddleSplash", {opacity:0, delay:.2}, "moveUp")
// .to("#MiddleSplash", {opacity:0, delay:.4}, "moveUp")

.from("#blink" , {delay:1, duration: 0, opacity:0}, "blinking5")
.to("#eye" , {delay:1, duration: 0, opacity:0}, "blinking5")
.to("#blink" , {delay:0.1, duration: 0, opacity:0}, "blinking6")
.to("#eye" , {delay:0.1, duration: 0, opacity:100}, "blinking6")
.to("#blink", {delay:0.1, duration: 0, opacity:100}, "blinking7")
.to("#eye" , {delay:0.1, duration: 0, opacity:0}, "blinking7")
.to("#blink", {delay:0.1, duration: 0, opacity:0}, "blinking8")
.to("#eye" , {delay:0.1, duration: 0, opacity:100}, "blinking8")
.from("#awing",{opacity: 0, delay: 1.5, duration:0.05}, "goodbye" )
.to("#awing",{morphSVG:"#WingDown", delay: 0.5, duration: 0.01}, "goodbye4")
.to("#Line1", {opacity:0, delay:0.5, duration:0}, "goodbye4")
.to("#Line2", {opacity:0, delay:0.5, duration:0}, "goodbye4")
// .from("#flywing", {opacity:0, delay:1}, "wingflap")
.to("#Bird", {delay: 0.5, x:500, y: -500, duration: 2}, "goodbye4")
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
    let tidel = gsap.timeline ({repeat:5});

    tidel
    .to("#Waves", {delay:0, duration: 3, morphSVG:"#WavesReverse"}, "tide1")
    .to("#WaveMask", {delay:0, duration: 3, morphSVG:"#WaveMask2"}, "tide1")

    .to("#Waves", {delay:0, duration: 3, morphSVG:"#Waves"}, "tide2")

    .to("#WaveMask", {delay:0, duration: 3, morphSVG:"#WaveMask"}, "tide2")

    // .from("#WaveMask2", {delay:0, duration: 2, morphSVG:"#Waves"}, "tide2")

 ;
}

gsap.set("#WavesReverse", {opacity:0})
gsap.set("#WaveMask2", {opacity:0})
gsap.set("#WingDown", {opacity:0})

// function birdswap(){

//     let tl =gsap.timeline({});

//     tl
//     // .to("#Bird", {delay:2, duration:0, opacity: 0}, "switchem")

//     .from("#flyaway", {delay:2, duration:0, opacity:0}, "switchem")
// }




// 