

const tl = gsap.timeline({defaults:{ease:"power1.out"}});


tl.to(".text",{y:"0%", duration: 1,stagger:0.25 });
tl.to(".slider",{y:"-100%",duration:1.5,delay:0.5});
tl.to(".intro",{y:"-100%",duration:1},"-=1");
tl.fromTo("nav",{opacity:0},{opacity:1,duration:1});
tl.fromTo(".big-text",{opacity:0},{opacity:1,duration:1},"-=1");

var icon = document.getElementById("icon");
 icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "img/sun.png";
    }
    else{
        icon.src = "img/moon.png";
    }
 }