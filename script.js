
document.querySelectorAll('.card').forEach(card => {
    gsap.to(card,{
        scale:0.7,
        opacity:0,
        scrollTrigger:{
            trigger:card,
            start:"top 10%",
            end:"bottom 15%",
            scrub:0.5
        }
    })
});