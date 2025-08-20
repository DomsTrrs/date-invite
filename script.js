let questions = [
  "(click me more)",
  "Sure naka?",
  "Really?",
  "Okay rajud nimo?",
  "Last nani, okay rajud?",
  "Yeyy thank youuu hehhe 🎉💖"
];

let index = 1; 

function growButton(btn) {
  let currentSize = parseFloat(window.getComputedStyle(btn).fontSize);
  btn.style.fontSize = (currentSize + 4) + "px";

  if (index < questions.length) {
    btn.querySelector(".btn-sub").textContent = questions[index];
    index++;
  }
}

// Floating hearts generator
function createHeart() {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.textContent = Math.random() > 0.5 ? "💖" : "💕";

  // random horizontal position
  heart.style.left = Math.random() * 100 + "vw";

  // random sideways movement
  heart.style.setProperty("--x-move", (Math.random() * 100 - 50) + "px");

  // random size
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";

  document.getElementById("hearts-container").appendChild(heart);

  // remove heart after animation
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// keep spawning hearts
setInterval(createHeart, 500);
