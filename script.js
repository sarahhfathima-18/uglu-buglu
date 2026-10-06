// =========================
// OPEN WEBSITE
// =========================

const openButton = document.getElementById("openButton");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

openButton.addEventListener("click", () => {
  opening.style.opacity = "0";
  opening.style.transform = "scale(0.98)";

  setTimeout(() => {
    opening.style.display = "none";
    mainContent.classList.remove("hidden");

    revealElements();
  }, 700);
});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = () => {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const position = element.getBoundingClientRect().top;

    if (position < window.innerHeight - 80) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealElements);


// =========================
// SUPERHERO FRIENDSHIP
// =========================

const superheroSection =
  document.querySelector(".superhero-section");

const togetherButton =
  document.getElementById("togetherButton");

const togetherMessage =
  document.getElementById("togetherMessage");

togetherButton.addEventListener("click", () => {

  superheroSection.classList.toggle("closer");

  if (superheroSection.classList.contains("closer")) {

    togetherButton.textContent =
      "Awww, they're together ♡";

    togetherMessage.textContent =
      "See? Everything is better when we're together. ♡";

  } else {

    togetherButton.textContent =
      "Bring them closer ♡";

    togetherMessage.textContent =
      "they're better together anyway.";

  }

});


// =========================
// SONG PLAYER
// =========================

const song =
  document.getElementById("friendSong");

const songButton =
  document.getElementById("songButton");

songButton.addEventListener("click", async () => {

  try {

    if (song.paused) {

      await song.play();

      songButton.textContent = "Ⅱ";
      songButton.classList.add("playing");

    } else {

      song.pause();

      songButton.textContent = "▶";
      songButton.classList.remove("playing");

    }

  } catch (error) {

    console.log("Song could not be played:", error);

  }

});


song.addEventListener("ended", () => {

  songButton.textContent = "▶";

  songButton.classList.remove("playing");

});


// =========================
// INITIAL REVEAL
// =========================

window.addEventListener("load", () => {

  setTimeout(() => {
    revealElements();
  }, 300);

});