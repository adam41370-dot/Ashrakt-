

 src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"



 
  
 

    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


















let x = document.getElementById("menu");

let menu= document.querySelector("#aa");
let closeBtn= document.querySelector("#cc");
function openMenu(){
x.style.display="block";
menu.style.display="none";
closeBtn.style.display="block";
};

function closeMenu(){
x.style.display="none";
menu.style.display="block";
closeBtn.style.display="none";
}


