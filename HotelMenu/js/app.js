/* queryselector for individual division*/ 
const fullMenu=document.querySelector(".full-menu");
const breaksFast=document.querySelectorAll(".breaks-fast");
const lunch=document.querySelectorAll(".lunch");
const dinner=document.querySelectorAll(".dinner");
const drinks=document.querySelectorAll(".drinks");
/* getElementById for each link*/
const allMenu=document.getElementById("all-menu");
const breakfastMenu=document.getElementById("breakfast-menu");
const lunchMenu=document.getElementById("lunch-memu");
const dinnerMenu=document.getElementById("dinner-menu");
const drinksMenu=document.getElementById("drinks-menu");
/*------------------------------------------------------------------*/
/* event is created for allMenu*/
allMenu.addEventListener("click",function(){
    allMenu.classList.add("active-list");
    const mainarray=[breaksFast,lunch,dinner,drinks];
    allMenufun(mainarray);
    const listActiveArray=[breakfastMenu,lunchMenu,dinnerMenu,drinksMenu];
    removeActiveList(listActiveArray);
})
/* event is created for breakfastMenu*/
breakfastMenu.addEventListener("click",function(){
    breakfastMenu.classList.add("active-list");
    const mainarray=[lunch,dinner,drinks];
    childMenufun(breaksFast,mainarray);
    const listActiveArray=[allMenu,lunchMenu,dinnerMenu,drinksMenu];
    removeActiveList(listActiveArray);
});
/* event is created for lunchMenu*/
lunchMenu.addEventListener("click",function(){
    lunchMenu.classList.add("active-list");
    const mainarray=[breaksFast,dinner,drinks];
    childMenufun(lunch,mainarray);
    const listActiveArray=[allMenu,breakfastMenu,dinnerMenu,drinksMenu];
    removeActiveList(listActiveArray);
});
/* event is created for dinnerMenu*/
dinnerMenu.addEventListener("click",function(){
    dinnerMenu.classList.add("active-list");
    const mainarray=[breaksFast,lunch,drinks];
    childMenufun(dinner,mainarray);
    const listActiveArray=[allMenu,breakfastMenu,lunchMenu,drinksMenu];
    removeActiveList(listActiveArray);
});
/* event is created for drinksMenu*/
drinksMenu.addEventListener("click",function(){
    drinksMenu.classList.add("active-list");
    const mainarray=[breaksFast,lunch,dinner]
    childMenufun(drinks,mainarray)
    const listActiveArray=[allMenu,breakfastMenu,lunchMenu,dinnerMenu];
    removeActiveList(listActiveArray)
});
/* this function is for removeActiveList class that applies on event when click on each item*/ 
function removeActiveList(listActiveArray){
    let Arraylength=listActiveArray.length;
    for(let i=0;i<Arraylength;i++){
        listActiveArray[i].classList.remove("active-list");
    }
}
/* this function is for allmenu display*/ 
function allMenufun(mainarray){
    let Arraylength=mainarray.length;
    for (let i=0;i<Arraylength;i++){
        let arr=Array.from(mainarray[i]);
        let innerArray=arr.length;
        for(let j=0;j<innerArray;j++){
            arr[j].classList.add("visible");
            arr[j].removeAttribute("style");
        }
    }
}
/* this function is for remaining  menu */
function childMenufun(menuName,mainarray){
    let outerArray=menuName.length;
    for(let i=0;i<outerArray;i++){
        menuName[i].removeAttribute("style");
    }
    let Arraylength=mainarray.length;
    for (let i=0;i<Arraylength;i++){
        let arr=Array.from(mainarray[i]);
        let innerArray=arr.length;
        for(let j=0;j<innerArray;j++){
            arr[j].style.display="none";
        }
    }
}

