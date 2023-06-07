(function(){
    const app_icon=document.querySelector(".img-component");
const mobile_component=document.querySelectorAll(".mobile-component-section");
const home_buttn=document.querySelectorAll(".home-button");
app_icon.addEventListener("click",function(){
    mobile_component[0].classList.add("display");
    mobile_component[1].classList.remove("display");
    this.style.transition="all 2s linear";
});
home_buttn[1].addEventListener("click",function(){
        mobile_component[1].classList.add("display");
        mobile_component[0].classList.remove("display");
        this.style.transition="all 2s linear";
});
// calculator calculation Code starts
let bttn=document.querySelectorAll("button");
let output=document.querySelector("#result");
for( let i=0;i<bttn.length;i++){
    bttn[i].addEventListener("click",function(){
        let input=this.innerText;
        updateinput(input);
    })
}
function updateinput(input){
    let currentdisplay=output.innerText;
    if(currentdisplay==0){
        if(input!="C" && input!="DEL" && input!="="){
            output.innerText=""
            output.innerText=input;
        }
        if(input=="ME"){
            output.innerHTML="Gullapalli jyothi kiran<br> front-End developer<br>";
            output.classList.add("special");
        }
        
    }
    else{
        if(input=="DEL"){
            output.innerText=currentdisplay.substring(0,currentdisplay.length-1);
            if(currentdisplay.substring(0,currentdisplay.length-1).length==0 || currentdisplay.substring(0,currentdisplay.length-1).length==42){
                output.innerText="0"
                output.classList.remove("special");
            }
        }
        if(input=="C"){
            output.innerText="0"
            output.classList.remove("special");
        }
        if(input!="C" && input!="DEL" && input!="=" && input!="ME"){
            output.innerText+=input;
        }
        if(input=="="){
            let display=output.innerText;
            output.innerText=eval(display);
        }
    }
}
// calculator calculation Code end
}());