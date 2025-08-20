const yesBtn = document.getElementById("yesBtn");
const questionsDiv = document.getElementById("questions");

const questions = [
  "Sureeee?",
  "Really?",
  "Okay rajud nimo?",
  "Last nani, okay rajud?",
  "Yeyy thank youuu hehhe 🥰"
];

let clickCount = 0;

yesBtn.addEventListener("click", () => {
  let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize + 1.5) + "px";

  if (clickCount === 0) yesBtn.textContent = "Yes ❤️";

  if (clickCount < questions.length) {
    const p = document.createElement("p");
    p.textContent = questions[clickCount];
    p.classList.add("question");
    questionsDiv.appendChild(p);
  }

  clickCount++;
});
