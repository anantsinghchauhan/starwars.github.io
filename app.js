const tl = gsap.timeline();

tl.from('#el',{
    height: 0,
    width:0,
    stagger: .3,
    duration: .6,
    opacity: 0
})
.from('#two',{
    stagger:.3,
    duration:1,
    ease: 'Power1.easeInOut',
    opacity:0
})
.from('#links a',{
    stagger: .3,
    duration: 1,
    opacity:0,
    x:20,
    ease: 'Power1.easeInOut'
},'-=1')
.from('#scroll',{
    stagger:.3,
    duration:1,
    ease: 'Power1.easeInOut',
    opacity:0,
    y: -20
},'-=1')
.from('#scroll #line',{
    width:0,
    opacity:0,
    ease: 'Expo.easeInOut',
    stagger: .3,
    duration:1,
    y:-10
})
