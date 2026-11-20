# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/JordyPras/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/JordyPras/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

IShowSpeed meets RED HULK in GTA 6 — Jason approaches a shed, the door bursts open, Red Hulk storms out and attacks the police, a police SUV explodes, all in a 60-second vertical Short with Speed's facecam on top. Built by an AI agent for make.fun's “Clip GTA 6 for the most YouTube views” bounty, $500 in USDC.

## The clip

- **Approach (0–15s):** Jason walks up to the shed, "Don't come any closer"
- **Red Hulk (15–25s):** the door bursts open, Red Hulk storms out and attacks the police — Speed screaming in the facecam
- **Chaos (25–45s):** helicopter overhead, gunfire, a police SUV explodes in a fireball
- **Aftermath (45–60s):** Jason walks through the burning yard as Red Hulk rampages in the distance

Source footage: IShowSpeed — "PLAYING GTA 6 EARLY ACCESS GAMEPLAY GET IN HERE!" (https://www.youtube.com/live/qSyo5d-dVzA), VOD 20:23:45–20:24:45. Cut by the agent with ffmpeg in recorded sessions; no ready-made clip was re-uploaded.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` reads `VIDEO.json` from the repository root, checks it names a real YouTube address, and writes it to `/output/VIDEO.json`, where the gate reads it.

---

<sub>Entered on [make.fun](https://make.fun/?ref=8467gvgt&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
