# Project page — Real-Time Joint Audio–Video Generation by Parallel Adapter Composition

A single static page. No build step, no framework: open it with any web server.

```bash
python3 -m http.server 8848 --bind 127.0.0.1
# http://127.0.0.1:8848/index.html
```

It also opens straight from `file://`, because the clip manifest is emitted twice —
as `static/manifest.json` and as `static/js/data.js`, which sets `window.DEMO`.

## Layout

```
index.html                 the whole page
static/css/style.css
static/js/main.js          the two comparison galleries
static/js/data.js          clip paths, durations, per-clip metrics
static/manifest.json       same content, for anything that prefers fetch()
static/figs/               figures lifted from the paper and the 30 s analysis
static/videos/long30s/     6 clips x 4 systems, the 30 s runs
static/videos/heldout/     6 clips x 4 systems, the held-out set
static/posters/            first-frame posters
```

## Source of the numbers

Every table on the page is transcribed from the submission. The per-clip figures
under each video panel come from the measurement files, not the paper.
