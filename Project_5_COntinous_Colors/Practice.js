const start = document.querySelector("#start");
const stopp = document.querySelector("#stop");

// Generating Random Colors

function randomColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let interval;
const startChangingColor = () => {
  function change() {
    document.body.style.backgroundColor = randomColor();
  }
  if (!interval) {
    interval = setInterval(change, 1000);
  }
};

const stopChangingColor = () => {
  clearInterval(interval);
  document.body.style.backgroundColor = "#212121";
  interval = null;
};

start.addEventListener("click", startChangingColor);
stopp.addEventListener("click", stopChangingColor);
