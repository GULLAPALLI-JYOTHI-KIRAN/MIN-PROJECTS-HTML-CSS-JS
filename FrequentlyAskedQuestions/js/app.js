console.log("hello");
const press=document.querySelectorAll(".fa-sharp");
const cl=document.querySelectorAll('.c');
const show=document.querySelectorAll(".question-desc-container");
console.log(show);
console.log(cl);
console.log(press);
console.log(press[0]);
press[0].addEventListener('click',function(){
    cl[0].style.transform="rotate(0deg) translateX(-5px)";
    cl[0].firstElementChild.style.color="#2d87c8";
    show[0].style.display="block";
    show[0].style.animation="move 3s 3s 0s 1 initial forwards";

});