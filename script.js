//Footer click
let footer = document.querySelector("footer").firstElementChild;
let x = 0;

footer.addEventListener('click', function(){
  console.log(`clique n°${x}`);
  x++;
});

//Hamburger toggle
let navbarHeader = document.getElementById('navbarHeader');
let hamburger = document.querySelector("button");

hamburger.addEventListener('click', function(){
    navbarHeader.classList.toggle("collapse");
});

//Html Edit red
let html = document.querySelectorAll(".col-md-4")[0];
let buttonEditHtml = document.querySelectorAll(".col-md-4 .btn-outline-secondary")[0];

buttonEditHtml.addEventListener('click', function(){
    html.style.color = "red";
});

//CSS edit green
let css = document.querySelectorAll(".col-md-4")[1];
let buttonEditCss = document.querySelectorAll(".col-md-4 .btn-outline-secondary")[1];

buttonEditCss.addEventListener('click', function(){
    if (css.style.color == "green"){
        css.style.color = ""
    }else{
        css.style.color = "green"
    }
});

//Bootstrape or not
let header = document.querySelector('body header');
let link = document.querySelector("[rel=stylesheet]");

header.addEventListener('dblclick', function (e) {
   if (link.disabled == false){
       link.disabled = true
   }else {
    link.disabled = false
   };
});