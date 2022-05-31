import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";


//  Register Pluging
gsap.registerPlugin(DrawSVGPlugin); 
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

const svganim = gsap.timeline ({repeat: -1, paused:true});
const svganim2 = gsap.timeline ({repeat: -1, paused:true});
const svganim3 = gsap.timeline ({repeat: -1, paused:true});

// const randomX = random(1, 10);

const tlarray = [svganim, svganim2, svganim3]; 
let randomtl = gsap.utils.random([0,1,2]); //[0,1,2] - Replace after third timeline
// console.log(randomtl);

tlarray[randomtl].play();

svganim

// .from(".bubble1", {scale: 0, duration:1.5, ease: "elastic.out(1.5, 0.5)", transformOrigin:'50% 50%'}, "grow1")
.add(bub1(), "dumb")
.add(drift1(), "dumb")

// .from(".bubble2", {scale: 0, duration:1.5, ease: "elastic.out(1.25, 0.5)", transformOrigin:'50% 50%'}, "grow2")
.add(bub2(), "dumb")
.add(drift2(), "dumb")
// .from(".bubble3", {scale: 0, duration:1.5, ease: "elastic.out(1, 0.5)", transformOrigin:'50% 50%'}, "grow3")
.add(bub3(), "dumb")
.add(drift3(), "dumb")

// .to(".bubble1", {ease: "elastic.out(1.5, 0.5)", transformOrigin:'50% 50%', scale:1.2}, "balloon1")
// .to(".bubble1", {opacity: 0, delay: 0, duration: .01}, "gone1")
// .from(".pop1", {opacity:0, duration: .02}, "pop1")
// .to(".bubble2", {ease: "elastic.out(1.5, 0.5)", transformOrigin:'50% 50%', scale:1.2}, "balloon2")
// .to(".bubble2", {opacity: 0, delay: 0, duration: .01}, "gone2")
// .from(".pop2", {opacity:0, duration: .02}, "pop2")
// .to(".bubble3", {ease: "elastic.out(1.5, 0.5)", transformOrigin:'50% 50%', scale:1.2}, "balloon3")
// .to(".bubble3", {opacity: 0, delay: 0, duration: .01}, "gone3")
// .from(".pop3", {opacity:0, duration: .02}, "pop3")
// .to(".pop1", {opacity:0, duration:1}, "fadeffect")
// // .to(".pop2", {opacity:0, duration:1}, "fadeffect")
// .to(".pop3", {opacity:0, duration:1}, "fadeffect")







;



svganim2

.from(".snail", {opacity:0, duration: 0.001})
.to(".snail", {duration: 10, motionPath:{path: "#visor", align: "#visor", alignOrigin:[0.55, 1], start:1, end:0, autoRotate: true}, ease:"none"})

;

svganim3

.from("#fish1", {opacity:0, duration: 0.0001 }, "fishappear1"  )
.to("#fish1", {x: 150, duration: 4,  ease:"none"}, "fishswim1" )
.from("#fish2", {opacity:0, duration: 0.0001 }, "fishappear2"  )
.to("#fish2", {x: -150, duration: 4,  ease:"none"}, "fishswim2" )
.from("#fish3", {opacity:0, duration: 0.0001 }, "fishappear3"  )
.to("#fish3", {x: 150, duration: 4,  ease:"none"}, "fishswim3")

;

gsap.set(".snail", {scaleY: -1})
gsap.set(".snail", {scaleX: -1})


svganim

function bub1(){
    let tl = gsap.timeline({repeat:-1, repeatDelay:3});

    tl
    .from(".bubble1", {scale: 0, duration:1.5, ease: "elastic.out(1.5, 0.5)", transformOrigin:'50% 50%'}, "grow1")
    // .to(".bubble1", {opacity: 100,  duration:5})
    .to(".bubble1", {delay: 4, ease: "elastic.out(1.5, 0.5)", transformOrigin:'50% 50%', scale:1.2}, "balloon1")
    .to(".bubble1", {opacity: 0, delay: 0, duration: .01}, "gone1")
.from(".pop1", {opacity:0, duration: .02}, "pop1")
.to(".pop1", {opacity:0, duration:1}, "fadeffect")

    return tl;
}

function bub2(){
    let tl = gsap.timeline({repeat:-1, repeatDelay:2});

    tl

    .from(".bubble2", {delay: 1, scale: 0, duration:1.5, ease: "elastic.out(1.25, 0.5)", transformOrigin:'50% 50%'}, "grow2")
    // .from(".bubble1", {opacity: 100,  duration:10})
    .to(".bubble2", {delay:4, ease: "elastic.out(1.5, 0.5)", transformOrigin:'50% 50%', scale:1.2}, "balloon2")
.to(".bubble2", {opacity: 0, delay: 0, duration: .01}, "gone2")
.from(".pop2", {opacity:0, duration: .02}, "pop2")
.to(".pop2", {opacity:0, duration:1}, "fadeffect")

    return tl;
}

function bub3(){
    let tl = gsap.timeline({repeat:-1, repeatDelay:1});

    tl
    .from(".bubble3", {delay:2, scale: 0, duration:1.5, ease: "elastic.out(1, 0.5)", transformOrigin:'50% 50%'}, "grow3")
    // .from(".bubble1", {opacity: 100,  duration:10})
    .to(".bubble3", {delay:4, ease: "elastic.out(1.5, 0.5)", transformOrigin:'50% 50%', scale:1.2}, "balloon3")
.to(".bubble3", {opacity: 0, delay: 0, duration: .01}, "gone3")
.from(".pop3", {opacity:0, duration: .02}, "pop3")
.to(".pop3", {opacity:0, duration:1}, "fadeffect")


    return tl;
};

function drift1(){
    let tl = gsap.timeline({repeat: -1});

    tl
  
    // .to(".bubble1", {x:-10, duration: 3})
    .to(".bubble1", {y:9, duration: 3})
    // .to(".bubble1", {x:10, duration: 3})
    .to(".bubble1", {y:-10, duration: 3})
    .to(".bubble1", {y:10, duration: 3});

    return tl;
};

function drift2(){
    let tl = gsap.timeline({repeat: -1});

    tl
  
    
    .to(".bubble2", {y:10, duration: 5})

    .to(".bubble2", {y:-10, duration: 5})
    .to(".bubble2", {y:10, duration: 5});

    return tl;
}

function drift3(){
    let tl = gsap.timeline({repeat: -1});

    tl
  

    .to(".bubble3", {y:10, duration: 7})
  
    .to(".bubble3", {y:-10, duration: 7})
    .to(".bubble3", {y:10, duration: 7});

    return tl;
};




