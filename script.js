const observer = new IntersectionObserver((Els) =>{
  Els.forEach((el)=>{

    if(el.isIntersecting){
      console.log("showing")
      el.target.classList.add('show')
    }
  })
})

const hiddenEl = document.querySelectorAll('.hide')
const highlight = document.querySelectorAll('.highlight')

hiddenEl.forEach((el)=> observer.observe(el))
// highlight.forEach((el,index)=> {
//   console.log(el.offsetWidth)
//   el.style.animation = `${el.offsetWidth*10}ms  widthFull`

// })

document.addEventListener('DOMContentLoaded', function() {
  // open
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');

  if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
          burger[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  // close
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (close.length) {
      for (var i = 0; i < close.length; i++) {
          close[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }
});
console.log("running")