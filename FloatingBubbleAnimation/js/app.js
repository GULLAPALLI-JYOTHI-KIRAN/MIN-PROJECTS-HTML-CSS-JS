const year = document.querySelector(".developer-year");
year.textContent = new Date().getFullYear() + " ";
function bubblesGenerater() {
  const parent = document.querySelector(".parent");
  let ratio = Math.random() * 20 + 10 + "px";
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.width = ratio;
  bubble.style.height = ratio;
  bubble.style.left = Math.random() * 1000 + "vh";
  bubble.style.animationDuration = Math.random() * 4 + 4 + "s";
  parent.appendChild(bubble);
  setTimeout(() => {
    bubble.remove();
  }, 8000);
}

setInterval(bubblesGenerater, 40);
