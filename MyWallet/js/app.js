(function () {
  const span = document.querySelector(".devyear");
  const devyear = new Date();
  span.innerText = `${devyear.getFullYear()}`;
})();

function uni() {
  const sectionyCards = document.querySelector(".credit-card-section");
  const eachCard = document.querySelectorAll(".each-credit-card");
  const closeButton = document.querySelector(".close-bbtn");
  const footersection = document.querySelector(".footer-section");
  const logoArray = [
    "logo-amazon",
    "logo-figma",
    "logo-apple",
    "logo-microsoft",
    "logo-linkedin",
    "logo-rss",
    "logo-tux",
    "logo-paypal",
    "logo-twitter",
    "logo-bitcoin",
    "logo-xbox",
  ];
  const transactionNameArray = [
    "Amazon",
    "Figma",
    "Apple",
    "MicroSoft",
    "Linkedin",
    "ACT",
    "Linux",
    "PayPal",
    "Twitter",
    "BitCoin",
    "XBox",
  ];
  const transactionDescArray = [
    "Mobile",
    "Design Tool",
    "Mac Book",
    "Window OS",
    "Premiun Account",
    "BroadBand Bill",
    "Linux Os",
    "Funds Transfer",
    "Account Fee",
    "Coins",
    "Splinter Cell",
  ];
  const itemCost = [
    "$600",
    "$320",
    "$2502",
    "$269",
    "$619",
    "$89",
    "$137",
    "$4000",
    "$241",
    "$720382",
    "$189",
  ];
  const transactionDates = [
    "10/01/2018",
    "19/07/2019",
    "26/08/2020",
    "04/10/2021",
    "14/05/2021",
    "25/07/2024",
    "08/03/2022",
    "12/05/2023",
    "16/09/2023",
    "06/12/2023",
    "14/01/2024",
  ];
  const article = [];
  const iconLog = [];
  const div = [];
  let h4;
  let h6;
  const p = [];
  let section = document.createElement("section");
  section.classList.add("transaction-section", "wraper");
  function eachCardCreate(num) {
    for (let i = 0; i < num; i++) {
      article[i] = document.createElement("article");
      article[i].classList.add("each-transaction");
      section.appendChild(article[i]);
      iconLog[i] = document.createElement("ion-icon");
      iconLog[i].classList.add("transaction-logo");
      iconLog[i].name = logoArray[i];
      article[i].appendChild(iconLog[i]);
      for (let j = 0; j < 2; j++) {
        div[j] = document.createElement("div");
        if (j == 0) {
          div[0].classList.add("transaction-details");
          h4 = document.createElement("h4");
          h4.classList.add("transction-name");
          h6 = document.createElement("h6");
          h6.classList.add("transction-desc");
          div[0].appendChild(h4);
          div[0].appendChild(h6);
        } else {
          div[1].classList.add("transaction-amount-info");
          for (let i = 0; i < 2; i++) {
            p[i] = document.createElement("p");
            if (i == 0) {
              p[0].classList.add("transcation-amount");
            } else {
              p[1].classList.add("transcation-date");
            }
            div[1].appendChild(p[i]);
          }
        }
        article[i].appendChild(div[j]);
      }
      h4.innerText = transactionNameArray[i];
      h6.innerText = transactionDescArray[i];
      p[0].innerText = itemCost[i];
      p[1].innerText = transactionDates[i];
    }
  }
  eachCard.forEach((CreditCard) => {
    CreditCard.addEventListener("click", (e) => {
      closeButton.style.display = "block";
      closeButton.style.backgroundColor = "cornflowerblue";
      closeButton.style.color = "white";
      sectionyCards.style.height = "auto";
      eachCard.forEach((elements) => {
        elements.style.top = "0px";
      });

      CreditCard.addEventListener("click", (e) => {
        eachCard.forEach((elements) => {
          if (e.currentTarget == elements) {
            sectionyCards.insertAdjacentElement("afterend", section);
            if (elements.classList.contains("count-6")) {
              eachCardCreate(6);
            }
            if (elements.classList.contains("count-9")) {
              eachCardCreate(9);
              closeButton.style.backgroundColor = "lightslategray";
            }
            if (elements.classList.contains("count-11")) {
              eachCardCreate(11);
              closeButton.style.backgroundColor = "olivedrab";
            }
          } else {
            elements.style.display = "none";
          }
        });
      });

      closeButton.addEventListener("click", (e) => {
        try {
          document.body.removeChild(section);
        } catch (e) {}
        e.currentTarget.removeAttribute("style");
        sectionyCards.removeAttribute("style");
        eachCard.forEach((elements) => {
          elements.removeAttribute("style");
        });
      });
    });
  });
}
uni();
