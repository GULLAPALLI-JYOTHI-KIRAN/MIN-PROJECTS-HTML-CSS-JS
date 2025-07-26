import { CONFIG } from "../config";
const span = document.querySelector(".present-year");
const loader = document.querySelector(".loader");
(() => {
  span.innerText = `${new Date().getFullYear()}`;
  fetchRandomQuote();
})();
const btn = document.querySelector(".primary-bttn");
const emptyDiv = document.querySelector(".empty");
const article = document.querySelector(".random-quote-header");
function fetchRandomQuote() {
  if (loader.hasAttribute("style")) {
    loader.removeAttribute("style");
    emptyDiv.innerHTML = "";
  }
  const xhr = new XMLHttpRequest();
  const apiKey = CONFIG.random_quotations_Key;
  const url = "https://api.api-ninjas.com/v1/quotes";
  xhr.open("GET", url, true);
  xhr.setRequestHeader("X-Api-Key", apiKey);
  xhr.send();
  xhr.onload = () => {
    try {
      if (xhr.status === 200) {
        try {
          const [Quotes] = JSON.parse(xhr.responseText);
          setTimeout(() => {
            loader.setAttribute("style", "display:none");
            emptyDiv.innerHTML = `<p class="random-quote">${Quotes?.quote}</p>
                    <div class="random-author"><span></span> <p class="author">${Quotes?.author}</p></div>`;
          }, 500);
        } catch (e) {
          console.log(e.message);
        }
      } else {
        setTimeout(() => {
          loader.setAttribute("style", "display:none");
          emptyDiv.innerHTML = `<h2 class="error-msg">No Data Found 404 Error</h2>`;
        }, 500);
      }
    } catch (e) {
      setTimeout(() => {
        loader.setAttribute("style", "display:none");
        emptyDiv.innerHTML = `<h2 class="error-msg">${e.message}</h2>`;
      }, 300);
    }
  };
  xhr.onerror = () => {
    setTimeout(() => {
      loader.setAttribute("style", "display:none");
      emptyDiv.innerHTML = `<h2 class="error-msg">Wrong URL Request</h2>`;
    }, 300);
  };
}
// fetchRandomQuote();
btn.addEventListener("click", (e) => {
  fetchRandomQuote();
});
