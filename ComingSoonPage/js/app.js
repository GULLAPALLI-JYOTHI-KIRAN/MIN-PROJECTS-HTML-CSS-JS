(function () {
  const ele = document.querySelector(".developer-year");
  const thisYear = new Date();
  ele.innerText = `${thisYear.getFullYear()} `;
  console.log(thisYear);

  const days = document.querySelector(".days");
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");
  function mydate() {
    const thisYear = new Date();
    hours.innerText =
      thisYear.getHours() > 12 ? thisYear.getHours() - 12 : thisYear.getHours();
    minutes.innerText = thisYear.getMinutes();
    seconds.innerText = thisYear.getSeconds();
  }
  window.addEventListener("load", function () {
    setInterval(() => {
      mydate();
    }, 300);
    for (let i = 0; i <= 10; i++) {
      myTask(i);
    }
    function myTask(val) {
      setTimeout(() => {
        days.innerText = val;
      }, 200 * val);
    }
  });
})();
