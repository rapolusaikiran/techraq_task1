let cardWrapper = document.querySelector('.card-wrapper');
let cards = document.querySelectorAll('.card');
let totalCards = cards.length;
let currentIndex = 0;
let visibleCards = 3; // Number of visible cards at a time

document.getElementById('next-btn').addEventListener('click', function () {
    if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
        slideCards();
    }
});

document.getElementById('prev-btn').addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        slideCards();
    }
});

function slideCards() {
    cardWrapper.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;
}


function playPauseVideo() {
    var video = document.getElementById("video");
    var playIcon = document.getElementById("play-icon");
    if (video.paused) {
        video.play();
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
        document.querySelector(".video-overlay").style.display = "none";
    } else {
        video.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
        document.querySelector(".video-overlay").style.display = "flex";
    }
}