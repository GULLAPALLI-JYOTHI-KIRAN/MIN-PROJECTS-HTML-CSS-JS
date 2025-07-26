const loader = document.querySelector(".loader");
const year = document.querySelector(".present-year");
(() => {
  year.innerText = `${new Date().getFullYear()}`;
  randomUserApi();
})();
const bttn = document.querySelector(".primary-bttn");

function randomUserApi() {
  loader.classList.remove("display-none");
  const imageDiv = document.querySelector(".random-user-img-component");
  imageDiv.innerHTML = ``;
  const userdetailsdiv = document.querySelector(".random-user-details-section");
  userdetailsdiv.innerHTML = `<div class="loader"></div>
<hr>
<p class="devloper-desc">Copyright 2024-<span class="present-year">${new Date().getFullYear()}</span>,Made By Gullapalli Jyothi Kiran</p>`;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://randomuser.me/api/", true);
  xhr.send();

  xhr.onload = (e) => {
    try {
      year.innerText = `${new Date().getFullYear()}`;

      if (xhr.status == 200) {
        const { results } = JSON.parse(xhr.response);
        const [resultObj] = results;
        setTimeout(() => {
          loader.classList.add("display-none");
          imageDiv.innerHTML = `<div class="random-user-img-main ">
                    <img src=${resultObj?.picture?.large} alt="user-image">
                </div>`;
          userdetailsdiv.innerHTML = `<article class="random-user-info">
                    <p class="random-user-question">Full Name:</p>
                    <h3 class="random-user-answer fname">${
                      resultObj?.name?.first
                    } ${resultObj?.name?.last}</h3>
                </article>
                <article class="random-user-info">
                    <p class="random-user-question">Age:</p>
                    <h3 class="random-user-answer age">${+resultObj?.dob
                      ?.age}</h3>
                </article>
                <article class="random-user-info">
                    <p class="random-user-question">Email:</p>
                    <h3 class="random-user-answer sp-font-size email">${
                      resultObj?.email
                    }</h3>
                </article>
                <article class="random-user-info">
                    <p class="random-user-question">Phone:</p>
                    <h3 class="random-user-answer phone">${
                      resultObj?.phone
                    }</h3>
                </article>
                <article class="random-user-info">
                    <p class="random-user-question">Adress:</p>
                    <h3 class="random-user-answer address">${
                      resultObj?.location?.city
                    },${resultObj?.location?.state},${
            resultObj?.location?.country
          }</h3>
                </article>
                <hr>
                <p class="devloper-desc">Copyright 2024-<span class="present-year">${new Date().getFullYear()}</span>,Made By Gullapalli Jyothi Kiran</p>`;
        }, 1000);
      }
      if (xhr.status == 404) {
        setTimeout(() => {
          loader.classList.add("display-none");
          userdetailsdiv.innerHTML = `<h2 class='error-msg'>Data Not Found 404 Error</h2>
        <hr>
        <p class="devloper-desc">Copyright 2024-<span class="present-year">${new Date().getFullYear()}</span>,Made By Gullapalli Jyothi Kiran</p>`;
        }, 1000);
      }
      if (xhr.status !== 200 && xhr.status !== 404) {
        throw new Error("Something Went Wrong");
      }
    } catch (e) {
      setTimeout(() => {
        loader.classList.add("display-none");
        userdetailsdiv.innerHTML = `<h2 class='error-msg'>${e.message}</h2>
        <hr>
        <p class="devloper-desc">Copyright 2024-<span class="present-year">${new Date().getFullYear()}</span>,Made By Gullapalli Jyothi Kiran</p>`;
      }, 1000);
    }
  };
  xhr.onerror = (e) => {
    userdetailsdiv.innerHTML = `<h2 class='error-msg'>Wrong URL Request</h2>
<hr>
<p class="devloper-desc">Copyright 2024-<span class="present-year">${new Date().getFullYear()}</span>,Made By Gullapalli Jyothi Kiran</p>`;
  };
}

bttn.addEventListener("click", () => {
  randomUserApi();
});
// {once:true}
