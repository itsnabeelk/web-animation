// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
// anim-logo
gsap.from("a .logo",{
  duration: 2,
  scrollTrigger: {
    trigger: "a .logo",
    toggleActions: "restart restart none none",
  },
  x: -300,
  stagger: 0.2,
});
// anim-text
gsap.from("nav ul li a", {
  duration: 1,
  scrollTrigger: {
    trigger: "nav ul",
    start: "top center",
    toggleActions: "restart restart restart reverse",
  },
  y: -300,
  stagger: 0.3,
});
// text-animation-end


// scrollAnimation-Start
const lenis = new Lenis()

lenis.on('scroll', (e) => {
console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
lenis.raf(time * 600)
})

gsap.ticker.lagSmoothing(0)
// scrollAnimation-End