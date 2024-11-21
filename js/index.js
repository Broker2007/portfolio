const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
    if (e.target.nodeName === "BUTTON") {
        Array.from(buttonsWrapper.children).forEach(item =>
            item.classList.remove("active")
        );
        if (e.target.classList.contains("first")) {
            slides.style.transform = "translateX(-0%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains("second")) {
            slides.style.transform = "translateX(-100%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains('third')){
            slides.style.transform = 'translatex(-200%)';
            e.target.classList.add('active');
        }else if (e.target.classList.contains('four')){
            slides.style.transform = 'translatex(-300%)';
            e.target.classList.add('active');
        }else if (e.target.classList.contains('five')){
            slides.style.transform = 'translatex(-400%)';
            e.target.classList.add('active');
        }else if (e.target.classList.contains('six')){
            slides.style.transform = 'translatex(-500%)';
            e.target.classList.add('active');
        }

    }
});