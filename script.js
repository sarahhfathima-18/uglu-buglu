/* =========================================
   UGLU BUGLUU — INTERACTIONS
========================================= */


/* =========================================
   OPEN WEBSITE
========================================= */

const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    intro.classList.add("hide");

    setTimeout(() => {

        intro.style.display = "none";

        mainContent.classList.add("visible");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 750);

});


/* =========================================
   MOTIVATION MESSAGES
========================================= */

const supportButtons = document.querySelectorAll(".support-item");
const supportMessage = document.getElementById("supportMessage");

supportButtons.forEach(button => {

    button.addEventListener("click", () => {

        const message = button.dataset.message;

        supportMessage.style.opacity = "0";

        setTimeout(() => {

            supportMessage.innerHTML = `
                <span>${message}</span>
            `;

            supportMessage.style.opacity = "1";

        }, 180);

    });

});


/* =========================================
   LITTLE HEARTS ON CLICK
========================================= */

document.addEventListener("click", (event) => {

    if (
        event.target.closest("button") &&
        !event.target.closest(".support-item")
    ) {

        createHeart(
            event.clientX,
            event.clientY
        );

    }

});


function createHeart(x, y) {

    const heart = document.createElement("span");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    heart.style.color = "#d98299";
    heart.style.fontSize = `${14 + Math.random() * 12}px`;

    heart.style.transition =
        "transform 0.9s ease, opacity 0.9s ease";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =
            `translate(${(Math.random() - 0.5) * 60}px, -70px) rotate(${(Math.random() - 0.5) * 35}deg)`;

        heart.style.opacity = "0";

    });

    setTimeout(() => {
        heart.remove();
    }, 950);

}


/* =========================================
   REVEAL SECTIONS WHILE SCROLLING
========================================= */

const revealElements = document.querySelectorAll(
    ".memory-card, .support-item, .cat-dialogue > div, .letter-body"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element, index) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        `opacity 0.7s ease ${index * 0.05}s,
         transform 0.7s ease ${index * 0.05}s`;

    revealObserver.observe(element);

});


/* =========================================
   CAT HOVER INTERACTION
========================================= */

const sceneCats = document.querySelectorAll(".scene-cat");

sceneCats.forEach(cat => {

    cat.addEventListener("mouseenter", () => {

        const heart = document.querySelector(".scene-heart");

        heart.style.transform =
            "translateX(-50%) scale(1.35)";

    });

    cat.addEventListener("mouseleave", () => {

        const heart = document.querySelector(".scene-heart");

        heart.style.transform =
            "translateX(-50%) scale(1)";

    });

});


/* =========================================
   PARALLAX DECORATION
========================================= */

window.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 10;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 10;

    const cat = document.querySelector(".intro-cat");

    if (cat && intro.style.display !== "none") {

        cat.style.marginLeft = `${x}px`;
        cat.style.marginTop = `${y}px`;

    }

});


/* =========================================
   FINAL HEART
========================================= */

const finalHeart = document.querySelector(".final-heart");

if (finalHeart) {

    finalHeart.addEventListener("click", () => {

        for (let i = 0; i < 8; i++) {

            setTimeout(() => {

                createHeart(
                    window.innerWidth / 2 +
                    (Math.random() - 0.5) * 100,

                    window.innerHeight * 0.75
                );

            }, i * 100);

        }

    });

}
// SONG PLAYER
const song = document.getElementById("friendSong");
const songButton = document.getElementById("songButton");

songButton.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    songButton.textContent = "Ⅱ";
    songButton.classList.add("playing");
  } else {
    song.pause();
    songButton.textContent = "▶";
    songButton.classList.remove("playing");
  }
});

song.addEventListener("ended", () => {
  songButton.textContent = "▶";
  songButton.classList.remove("playing");
});
// CAT FRIENDSHIP INTERACTION

const catScene = document.querySelector(".cat-scene");
const catButton = document.getElementById("catButton");

catButton.addEventListener("click", () => {
  catScene.classList.toggle("closer");

  if (catScene.classList.contains("closer")) {
    catButton.textContent = "Awww, together ♡";
  } else {
    catButton.textContent = "Bring them closer ♡";
  }
});