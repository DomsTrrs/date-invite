let questions = [
  "(click me more)", // first
  "Sure naka?",
  "Really?",
  "Okay rajud nimo?",
  "Last nani, okay rajud?",
  "Yeyy thank youuu hehhe 🎉💖"
];

let index = 1; // start from second item

function growButton(btn) {
  // Make button bigger
  let currentSize = parseFloat(window.getComputedStyle(btn).fontSize);
  btn.style.fontSize = (currentSize + 4) + "px";

  // Update inside button text
  if (index < questions.length) {
    btn.querySelector(".btn-sub").textContent = questions[index];
    index++;
  }
}
