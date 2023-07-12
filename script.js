document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password-input");
    const progressBarValue = document.getElementById("progress-bar-value");
    const feedback = document.getElementById("feedback");
  
    passwordInput.addEventListener("input", function() {
      const password = passwordInput.value;
      const passwordLength = password.length;
      const progressBarWidth = passwordLength * 5;
  
      progressBarValue.style.width = progressBarWidth + "%";
  
      if (passwordLength < 8) {
        progressBarValue.style.backgroundColor = "red";
        feedback.classList.add("container__feedback--bold");
        feedback.textContent = "Should be longer";
      } else if (passwordLength >= 8 && passwordLength < 12) {
        progressBarValue.style.backgroundColor = "orange";
        feedback.classList.remove("container__feedback--bold");
        feedback.textContent = "Pretty good";
      } else {
        progressBarValue.style.backgroundColor = "green";
        feedback.classList.remove("container__feedback--bold");
        feedback.textContent = "Grrrreat!";
      }
    });
  });
  