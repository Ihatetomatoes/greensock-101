gsap.from(
    'body', {
        backgroundColor: "#fff", 
        duration: 1.7, 
        ease: 'none'
    }
);
gsap.fromTo(
    ['h1', '.intro'], {
        opacity: 0, 
        y: -20
    }, 
    {
        opacity: 1, y: 0, 
        duration: 0.6, 
        ease: 'power1.out', 
        delay: 1.5,
        stagger: 0.2
    }
);

gsap.from(
    ['img', 'h2'], {
        opacity: 0,
        duration: 0.7, 
        ease: 'none', 
        delay: 2.8
    }
);

gsap.fromTo(
    'ul li',  {
        opacity: 0, 
        y: -20
    }, 
    {
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: 'power1.out',
        stagger: 0.2, 
        delay: 4
    }
);