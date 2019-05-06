window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
  console.log("load the SVG");

  fetch("car_and_road.svg")
    .then(response => response.text())
    .then(svgData => {
      console.log("SVG loaded");

      // TODO: put the SVG into the DOM
      document
        .querySelector("#thesvg")
        .insertAdjacentHTML("afterbegin", svgData);

      //creat snap object
      const snap = Snap("#thesvg svg");

      car = snap.select("#car");

      curve = snap.select("#theCurve");

      // TODO: Start the animation
      runAnimation();
    });
}

let car = null;
let curve = null;
let currentPosition = 0;

// let xpos = 20;

const speed = 3;

function runAnimation() {
  console.log("animate");

  //make sure the animation loops (every frame)
  if (currentPosition < curve.getTotalLength()) {
    requestAnimationFrame(runAnimation);
  }

  currentPosition += speed;

  const pos = curve.getPointAtLength(currentPosition);

  // TODO: Build animation ...
  car.node.style.transform = `translate(${pos.x}px, ${pos.y}px) rotate(${
    pos.alpha
  }deg)`;
}
