let gotop = document.getElementById("top");

window.addEventListener("scroll", clickedbtn);

function clickedbtn() {
    if (window.pageYOffset > 150) {
        gotop.style.opacity = "1";
    } else if (window.pageYOffset <= 50) {
        gotop.style.opacity = "0";

    }
}

gotop.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

// counter
$(document).ready(function() {
    $(".counter1").counterUp({
        delay: 10,
        time: 1200
    });
});

// hembar
let hembtn = document.getElementById("hem-btn");
let menu = document.getElementById("hemenu");

hembtn.addEventListener('click', function() {
    menu.classList.toggle("dnone");
});