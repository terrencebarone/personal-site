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

//Open and closes view more for projects 
let projectMoreInfo = document.querySelectorAll(".project-more-info");
let projectLessInfo = document.querySelectorAll(".project-less-info");
for(var i =0; i < 3 ;i++){
    projectMoreInfo[i].addEventListener("click",  (function(){
        this.classList.add("hide");
        this.nextElementSibling.classList.remove("hide");
        this.nextElementSibling.nextElementSibling.style.maxHeight="500px";
    }))
    projectLessInfo[i].addEventListener("click", (function(){
        this.classList.add("hide");
        this.previousElementSibling.classList.remove("hide");
        this.nextElementSibling.style.maxHeight="0px";
    }))
}

const discoverButton = document.getElementById("landing-button");
discoverButton.addEventListener("click", ()=>{
    var windowHeight = (window.innerHeight*.8);
    window.scrollTo({ top: windowHeight, behavior: 'smooth' })
    
})



//real function that gives an animation depending on scrolled height.
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  function stick(){
    if(window.pageYOffset>0){
        let header= document.getElementById("header");
        header.style.position="fixed";
        header.style.top="0px";
       
        header.style.background="rgba(0, 0, 0, 0.7)";
    }
    else{
        
        header.style.background="none";
    }
  }
  window.addEventListener("scroll", ()=>{
    reveal();
    stick();
  });