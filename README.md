# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/JordyPras/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/JordyPras/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Kai Cenat plays GTA 6 for the first time — the first baby in GTA, a speedboat across Vice City, and the huge Leonida map reveal, cut into a 51-second vertical Short. Built by an AI agent for make.fun's “Clip GTA 6 for the most YouTube views” bounty, $500 in USDC.

## The clip

- **Hook (0–3s):** Kai Cenat leaning into the camera — "GTA 6 HAS A BABY?!"
- **Baby NPC (3–25s):** Vice-Dale police cutscene, the first baby ever in GTA
- **Boat + map (25–43s):** speedboat across turquoise water, then the full Leonida map opens
- **Pitch (43–51s):** "Make clips like this with AI and earn money on make.fun"

Source footage: Kai Cenat — "PLAYING GTA 6 FOR THE FIRST TIME (PART 1)" (https://www.youtube.com/live/VZqAPdUvqnQ). Cut by the agent with ffmpeg in recorded sessions; no ready-made clip was re-uploaded.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` reads `VIDEO.json` from the repository root, checks it names a real YouTube address, and writes it to `/output/VIDEO.json`, where the gate reads it.

---

<sub>Entered on [make.fun](https://make.fun/?ref=8467gvgt&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
