(function(){
const press_bttn=document.querySelectorAll(".press-button");
const display_container=document.querySelector(".dialog-box-container");
const close_bttn=document.querySelectorAll(".close-button img");
const place_info=document.querySelectorAll(".place-in-detail-info");
press_bttn[0].addEventListener("click",function (){
    displaying_styles(a=0)
})
close_bttn[0].addEventListener("click",function(){
    removing_styles(a=0)
})
press_bttn[1].addEventListener("click",function(){
    displaying_styles(a=1)
})
close_bttn[1].addEventListener("click",function(){
    removing_styles(a=1)
})
press_bttn[2].addEventListener("click",function (){
    displaying_styles(a=2)
})
close_bttn[2].addEventListener("click",function(){removing_styles(a=2)
})
// displaying styles function
function displaying_styles(a){
    place_info[a].style.display="block";
    display_container.style.display="none";
}
// removing style function
function removing_styles(a){
    place_info[a].removeAttribute("style");
    display_container.removeAttribute("style");
}
}());