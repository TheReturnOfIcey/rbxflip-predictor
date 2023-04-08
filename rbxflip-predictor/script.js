const flipButton = document.getElementById("flip-button");
const flipImage = document.getElementById("flip-image");
const inputValue = document.getElementById("input-value");
let isFlipping = false;

inputValue.addEventListener("input", () => {
  if (inputValue.value.length >= 5) {
    flipButton.classList.add("enabled");
  } else {
    flipButton.classList.remove("enabled");
  }
});

flipButton.addEventListener("click", () => {
  if (flipButton.classList.contains("enabled") && !isFlipping) {
    isFlipping = true;
    flipButton.disabled = true;
    flipButton.classList.remove("enabled");
    flipImage.style.transform = "rotateX(360deg)";
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 2) + 1;
      flipImage.src = (randomIndex === 1) ? "https://cdn.discordapp.com/attachments/1073018618037674097/1094036920260112444/image.png" : "https://cdn.discordapp.com/attachments/1073018618037674097/1094036965676044288/image.png";
      flipImage.style.transform = "rotateX(0deg)";
      setTimeout(() => {
        flipButton.disabled = false;
        inputValue.value = "";
        isFlipping = false;
      }, 500);
    }, 500);
  }
});
