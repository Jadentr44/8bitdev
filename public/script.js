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
console.log("running")