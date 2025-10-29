let currentLight = "red";
const car = document.getElementById("car");
const message = document.getElementById("message");

function changeLight(color) {
  document.getElementById("red").classList.remove("active");
  document.getElementById("yellow").classList.remove("active");
  document.getElementById("green").classList.remove("active");

  document.getElementById(color).classList.add("active");
  currentLight = color;
  message.innerText = "";
}

function moveCar() {
  car.style.transition = "left 2s linear";
  car.style.left = "900px";

  if (currentLight === "red") {
    setTimeout(() => {
      message.innerText = "🚨 CHALLAN: You crossed on Red Light!";
      message.style.color = "red";
    }, 1000);
  } else if (currentLight === "yellow") {
    message.innerText = "⚠️ Careful! You crossed on Yellow.";
    message.style.color = "yellow";
  } else if (currentLight === "green") {
    message.innerText = "✅ Safe Drive! You crossed on Green.";
    message.style.color = "lime";
  }

  setTimeout(() => {
    car.style.left = "150px";
  }, 3000);
}
