(function(){
    const inner_text=document.getElementById("input-text");
    const createChild=document.getElementById("create-child");
    var article_Container=document.createElement("article");
    const main_Section=document.querySelector(".list-section");
    const clear_bttn=document.querySelector(".clear-button");
    let article_chlid;
    article_Container.classList.add("note-list-section");
    createChild.addEventListener("click",function(){
        try{
        if(inner_text.value.length==0){
            alert("Please Enter Your Task.");
        }
        else{
                createChild.innerText="Add Task";
                main_Section.appendChild(article_Container);
                article_Container.insertAdjacentElement("afterend", clear_bttn);
                inner_text.classList.remove("inner-bg");
                for(let i=0;i<article_Container.children.length;i++){
                    article_Container.children[i].classList.remove("index-mask");
                }
                for(let i=0;article_Container.children.length>=i;i++){
                    article_chlid=document.createElement("div");
                    article_chlid.classList.add("list");
                    article_Container.appendChild(article_chlid);
                    article_chlid.innerHTML=`<p class="note">${inner_text.value}</p><div class="list-edit-del-section"><i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-trash-can"></i></div>`;
                    if(article_Container.children.length==6 && article_Container.children.length<=6){
                        clear_bttn.classList.remove("display-bbtn");
                    }
                    break;
                }
                inner_text.value=null;
        }
        article_chlid.lastElementChild.lastElementChild.addEventListener("click",function(){
            this.parentElement.parentElement.remove(this);
            alert("You Are Deleting Your Task.");
            if(article_Container.children.length==0){
                clear_bttn.classList.add("display-bbtn");
                main_Section.removeChild(article_Container);
            }
        });
        article_chlid.lastElementChild.firstElementChild.addEventListener("click",function(){
            let temp=this.parentElement.parentElement.innerText;
            child_pop=this.parentElement.parentElement;
            inner_text.value=temp;
            createChild.innerText="Editing Your Task";
            console.log(child_pop.style.backgroundColor="red");
            if(inner_text.value==temp){
                    for(let i=0;i<article_Container.children.length;i++){
                        article_Container.children[i].classList.add("index-mask");
                    }
                    inner_text.classList.add("inner-bg");
                    createChild.addEventListener("click",function(){
                    child_pop.remove();
                    })
                }
        })
    }
    catch(e){
        console.log("");
    }
    });
    clear_bttn.addEventListener("click",function(){
        article_Container.remove();
        article_Container.innerHTML=null;
        clear_bttn.classList.add("display-bbtn");
    });
}());
