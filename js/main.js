const runStart = () => {
    console.log('onStart');
}

const runUpdate = () => {
    console.log('onUpdate');
}

const runComplete = () => {
    console.log('onComplete');
}

const timeline = gsap.timeline({ 
    delay: 1,
    onStart: runStart,
    onComplete: runComplete,
    onUpdate: runUpdate
});

timeline
    .from(
        'body', {
            backgroundColor: "#fff", 
            ease: 'none',
            duration: 0.4
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
            stagger: 0.3,
            duration: 0.9
        },
        '-=0.2'
    )
    .from(
        ['img', 'h2'], {
            opacity: 0,
            ease: 'none',
            duration: 0.5
        },
        '+=0.4'
    )
    .fromTo(
        'ul li',  {
            opacity: 0, 
            y: -20
        }, 
        {
            opacity: 1, 
            duration: 0.3,
            y: 0, 
            ease: 'power1.out',
            stagger: 0.1
        },
        '+=0.3'

    );

// const playButton = document.querySelector('#btnPlay');
// const playButton = document.getElementById('btnPlay');
// const btnPause = document.getElementById('btnPause');
// const btnResume = document.getElementById('btnResume');
// const btnReverse = document.getElementById('btnReverse');
// const btnSpeedUp = document.getElementById('btnSpeedUp');
// const btnSlowDown = document.getElementById('btnSlowDown');
// const btnSeek = document.getElementById('btnSeek');
// const btnProgress = document.getElementById('btnProgress');
// const btnRestart = document.getElementById('btnRestart');

// playButton.addEventListener('click', () => {
//     timeline.play();
// });

// btnPause.addEventListener('click', () => {
//     timeline.pause();
// });

// btnResume.addEventListener('click', () => {
//     timeline.resume();
// });

// btnReverse.addEventListener('click', () => {
//     timeline.reverse();
// });

// btnSpeedUp.addEventListener('click', () => {
//     timeline.timeScale(2);
// });

// btnSlowDown.addEventListener('click', () => {
//     timeline.timeScale(0.5);
// });

// console.log(timeline.duration());
// btnSeek.addEventListener('click', () => {
//     timeline.seek(1);
// });

// btnProgress.addEventListener('click', () => {
//     timeline.progress(0.5);
// });

// btnRestart.addEventListener('click', () => {
//     timeline.restart();
// });


