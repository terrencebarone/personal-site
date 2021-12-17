//Open and closes featured courses desc
let moreInfo = document.querySelectorAll(".course-more-info");
let lessInfo = document.querySelectorAll(".course-less-info");
for(var i =0; i < 4 ;i++){
    moreInfo[i].addEventListener("click",  (function(){
        this.classList.add("hide");
        this.nextElementSibling.classList.remove("hide");
        this.nextElementSibling.nextElementSibling.style.maxHeight="500px";
    }))
    lessInfo[i].addEventListener("click", (function(){
        this.classList.add("hide");
        this.previousElementSibling.classList.remove("hide");
        this.nextElementSibling.style.maxHeight="0px";
    }))
}

//Open and closes view more classes
let viewMoreClasses= document.getElementById("view-more-classes");
let moreClasses = document.getElementById("additional-classes")
viewMoreClasses.addEventListener("click", ()=>{
    if(viewMoreClasses.innerText==="View More Classes"){
        moreClasses.style.padding="10px";
        viewMoreClasses.innerText="View Less Classes";
        moreClasses.style.maxHeight="500px";
    }
    else{
        moreClasses.style.padding="0px";
        viewMoreClasses.innerText="View More Classes";
        moreClasses.style.maxHeight="0px";
    }
})