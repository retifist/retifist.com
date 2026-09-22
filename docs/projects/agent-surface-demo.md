---
title: Agent surface demo
description: Smoke page for block math, Mermaid, video + transcript, and /llms discovery.
transcript: /transcripts/agent-surface-demo.md
---

# Agent surface demo

Infrastructure check page — not a lesson. Confirms block math, Mermaid fences, a video with a transcript link, and the agent Markdown alternate.

Agents: start at [`/llms.txt`](/llms.txt). For full page markdown (not only `/llms` stubs), clone the public site source [`https://github.com/retifist/retifist.com.git`](https://github.com/retifist/retifist.com.git) — content under `docs/`.

## Block math

Coverage ratio for a rectangular panel (illustrative):

$$
\frac{W_{\text{finished}}}{W_{\text{pattern}}} = s
$$

## Mermaid

```mermaid
flowchart LR
  HumanMd[Human Markdown] --> VitePress
  VitePress --> Html[Human HTML]
  HumanMd --> Gen[Stub generator]
  Gen --> Llms["/llms stubs"]
  Html --> Alt["rel=alternate"]
  Alt --> Llms
```

## Video + transcript

Placeholder embed; transcript link is required for video pages.

<YouTubeEmbed videoId="dQw4w9WgXcQ" title="Placeholder — agent surface demo" transcript="/transcripts/agent-surface-demo.md" />
