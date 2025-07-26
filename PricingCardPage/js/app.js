(() => {
  document.querySelector(
    ".year-develop"
  ).innerText = `${new Date().getFullYear()}`;
  const priceBoard = document.querySelector("#pricing-board");
  const selecttag = document.querySelector("#users");
  selecttag.addEventListener("change", (e) => {
    for (let i = 0; i < selecttag.length; i++) {
      if (selecttag[i]?.selected == true) {
        switch (selecttag[i]?.innerText) {
          case "50 USERS":
            priceBoard.innerHTML = `$99<span>/</span><span class="price-duration">month</span>`;
            break;
          case "100 USERS":
            priceBoard.innerHTML = `$199<span>/</span><span class="price-duration">month</span>`;
            break;
          case "150 USERS":
            priceBoard.innerHTML = `$299<span>/</span><span class="price-duration">month</span>`;
            break;
          case "200 USERS":
            priceBoard.innerHTML = `$399<span>/</span><span class="price-duration">month</span>`;
            break;
          case "250 USERS":
            priceBoard.innerHTML = `$499<span>/</span><span class="price-duration">month</span>`;
            break;
        }
      }
    }
  });
})();
