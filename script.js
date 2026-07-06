/* ============================================================
   SCRIPT.JS
   PART 1 / 4

   Loader
   Cursor Glow
   Sticky Navbar
   Smooth Scroll
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       LOADER
    ========================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";

            setTimeout(() => {

                loader.style.display = "none";

            },800);

        },1500);

    });





    /* ==========================================
       CURSOR GLOW
    ========================================== */

    const glow = document.querySelector(".cursor-glow");

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    document.addEventListener("mousemove",(e)=>{

        mouseX = e.clientX;
        mouseY = e.clientY;

    });

    function animateGlow(){

        currentX += (mouseX-currentX)*0.12;
        currentY += (mouseY-currentY)*0.12;

        glow.style.left = currentX+"px";
        glow.style.top = currentY+"px";

        requestAnimationFrame(animateGlow);

    }

    animateGlow();





    /* ==========================================
       STICKY NAVBAR
    ========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            header.style.background="rgba(5,8,22,.94)";
            header.style.boxShadow="0 15px 45px rgba(0,0,0,.35)";

        }

        else{

            header.style.background="rgba(5,8,22,.72)";
            header.style.boxShadow="none";

        }

    });





    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });





    /* ==========================================
       BUTTON HOVER EFFECT
    ========================================== */

    const buttons=document.querySelectorAll(

        ".primary-btn,.secondary-btn,.resume-btn"

    );

    buttons.forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="translateY(-5px) scale(1.02)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="translateY(0)";

        });

    });





    /* ==========================================
       IMAGE PARALLAX
    ========================================== */

    const image=document.querySelector(".profile-wrapper");

    document.addEventListener("mousemove",(e)=>{

        const x=(window.innerWidth/2-e.pageX)/50;
        const y=(window.innerHeight/2-e.pageY)/50;

        image.style.transform=

        `rotateY(${x}deg) rotateX(${-y}deg)`;

    });





    /* ==========================================
       RESET IMAGE
    ========================================== */

    document.addEventListener("mouseleave",()=>{

        image.style.transform=

        "rotateX(0deg) rotateY(0deg)";

    });

});

/* ============================================================
   SCRIPT.JS
   PART 2 / 4

   Scroll Reveal
   Animated Counters
   Active Navigation
   Hero Typing Effect
============================================================ */


/* ============================================================
SCROLL REVEAL
============================================================ */

const revealElements = document.querySelectorAll(

".section-header,.about-card,.stat,.content,.workflow div,.project-card,.skill-card,.paper,.achievement,.contact-card"

);

function revealOnScroll(){

    const trigger = window.innerHeight * 0.88;

    revealElements.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<trigger){

            item.classList.add("active");
            item.classList.add("reveal");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();






/* ============================================================
ANIMATED COUNTERS
============================================================ */

const counters=document.querySelectorAll(".stat h2");

let counterStarted=false;

function startCounters(){

    if(counterStarted) return;

    const stats=document.querySelector(".stats");

    const trigger=stats.getBoundingClientRect().top;

    if(trigger<window.innerHeight-120){

        counterStarted=true;

        counters.forEach(counter=>{

            const original=counter.innerText;

            const number=parseInt(original);

            const suffix=original.replace(number,"");

            let value=0;

            const speed=40;

            function update(){

                value+=Math.ceil(number/40);

                if(value<number){

                    counter.innerText=value+suffix;

                    requestAnimationFrame(update);

                }

                else{

                    counter.innerText=number+suffix;

                }

            }

            update();

        });

    }

}

window.addEventListener("scroll",startCounters);

startCounters();






/* ============================================================
ACTIVE NAVIGATION
============================================================ */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-180;

        const height=section.offsetHeight;

        if(scrollY>=top && scrollY<top+height){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});






/* ============================================================
HERO TYPING EFFECT
============================================================ */

const heroTitle=document.querySelector(".hero h2");

const fullText=heroTitle.innerText;

heroTitle.innerText="";

let letter=0;

function typeWriter(){

    if(letter<fullText.length){

        heroTitle.innerHTML+=fullText.charAt(letter);

        letter++;

        setTimeout(typeWriter,35);

    }

}

setTimeout(typeWriter,1700);






/* ============================================================
FLOATING TAGS
============================================================ */

const tags=document.querySelectorAll(".hero-tags span");

tags.forEach((tag,index)=>{

    tag.style.animation=

    `floatTag 3s ease-in-out ${index*.2}s infinite`;

});






/* ============================================================
TAG ANIMATION
============================================================ */

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatTag{

0%{transform:translateY(0)}

50%{transform:translateY(-8px)}

100%{transform:translateY(0)}

}

`;

document.head.appendChild(style);






/* ============================================================
SECTION FADE DELAY
============================================================ */

document.querySelectorAll(".about-card,.project-card,.skill-card,.paper,.achievement").forEach((card,index)=>{

    card.style.transitionDelay=(index*0.08)+"s";

});

/* ============================================================
   SCRIPT.JS
   PART 3 / 4

   3D Cards
   Magnetic Buttons
   Scroll Progress
   Back To Top
   Section Progress
============================================================ */


/* ============================================================
3D CARD EFFECT
============================================================ */

const cards=document.querySelectorAll(

".about-card,.project-card,.skill-card,.paper,.achievement,.content"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x-rect.width/2)/18);
const rotateX=((rect.height/2-y)/18);

card.style.transform=

`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1000px) rotateX(0) rotateY(0)";

});

});






/* ============================================================
MAGNETIC BUTTONS
============================================================ */

const magneticButtons=document.querySelectorAll(

".primary-btn,.secondary-btn,.resume-btn"

);

magneticButtons.forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const moveX=(x-rect.width/2)/6;
const moveY=(y-rect.height/2)/6;

button.style.transform=

`translate(${moveX}px,${moveY}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});






/* ============================================================
SCROLL PROGRESS BAR
============================================================ */

const progress=document.createElement("div");

progress.id="scroll-progress";

document.body.appendChild(progress);

progress.style.position="fixed";
progress.style.left="0";
progress.style.top="0";
progress.style.height="4px";
progress.style.width="0%";
progress.style.zIndex="999999";
progress.style.background="linear-gradient(90deg,#2563eb,#60a5fa)";

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-
window.innerHeight;

const current=window.scrollY;

progress.style.width=

(current/total)*100+"%";

});






/* ============================================================
BACK TO TOP BUTTON
============================================================ */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}

else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});






/* ============================================================
SECTION HIGHLIGHT
============================================================ */

const headers=document.querySelectorAll(".section-header h2");

window.addEventListener("scroll",()=>{

headers.forEach(title=>{

const rect=title.getBoundingClientRect();

if(rect.top<window.innerHeight*0.75){

title.style.transform="translateY(0)";
title.style.opacity="1";

}

});

});






/* ============================================================
IMAGE GLOW
============================================================ */

const profile=document.querySelector(".profile-wrapper");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/35;

const y=(window.innerHeight/2-e.clientY)/35;

profile.style.boxShadow=

`${-x}px ${-y}px 80px rgba(59,130,246,.35),
0 35px 70px rgba(0,0,0,.45)`;

});






/* ============================================================
PROJECT CARD HOVER
============================================================ */

const projectCards=document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".45s";

});

});






/* ============================================================
TEXT PARALLAX
============================================================ */

const hero=document.querySelector(".hero-left");

window.addEventListener("mousemove",(e)=>{

const moveX=(e.clientX-window.innerWidth/2)/120;
const moveY=(e.clientY-window.innerHeight/2)/120;

hero.style.transform=

`translate(${moveX}px,${moveY}px)`;

});






/* ============================================================
LOGO ANIMATION
============================================================ */

const logo=document.querySelector(".logo");

setInterval(()=>{

logo.style.opacity=".7";

setTimeout(()=>{

logo.style.opacity="1";

},600);

},3500);






/* ============================================================
BUTTON RIPPLE
============================================================ */

document.querySelectorAll("button,a").forEach(item=>{

item.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});

/* ============================================================
   SCRIPT.JS
   PART 4 / 4

   Background Particles
   Floating Protocols
   Performance
   Mobile Menu
   Easter Egg
   Final Initialization
============================================================ */


/* ============================================================
BACKGROUND PARTICLES
============================================================ */

const particleContainer = document.createElement("div");
particleContainer.id = "particles";
document.body.appendChild(particleContainer);

for(let i=0;i<35;i++){

    const p=document.createElement("span");

    p.className="particle";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=(12+Math.random()*18)+"s";

    p.style.animationDelay=Math.random()*10+"s";

    p.style.opacity=(0.15+Math.random()*0.35);

    p.style.transform=`scale(${0.5+Math.random()*1.2})`;

    particleContainer.appendChild(p);

}




/* ============================================================
FLOATING PROTOCOL WORDS
============================================================ */

const words=[

"SystemVerilog",
"UVM",
"LPDDR",
"DDR",
"SPI",
"I²C",
"AHB",
"APB",
"Coverage",
"Assertions",
"Regression",
"Scoreboard",
"PHYInit",
"Verification",
"Driver",
"Monitor",
"Sequence",
"RAL"

];

const floating=document.createElement("div");

floating.id="floating-tech";

document.body.appendChild(floating);

words.forEach((word,index)=>{

const span=document.createElement("span");

span.innerText=word;

span.style.left=Math.random()*90+"vw";

span.style.top=Math.random()*90+"vh";

span.style.animationDelay=index*.6+"s";

span.style.animationDuration=(18+Math.random()*10)+"s";

floating.appendChild(span);

});






/* ============================================================
TWINKLING STARS
============================================================ */

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*8+"s";

document.body.appendChild(star);

}






/* ============================================================
PERFORMANCE
============================================================ */

window.addEventListener(

"scroll",

()=>{},{

passive:true

}

);






/* ============================================================
MOBILE MENU
============================================================ */

const nav=document.querySelector("nav");

const menu=document.createElement("div");

menu.innerHTML='<i class="fas fa-bars"></i>';

menu.className="mobile-menu";

nav.appendChild(menu);

menu.onclick=()=>{

document.querySelector("nav ul").classList.toggle("showMenu");

};






/* ============================================================
KEYBOARD SHORTCUT
============================================================ */

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});






/* ============================================================
VERIFICATION CONSOLE
============================================================ */

let keys=[];

document.addEventListener("keydown",(e)=>{

keys.push(e.key.toLowerCase());

keys=keys.slice(-3);

if(keys.join("")==="uvm"){

console.clear();

console.log(

"%cVerification Environment Loaded Successfully",

"color:#60a5fa;font-size:20px;font-weight:bold;"

);

console.log(

"%cCoverage Goal : 100%",

"color:#22c55e;font-size:16px"

);

console.log(

"%cAssertions : PASS",

"color:#22c55e;font-size:16px"

);

console.log(

"%cRegression : PASS",

"color:#22c55e;font-size:16px"

);

console.log(

"%cDesigned & Developed by Anika Tasnim",

"color:white;font-size:16px"

);

}

});






/* ============================================================
PAGE TITLE
============================================================ */

const originalTitle=document.title;

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

document.title="Come back 👋";

}

else{

document.title=originalTitle;

}

});






/* ============================================================
IMAGE LAZY ANIMATION
============================================================ */

document.querySelectorAll("img").forEach(img=>{

img.onload=()=>{

img.style.opacity=1;

};

});






/* ============================================================
FINAL MESSAGE
============================================================ */

console.log(

"%cPortfolio Loaded",

"color:#3b82f6;font-size:22px;font-weight:bold;"

);

console.log(

"%cAnika Tasnim",

"color:white;font-size:18px"

);

console.log(

"%cSenior Design Verification Engineer",

"color:#94a3b8;font-size:16px"

);

