let controller;
let slideScene;
let pageScene;

function animateSlides() {
  // Init controller
  controller = new ScrollMagic.Controller();
  // select some things
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");

  // loop over each slide
  sliders.forEach((slide, index, slides) => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");

    const slideT1 = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });

    slideT1.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slideT1.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slideT1.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
    slideT1.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.5");

    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false,
    })
      .setTween(slideT1)
      .addIndicators({
        colorStart: "white",
        colorTrigger: "white",
        name: "slide",
      })
      .addTo(controller);

    const pageT1 = gsap.timeline();
    let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
    pageT1.fromTo(nextSlide, { y: "0%" }, { y: "50%" });
    pageT1.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
    pageT1.fromTo(nextSlide, { y: "50%" }, { y: "0%" }, "-=0.5");

    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0,
    })
      .addIndicators({
        colorStart: "white",
        colorTrigger: "white",
        name: "page",
        indent: 200,
      })
      .setPin(slide, { pushFollowers: false })
      .setTween(pageT1)
      .addTo(controller);
  });
}

let mouse = document.querySelector(".cursor");
let mouseText = mouse.querySelector("span");

function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

function activeCursor(e) {
  const item = e.target;

  if (item.id === "logo" || item.classList.contains("burger")) {
    mouse.classList.add("nav-active");
  } else {
    mouse.classList.remove("nav-active");
  }

  if (item.classList.contains("explore")) {
    mouse.classList.add("explore-active");
    mouseText.innerText = "Tap";
    gsap.to(".title-swipe", 1, { y: "0%" });
  } else {
    mouse.classList.remove("explore-active");
    mouseText.innerText = "";
    gsap.to(".title-swipe", 1, { y: "100%" });
  }
}

window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);

animateSlides();
