let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");
let desertMoon = document.getElementById("desert-moon");
let man = document.getElementById("man");
let scrollProgress = document.getElementById("progress-value"); // Fixed reference

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    // Parallax effect for home section
    moon.style.top = value * 0.9 + "px";
    text.style.top = 80 + value * 0.2 + '%';
    train.style.left = value * 1.5 + "px";

    if (desertMoon) {
        desertMoon.style.top = value * 0.3 + "px";
    }

    if (man) {
        man.style.left = value * 0.6 + "px";
    }

    // Scroll progress logic
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollProgress.parentElement.style.display = "grid";
    } else {
        scrollProgress.parentElement.style.display = "none";
    }

    scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;
});

// Scroll to top when progress bar is clicked
document.getElementById("progress").addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});

// Ensure JavaScript only runs after all elements are loaded
window.onload = () => {
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollProgress.parentElement.style.display = "grid";
    } else {
        scrollProgress.parentElement.style.display = "none";
    }

    scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;
};
