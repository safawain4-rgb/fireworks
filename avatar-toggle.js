// avatar-toggle.js
// Cycles through crew avatars when the image is clicked.
// Drop your own images into the assets/ folder using these exact filenames,
// or edit the filenames below to match whatever you name your files.

const image = document.getElementById("avatar");

const crew = [
  "./assets/luffy.png",
  "./assets/zoro.png",
  "./assets/nami.png",
  "./assets/ussop.png",
  "./assets/sanji.png",
  "./assets/chopper.png",
  "./assets/robin.png",
  "./assets/franky.png",
  "./assets/brook.png",
  "./assets/jinbei.png",
];

// keep track of which crewmate is currently showing
let currentIndex = 0;

image.addEventListener("click", function () {
  // move to the next crewmate, wrapping back to the start at the end
  currentIndex = (currentIndex + 1) % crew.length;

  image.src = crew[currentIndex];
});