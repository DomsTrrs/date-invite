let questions = [
  "(click me more)", 
  "Sureeee?",
  "Really?",
  "Okay rajud nimo?",
  "Last nani, okay rajud?",
  "Yeyy thank youuu hehhe 🎉💖"
];

let index = 1;

function growButton(btn) {
  // Make button grow smoothly
  btn.style.transform = "scale(1.1)";
  setTimeout(() => {
    btn.style.transform = "scale(1)";
  }, 200);

  // Increase padding (button grows)
  let currentPadding = parseInt(window.getComputedStyle(btn).paddingTop);
  btn.style.padding = (currentPadding + 5) + "px " + (currentPadding + 40) + "px";

  // Update text inside button
  if (index < questions.length) {
    btn.querySelector(".btn-sub").textContent = questions[index];
    index++;
  }
}

