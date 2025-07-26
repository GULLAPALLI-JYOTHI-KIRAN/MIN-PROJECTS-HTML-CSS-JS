document.querySelector(
  ".year-develop"
).innerText = `${new Date().getFullYear()}`;

const toastNotifyContainer = document.querySelector(".toast-notify-section");
const toastStatusContainer = document.querySelector(".toast-status-section");
const childernsArray = [...toastStatusContainer.children];
function toastNotifyFunc(notifyColor, notifysrc, notifyalt, notifydesc) {
  const article = document.createElement("article");
  article.classList.add("each-toast-status", `${notifyColor}`);
  article.innerHTML = `<img src=${notifysrc} alt=${notifyalt}/>
                        <p class="each-toast-desc">${notifydesc}toast notification</p>
                    <img src="./icons/x-cross-icon.png" alt="x-cross-icon" class="close-icon"/>`;
  toastStatusContainer.appendChild(article);
  setTimeout(() => {
    article.animate(
      [
        { opacity: 1 },
        { transform: "scale(1) translateY(-2px)" },
        { opacity: 0.5 },
        { transform: "scale(0.7) translateY(-5px)" },
        { opacity: 0 },
        { transform: "scale(0.2) translateY(-1000px)" },
      ],
      {
        duration: 6000,
        iterations: 1,
        delay: 0,
      }
    );
  }, 2000);
  setTimeout(() => {
    if (toastStatusContainer.children.length !== 0) {
      toastStatusContainer.removeChild(toastStatusContainer.firstElementChild);
    }
  }, 5000);
}

toastNotifyContainer.addEventListener("click", (e) => {
  switch (e.target.innerText) {
    case "Success":
      toastNotifyFunc(
        `green-modern-status`,
        `./icons/success-icon.png`,
        `success-icon`,
        `Success `
      );
      break;
    case "Information":
      toastNotifyFunc(
        `blue-modern-status`,
        `./icons/info-icon.png`,
        `info-icon`,
        `Info `
      );
      break;
    case "Warning":
      toastNotifyFunc(
        `orange-modern-status`,
        `./icons/warning-icon.png`,
        `warning-icon`,
        `Warning `
      );
      break;
    case "Error":
      toastNotifyFunc(
        `red-modern-status`,
        `./icons/error-icon.png`,
        `error-icon`,
        `Error `
      );
      break;
  }
});
toastStatusContainer.addEventListener("click", (e) => {
  try {
    e.currentTarget.removeChild(e.target.parentNode);
  } catch (e) {}
});
