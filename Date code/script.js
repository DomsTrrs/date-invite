let questions = [
    "(click me more)", // first shown
    "Sureee?",
    "Really?",
    "Okay rajud nimo?",
    "Last nani, okay rajud?",
    "Yeyy thank youuu hehhe 🎉💖"
  ];
  
  let index = 1; // start from the second item
  
  function growButton(btn) {
    // Grow button text size
    let currentSize = parseFloat(window.getComputedStyle(btn).fontSize);
    btn.style.fontSize = (currentSize + 5) + "px";
  
    // Update the subtext
    if (index < questions.length) {
      btn.querySelector(".btn-sub").textContent = questions[index];
      index++;
    }
  }
  