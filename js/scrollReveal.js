// All scroll reveal config

ScrollReveal({reset: true}).reveal(".scroll-grow", {
    interval: 30,
    scale: 0.8,
    opacity: 0,
    duration: 1000,
    delay: 100,
    reset: true
});

ScrollReveal({reset: true}).reveal(".scroll-fade", {
    interval: 30,
    opacity: 0,
    duration: 1000,
    delay: 100,
    reset: true
});

ScrollReveal({ distance: '50px' });

ScrollReveal({reset: true}).reveal(".scroll-top", {
    interval: 30,
    opacity: 0,
    origin: "bottom",
    duration: 1000,
    delay: 200,
    reset: true
});

ScrollReveal({reset: true}).reveal(".scroll-bottom", {
    interval: 30,
    opacity: 0,
    origin: "top",
    duration: 1000,
    reset: true
});

ScrollReveal({reset: true}).reveal(".scroll-left", {
    interval: 50,
    opacity: 0,
    origin: "right",
    duration: 1000,
    delay: 300,
    reset: true
});

ScrollReveal({reset: true}).reveal(".scroll-right", {
    interval: 50,
    opacity: 0,
    origin: "left",
    duration: 1000,
    delay: 300,
    reset: true
});