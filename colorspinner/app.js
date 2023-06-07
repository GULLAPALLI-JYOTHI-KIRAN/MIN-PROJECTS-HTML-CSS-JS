//color spinner js code for hex color
const button=document.getElementById('button-color');
button.addEventListener('click',mycolor);
function mycolor(){
    const text=document.getElementById('js-text');
    const colorcode='0123456789ABCDEF';
    let hexsign='#';
    for(let i= 0;i<6;i++){
        var letter=Math.floor(Math.random()*16);
        hexsign=hexsign+colorcode[letter];
    }
    let full=hexsign;
    document.getElementById('backgroundcolor').style.backgroundColor=full;
    document.getElementById('heading-color').style.color=full;
    text.innerText=full;
        
}