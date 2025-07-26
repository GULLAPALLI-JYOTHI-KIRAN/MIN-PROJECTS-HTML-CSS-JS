const eachNavBar = document.querySelectorAll(".navbar-link-text");
const article = document.querySelector(".each-page");
eachNavBar.forEach((element) => {
  element.addEventListener("click", function (e) {
    function simple(color) {
      article.lastElementChild.innerHTML = `You are in ${element.innerText} Page`;
      article.id = `${color}`;
    }
    switch (element.innerText) {
      case "Home":
        article.firstElementChild.firstElementChild.setAttribute(
          "name",
          "home-outline"
        );
        simple("green");

        break;
      case "Profile":
        article.firstElementChild.firstElementChild.setAttribute(
          "name",
          "person-outline"
        );
        simple("sky-blue");
        break;
      case "Message":
        article.firstElementChild.firstElementChild.setAttribute(
          "name",
          "mail-outline"
        );
        simple("brown");
        break;
      case "Career":
        article.firstElementChild.firstElementChild.setAttribute(
          "name",
          "golf-outline"
        );
        simple("light-purple");
        break;
      case "Help":
        article.firstElementChild.firstElementChild.setAttribute(
          "name",
          "help-outline"
        );
        simple("maroon");
        break;
      default:
        break;
    }
  });
});
