window.addEventListener("load",init())

function init(){

const wrapper = document.getElementById("wrapper")
gsap.set( wrapper, {opacity:0, margin:'-200 0 0 0' })


document.querySelectorAll(".bullet").forEach((el,index)=>{
    gsap.set(el,{opacity:0})
 })

const tl = gsap.timeline({})

tl.to( wrapper,1, {opacity:1,margin:'0 0 0 0' ,ease:"power3.out"})
  .fromTo( ".header",.5,{opacity:0,scale:1.5}, {scale:1,opacity:1},"<.2")
  .fromTo( ".txt",.5,{opacity:0,scale:1.5}, {scale:1,opacity:1},"<.2") 
  .call( animateBullets)
tl.play

}

function animateBullets(){
    document.querySelectorAll(".bullet").forEach((el,index)=>{
       gsap.fromTo(el,.5,{x:40,opacity:0},{x:0,opacity:1,delay:.2*index})
    })
}

document.querySelector(".block").addEventListener("mouseenter",(ev)=>{
    gsap.to(ev.target,.2,{scale:1.03})
})

document.querySelector(".block").addEventListener("mouseleave",(ev)=>{
    gsap.to(ev.target,.2,{scale:1})
})

