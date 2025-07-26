(function () {
  const developedYear = document.querySelector(".deveyear");
  const thisYear = new Date();
  const getThisYear = thisYear.getFullYear();
  developedYear.innerText = `${getThisYear} `;
  setTimeout(() => {
    animationStop();
    let src = [`https://rb.gy/gq93qu`, `https://rb.gy/n9ws3y`];
    let cardTitle = ["Splinter Cell", "Assassin's Creed"];
    let textParaArray = [
      "Tom Clancy's Splinter Cell is a series of stealth action-adventure video games, the first of which was released in 2002, and their tie-in novels that were endorsed by Tom Clancy.",
      "Assassin's Creed is a historical action-adventure video game series and media franchise published by Ubisoft and developed mainly by its studio Ubisoft Montreal using the game engine Anvil and its more advanced derivatives. Created by Patrice Désilets, Jade Raymond, and Corey May, the Assassin's Creed video game series depicts a fictional millennia-old struggle between the Order of Assassins, who fight for peace and free will, and the Knights Templar, who desire peace through order and control.",
    ];
    cardDetails.forEach((element) => {
      element.style.padding = `${20}px ${10}px`;
      cardimg.forEach((element) => {
        src.forEach((srcs) => {
          element.innerHTML = `<img src=${srcs}>`;
          src.shift(srcs);
          cardHeading.forEach((element) => {
            element.style.backgroundColor = "#fff";
            cardTitle.forEach((title) => {
              element.innerText = `${title}`;
              cardTitle.shift(title);
              cardPara.forEach((element) => {
                element.style.backgroundColor = "#fff";
                textParaArray.forEach((paraText) => {
                  element.innerText = `${paraText}`;
                  textParaArray.shift(paraText);
                });
              });
            });
          });
        });
      });
    });
    cardButtonsOne.forEach((element) => {
      element.style.backgroundColor = "#6495ed";
      element.innerText = "Download";
    });
    cardButtonsTwo.forEach((element) => {
      element.style.backgroundColor = "#6495ed";
      element.innerText = "Readmore";
    });
    bttnLoad.style.display = "block";
  }, 4000);
})();
const sectionDiv = document.querySelector(".card-container");
const bttnLoad = document.querySelector(".primary-bttn");

let cardDetails = document.querySelectorAll(".card-details");
let cardimg = document.querySelectorAll(".img-component");
let cardHeading = document.querySelectorAll(".card-title");
let cardPara = document.querySelectorAll(".card-desc");
let cardButtonsOne = document.querySelectorAll(".one-desc");
let cardButtonsTwo = document.querySelectorAll(".two-desc");

const src = [`https://rb.gy/so9qf1`, `https://rb.gy/g3e4vo`];
const cardTitle = ["Total Overdose", "Call of Duty-2"];
const textParaArray = [
  "Total Overdose:A Gunslinger's Tale in Mexico is an open world third-person shooter video game developed by Deadline Games and published by SCi Games for Microsoft Windows, PlayStation 2 and Xbox",
  "Call of Duty 2 is a 2005 first-person shooter video game developed by Infinity Ward and published by Activision in most regions of the world. It is the second installment of the Call of Duty series.",
];

function animationStop() {
  const animelist = document.getAnimations("shine");
  animelist.forEach((element) => {
    element.pause();
  });
}

function articleCreationFun(i) {
  const article = document.createElement("article");
  article.classList.add("card-section");
  let divArr = [];
  for (let i = 0; i < 3; i++) {
    divArr.push(document.createElement("div"));
  }
  divArr[0].classList.add("img-component", "universal-anime");
  divArr[1].classList.add("card-details");
  const h3 = document.createElement("h3");
  h3.classList.add("card-title", "universal-anime", "min-width");
  const p = document.createElement("P");
  p.classList.add("card-desc", "universal-anime", "min-width");
  divArr[2].classList.add("btn-container");
  let aArry = [];
  for (let i = 0; i < 2; i++) {
    aArry.push(document.createElement("a"));
  }
  aArry[0].href = "#";
  aArry[1].href = "#";
  aArry[0].classList.add("secondary-btn", "universal-anime", "one-desc");
  aArry[1].classList.add("secondary-btn", "universal-anime", "two-desc");
  article.appendChild(divArr[0]);
  article.appendChild(divArr[1]);
  divArr[1].appendChild(h3);
  divArr[1].appendChild(p);
  divArr[2].appendChild(aArry[0]);
  divArr[2].appendChild(aArry[1]);
  divArr[1].appendChild(divArr[2]);
  function inner() {
    divArr[1].style.padding = `${20}px ${10}px`;
    divArr[0].innerHTML = `<img src=${src[i]}>`;
    h3.style.backgroundColor = "#fff";
    h3.innerText = `${cardTitle[i]}`;
    p.style.backgroundColor = "#fff";
    p.innerText = `${textParaArray[i]}`;
    aArry[0].innerText = "Download";
    aArry[1].innerText = "Readmore";
    setTimeout(() => {
      aArry[0].style.backgroundColor = "#6495ed";
      aArry[1].style.backgroundColor = "#6495ed";
    }, 200);
  }
  setTimeout(() => {
    animationStop();
    inner();
    src.shift();
    cardTitle.shift();
    textParaArray.shift();
  }, 2000);

  return article;
}
let count = 0;
bttnLoad.addEventListener("click", () => {
  count++;
  creatingChild(articleCreationFun);
});
/* function creatingChild(callback){
        if(src.length===cardTitle.length && src.length===textParaArray.length){
            for(let i=0;i<=src.length-1;i++){
                sectionDiv.appendChild(callback(i));
            }
           
        }
} */

function creatingChild(callback) {
  console.log(count);
  if (src.length === cardTitle.length && src.length === textParaArray.length) {
    if (src.length == 0) {
      bttnLoad.removeAttribute("style");
    } else {
      for (let i = 0; i <= count - 1; i++) {
        sectionDiv.appendChild(callback(i));
        count--;
      }
    }
  }
}
