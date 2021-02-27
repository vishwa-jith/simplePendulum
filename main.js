let suspensionLength = document.querySelector("#length");
let pendulumWeight = document.querySelector("#pendulum-weight");
let wire = document.querySelector("#wire");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

length = 0;

suspensionLength.addEventListener("change", (event) => {
  length = event.target.value;

  let pendulumKeyframe = `
  @keyframes oscilate${length} {
    0% {
      transform: rotate(30deg) translateX(${length}px) rotate(30deg);
    }
    50% {
      transform: rotate(150deg) translateX(${length}px) rotate(-135deg);
    }
    100% {
      transform: rotate(30deg) translateX(${length}px) rotate(30deg);
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
  wire.style.top = `-${length}px`;
  wire.style.height = `${2 * length}px`;
});
