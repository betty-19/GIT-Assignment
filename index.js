


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".rock-climbing-img img, .extreme-offroad-img img, .img-one img");
    const imagesY= document.querySelectorAll(".img-two img, .img-three img, .img-four img, .suggestion")

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); 
            }
            if (entry.isIntersecting) {
                entry.target.classList.add("showY");
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.2 }); 

    images.forEach(img => observer.observe(img));
    imagesY.forEach(img => observer.observe(img));
});
