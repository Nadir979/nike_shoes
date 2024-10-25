const thumbImage = document.querySelectorAll(".thumbnails span");
const images = document.querySelectorAll(".imagebox .image");
const title = document.querySelector(".title");
const label = document.querySelector(".label");
const desc = document.querySelector(".desc");
const price = document.querySelector(".price span");

thumbImage[0].addEventListener("click",() =>{
    images[0].classList.add("active");
    images[1].classList.remove("active");
    images[2].classList.remove("active");
    title.innerText = "Air Jordan 4RM";
    label.innerText = "Women's Shoes";
    price.innerText = "$120.00";
    desc.innerText = "The remix you didn't know you needed. Made for life on the go, these sneakers reimagine the AJ4 with comfort and durability in mind. Max Air cushions your every step. Plus, elements of the upper are blended into a strong, flexible cage that wraps the shoe to add a ruggedness to your everyday commute.";
    document.body.classList.add("activeRoot");
    document.body.classList.remove("activeRoot1","activeRoot2");
});

thumbImage[1].addEventListener("click",() =>{
    images[1].classList.add("active");
    images[0].classList.remove("active");
    images[2].classList.remove("active");
    title.innerText = "Nike JAM";
    label.innerText = "Men's Shoes";
    price.innerText = "$155.00";
    desc.innerText = "Bring your body, miind and soul with JAM-Nike's first shoe created for breakers on the world stage. We obsessed over every detail from top to bottom so you can throw down in a cypher with confidence. It features a flexible and durable upper that moves with you, while textured hand grips on the midsole make it easier to grab your shoe when you're up in the air.";
    document.body.classList.add("activeRoot1");
    document.body.classList.remove("activeRoot","activeRoot2");
});

thumbImage[2].addEventListener("click",() =>{
    images[2].classList.add("active");
    images[1].classList.remove("active");
    images[0].classList.remove("active");
    title.innerText = "Sabrina 2 EP";
    label.innerText = "Basketball Shoes";
    price.innerText = "$88.00";
    desc.innerText = "Sabrina Ionescu's success is no secret. Her game is based on living in the gym, getting in rep after rep to perfect her craft. The Sabrina 2 sets you up to do more, so you're ready to go when it's game time. Our newest cushion foam helps keep you fresh, Air Zoom cushoining adds the pop and sticky traction helps you create that next-level distance.";
    document.body.classList.add("activeRoot2");
    document.body.classList.remove("activeRoot","activeRoot1");
});

// adding reveal effect
ScrollReveal().reveal(".reveal",
    {
    interval: 300,
    origin: "top",
    distance: "100px",
    scale: 0.85,
    delay: 200
});

ScrollReveal().reveal(".left",
    {
    interval: 100,
    origin: "left",
    distance: "100px",
    scale: 0.85,
    delay: 600
});

ScrollReveal().reveal(".right",
    {
    origin: "right",
    distance: "200px",
    delay: 1200
});

ScrollReveal().reveal(".scale",
    {
    scale: 0.4,
    delay: 1500
});

ScrollReveal().reveal(".raiseup",
    {
    interval: 100,
    origin: "bottom",
    distance: "100px",
    scale: 0.85,
    delay: 1800
});