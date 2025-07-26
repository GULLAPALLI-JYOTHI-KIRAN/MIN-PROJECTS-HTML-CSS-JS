(() => {
  const orderstate = document.querySelectorAll(".order-link p");
  const p = document.querySelector(".order-track-detail");
  const devyear = document.querySelector(".devyear");
  const header = document.querySelector(".orderprogressbar-container");
  function changeOrderState(text) {
    p.innerText = `${text}`;
  }
  const todayYear = new Date();
  devyear.innerText = `${todayYear.getFullYear()}`;
  orderstate.forEach((eachstate) => {
    eachstate.addEventListener("click", function (e) {
      switch (eachstate.innerText) {
        case "Order":
          changeOrderState(`Item ordered on wed,7th Oct'24`);
          break;
        case "Shipping":
          changeOrderState(`Item shipped on Thu,8th Oct'24`);
          break;
        case "OnWay":
          changeOrderState(`Delivery Excepeted by sat,10th Oct'24`);
          break;
        case "Out Of Order":
          changeOrderState(`Delivery Excepeted by sat,10th Oct'24`);
          break;
      }
    });
  });

  window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 60) {
      header.style.cssText += "top:0px; transition:all 1s linear;";
    }
  });
})();
