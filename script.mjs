////  rectangle 1

const rect1 = document.querySelector(".rect1");

rect1.addEventListener("mousemove", function (details) {
  let rectLoctn = rect1.getBoundingClientRect();
  let insideRectVal = details.clientX - rectLoctn.left; ////  rectangle me mouse ki location

  if (insideRectVal < rectLoctn.width / 2) {
    let redColor = gsap.utils.mapRange(         /// function of maprange
      0,                                      /// minInput
      rectLoctn.width / 2,                    /// maxInput
      255,                                    /// minOutput
      0,                                      /// maxOutput                        
      insideRectVal
    );
    gsap.to(rect1, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    });
  } else {
    let blueColor = gsap.utils.mapRange(
      rectLoctn.width / 2,
      rectLoctn.width,
      0,
      255,
      insideRectVal
    );
    gsap.to(rect1, {
      backgroundColor: `rgb(0, 0, ${blueColor})`,
      ease: Power4,
    });
  }
});

rect1.addEventListener("mouseleave", function () {
  gsap.to(rect1, {
    backgroundColor: "white",
  });
});

////  rectangle 2

const rect2 = document.querySelector(".rect2");

rect2.addEventListener("mousemove", function (details) {
  let rectLoctn = rect2.getBoundingClientRect();
  let insideRectVal = details.clientX - rectLoctn.left; ////  rectangle me mouse ki location

  if (insideRectVal < rectLoctn.width / 2) {
    let blueColor = gsap.utils.mapRange(
      0,
      rectLoctn.width / 2,
      255,
      0,
      insideRectVal
    );
    gsap.to(rect2, {
      backgroundColor: `rgb(0, 0, ${blueColor})`,
      ease: Power4,
    });
  } else {
    let redColor = gsap.utils.mapRange(
      rectLoctn.width / 2,
      rectLoctn.width,
      0,
      255,
      insideRectVal
    );
    gsap.to(rect2, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    });
  }
});

rect2.addEventListener("mouseleave", function () {
  gsap.to(rect2, {
    backgroundColor: "white",
  });
});

///  rectangle 3

const rect3 = document.querySelector(".rect3");

rect3.addEventListener("mousemove", function (details) {
  let rectLoctn = rect3.getBoundingClientRect();
  let insideRectVal = details.clientX - rectLoctn.left;

  if (insideRectVal < rectLoctn.width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      rectLoctn.width / 2,
      255,
      0,
      insideRectVal
    );
    gsap.to(rect3, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    });
  } else {
    let blueColor = gsap.utils.mapRange(
      rectLoctn.width / 2,
      rectLoctn.width,
      0,
      255,
      insideRectVal
    );
    gsap.to(rect3, {
      backgroundColor: `rgb(0, 0, ${blueColor})`,
      ease: Power4,
    });
  }
});

rect3.addEventListener("mouseleave", function () {
  gsap.to(rect3, {
    backgroundColor: "white",
  });
});

/// rectangle 4

const rect4 = document.querySelector(".rect4");

rect4.addEventListener("mousemove", function (details) {
  let rectLoctn = rect4.getBoundingClientRect();
  let insideRectVal = details.clientX - rectLoctn.left;

  if (insideRectVal < rectLoctn.width / 2) {
    let blueColor = gsap.utils.mapRange(
      0,                                 
      rectLoctn.width / 2,               
      255,                               
      0,                               
      insideRectVal
    );
    gsap.to(rect4, {
      backgroundColor: `rgb(0, 0, ${blueColor})`,
      ease: Power4,
    });
  } else {
    let redColor = gsap.utils.mapRange(
      rectLoctn.width / 2,
      0,
      255,
      0,
      insideRectVal
    );
    gsap.to(rect4, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    });
  }
});

rect4.addEventListener("mouseleave", function () {
  gsap.to(rect4, {
    backgroundColor: "white",
  });
});
