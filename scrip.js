// gsap.to("body", {
//     backgroundColor: "#000",
//     scrollTrigger:{
//         trigger: "#page2",
//         start: "top 50%",
//         bottom: "top 20%",
//         scrub: true,
//         markers: true
//     }
// })



// import Lenis from '@studio-freight/lenis'

// const lenis = new Lenis({
//   duration: 1.2,
//   smooth: true
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#projects",
//         start: "top 70%",
//         end: "top 30%",
//         scrub: 1
//     }
// })
// // .from(".proj", {
// //     opacity: 0,
// //     y: 80,
// //     rotateX: 20,
// //     transformPerspective: 1000,
// //     stagger: 0.2
// // })
// // .to(".proj.middle", {
// //     scale: 1.08,
// //     z: 80
// // }, "<")
// // .to(".proj.left", {
// //     // rotateY: -15,
// //     scale: 0.92
// // }, "<")
// // .to(".card.right", {
// //     // rotateY: 15,
// //     scale: 0.92
// }, "<")

// proj.addEventListener("mousemove", (e) => {
//   const x = e.offsetX;
//   const y = e.offsetY;
//   card.style.transform =
//     `rotateY(${x/20}deg) rotateX(${-y/20}deg)`;
// });

// gsap.from(".proj", {
//   scrollTrigger: {
//     trigger: ".projects",
//     start: "top 75%"
//   },
//   rotateX: 60,
//   opacity: 0,
//   transformOrigin: "top center",
//   duration: 1,
//   stagger: 0.25,
//   ease: "power3.out"
// });

let btn = document.querySelector(".deploy-btn")
let msg = document.querySelector(".deploy-msg")

btn.addEventListener("click", () => {
  msg.classList.add("show");
  btn.disabled = true
  console.log("hello")
  setTimeout(() => {
  msg.classList.remove("show")
  btn.disabled = false
}, 1000)
})

// gsap.to("#about",{
//   scrollTrigger: {
//     trigger: "#about",
//     start: "top top",
//     end: "+-150%",
//     pin: true,
//     markers: true
//   }
// })
// gsap.to(".line",{
//   y: 200,
//   opacity: 0,
//   stagger: 0.2,
//   scrollTrigger: {
//     trigger: "#about",
//     start: "top top",
//     end: "bottom top",
//     scrub: 2
//   }
// })
