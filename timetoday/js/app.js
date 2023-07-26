(function(){
    const hourSelect=document.getElementById("hours-set");
const minuteSelect=document.getElementById("minutes-set");
const remainingTimeDisplay=document.querySelector(".remaining-time");
for(let i=0;i<=60;i++){
    const childOption=document.createElement("option");
    childOption.value=i < 10? String(0)+String(`${i}`) : `${i}`;
    childOption.innerText=childOption.value < 10 ? `0${i}`: `${i}`;
    minuteSelect.appendChild(childOption);
}
for(let j=1;j<=12;j++){
    const childOption=document.createElement("option");
    childOption.value=j < 10? String(0)+String(`${j}`) : `${j}`;
    childOption.innerText=childOption.value<  10 ? `0${j}`: `${j}`;
    hourSelect.appendChild(childOption);
}
const hourDiv=document.querySelector(".hours");
const minuteDiv=document.querySelector(".minutes");
const secondDiv=document.querySelector(".seconds");
const toDayDate=document.querySelector(".todate-section h5");
let fullTime;
let hh;
let mm;
let ss;
let swift;
function getCurrentTime(){
    const date=new Date();
    hh=date.getHours();
    mm=date.getMinutes();
    ss=date.getSeconds();
    swift="AM";
    if(hh==0){
        hh=12;
    }
    else if(hh>12){
        hh-=12;
        swift="PM";
    }
    hh=hh < 10 ? "0"+hh : hh;
    mm=mm < 10 ? "0"+mm : mm;
    ss=ss < 10 ? "0"+ss : ss;
    fullTime=`${hh}${mm}${swift}`;
    hourDiv.innerText=hh;
    minuteDiv.innerText=mm;
    secondDiv.innerHTML=`${ss}  <span>${swift}</span>`;
    let weeks=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    toDayDate.innerText=`${weeks[date.getDay()]} ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    return 
}
getCurrentTime();
setInterval(function(){ 
    getCurrentTime();
    setUp();
 }, 1000);
const setUpButton=document.querySelector(".primary-bbtn");
const alarmSettings={
    sethh:"01",
    setmm:"00",
    setst:"PM",
}
let fullSet={get fullsetting(){ return `${alarmSettings.sethh}${alarmSettings.setmm}${alarmSettings.setst}`},get gettingMin(){
    return`${alarmSettings.setmm}`
}};
document.querySelectorAll("select").forEach(function (i) {
    i.addEventListener("change",function (e) {
        if(e.target.id=="hours-set"){
            alarmSettings.sethh= `${this.value}`;
        }
        else if(e.target.id=="minutes-set"){
            alarmSettings.setmm=`${this.value}`;
        }
        else if(e.target.id=="mor-eve-set"){
            alarmSettings.setst=`${this.value}`;
        }
        setUpButton.addEventListener("click",function(){
            setUp();
            upTimeLeft();
            storing()

        })
         
        
    })
});
function upTimeLeft(){
    setUpButton.animate([{
        transform: "rotateX(0deg)"
    },{
        transform: "rotateX(180deg)"
    }],{
    timing: "linear",
    duration: 3000,
    delay: 0,
    iteration: 1,
    fill:"both",
    direction: "alternate-reverse",
    });
    remainingTimeDisplay.classList.add("up");
    setUpButton.innerText="alarm Setted";
    setUpButton.style.backgroundColor="rgba(81, 212, 255, 0.96)";
            setTimeout(()=>{
                remainingTimeDisplay.classList.remove("up");
            },2000);
            setTimeout(()=>{
                setUpButton.innerText="Set Me";
                setUpButton.removeAttribute("style");
            },4000);
}
upTimeLeft();
function setUp(){
    let startHH=Number(`${hh}`);
    let startMM=Number(`${mm}`);
    let endHH=Number(`${alarmSettings.sethh}`);
    let endMM=Number(`${alarmSettings.setmm}`);
    if(alarmSettings.setst=="PM" & swift=="PM"){
        startHH=startHH+12;
        endHH=endHH+12;
    }
    else if(alarmSettings.setst=="PM" & swift=="AM" ){
        endHH=endHH+12;

    }
    else if(alarmSettings.setst=="AM" & swift=="PM"){
        startHH=startHH+12;
    }
    else{
        endHH;
        startHH;
    }
    if(startMM>endMM){
        endHH-=1;
        endMM=endMM+60;
        timeCalculator();
    }
    else if(endMM>startMM){
        timeCalculator();
    }

    var output;

    function timeCalculator(){
        if(startHH>endHH){
            endMM-=1;
            output=Math.abs((60-ss)+((24-(startHH-endHH))*3600+Math.abs((startMM-endMM))*60))*1000;
            remainingTimeDisplay.innerHTML=`Time Set  <br><span>${24-(startHH-endHH)}::${Math.abs((startMM-endMM))} min</span>`
        }
        else if(startHH<endHH){
            endMM-=1;
            output=Math.abs((60-ss)+((endHH-startHH)*3600+Math.abs(endMM-startMM)*60))*1000;
            remainingTimeDisplay.innerHTML=`Time Set  <br><span>${(endHH-startHH)}::${Math.abs(endMM-startMM)} min</span>`;
        }
        else{
            output=Math.abs(ss-((startHH-endHH)*3600+Math.abs(startMM-endMM)*60))*1000;
            remainingTimeDisplay.innerHTML=`Time Set <br><span>${(startHH-endHH)}::${Math.abs(startMM-endMM)} min</span>`;
        }
    }
    return output
    
}
setUp();
let Container=[];
function storing(){
    Container.push(setUp());
    setTimeout(()=>{
        alarmRining();
    },Container.shift());
}
storing()
function alarmRining(){
    const alarmring=new Audio("alarm.mp3");
    document.body.appendChild(alarmring);
    let ei=setInterval(() => {
        alarmring.play();
    }, setUp());
    if(fullSet.gettingMin==mm){
        
        setTimeout(()=>{
            clearInterval(ei);
        },60000)
    }
}
})()