# Macbook-site
Short summary
---------------

Macbook-site is a small React + Three.js demo that displays interactive 3D MacBook models (14" and 16") in a web page. The app uses React for UI, react-three-fiber and @react-three/drei to render GLTF models, and a tiny Zustand store to hold UI state (color and scale). The goal is a performant, interactive product viewer with simple color/size controls and studio lighting.

Key features
------------
- Interactive 3D MacBook viewer (14" and 16") rendered in the browser with WebGL
- Color swatches to change the laptop's finish (applies material tinting or forces flat colors for true black/white)
- Size selector (14" / 16") that switches models and scales the scene
- Studio lighting and environment for realistic reflections and highlights
- Lazy-loaded video background and performance-conscious asset loading

Tech stack
----------
- Framework: React (via Vite)
- 3D: three.js via react-three-fiber (@react-three/fiber)
- Helpers & controls: @react-three/drei (useGLTF, PresentationControls, OrbitControls, Environment, useTexture)
- State: Zustand (simple store for color and scale)
- Build/dev: Vite
- Styling: CSS (global styles in `src/index.css` / `src/App.css`)

Getting started
---------------
1. Install dependencies

   npm install

2. Start the dev server

   npm run dev

3. Open the app in the browser at http://localhost:5173

How the viewer works (short)
---------------------------
- The UI controls (color swatches, size toggles) update a small global store (Zustand).
- Model components (Macbook-14.jsx and Macbook-16.jsx) read the store color and apply it to GLTF materials using a safe approach: clone the material, set color, adjust metalness/roughness, and remove maps when forcing a flat color (for correct black/white finishes).
- The scene uses Environment / Lightformer rectangles and ambient lights for studio-like lighting.
- Model switching is handled by a ModelSwitcher component wrapped in PresentationControls so users can drag-rotate the model; OrbitControls are configured for zoom/pan.

Performance tips
----------------
- Use `preload` for GLTF assets and `useTexture`'s color space correction for textures.
- Lazy-load heavy videos with `preload="metadata"` and use a poster image to show something immediately.
- Keep GLTF materials cloned before mutating to avoid affecting shared materials across instances.

Project structure (important files)
----------------------------------
- `index.html` - app entry
- `src/main.jsx` / `src/app.jsx` - React entry and root layout
- `src/components/ProductViewer.jsx` - UI and Canvas composition
- `src/components/models/Macbook-14.jsx` - 3D model component for 14"
- `src/components/models/Macbook-16.jsx` - 3D model component for 16"
- `src/components/three/ModelSwitcher.jsx` - model selection + controls
- `src/components/StudioLights.jsx` - lighting setup
- `src/store/index.js` - zustand store (color, scale setters)
- `public/models/` - GLTF/GLB model assets

Troubleshooting
---------------
- If you see `R3F: React is not part of the THREE namespace`, make sure you are not returning DOM nodes from components mounted under the `<Canvas>` (only three.js objects: group, mesh, etc.).
- If dark/black color looks tinted, the GLTF material still has an albedo/metalness map — the model code removes maps for true-black to force a flat finish (see `Macbook-14.jsx` / `Macbook-16.jsx`).
- If you see `useEffect is not defined`, ensure React hooks are imported: `import React, { useEffect } from 'react'`.

Notes & next steps
------------------
- For production, export optimized GLB variants, consider compressing textures (WebP/AVIF for 2D assets, Draco for meshes) and serve via a CDN.
- Add tests for UI controls and a simple smoke test for Canvas rendering if desired.

License & credits
-----------------
This project uses example 3D models and helper libraries. Check component credits and model licenses in `public/models/` before redistribution.

Contact
-------
If you need help adapting the viewer or fixing a rendering issue, paste the console error and the relevant component file and I'll help debug.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


