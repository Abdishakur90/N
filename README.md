# N

Next.js 16 + Tailwind v4 app with several UI kits installed side by side.
`src/app/page.tsx` is a demo page that uses one component from each.

```bash
npm install
npm run dev   # http://localhost:3000
```

## Installed kits

| Kit | How it's installed | Where the code lives |
| --- | --- | --- |
| [shadcn/ui](https://ui.shadcn.com) | `npx shadcn@latest init` | `src/components/ui/button.tsx`, `src/lib/utils.ts`, `components.json` |
| [Aceternity UI](https://ui.aceternity.com) | shadcn registry `@aceternity` | `src/components/ui/` (background-beams, spotlight-new, text-generate-effect) |
| [ObsidianUI](https://www.obsidianui.dev) | shadcn registry `@obsidian` | `src/components/block/` (flip-text, text-stream, draggable-marquee) |
| [BoardUI](https://www.boardui.com) | `npx boardui@latest init` / `add` | `src/components/base/`, `src/components/foundations/`, `src/styles/`, `src/utils/` |
| [transitions.dev](https://transitions.dev) | `transitions-agent` (dev dependency) + Claude Code skill | `.claude/skills/transitions-agent/` |

### Adding more components

```bash
npx shadcn@latest add @aceternity/<name>     # e.g. @aceternity/3d-card
npx shadcn@latest add @obsidian/<name>       # e.g. @obsidian/parallax-slider
npx boardui@latest add <name>                # npx boardui@latest list to browse
npx transitions-agent                        # scan the app's motion and get a score
```

Both registries are configured in `components.json`. In a sandbox where Node's
`fetch` doesn't pick up the HTTPS proxy, run the BoardUI CLI with
`NODE_USE_ENV_PROXY=1`.

### MCP servers

`.mcp.json` registers two MCP servers. Claude Code loads them when you open the
repo and asks you once to approve them.

| Server | What it can do |
| --- | --- |
| `shadcn` | Browse, search and view items in every registry in `components.json` (shadcn, `@aceternity`, `@obsidian`), and give the add command for them |
| `boardui` | List BoardUI components, show their source and usage examples, and install them |

You can then ask in chat, for example "find an Aceternity card with a hover
effect" or "which BoardUI components handle dates?". `/mcp` in Claude Code
shows their status. `NODE_USE_ENV_PROXY=1` on the BoardUI server is only needed
behind an HTTPS proxy and is harmless elsewhere.

### How the styles fit together

`src/app/globals.css` is the only Tailwind entry point. It imports shadcn's
tokens, then BoardUI's `src/styles/globals.css` (theme and typography). The two
token sets only overlap on `--color-chart-1..5`, where BoardUI's values win. Dark
mode uses the `.dark` class, set on `<html>` in `src/app/layout.tsx`.

## Not installed

- **HorizonX** (horizonx.so): a paid catalog delivered through its MCP server, a
  Figma plugin or downloads after you sign in. It has no public npm package or
  registry.
- **bencho.dev** and **astryx.atmeta.com**: the sites return `403 Forbidden` to
  automated requests, so their install instructions couldn't be read. The npm
  name `astryx` is an empty 0.0.0 placeholder, and the npm package `bencho` is
  an unrelated benchmarking CLI.
