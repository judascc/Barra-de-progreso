const value = document.getElementById("progress-value");
const btn = document.querySelector(".btn");
let width = 0;
let progressTime;

btn.addEventListener("click", function() {
    progressTime = setInterval(progress, 20)
});

function progress() {
    if (width >= 100) {
        clearInterval(progressTime)
    } else {
        width++;
        value.style.width = width + "%";
    }
}