const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A8'];
let currentIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 1000);