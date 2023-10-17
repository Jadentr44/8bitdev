// JavaScript
const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in");
if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
      } else {
        // element.classList.remove("fade-in-up");
      }
    });
  });
}

const navLis = document.querySelectorAll('.link')
navLis.forEach(e=>{
  e.addEventListener('mouseover', function(){

    e.children[0].classList.add("visible")
    e.children[0].classList.remove("invisible")
  })
  e.addEventListener('mouseout', function(){

    e.children[0].classList.remove("visible")
    e.children[0].classList.add("invisible")
  })

})
console.log("running")