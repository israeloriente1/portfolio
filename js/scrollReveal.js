// All scroll reveal config

ScrollReveal().reveal(".scroll-grow", {
    interval: 30,
    scale: 0.8,
    opacity: 0,
    duration: 1000,
    delay: 100,
    reset: true
});

ScrollReveal().reveal(".scroll-grow-icon", {
    interval: 30,
    scale: 0.8,
    opacity: 0,
    duration: 1000,
    delay: 100,
    reset: false
});

ScrollReveal().reveal(".scroll-fade", {
    interval: 30,
    opacity: 0,
    duration: 1000,
    delay: 100,
    reset: false
});

ScrollReveal({ distance: '40px' });

ScrollReveal().reveal(".scroll-top", {
    interval: 30,
    opacity: 0,
    origin: "bottom",
    duration: 1000,
    delay: 200,
    reset: true
});

ScrollReveal().reveal(".scroll-bottom", {
    interval: 30,
    opacity: 0,
    origin: "top",
    duration: 1000,
    reset: true
});

ScrollReveal().reveal(".scroll-left", {
    interval: 35,
    opacity: 0,
    origin: "right",
    duration: 1000,
    reset: false
});

ScrollReveal().reveal(".scroll-right", {
    interval: 35,
    opacity: 0,
    origin: "left",
    duration: 1000,
    reset: false
});

ScrollReveal().reveal(".scroll-right-title", {
    interval: 35,
    opacity: 0,
    origin: "left",
    duration: 1000,
    reset: true
});