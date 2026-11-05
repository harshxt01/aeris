# Contributing to Aeris

Thanks for wanting to help. Aeris is a small, dependency-free project, so contributing is simple.

## Ways to help

- **Report a bug.** Open an issue with the bug template. Say what you expected, what happened, and which browser and device you used.
- **Suggest a feature.** Open an issue with the feature template and describe the problem it solves.
- **Improve the code or the docs.** Open a pull request. Small, focused changes are easiest to review.

## Run it locally

```bash
git clone https://github.com/harshxt01/aeris.git
cd aeris
python3 -m http.server 8000
```

Then open <http://localhost:8000>. There's nothing to install and no build step.

## How the code is organised

Everything lives in `index.html`, in numbered sections:

1. Settings and helpers
2. Weather knowledge (codes, themes, comfort score, advice)
3. Animated icons
4. The live sky (the WebGL shader and the code that feeds it)
5. Loading data from Open-Meteo
6. Drawing the page
7. Motion (reveal, tilt, highlights)
8. Controls and start-up
9. Sky sounds
10. Compare two cities
11. Install and offline

`sw.js` is the service worker that handles offline mode.

## Before you open a pull request

- [ ] Test in at least one Chromium browser (Chrome or Edge) and Safari or Firefox if you can
- [ ] Check the layout at phone width (about 390 px)
- [ ] If you changed `index.html`, bump `VERSION` in `sw.js` (for example, `aeris-v5` to `aeris-v6`) so visitors get the update
- [ ] Keep it dependency-free: no frameworks, no build tools, no new external scripts
- [ ] Respect **Reduce motion** for any new animation

## Style

- Two-space indentation (see `.editorconfig`)
- Plain, readable names, with a short comment where the reason isn't obvious
- Interface text in sentence case, written plainly, with errors that say what happened and how to fix it

By contributing, you agree that your contribution is licensed under the [MIT License](LICENSE) and that you'll follow the [Code of Conduct](CODE_OF_CONDUCT.md).
