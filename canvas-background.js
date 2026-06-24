// canvas-background.js

(() => {
  // gets a reference to the HTML <canvas> element
  const canvas = document.getElementById("canvas-background");

  // get the rendering context for the canvas
  const context = canvas.getContext("2d");

  // get document's width and height
  const width = window.innerWidth;
  const height = window.innerHeight;

  // set background to be fullscreen
  canvas.width = width;
  canvas.height = height;

  const numOfStars = 60;

  // helper function for generating random numbers between two values
  const random = (min, max) => Math.random() * (max - min) + min;

  const drawBackground = () => {
    // The inner circle is at x=0, y=0, with radius=height
    // The outer circle is at x=0, y=0, with radius=width
    const gradient = context.createRadialGradient(0, 0, height, 0, 0, width);
    // offset and color - dusky sunset-over-the-ocean palette
    gradient.addColorStop(0, "#0b132b");
    gradient.addColorStop(0.5, "#1c2541");
    gradient.addColorStop(1, "#3a506b");

    // make canvas the color of gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
  };

  const drawStars = () => {
    let countOfStars = numOfStars;

    context.fillStyle = "#fff8e7";

    while (countOfStars--) {
      const x = random(25, width - 50);
      const y = random(25, height * 0.5);
      const size = random(1, 4);

      context.fillRect(x, y, size, size);
    }
  };

  // An original little pirate sailboat, drawn entirely from shapes
  // (no reference art) so it can sit on the horizon without any
  // copyright concerns. Feel free to tweak the colors/proportions below.
  const drawShip = () => {
    const shipX = width * 0.78; // where the ship sits along the horizon
    const baseY = height * 0.945; // the waterline
    const shipWidth = width * 0.16;
    const hullHeight = height * 0.05;
    const mastHeight = height * 0.22;

    context.save();
    context.translate(shipX, baseY);

    // --- Hull ---
    context.beginPath();
    context.moveTo(-shipWidth / 2, 0);
    context.quadraticCurveTo(0, hullHeight * 1.4, shipWidth / 2, 0);
    context.lineTo(shipWidth / 2 - shipWidth * 0.08, -hullHeight);
    context.lineTo(-shipWidth / 2 + shipWidth * 0.08, -hullHeight);
    context.closePath();
    context.fillStyle = "#6b4226";
    context.fill();
    context.strokeStyle = "#3e2412";
    context.lineWidth = 2;
    context.stroke();

    // deck trim
    context.beginPath();
    context.moveTo(-shipWidth / 2 + shipWidth * 0.08, -hullHeight);
    context.lineTo(shipWidth / 2 - shipWidth * 0.08, -hullHeight);
    context.strokeStyle = "#8a5a35";
    context.lineWidth = 3;
    context.stroke();

    // --- Mast ---
    context.beginPath();
    context.moveTo(0, -hullHeight);
    context.lineTo(0, -hullHeight - mastHeight);
    context.strokeStyle = "#3e2412";
    context.lineWidth = 4;
    context.stroke();

    // --- Yard (crossbeam holding the sail) ---
    const yardY = -hullHeight - mastHeight * 0.65;
    context.beginPath();
    context.moveTo(-shipWidth * 0.35, yardY);
    context.lineTo(shipWidth * 0.35, yardY);
    context.strokeStyle = "#3e2412";
    context.lineWidth = 3;
    context.stroke();

    // --- Sail ---
    context.beginPath();
    context.moveTo(-shipWidth * 0.3, yardY);
    context.quadraticCurveTo(
      0,
      yardY + mastHeight * 0.4,
      shipWidth * 0.05,
      -hullHeight - mastHeight * 0.05
    );
    context.lineTo(-shipWidth * 0.05, -hullHeight - mastHeight * 0.05);
    context.quadraticCurveTo(
      -shipWidth * 0.1,
      yardY + mastHeight * 0.35,
      -shipWidth * 0.3,
      yardY
    );
    context.closePath();
    context.fillStyle = "#f4ecd8";
    context.fill();
    context.strokeStyle = "#d8cba9";
    context.lineWidth = 1.5;
    context.stroke();

    // --- Pennant flag at the masthead ---
    context.beginPath();
    context.moveTo(0, -hullHeight - mastHeight);
    context.lineTo(shipWidth * 0.12, -hullHeight - mastHeight + 8);
    context.lineTo(0, -hullHeight - mastHeight + 16);
    context.closePath();
    context.fillStyle = "#c1272d";
    context.fill();

    context.restore();
  };

  const drawForeground = () => {
    // the deck of the ship / dark water line at the bottom
    context.fillStyle = "#1b1f3b";
    context.fillRect(0, height * 0.95, width, height);

    context.fillStyle = "#0b132b";
    context.fillRect(0, height * 0.955, width, height);
  };

  drawBackground();
  drawShip();
  drawForeground();
  drawStars();
})();