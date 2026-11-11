# N — Remotion Video Project

Make videos with code (React). The video project lives in [`my-video/`](my-video/).

## Setup (do this once)

**1. Install Node.js** (version 18 or newer) from https://nodejs.org — pick the "LTS" download, install with default options.

**2. Open a terminal** (Windows: press Start, type `powershell`, press Enter) and run:

```bash
git clone https://github.com/Abdishakur90/N.git
cd N
git checkout claude/setup-video-project-g98E1
cd my-video
npm install
```

> No git? Install it from https://git-scm.com/downloads first, or click the green **Code** button on GitHub → **Download ZIP** and unzip it instead of the `git clone` step.

## Run it

```bash
npm run dev
```

Your browser opens **Remotion Studio** at http://localhost:3000 — press the play button to preview the video.

## Edit the video

- `my-video/src/Root.tsx` — video settings: duration, size, fps, title text, colors
- `my-video/src/HelloWorld.tsx` — the animation itself (it's just React)

Save any file and the preview reloads instantly.

## Export as MP4

```bash
npx remotion render HelloWorld out/video.mp4
```

The finished video appears at `my-video/out/video.mp4`.

## Learn more

- Remotion fundamentals: https://www.remotion.dev/docs/the-fundamentals
- Templates and examples: https://www.remotion.dev/templates
