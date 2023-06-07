(function(){
    /* selecting whole button class start */
let bttn=document.getElementsByClassName("button");
/*selecting whole button class end */
/* selecting each tab start */
let show=document.querySelectorAll(".meeting,.contact,.support");
/* selecting each tab end */
/*  adding addEventListener for each button start */
bttn[0].addEventListener("click",function(){persentable(0)});
bttn[1].addEventListener("click",function (){persentable(1)});
bttn[2].addEventListener("click",function (){persentable(2)});
/*  adding addEventListener for each button end */
/* each tab and button style logic start */
function persentable(a){
    for(let i=0;i<show.length;i++){
        if(show[i]!=show[a]){
            show[a].style.display="block";
            show[i].style.display="none";
            bttn[a].style.backgroundColor="#3f8ed7"; 
            bttn[a].style.color="white"; 
            bttn[i].removeAttribute('style');
            bttn[i].removeAttribute('style');
            continue ;
        }
    }
}
/* each tab and button style logic end */
}());