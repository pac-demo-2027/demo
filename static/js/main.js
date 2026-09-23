/* Comparison galleries for the project page.
 *
 * Each gallery plays every arm of one clip at once on a shared clock. Only one
 * track is audible at a time -- four simultaneous soundtracks are unusable, and
 * the long-horizon claim is about a single track fading, so the listener has to
 * pick which one to hear.
 */

const LONG_ARMS = [
  { key: 'decoupled',    name: 'Decoupled',    sub: '4 step',  tag: 'ours', ours: true },
  { key: 'decoupled50',  name: 'Decoupled-50', sub: '50 step', tag: null },
  { key: 'chained_ad',   name: 'Chained-AD',   sub: '4 step',  tag: null },
  { key: 'chained_da',   name: 'Chained-DA',   sub: '4 step',  tag: null },
];

const HELD_ARMS = [
  { key: 'teacher',    name: 'Teacher',    sub: '50 step, bidirectional', tag: 'ref' },
  { key: 'wholeseg',   name: 'Whole-seg',  sub: '4 step, bidirectional',  tag: null },
  { key: 'decoupled',  name: 'Decoupled',  sub: '4 step, streaming',      tag: 'ours', ours: true },
  { key: 'chained_da', name: 'Chained-DA', sub: '4 step, streaming',      tag: null },
];

const RHO_KEY = {
  decoupled: 'Decoupled', decoupled50: 'Decoupled-50',
  chained_ad: 'Chained-AD', chained_da: 'Chained-DA',
};

const TAG_TEXT = { ours: 'ours', ref: 'reference' };

const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
};

class Gallery {
  constructor(root, clips, arms, opts) {
    this.root = root;
    this.clips = clips;
    this.arms = arms;
    this.opts = opts;
    this.index = 0;
    this.audioArm = opts.defaultAudio;

    this.chips = el('div', 'chips');
    this.bar = el('div', 'player-bar');
    this.grid = el('div', 'grid4');
    this.note = el('p', 'clip-note');
    root.append(this.chips, this.bar, this.grid, this.note);

    this.buildChips();
    this.buildBar();
    this.show(0);
  }

  buildChips() {
    this.clips.forEach((c, i) => {
      const b = el('button', 'chip', this.opts.label(c));
      b.onclick = () => this.show(i);
      this.chips.append(b);
    });
  }

  buildBar() {
    const play = el('button', null, 'Play all');
    const restart = el('button', null, 'Restart');
    const scrub = el('input', 'scrub');
    scrub.type = 'range';
    scrub.min = 0; scrub.max = 1000; scrub.value = 0;
    this.meta = el('span', 'meta');

    play.onclick = () => {
      const paused = this.videos.some(v => v.paused);
      this.videos.forEach(v => (paused ? v.play().catch(() => {}) : v.pause()));
      play.textContent = paused ? 'Pause' : 'Play all';
    };
    restart.onclick = () => {
      this.videos.forEach(v => { v.currentTime = 0; v.play().catch(() => {}); });
      play.textContent = 'Pause';
    };
    scrub.oninput = () => {
      const d = this.videos[0]?.duration;
      if (d) this.videos.forEach(v => { v.currentTime = (scrub.value / 1000) * d; });
    };

    this.playBtn = play;
    this.scrub = scrub;
    this.bar.append(play, restart, scrub,
      el('span', null, 'Click a panel to hear it.'), this.meta);
  }

  show(i) {
    this.index = i;
    const clip = this.clips[i];
    [...this.chips.children].forEach((c, k) => c.classList.toggle('on', k === i));

    // Detaching a <video> does not stop it, so the outgoing clip has to be told
    // to stop before the grid is replaced or its audio keeps running.
    (this.videos || []).forEach(v => { v.pause(); v.removeAttribute('src'); v.load(); });
    this.grid.innerHTML = '';
    this.videos = [];

    for (const arm of this.arms) {
      const src = clip.arms[arm.key];
      if (!src) continue;

      const cell = el('div', 'cell' + (arm.ours ? ' is-ours' : ''));
      const head = el('div', 'cell-head');
      head.append(el('span', 'cell-name', `${arm.name}<span class="cell-sub">${arm.sub}</span>`));
      if (arm.tag) head.append(el('span', `tag tag-${arm.tag}`, TAG_TEXT[arm.tag]));

      // The speaker toggle lives in the footer: two badges in the header wrap at
      // the narrowest column width and knock the video frames off one baseline.
      const speaker = el('button', 'spk', 'listen');
      speaker.title = 'Route this panel\u2019s audio to the speakers';

      const v = el('video');
      v.src = src;
      v.poster = clip.poster || '';
      v.playsInline = true;
      v.preload = 'metadata';
      v.loop = true;
      v.controls = false;
      v.muted = arm.key !== this.audioArm;
      if (clip.w && clip.h) v.style.aspectRatio = `${clip.w} / ${clip.h}`;

      const foot = el('div', 'cell-foot');
      foot.append(el('span', 'foot-text', this.opts.foot(clip, arm)), speaker);
      cell.append(head, v, foot);

      cell.onclick = ev => { if (ev.target === v) this.route(arm.key); };
      speaker.onclick = () => this.route(arm.key);

      this.grid.append(cell);
      this.videos.push(v);
      v.dataset.arm = arm.key;
      v._speaker = speaker;
    }

    // Keep the panels on one clock. The first panel drives; decoding jitter is
    // corrected only past 150 ms, below which a seek costs more than it fixes.
    const lead = this.videos[0];
    this.videos.forEach(v => {
      v.addEventListener('play', () => {
        this.playBtn.textContent = 'Pause';
        this.videos.filter(o => o !== v && o.paused).forEach(o => o.play().catch(() => {}));
      });
    });
    if (lead) {
      lead.addEventListener('timeupdate', () => {
        if (lead.duration) this.scrub.value = (lead.currentTime / lead.duration) * 1000;
        this.videos.forEach(v => {
          if (v !== lead && Math.abs(v.currentTime - lead.currentTime) > 0.15) {
            v.currentTime = lead.currentTime;
          }
        });
      });
    }
    this.scrub.value = 0;

    this.route(this.audioArm);
    this.meta.textContent = this.opts.meta(clip);
    this.note.innerHTML = this.opts.note(clip);
    this.playBtn.textContent = 'Play all';
  }

  route(armKey) {
    this.audioArm = armKey;
    this.videos.forEach(v => {
      const on = v.dataset.arm === armKey;
      v.muted = !on;
      v._speaker.textContent = on ? 'audible' : 'listen';
      v._speaker.className = on ? 'spk on' : 'spk';
    });
  }

}

function fmtRho(clip, arm) {
  const r = clip.rho[RHO_KEY[arm.key]];
  if (r == null) return '&rho; &mdash;';
  const verdict = r < 0.7 ? '<span class="tag tag-bad">fades</span>'
                          : '<span class="tag tag-good">sustains</span>';
  return `&rho; <b>${r.toFixed(2)}</b> &nbsp;${verdict}`;
}

function init(data) {
  new Gallery(
    document.getElementById('long-gallery'),
    data.long30s, LONG_ARMS,
    {
      defaultAudio: 'decoupled',
      label: c => c.name,
      foot: fmtRho,
      meta: c => `${c.duration.toFixed(0)} s \u00b7 ${c.w}\u00d7${c.h}`,
      note: c => `<b>&rho;</b> is the closing 10&#8201;s of RMS amplitude over the opening 10&#8201;s,
        measured on raw samples so that falling silent registers. Over all forty clips the medians are
        0.94 for Decoupled, 0.82 for Decoupled-50 and <b>0.60 for Chained-DA</b>, which is the lowest
        of the three on 27 of 40 clips; paired signed-rank tests separate the chained route from both
        composed ones at <i>p</i>&thinsp;&lt;&thinsp;10<sup>&minus;4</sup>.`,
    });

  new Gallery(
    document.getElementById('heldout-gallery'),
    data.heldout, HELD_ARMS,
    {
      defaultAudio: 'decoupled',
      label: c => `${c.bucket === '640x640' ? 'square' : 'landscape'} \u00b7 ${c.index}`,
      foot: (clip, arm) => {
        const k = { decoupled: 'Decoupled', chained_da: 'Chained-DA', wholeseg: 'Whole-seg' }[arm.key];
        if (!k || clip.iqa[k] == null) return 'scored against';
        const drift = clip.drift[k] == null ? '&mdash;' : clip.drift[k].toFixed(2);
        return `IQA <b>${clip.iqa[k].toFixed(3)}</b> &nbsp;&middot;&nbsp; drift <b>${drift}</b>`;
      },
      meta: c => `${c.frames} frames \u00b7 ${c.duration.toFixed(1)} s \u00b7 ${c.w}\u00d7${c.h}`,
      note: c => (c.text
        ? `<b>Script:</b> &ldquo;${c.text}&rdquo;<br>`
        : '') +
        `<b>Drift</b> is the last window's image quality over the first window's. A value near 1 means
         the clip ends as sharp as it started.`,
    });
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.DEMO) init(window.DEMO);
  else fetch('static/manifest.json').then(r => r.json()).then(init);

  document.querySelectorAll('.copy').forEach(b => {
    b.onclick = () => {
      navigator.clipboard.writeText(document.getElementById(b.dataset.target).textContent);
      const was = b.textContent;
      b.textContent = 'Copied';
      setTimeout(() => (b.textContent = was), 1400);
    };
  });
});
