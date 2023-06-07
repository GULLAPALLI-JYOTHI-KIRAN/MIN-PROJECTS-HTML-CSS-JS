function iceCounterFun(){
    const decrease=document.getElementById("bt-one");
const reset=document.getElementById("bt-two");
const increase=document.getElementById("bt-three");
let counter=0;
document.querySelector(".counter").innerHTML=counter
increase.addEventListener('click',function (){
    document.querySelector(".counter").innerHTML= ++counter;
    colorchanger()
});
document.querySelector(".counter").innerHTML=counter
decrease.addEventListener('click',function (){
    document.querySelector(".counter").innerHTML= --counter;
    colorchanger()
});
reset.addEventListener("click",function(){
    counter=0;
    document.querySelector(".counter").innerHTML=counter;
    colorchanger()
});
function colorchanger(){
    if(counter>0){
    document.querySelector(".counter").style.color="green";
}
else if(counter<0){
    document.querySelector(".counter").style.color="red";
}
else{
    document.querySelector(".counter").style.color="black";
}
}
}
iceCounterFun()