function sideBarMenuFun(){
    const hambuger=document.querySelector(".hambuger").firstElementChild;
    const closeButton=document.querySelector("#closeButton");
    const sidebarSectionContainer=document.querySelector(".sidebar-section-container");
    hambuger.addEventListener("click",function (){
        hambuger.style.display="none";
        sidebarSectionContainer.style.left="0%";
        sidebarSectionContainer.style.transition="all 1s ease-out";
    });
    closeButton.addEventListener("click",function(){
        hambuger.style.display="flex";
        sidebarSectionContainer.removeAttribute('style');
        sidebarSectionContainer.style.transition="left 1s linear";
    });
}
sideBarMenuFun()