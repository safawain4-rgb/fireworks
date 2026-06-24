# Straw Hat Fireworks 🏴‍☠️

An interactive fireworks show built with HTML5 Canvas and vanilla JavaScript. Click anywhere to launch fireworks toward your cursor, click the crew avatar to cycle through your character images, and toggle background music with the mute button.

## Features

- Animated radial-gradient night sky with twinkling stars
- An original hand-drawn pirate ship on the horizon (pure canvas shapes, no image file)
- Click-to-launch fireworks with colorful trails and particle bursts
- Clickable avatar that cycles through 10 crew images
- Background music with a mute/unmute toggle

## File structure

```
straw-hat-fireworks/
├── index.html              # page structure
├── styles.css               # layout, fonts, mute button styling
├── avatar-toggle.js          # cycles the avatar image on click
├── canvas-background.js      # sky, stars, ship, water line
├── canvas-fireworks.js       # firework + particle physics and rendering
├── audio-control.js          # music playback and mute toggle
└── assets/
    ├── luffy.png
    ├── zoro.png
    ├── nami.png
    ├── ussop.png
    ├── sanji.png
    ├── chopper.png
    ├── robin.png
    ├── franky.png
    ├── brook.png
    ├── jinbei.png
    └── theme.mp3            # your own audio file (see note below)
```

## Setup

1. Save all the `.html`, `.css`, and `.js` files into one folder.
2. Create an `assets` subfolder inside it.
3. Add your 10 character images to `assets/`, named exactly as listed above (all transparent-background PNGs work best so they blend into the sky).
4. Add your audio file to `assets/` as `theme.mp3` — or open `index.html` and change the `src` in the `<audio>` tag to match whatever filename you use.
5. Open `index.html` in a browser (the VS Code "Live Server" extension works well for this) — double-clicking the file directly also works for testing.

## How to use it

- **Click anywhere** on the page to shoot a firework toward that spot. Hold the mouse down to keep launching.
- **Click the avatar** at the bottom of the screen to cycle to the next crewmate.
- **Click the speaker icon** (top-right) to mute or unmute the music. Music starts automatically on your first click anywhere on the page — this is a browser requirement, not a bug.

## Customizing

- **Avatar order / filenames** — edit the `crew` array at the top of `avatar-toggle.js`.
- **Ship position/size** — edit `shipX`, `shipWidth`, and `mastHeight` inside `drawShip()` in `canvas-background.js`.
- **Sky colors** — edit the `gradient.addColorStop(...)` lines in `drawBackground()` in `canvas-background.js`.
- **Number of stars** — change `numOfStars` at the top of `canvas-background.js`.
- **Firework particle count** — change `numberOfFlecks` in `canvas-fireworks.js` (higher = denser bursts but slower performance).
- **Title/subtitle text and fonts** — edit the `<h1>`/`<p>` text in `index.html` and the `@import` font URLs in `styles.css`.

## A note on assets

The character images and music aren't included in this project — you'll need to supply your own. If you're using official One Piece artwork or the "Binks' Sake" song, make sure you have the rights to use them (e.g. it's for personal, non-distributed use), since that artwork and music are copyrighted by their original creators (Eiichiro Oda / Shueisha / Toei Animation).
