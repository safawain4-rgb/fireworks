// audio-control.js
// Handles starting the background music and the mute/unmute button.
// Drop your audio file into assets/ as "theme.mp3" (or update the
// path in index.html's <audio> tag to match your filename).

const themeSong = document.getElementById("theme-song");
const muteButton = document.getElementById("mute-toggle");

let musicStarted = false;

// Browsers block audio with sound from autoplaying until the user
// interacts with the page, so we start it on the very first click
// anywhere (avatar, canvas, background - doesn't matter where).
document.addEventListener("click", () => {
  if (!musicStarted) {
    themeSong.play().catch(() => {
      // playback can fail silently if the file is missing - that's fine,
      // the rest of the page still works without it
    });
    musicStarted = true;
  }
});

muteButton.addEventListener("click", (e) => {
  // stop this click from also being treated as a generic page click
  e.stopPropagation();

  themeSong.muted = !themeSong.muted;
  muteButton.textContent = themeSong.muted ? "🔇" : "🔊";

  // in case music hadn't started yet, kick it off now
  if (!musicStarted) {
    themeSong.play().catch(() => {});
    musicStarted = true;
  }
});
