const yearelement = document.querySelectorAll(".deveyear");
const dateYear = new Date();
yearelement.forEach((e) => {
  e.innerText = `${dateYear.getFullYear()} `;
});
const outputTextElement = this.document.querySelector(".key-pressed-heading");
const retypeTextElement = this.document.querySelector(".key-heading");

function keyboardEventhandler() {
  window.addEventListener("keyup", function (keyboardevent) {
    retypeTextElement.innerText = "You Are Pressed";
    outputTextElement.value = "";
    outputTextElement.value += `${keyboardevent.key}`;
    if (keyboardevent.key.startsWith(" ")) {
      console.log("space");
      outputTextElement.value += `${keyboardevent.code}`;
    }
    window.addEventListener("keydown", function () {
      outputTextElement.value = "";
    });
  });
}

window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", () => {
    if (window.screen.availWidth <= 1023) {
      outputTextElement.focus();
      keyboardEventhandler();
    } else {
      const el = document.querySelectorAll("kbd");
      window.addEventListener("keyup", function (e) {
        el.forEach((item) => {
          if (item.innerText.toLowerCase() == e.key.toLowerCase()) {
            item.style.borderRadius = "5px";
            item.style.backgroundColor = "red";
            item.style.boxShadow = "1px 0px 6px 7px rgba(255,255,255,0.75)";

            /* this code is to select the items of having .combo-keys that is parent element class */
            if (item.parentElement.classList.contains("combo-keys")) {
              item.removeAttribute("style");
              item.parentElement.style.borderRadius = "5px";
              item.parentElement.style.backgroundColor = "green";
              item.parentElement.style.boxShadow =
                "1px 0px 6px 7px rgba(255,255,255,0.75)";
              this.setTimeout(() => {
                item.parentElement.removeAttribute("style");
              }, 1000);
            }

            this.setTimeout(() => {
              item.removeAttribute("style");
            }, 1000);
            /* if((item.innerText.toLowerCase()=='backspace') ||(item.innerText.toLowerCase()=='enter')||(item.innerText.toLowerCase()=='tab') ||(item.innerText.toLowerCase()=="capslock")||(item.innerText.toLowerCase()=='home')){
                                item.removeAttribute("style");
                                console.log(item.parentElement);
                                item.parentElement.style.borderRadius='5px';
                                item.parentElement.style.backgroundColor='green';
                                item.parentElement.style.boxShadow='1px 0px 6px 7px rgba(255,255,255,0.75)';
                                this.setInterval(()=>{
 
                                    item.parentElement.removeAttribute("style");
                                },1000)
                            } */
          } else if (
            (item.innerText.toLowerCase() == "space" && e.key == " ") ||
            (item.innerText.toLowerCase() == "esc" &&
              e.key.toLowerCase() == "escape") ||
            (item.innerText.toLowerCase() == "pg up" && e.key == "PageUp") ||
            (item.innerText.toLowerCase() == "pg dn" && e.key == "PageDown") ||
            (item.innerText.toLowerCase() == "f5" &&
              e.key.toLowerCase() == "audiovolumemute") ||
            (item.innerText.toLowerCase() == "f6" &&
              e.key.toLowerCase() == "audiovolumedown") ||
            (item.innerText.toLowerCase() == "f7" &&
              e.key.toLowerCase() == "audiovolumeup") ||
            (item.innerText.toLowerCase() == "f10" &&
              e.key.toLowerCase() == "insert") ||
            (item.innerText.toLowerCase() == "prt scr" &&
              e.key.toLowerCase() == "printscreen") ||
            (item.innerText.toLowerCase() == "ctrl" &&
              e.key.toLowerCase() == "control") ||
            (item.innerHTML.toLowerCase() == "&lt;" &&
              e.key.toLowerCase() == "<") ||
            (item.innerHTML.toLowerCase() == "&gt;" &&
              e.key.toLowerCase() == ">") ||
            (item.innerText.toLowerCase() == "left" &&
              e.key.toLowerCase() == "arrowleft") ||
            (item.innerText.toLowerCase() == "right" &&
              e.key.toLowerCase() == "arrowright") ||
            (item.innerText.toLowerCase() == "move" &&
              e.key.toLowerCase() == "arrowup") ||
            (item.innerText.toLowerCase() == "back" &&
              e.key.toLowerCase() == "arrowdown")
          ) {
            item.style.borderRadius = "5px";
            item.style.backgroundColor = "orange";
            item.style.boxShadow = "1px 0px 6px 7px rgba(255,255,255,0.75)";

            this.setTimeout(() => {
              item.removeAttribute("style");
            }, 1000);
          }
          //    /*  else{
          //         item.removeAttribute("style");
          //     } */
        });
      });
    }
  });
});
