const yesBtn = document.getElementById("yesBtn");
const questionsDiv = document.getElementById("questions");

const questions = [
  "Sure naka?",
  "Really?",
  "Okay rajud nimo?",
  "Last nani, okay rajud?",
  "Yeyy thank youuu hehhe 🥰"
];

let clickCount = 0;

yesBtn.addEventListener("click", () => {
  // Make button grow slightly every click
  let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize + 1.5) + "px";

  // Change button text on first click
  if (clickCount === 0) {
    yesBtn.textContent = "Yes";
  }

  // Add questions one by one
  if (clickCount < questions.length) {
    const p = document.createElement("p");
    p.textContent = questions[clickCount];
    p.classList.add("question");
    questionsDiv.appendChild(p);
  }

  clickCount++;
});
