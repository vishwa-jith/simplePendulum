let suspensionLength = document.querySelector("#length");

length = 0;

suspensionLength.addEventListener("change", (event) => {
  length = event.target.value;

  let pendulumKeyframe = `@keyframes oscilate${length} { 0% { transform: rotate(30deg) translateX(${length}px) rotate(30deg); } 50% { transform: rotate(150deg) translateX(${length}px) rotate(-135deg); } 100% { transform: rotate(30deg) translateX(${length}px) rotate(30deg); } }`;
  //   Pendulum Style Sheet
  var pendulumStyle = document.createElement("style");
  pendulumStyle.type = "text/css";
  pendulumStyle.innerHTML = pendulumKeyframe;
  // Insert pendulum KeyFrame
  document.getElementById("pendulum-weight").appendChild(pendulumStyle);
  document.getElementById(
    "pendulum-weight"
  ).style = `animation: oscilate${length} 3s infinite`;
  // Insert wire Style
  document.getElementById("pendulum-weight").appendChild(pendulumStyle);
  document.getElementById("pendulum-weight").style = `position: absolute;
                        top: -${length};
                        left: calc(50% - 50px);
                        width: 5px;
                        height: ${length + length};
                        background-color: gray;
                        animation: oscilate-wire 3s infinite;
                        z-index: 100;`;
});
