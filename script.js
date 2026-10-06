/* =========================================================
   UGLU BUGLUU — INTERACTIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       OPENING → MAIN WEBSITE
       ===================================================== */

    const enterBtn = document.getElementById("enterBtn");
    const opening = document.getElementById("opening");
    const mainContent = document.getElementById("mainContent");

    enterBtn.addEventListener("click", () => {

        opening.style.opacity = "0";
        opening.style.transform = "scale(1.04)";

        setTimeout(() => {

            opening.classList.add("hidden");
            mainContent.classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 700);

    });


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".hero-content, .character-pair, .message-card, " +
        ".decor-section, .character-section, .song-section, " +
        ".fun-section, .letter, .final-section, .last-picture"
    );

    revealElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(35px)";
        element.style.transition =
            "opacity 1s ease, transform 1s ease";
    });


    const revealObserver = new IntersectionObserver(
        entries => {

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


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });



    /* =====================================================
       MUSIC PLAYER
       ===================================================== */

    const song = document.getElementById("song");
    const playBtn = document.getElementById("playBtn");

    if (song && playBtn) {

        playBtn.addEventListener("click", () => {

            if (song.paused) {

                song.play()
                    .then(() => {
                        playBtn.textContent = "Ⅱ";
                    })
                    .catch(() => {
                        playBtn.textContent = "▶";
                    });

            } else {

                song.pause();
                playBtn.textContent = "▶";

            }

        });


        song.addEventListener("ended", () => {
            playBtn.textContent = "▶";
        });

    }



    /* =====================================================
       CHARACTER LITTLE FLOATING EFFECT
       ===================================================== */

    const characters = document.querySelectorAll(".character");

    characters.forEach((character, index) => {

        character.addEventListener("mouseenter", () => {

            character.style.transform = "translateY(-15px) rotate(-2deg)";

        });

        character.addEventListener("mouseleave", () => {

            character.style.transform = "";

        });

    });



    /* =====================================================
       DECORATIVE IMAGE HOVER
       ===================================================== */

    const decorativeImages = document.querySelectorAll(
        ".decor-section img, .last-picture img"
    );

    decorativeImages.forEach(image => {

        image.addEventListener("mouseenter", () => {
            image.style.filter = "saturate(1.05) brightness(1.05)";
        });

        image.addEventListener("mouseleave", () => {
            image.style.filter = "";
        });

    });



    /* =====================================================
       PARALLAX EFFECT FOR DECORATIVE IMAGES
       ===================================================== */

    window.addEventListener("scroll", () => {

        const scrollPosition = window.scrollY;

        decorativeImages.forEach((image, index) => {

            const rect = image.getBoundingClientRect();

            if (
                rect.top < window.innerHeight &&
                rect.bottom > 0
            ) {

                const movement =
                    (window.innerHeight / 2 - rect.top) * 0.025;

                image.style.translate =
                    `0 ${movement}px`;

            }

        });

    });



    /* =====================================================
       HEART BETWEEN CATS
       ===================================================== */

    const heart = document.querySelector(".heart-between");

    if (heart) {

        heart.addEventListener("mouseenter", () => {
            heart.style.transform = "scale(1.3)";
        });

        heart.addEventListener("mouseleave", () => {
            heart.style.transform = "";
        });

    }



    /* =====================================================
       PREVENT BROKEN IMAGE LOOK
       ===================================================== */

    const allImages = document.querySelectorAll("img");

    allImages.forEach(image => {

        image.addEventListener("error", () => {

            image.style.opacity = "0.2";
            image.style.filter = "grayscale(1)";

            console.warn(
                "Image could not be loaded:",
                image.getAttribute("src")
            );

        });

    });



    /* =====================================================
       SMALL PAGE LOAD EFFECT
       ===================================================== */

    document.body.classList.add("page-loaded");

});