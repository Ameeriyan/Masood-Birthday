function showMessage() {
    const surpriseSection = document.getElementById("surprise");
    surpriseSection.classList.remove("hidden");
    surpriseSection.scrollIntoView({ behavior: "smooth" });
}
function revealLetter() {
    const letter = document.getElementById("letter");
    letter.classList.remove("hidden");
    letter.classList.add("show");
    letter.scrollIntoView({ behavior: "smooth" });
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 500);
// Fade-in animation for gallery images when scrolled into view
const galleryImages = document.querySelectorAll('.gallery-img');

document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    btn.addEventListener("click", () => {
        if (music.paused) {
            music.play()
                .then(() => {
                    btn.textContent = "⏸";
                })
                .catch(err => {
                    console.error("Audio error:", err);
                });
        } else {
            music.pause();
            btn.textContent = "▶";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("scroll-title");
    if (!title) return;

    window.addEventListener("scroll", () => {
        const isMobile = window.innerWidth <= 767; // matches mobile CSS
        const isDesktop = window.innerWidth > 767; // matches desktop CSS

        if (isMobile || isDesktop) {
            // You can define different thresholds if needed
            if (window.scrollY > 10) {
                title.classList.add("sticky-title");
            } else {
                title.classList.remove("sticky-title");
            }
        }
    });
});




