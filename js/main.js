let suspensionLength = document.querySelector("#length");
let pendulumWeight = document.querySelector("#pendulum-weight");
let wire = document.querySelector("#wire");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let timePeriod = document.querySelector("#time-period");
let naturalFrequencyRad = document.querySelector("#natural-frequency-rad");
let naturalFrequencyHz = document.querySelector("#natural-frequency-hz");
let pendulumWave = document.querySelector("#pendulum-wave");

length = 100;

suspensionLength.addEventListener("change", (event) => {
  if (event.target.value > 100) {
    length = 200;
    suspensionLength.value = 200;
    timePeriod.innerHTML = "3.0061 sec";
    naturalFrequencyRad.innerHTML = "4.1321 rad/s";
    naturalFrequencyHz.innerHTML = "1.4985 Hz";
    pendulumWave.src = "./images/l200.png";
  } else {
    length = 100;
    suspensionLength.value = 100;
    timePeriod.innerHTML = "2.0061 sec";
    naturalFrequencyRad.innerHTML = "3.1321 rad/s";
    naturalFrequencyHz.innerHTML = "0.4985 Hz";
    pendulumWave.src = "./images/l100.png";
  }

  let pendulumKeyframe = `
  @keyframes oscilate${length} {
    0% {
      transform: rotate(30deg) translateX(${2 * length}px) rotate(30deg);
    }
    50% {
      transform: rotate(150deg) translateX(${2 * length}px) rotate(-135deg);
    }
    100% {
      transform: rotate(30deg) translateX(${2 * length}px) rotate(30deg);
    }
  }
  `;
  let wireKeyframe = `
  @keyframes oscilate-wire${length} {
    0% {
      transform: rotateZ(45deg) rotate(80deg);
    }
    50% {
      transform: rotateZ(115deg) rotate(120deg);
    }
    100% {
      transform: rotateZ(45deg) rotate(80deg);
    }
  }
  `;

  //   Pendulum Style Sheet
  var pendulumStyle = document.createElement("style");
  pendulumStyle.type = "text/css";
  pendulumStyle.innerHTML = pendulumKeyframe;

  //   Wire Style Sheet
  var wireStyle = document.createElement("style");
  wireStyle.type = "text/css";
  wireStyle.innerHTML = wireKeyframe;

  // Insert pendulum KeyFrame
  pendulumWeight.appendChild(pendulumStyle);
  pendulumWeight.style = `animation: oscilate${length} 3s infinite`;

  // Insert wire Style
  wire.appendChild(wireStyle);
  wire.style = `animation: oscilate-wire${length} 3s infinite;`;
  wire.style.top = `-${2 * length}px`;
  wire.style.height = `${4 * length}px`;
});

stop.addEventListener("click", () => {
  pendulumWeight.style["animation-play-state"] = "paused";
  wire.style["animation-play-state"] = "paused";
});

start.addEventListener("click", () => {
  pendulumWeight.style["animation-play-state"] = "running";
  wire.style["animation-play-state"] = "running";
});
