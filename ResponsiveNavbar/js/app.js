"use strict"
//code for responsive bar from top wards slide
function topNavBar(){
        const hambuger=document.querySelector(".hambuger");
        const mobileNavCenter=document.querySelector(".mobile-nav-center");
        hambuger.addEventListener("click",function(){
            if(mobileNavCenter.hasAttribute("style")){
                mobileNavCenter.style.transition="all 3s linear";
                mobileNavCenter.removeAttribute("style");
            }
            else{
                mobileNavCenter.style.top="0px";
                mobileNavCenter.style.transition="all 1s linear";
            }
        });
}
topNavBar();
