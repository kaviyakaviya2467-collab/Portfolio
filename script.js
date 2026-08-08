/* ============================
   PORTFOLIO SCRIPT
============================ */

// =============================
// Typed.js Animation
// =============================

var typed = new Typed("#typing", {

    strings: [
    "AI & ML Student",
    "Deep Learning Enthusiast",
    "Python Programmer",
    "Data Analytics Learner",
    "Future AI Engineer"
],

    typeSpeed: 80,

    backSpeed: 50,

    backDelay: 1500,

    loop: true

});


// =============================
// AOS Animation
// =============================

AOS.init({

    duration: 1200,

    once: false,

    easing: "ease-in-out"

});


// =============================
// Navbar Scroll Effect
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.style.background = "rgba(5,10,20,.95)";

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";

    }

    else{

        header.style.background = "rgba(13,17,23,.85)";

        header.style.boxShadow = "none";

    }

});


// =============================
// Active Navigation
// =============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


// =============================
// Smooth Scroll
// =============================

navLinks.forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// =============================
// Scroll To Top Button
// =============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.right="25px";

topBtn.style.bottom="30px";

topBtn.style.width="50px";

topBtn.style.height="50px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="#00d9ff";

topBtn.style.color="#111";

topBtn.style.fontSize="22px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.zIndex="999";

topBtn.style.transition=".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// =============================
// Reveal Cards
// =============================

const cards=document.querySelectorAll(".skill-card,.project-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


// =============================
// Contact Form
// =============================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});


// =============================
// Loading Animation
// =============================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});


// =============================
// Cursor Glow
// =============================

const glow=document.createElement("div");

document.body.appendChild(glow);

glow.style.position="fixed";

glow.style.width="18px";

glow.style.height="18px";

glow.style.borderRadius="50%";

glow.style.pointerEvents="none";

glow.style.background="#00d9ff";

glow.style.boxShadow="0 0 25px #00d9ff";

glow.style.transform="translate(-50%,-50%)";

glow.style.zIndex="99999";

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});


// =============================
// Console Message
// =============================

console.log("%cWelcome to Kaviya's Portfolio","color:#00d9ff;font-size:20px;font-weight:bold;");

/* ============================
   Loader
============================ */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

});