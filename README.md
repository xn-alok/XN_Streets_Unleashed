# XN: STREETS UNLEASHED

Three.js open-world driving + action game (single HTML file). Works on PC and Android (landscape).

## Play online (GitHub Pages)
1. Create a new GitHub repository and upload all files from this folder (keep the `.github` folder).
2. Go to **Settings -> Pages -> Build and deployment -> Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.
4. Your game will be at `https://<username>.github.io/<repo>/`.
   On Android, open it in Chrome and use "Add to Home screen" to install it with the XN icon.

## Run locally
```
npm run build
npx serve dist
```
(or open `src/index.html` in a browser; internet is needed for the Three.js CDN)

## Controls
PC: WASD move, mouse drag camera, Shift run, Space jump/handbrake, E enter/exit (also traffic cars), F punch, H horn, R radio, Z/X indicators, V cockpit view, Esc pause.
Phone: left stick, drag right side to look, on-screen buttons.

Pause menu: missions, GPS phone, unlimited HP/energy, graphics (Low-Ultra), FPS, weather, garage, outfit, repaint, engine+handling upgrade, wheel colour, radio, save/load. See CHANGELOG.md.
