
const parent=document.querySelector(".gallery-section");
const nextbttn=document.querySelector(".next-photo");
const newimage=document.querySelector(".img-component").firstElementChild;
let photoArray=['./asserts/photo_2.jpg','./asserts/photo_3.jpg','./asserts/photo_4.jpg','./asserts/photo_5.jpg','./asserts/photo_6.jpg','./asserts/photo_7.jpg','./asserts/photo_8.jpg','./asserts/photo_9.jpg','./asserts/photo_10.jpg'];
var i=0;
nextbttn.addEventListener('click',function(){
    newimage.src=photoArray[i];
    while(i<=photoArray.length)
        {
            if(i==(photoArray.length-1)){
                newimage.src=photoArray.slice(-1);
                break;
            }
        else{
            i++;
            break; 
        }
    }
});
const prevbttn=document.querySelector(".prev-photo");
prevbttn.addEventListener('click',function (){
    if(i!=0)
    { 
        --i;
        newimage.src=photoArray[i];
    }
    else{
        newimage.src="./asserts/photo_1.jpg";
    }
});