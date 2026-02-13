const typingText = "Hey Beautiful 💕 Something special is waiting...";
let index = 0;
const typingElement = document.getElementById("typing");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heartsContainer = document.querySelector(".hearts");

function typeEffect() {
  if (index < typingText.length) {
    typingElement.innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

/* Floating hearts */
function createFloatingHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}
setInterval(createFloatingHeart, 500);

/* Start Love */
function startLove() {
  const name = document.getElementById("nameInput").value;
  if (name === "") return alert("Enter your name 💕");

  document.getElementById("intro").classList.add("hidden");
  document.getElementById("question").classList.remove("hidden");

  document.getElementById("questionText").innerHTML =
    name + ", will you be my Valentine? 💖";
}

/* No button runs & Yes grows */
let yesSize = 16;

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth * 0.7;
  const y = Math.random() * window.innerHeight * 0.7;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  yesSize += 2;
  yesBtn.style.fontSize = yesSize + "px";
});

/* Yes clicked */
function sayYes() {
  document.getElementById("message").innerHTML =
    "Yayyyy!!! 💖 You just made my world complete! 💕";

  for (let i = 0; i < 30; i++) {
    const popup = document.createElement("div");
    popup.classList.add("popup-heart");
    popup.innerHTML = "💖";
    popup.style.left = Math.random() * window.innerWidth + "px";
    popup.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(popup);

    setTimeout(() => popup.remove(), 1000);
  }

  setTimeout(() => {
    document.getElementById("question").classList.add("hidden");
    document.getElementById("mediaSection").classList.remove("hidden");
  }, 1500);
}
