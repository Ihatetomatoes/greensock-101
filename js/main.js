const timeline = gsap.timeline({ 
    duration: 1 ,
    paused: true
});

timeline
    .from(
        'body', {
            backgroundColor: "#fff", 
            ease: 'none'
        }
    )
    .fromTo(
        ['h1', '.intro'], {
            opacity: 0, 
            y: -20
        }, 
        {
            opacity: 1, y: 0, 
            ease: 'power1.out',
            stagger: 0.2
        }
    )
    .from(
        ['img', 'h2'], {
            opacity: 0,
            ease: 'none'
        }
    )
    .fromTo(
        'ul li',  {
            opacity: 0, 
            y: -20
        }, 
        {
            opacity: 1, 
            y: 0, 
            ease: 'power1.out',
            stagger: 0.2
        }

    );