var scene = document.getElementById("main");
var parallaxInstance = new Parallax(scene);

var keys = [
  "Tie1",
  "Tie2",
  "Tie3",
  "Tie4",
  "Tie5",
  "Tie6",
  "Tie7",
  "Tie8",
];
var slider = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true,
  pagination: {
    el: ".planet-links",
    clickable: true,
    renderBullet: function(index, className) {
      return '<div class="' + className + '">' + keys[index] + "</div>";
    }
  }
});

gsap.to(".slide-img", 2, {
  y: 20,
  repeat: -1,
  yoyo: true,
  delay: 0
});


slider.on("slideChange", function() {
  console.log("SLIDE CHANGED");
  gsap.to(".slide-text span", {
    x: "-100px"
  });
  gsap.to(".slide-number span", 0.2, {
    x: "-200px"
  });
  gsap.to(".slide-detail span", 0.5, {
    x: "-1000px"
  });
  gsap.to(".slide-detail-facts div", 0.5, {
    x: "-1000px"
  });
  gsap.to(".swiper-slide-active", 0.5, {
    scale: 0.85
  });
  gsap.to(".swiper-slide .slide-img", 1, {
    rotation: 20
  });
// });

slider.on("slideChangeTransitionEnd", function() {
  gsap.to(".swiper-slide .slide-img", 1, {
    rotation: 0
  });
  gsap.to(".slide-text span", 0.2, {
    x: 0,
    delay: 0.1
  });
  gsap.to(".slide-text span", 0, {
    x: "100px"
  });

  gsap.to(".slide-number span", 0.2, {
    x: 0
  });
  gsap.to(".slide-number span", 0, {
    x: "100px"
  });

  gsap.to(".slide-detail span", 0.2, {
    x: 0
  });

//   gsap.to(".slide-detail-facts div", 0.5, {
//     x: 0
//   });

//   gsap.to(".swiper-slide-active", 0.5, {
//     scale: 1,
//     ease: Power1.easeOut
//   });

//   gsap.to(".swiper-slide-active .slide-text", 0, {
//     autoAlpha: 1
//   });
//   gsap.to(".swiper-slide-active .slide-number", 0, {
//     autoAlpha: 1
//   });

//   gsap.to(".swiper-slide-next .slide-text", 0, {
//     autoAlpha: 0
//   });
//   gsap.to(".swiper-slide-prev .slide-text", 0, {
//     autoAlpha: 0
//   });

//   gsap.to(".swiper-slide-next .slide-number", 0, {
//     autoAlpha: 0
//   });
//   gsap.to(".swiper-slide-prev .slide-number", 0, {
//     autoAlpha: 0
//   });
});


// gsap.to(".swiper-slide-next .slide-text", 0, {
//   autoAlpha: 0
// });
// gsap.to(".swiper-slide-prev .slide-text", 0, {
//   autoAlpha: 0
// });

// gsap.to(".swiper-slide-next .slide-number", 0, {
//   autoAlpha: 0
// });
// gsap.to(".swiper-slide-prev .slide-number", 0, {
//   autoAlpha: 0
// });

// gsap.to(".swiper-slide", 0, {
//   scale: 0.85
// });

// gsap.to(".swiper-slide-active", 0, {
//   scale: 1
});