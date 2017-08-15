// Find the library for the animation here: https://github.com/jlmakes/scrollreveal?utm_source=newsletter&utm_medium=email&utm_campaign=30_days_30_sites_day_28&utm_term=2017-07-05


//window.sr = ScrollReveal();
// Changing the defaults
window.sr = ScrollReveal({ reset: true });

sr.reveal('.header',{easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', duration:'100'});

sr.reveal('.foo', { origin: 'left', scale: 0.9 });

sr.reveal('.bar', { origin: 'right', scale: 0.9});

sr.reveal('.building', { origin: 'top'});
//sr.reveal('.fourClasses');
sr.reveal('.one', {delay: 0});
sr.reveal('.two', {delay: 100});
sr.reveal('.three', {delay: 250});
sr.reveal('.four', {delay: 400});
sr.reveal('.five', {delay: 560});
sr.reveal('.six', {delay: 700});
sr.reveal('.seven', {delay: 850});
sr.reveal('.eight', {delay: 1000});

sr.reveal('.videos',{easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', duration:'100'});

//sr.reveal('.final');
sr.reveal('.final-1' , { delay: 100});
sr.reveal('.final-2', { delay: 500});
sr.reveal('.final-3', {delay: 1000});

sr.reveal('.prefooter', { origin: 'top' });

sr.reveal('#footer', {scale: 1.5, delay: 300});