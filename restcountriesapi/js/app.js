(function(){
    const movingBar=document.querySelector(".website-header-container")
const textchanger=document.querySelector(".question-tag")
const arrowtop=document.querySelector(".arrow-bttn");
let loaderdiv=document.querySelector(".loader-container");
let inputValue;
let bbtnSubmit;
let contentDiv;
let searchDiv;
let addonprogress;
let viewbbtn;
let eachDiv;
let parentsection;
let sortingbttn;
// moving bar code start
window.addEventListener("scroll",function(){
    let scroll_value=window.scrollY;
    let innerwidthScreen=window.innerWidth>=992? 90 : 70
    if(scroll_value>=innerwidthScreen){
        movingBar.classList.add("moving-bar")
        textchanger.innerHTML=`DEVELOPED BY <br> GULLAPALLI JYOTHI KIRAN <br><h5>FRONT-END WEB DEVELOPER</h5>`
        textchanger.classList.add("small-font")
        movingBar.classList.remove("smooth-bar")
        arrowtop.style.display="block"
        arrowtop.classList.add("arrow-animation")
    }
    else{
        movingBar.classList.remove("moving-bar")
        textchanger.innerHTML="Are You  Able To Locate Your Country?"
        textchanger.classList.remove("small-font")
        movingBar.classList.add("smooth-bar")
        arrowtop.classList.remove("arrow-animation")
        arrowtop.removeAttribute("style")
    }

})
// moving bar code end
// window loading process start
window.addEventListener("load",function(){
    searchDiv=document.createElement("div")
    searchDiv.classList.add("country-search-container");
    searchDiv.innerHTML=`<div class="country-search-center wraper" id="top">
                                <div class="country-search-section">
                                    <div class="country-search">
                                        <input type="text"  id="search-country" placeholder="Locate Your Country...">
                                        <button type="submit" class="button-active" id="bbtn-submit">Search</button>
                                    </div>
                                    <div class="country-sort">
                                        <label for="sort">Sort By : </label>
                                        <select name="sort" id="sorting" >
                                            <option value="Sort">Sort</option>
                                            <option value="Reverse">Reverse</option>
                                        </select>
                                    </div>
                                </div>
                            </div>`
    movingBar.insertAdjacentElement("afterend",searchDiv)
    inputValue=document.getElementById('search-country')
    bbtnSubmit=document.getElementById('bbtn-submit')
    addonprogress=document.querySelector(".country-search-container");
    AjaxCaller(`https://restcountries.com/v3.1/all`,"one")
    sortingbttn=document.getElementById('sorting')
    sortingbttn.addEventListener("change",function(e){
        if(sortingbttn.value=="Sort"){
            document.body.removeChild(contentDiv)
                AjaxCaller(`https://restcountries.com/v3.1/all`,"one","Sort")
            }
        else if(sortingbttn.value=="Reverse"){
            document.body.removeChild(contentDiv)
                AjaxCaller(`https://restcountries.com/v3.1/all`,"one","Reverse")
                    
            
        }
    })
bbtnSubmit.addEventListener("click",function(){
    if(inputValue.value==0){
        alert("Please Enter Country Name");
    }
    else{
        AjaxCaller(`https://restcountries.com/v3.1/name/${inputValue.value}?fullText=true`,"two")
    }})
});
// window loading process end
// Ajax Caller function start
function AjaxCaller(url,caseValue,sortingtype='Sort'){
    let xhr=new XMLHttpRequest()
            xhr.open("GET",`${url}`,true)
            xhr.send()
            xhr.onprogress=()=>{
            }
            xhr.onload=()=>{
                switch (key=caseValue) {
                    case "one":   
                    try{   
                        try{

                            document.body.removeChild(loaderdiv)
                        }
                        catch(e){
                            console.log('');
                        }                  
                        if(xhr.status==200){
                            let output=JSON.parse(xhr.responseText)
                            contentDiv=document.createElement("div")
                            contentDiv.classList.add("country-container")
                            contentDiv.innerHTML='<div class="country-center one-wraper"><section class="country-section padding-left-right-twenty-mobile padding-left-right-thiry-desktop"></section></div></div>'
                            addonprogress.insertAdjacentElement("afterend",contentDiv);
                            if(sortingtype=="Sort"){
                                bodyLoad(output.sort())
                            }
                            else{
                                bodyLoad(output.reverse())
                            }
                        }
                    }
                    catch(e){
                        console.log('');
                    }
                        break;
                
                    case "two":
                        try{
                        if(xhr.status==200){
                            let output=JSON.parse(xhr.responseText)
                            bbtnCode(output)
                        }
                    }
                        catch(e){
                            console.log('');
                    }
                        break;
                
                    default:
                        break;
                }
            

        }
}
// Ajax Caller function end
// Each country details creating function start
function bodyLoad(data){
    parentsection=document.querySelector(".country-section");
    let len=data.length;
        for (let i=0;i<len;i++)
        {
            let nativename;
            for(let a in data[i].name.nativeName){
                for(let b in data[i].name.nativeName[a])
                {
                    if(b=="official")
                    nativename=data[i].name.nativeName[a][b]
                }
            
            }
            eachDiv=document.createElement("article")
            eachDiv.classList.add("each-country")
            eachDiv.classList.add("padding-left-right-ten-mobile")
            if(i==64 || i==73 || i==123 || i==216){
                    eachDiv.innerHTML=`<div class="img-component">
                    <img src="${data[i].flags.png}" alt="${data[i].name.common}-flag">
                </div>
                <div class="country-details padding-left-right-ten-mobile">
                    <p class="country-title">Country : ${data[i].name.common}</p>
                    <p class="country-desc">Native Name : ${nativename} </p>
                    <p class="country-desc">Continent : ${data[i].continents} </p>
                    <p class="country-desc">Capital : ---</p>
                    <p class="country-desc">Region : ${data[i].region} </p>
                    <p class="country-desc">Sub-region : ${data[i].subregion}</p>
                    <p class="country-desc">Population : ${data[i].population}</p>
                </div>`
            }
            else{
                    eachDiv.innerHTML=`<div class="img-component">
                    <img src="${data[i].flags.png}" alt="${data[i].name.common}-flag">
                </div>
                <div class="country-details padding-left-right-ten-mobile">
                    <p class="country-title">Country : ${data[i].name.common}</p>
                    <p class="country-desc">Native Name : ${nativename} </p>
                    <p class="country-desc">Continent : ${data[i].continents} </p>
                    <p class="country-desc">Capital : ${data[i].capital}</p>
                    <p class="country-desc">Region : ${data[i].region} </p>
                    <p class="country-desc">Sub-region : ${data[i].subregion}</p>
                    <p class="country-desc">Population : ${data[i].population}</p>
                </div>`            
            }
            parentsection.appendChild(eachDiv)
            
        }
}
// Each country details creating function end
// Button click action function start
function bbtnCode(data){
    if(inputValue.value.toLowerCase()==data[0].name.common.toLowerCase()){
                document.body.removeChild(contentDiv)
                let viewCountryDiv=document.createElement("div")
                viewCountryDiv.classList.add("view-country-container")
                viewCountryDiv.innerHTML='<div class="view-country-center wraper"></div>'
                movingBar.insertAdjacentElement("afterend",viewCountryDiv);
                let lang;
                for( x in data[0]){
                    for( y in data[0].languages){
                        lang=data[0].languages[y];
                        break;
                    }
                }
                let nativename;
                for(let a in data[0].name.nativeName){
                    for(let b in data[0].name.nativeName[a])
                    {
                        if(b=="official")
                        nativename=data[0].name.nativeName[a][b]
                    }
                
                }
                let currenciesName;
                let currenciesSymbol;
                for(o in data[0].currencies){
                        currenciesName=data[0].currencies[o].name;
                        currenciesSymbol=data[0].currencies[o].symbol;
                        break;
                    }
                    let viewDiv;
                    if(data[0].name.common=="Bouvet Island"){
                        viewDiv=document.createElement("div")
                        viewDiv.classList.add("view-country-section")
                        viewDiv.classList.add("padding-left-right-twenty-mobile")
                        viewDiv.classList.add("padding-left-right-thirty-desktop")
                        viewDiv.innerHTML=`<button class="back-bttn button-active"> Back</button>
                            <div class="view-country-img-component">
                                <img src="${data[0].flags.png}" alt="${data[0].name.common}-flag">
                            </div>
                            <div class="view-country-details">
                                <div class="one-view-country-details">
                                    <p class="country-title">Country : ${data[0].name.common}</p>
                                    <p class="country-desc">Native Name : ${nativename}</p>
                                    <p class="country-desc">Continent : ${data[0].continents} </p>
                                    <p class="country-desc">Capital : --- </p>
                                    <p class="country-desc">Region : ${data[0].region} </p>
                                    <p class="country-desc">Sub-region : ${data[0].subregion}</p>
                                    <p class="country-desc">Population : ${data[0].population}</p>
                                </div>
                                <div class="two-view-country-details">
                                    <p class="country-desc">Language: ${lang} </p>
                                    <p class="country-desc">Currencie Name : ---</p>
                                    <p class="country-desc">Currencie Symbol : --- </p>
                                    <p class="country-desc">Time Zone : ${data[0].timezones} </p>
                                    <p class="country-desc">Google Map : <a href="${data[0].maps.googleMaps}" target="_blank">To Visit</a></p>
                                </div>
                            </div>`
                    }
                    else if(data[0].name.common=="Antarctica"){
                        viewDiv=document.createElement("div")
                        viewDiv.classList.add("view-country-section")
                        viewDiv.classList.add("padding-left-right-twenty-mobile")
                        viewDiv.classList.add("padding-left-right-thirty-desktop")
                        viewDiv.innerHTML=`<button class="back-bttn button-active"> Back</button>
                            <div class="view-country-img-component">
                                <img src="${data[0].flags.png}" alt="${data[0].name.common}-flag">
                            </div>
                            <div class="view-country-details">
                                <div class="one-view-country-details">
                                    <p class="country-title">Country : ${data[0].name.common}</p>
                                    <p class="country-desc">Native Name :---</p>
                                    <p class="country-desc">Continent : ${data[0].continents} </p>
                                    <p class="country-desc">Capital : --- </p>
                                    <p class="country-desc">Region : ${data[0].region} </p>
                                    <p class="country-desc">Sub-region : ---</p>
                                    <p class="country-desc">Population : ${data[0].population}</p>
                                </div>
                                <div class="two-view-country-details">
                                    <p class="country-desc">Language: ---</p>
                                    <p class="country-desc">Currencie Name : ---- </p>
                                    <p class="country-desc">Currencie Symbol : --- </p>
                                    <p class="country-desc">Time Zone : ${data[0].timezones[0]} </p>
                                    <p class="country-desc">Google Map : <a href="${data[0].maps.googleMaps}" target="_blank">To Visit</a></p>
                                </div>
                            </div>`
                    }
                    else if(data[0].name.common=="Macau"||data[0].name.common=="Heard Island and McDonald Islands"){
                        viewDiv=document.createElement("div")
                        viewDiv.classList.add("view-country-section")
                        viewDiv.classList.add("padding-left-right-twenty-mobile")
                        viewDiv.classList.add("padding-left-right-thirty-desktop")
                        viewDiv.innerHTML=`<button class="back-bttn button-active"> Back</button>
                            <div class="view-country-img-component">
                                <img src="${data[0].flags.png}" alt="${data[0].name.common}-flag">
                            </div>
                            <div class="view-country-details">
                                <div class="one-view-country-details">
                                    <p class="country-title">Country : ${data[0].name.common}</p>
                                    <p class="country-desc">Native Name : ${nativename}</p>
                                    <p class="country-desc">Continent : ${data[0].continents} </p>
                                    <p class="country-desc">Capital : --- </p>
                                    <p class="country-desc">Region : ${data[0].region} </p>
                                    <p class="country-desc">Sub-region : ${data[0].subregion}</p>
                                    <p class="country-desc">Population : ${data[0].population}</p>
                                </div>
                                <div class="two-view-country-details">
                                    <p class="country-desc">Language: ${lang} </p>
                                    <p class="country-desc">Currencie Name : ${currenciesName} </p>
                                    <p class="country-desc">Currencie Symbol : ${currenciesSymbol} </p>
                                    <p class="country-desc">Time Zone : ${data[0].timezones} </p>
                                    <p class="country-desc">Google Map : <a href="${data[0].maps.googleMaps}" target="_blank">To Visit</a></p>
                                </div>
                            </div>`
                    }
                    else{
                        viewDiv=document.createElement("div")
                        viewDiv.classList.add("view-country-section")
                        viewDiv.classList.add("padding-left-right-twenty-mobile")
                        viewDiv.classList.add("padding-left-right-thirty-desktop")
                        viewDiv.innerHTML=`<button class="back-bttn button-active"> Back</button>
                            <div class="view-country-img-component">
                                <img src="${data[0].flags.png}" alt="${data[0].name.common}-flag">
                            </div>
                            <div class="view-country-details">
                                <div class="one-view-country-details">
                                    <p class="country-title">Country : ${data[0].name.common}</p>
                                    <p class="country-desc">Native Name : ${nativename}</p>
                                    <p class="country-desc">Continent : ${data[0].continents} </p>
                                    <p class="country-desc">Capital : ${data[0].capital}</p>
                                    <p class="country-desc">Region : ${data[0].region} </p>
                                    <p class="country-desc">Sub-region : ${data[0].subregion}</p>
                                    <p class="country-desc">Population : ${data[0].population}</p>
                                </div>
                                <div class="two-view-country-details">
                                    <p class="country-desc">Language: ${lang} </p>
                                    <p class="country-desc">Currencie Name : ${currenciesName} </p>
                                    <p class="country-desc">Currencie Symbol : ${currenciesSymbol} </p>
                                    <p class="country-desc">Time Zone : ${data[0].timezones} </p>
                                    <p class="country-desc">Google Map : <a href="${data[0].maps.googleMaps}" target="_blank">To Visit</a></p>
                                </div>
                            </div>`
                    }
                    viewCountryDiv.appendChild(viewDiv);
                    document.body.removeChild(searchDiv)
                    document.querySelector(".back-bttn").addEventListener("click",function(){
                        document.body.removeChild(viewCountryDiv)
                        document.body.appendChild(contentDiv)
                        movingBar.insertAdjacentElement("afterend",searchDiv)
                    })
            }
}
// Button click action function end

}())