from pathlib import Path
import base64

ROOT = Path(__file__).parent
FONT = base64.b64encode((ROOT / "fonts/HankenGrotesk.woff2").read_bytes()).decode()
AVATAR = base64.b64encode((ROOT / "img/avatar.jpg").read_bytes()).decode()

ICONS = {
    "github": '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.6 7.6 0 0 1 8 4.77c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
    "x": '<svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor"><path d="M12.6.75h2.45l-5.36 6.13L16 15.25h-4.94L7.2 10.0 2.77 15.25H.32l5.73-6.55L0 .75h5.06l3.73 4.93L12.6.75zm-.86 13.03h1.36L4.32 2.14H2.86l8.88 11.64z"/></svg>',
    "mail": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    "in": '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.48h4.56V24H.22V8.48zM8.51 8.48h4.37v2.12h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.78h-4.56v-7.78c0-1.86-.03-4.25-2.59-4.25-2.59 0-2.99 2.02-2.99 4.11V24H8.51V8.48z"/></svg>',
    "search": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    "sun": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    "moon": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 14.3A8.5 8.5 0 1 1 9.7 3 7 7 0 0 0 21 14.3z"/></svg>',
    "dl": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M5 21h14"/></svg>',
    "back": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18 9 12l6-6"/></svg>',
    "cal": '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
    "arrow": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
}

THEMES = {
    "light": {
        "bg": "#F7F7F7",
        "paper": "#FFFFFF",
        "ink": "#111111",
        "muted": "#737376",
        "faint": "#A3A3A6",
        "line": "#E8E8E8",
        "chip": "#EFEFEF",
        "accent": "#6B75F0",
        "accent_ink": "#FFFFFF",
        "ok": "#1F7A4D",
        "ok_bg": "#E5F3EA",
        "warn": "#9A5B14",
        "warn_bg": "#F6E9D8",
        "dead": "#A33D38",
        "dead_bg": "#F6E4E2",
        "stage": "#E4E4E4",
        "soft": "#EBEBEB",
        "heat": ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"],
        "theme_icon": "moon",
        "title": "Khakha — light",
    },
    "dark": {
        "bg": "#0C0C0C",
        "paper": "#161616",
        "ink": "#ECECEC",
        "muted": "#8F8F91",
        "faint": "#6C6C6E",
        "line": "#2A2A2A",
        "chip": "#1C1C1C",
        "accent": "#8B93F2",
        "accent_ink": "#0C0C0C",
        "ok": "#6FCB9A",
        "ok_bg": "#163024",
        "warn": "#E0A56B",
        "warn_bg": "#2E2314",
        "dead": "#E08B84",
        "dead_bg": "#301616",
        "stage": "#050505",
        "soft": "#1C1C1C",
        "heat": ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"],
        "theme_icon": "sun",
        "title": "Khakha — dark",
    },
}


def css(t):
    return f"""
@font-face {{
  font-family: "Hanken Grotesk";
  src: url(data:font/woff2;base64,{FONT}) format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}}
:root {{
  --bg: {t['bg']};
  --paper: {t['paper']};
  --ink: {t['ink']};
  --muted: {t['muted']};
  --faint: {t['faint']};
  --line: {t['line']};
  --chip: {t['chip']};
  --accent: {t['accent']};
  --accent-ink: {t['accent_ink']};
  --ok: {t['ok']};
  --ok-bg: {t['ok_bg']};
  --warn: {t['warn']};
  --warn-bg: {t['warn_bg']};
  --dead: {t['dead']};
  --dead-bg: {t['dead_bg']};
  --soft: {t['soft']};
  --sans: "Hanken Grotesk", system-ui, sans-serif;
}}
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
html, body {{
  background: {t['stage']};
  color: var(--ink);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}}
body {{
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 1360px;
}}
.artboard {{
  width: 1280px;
  background: var(--bg);
}}
.wrap {{
  width: 640px;
  margin: 0 auto;
  padding: 12px 0 72px;
}}
.site-header {{
  position: relative;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}}
.site-header.home .nav {{
  position: static;
  left: auto;
  transform: none;
}}
.brand {{
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--ink);
  color: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: -0.04em;
  text-decoration: none;
  flex-shrink: 0;
}}
.nav {{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 24px;
}}
.nav a {{
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
}}
.nav a.on {{ color: var(--ink); }}
.tools {{ display: flex; align-items: center; gap: 8px; }}
.search, .icon-btn, .btn, .pill {{
  height: 32px;
  border: 1px solid var(--line);
  background: var(--paper);
  color: var(--ink);
  font-family: inherit;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-decoration: none;
  white-space: nowrap;
}}
.pill, .btn.soft {{
  background: var(--soft);
  border: 1px solid rgba(0,0,0,0.04);
  box-shadow: 0 1px 2px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.55);
  color: var(--muted);
}}
.pill.on, .btn.accent {{
  background: var(--accent);
  color: var(--accent-ink);
  border-color: var(--accent);
  box-shadow: 0 1px 2px rgba(75, 85, 220, 0.35), inset 0 1px 0 rgba(255,255,255,0.25);
}}
.search {{
  padding: 0 10px;
  border-radius: 999px;
  color: var(--muted);
  min-width: 88px;
}}
.search kbd {{
  font-family: inherit;
  font-size: 11px;
  font-weight: 500;
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 0 5px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  color: var(--faint);
}}
.icon-btn {{
  width: 32px;
  padding: 0;
  border-radius: 999px;
}}
.btn {{
  padding: 0 14px;
  border-radius: 999px;
}}
.btn.solid {{
  background: var(--ink);
  color: var(--bg);
  border-color: var(--ink);
  box-shadow: none;
}}
.pills {{ display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }}
.pill {{
  padding: 0 14px;
  border-radius: 999px;
}}
.pill .n {{
  font-size: 12px;
  color: var(--faint);
  font-variant-numeric: tabular-nums;
}}
.pill.on .n {{ color: var(--accent-ink); opacity: 0.85; }}
.hero {{
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 36px;
}}
.hero .brand {{
  position: absolute;
  left: 50px;
  top: 50px;
  width: 26px;
  height: 26px;
  box-shadow: 0 0 0 2px var(--bg);
}}
.avatar {{
  width: 72px;
  height: 72px;
  border-radius: 999px;
  object-fit: cover;
  flex-shrink: 0;
  background: var(--chip);
}}
h1 {{
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: -0.03em;
}}
.role {{
  margin-top: 2px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: var(--muted);
}}
.role a {{ color: var(--ink); text-decoration: none; }}
.lede {{
  margin-top: 20px;
  font-size: 16px;
  line-height: 24px;
  color: var(--ink);
}}
.facts {{
  margin-top: 14px;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}}
.facts li {{
  font-size: 15px;
  line-height: 22px;
  color: var(--ink);
}}
.facts strong {{ font-weight: 600; }}
.now {{
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 20px;
  color: var(--muted);
}}
.dot {{
  width: 7px;
  height: 7px;
  border-radius: 99px;
  background: var(--ok);
  flex-shrink: 0;
}}
.cta {{ display: flex; gap: 8px; margin-top: 20px; flex-wrap: wrap; }}
.social-label {{
  margin-top: 22px;
  font-size: 14px;
  line-height: 20px;
  color: var(--muted);
}}
.section {{ margin-top: 48px; }}
.section h2 {{
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}}
.job {{
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 24px;
  padding: 16px 0;
  border-top: 1px solid var(--line);
}}
.job:last-of-type {{ border-bottom: 1px solid var(--line); }}
.job .org {{
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}}
.job .roleline {{
  font-size: 14px;
  line-height: 20px;
  color: var(--muted);
  margin-top: 2px;
}}
.job .when {{
  font-size: 13px;
  line-height: 24px;
  color: var(--muted);
  text-align: right;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}}
.job ul {{
  grid-column: 1 / -1;
  margin-top: 8px;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}}
.job li {{
  font-size: 14px;
  line-height: 20px;
  color: var(--muted);
}}
.chip {{
  height: 20px;
  padding: 0 8px;
  border-radius: 999px;
  background: var(--chip);
  color: var(--muted);
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
}}
.chip.ok {{ background: var(--ok-bg); color: var(--ok); }}
.chip.warn {{ background: var(--warn-bg); color: var(--warn); }}
.chip.dead {{ background: var(--dead-bg); color: var(--dead); }}
.chip.accent {{ background: var(--chip); color: var(--accent); }}
.more {{ display: flex; justify-content: center; margin-top: 16px; }}
.card {{
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 24px;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid var(--line);
  text-decoration: none;
  color: inherit;
}}
.card:last-of-type {{ border-bottom: 1px solid var(--line); }}
.card h3 {{
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  letter-spacing: -0.01em;
}}
.card .dek {{
  margin-top: 2px;
  font-size: 14px;
  line-height: 20px;
  color: var(--muted);
}}
.card .meta {{
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  flex-wrap: wrap;
}}
.date {{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  line-height: 20px;
  color: var(--faint);
  font-variant-numeric: tabular-nums;
}}
.card .go {{
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: var(--muted);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}}
.page-head {{ margin-top: 28px; }}
.page-head > p {{
  margin-top: 6px;
  font-size: 16px;
  line-height: 24px;
  color: var(--muted);
}}
.toolbar {{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin: 24px 0 8px;
}}
.split {{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}}
.split .btn {{ margin-top: 4px; }}
.article {{ margin-top: 8px; }}
.article .byline {{
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 14px;
  line-height: 20px;
  color: var(--muted);
}}
.article p {{
  font-size: 16px;
  line-height: 28px;
  margin-top: 18px;
  color: var(--ink);
}}
.quote {{
  margin-top: 24px;
  padding: 16px 0 16px 16px;
  border-left: 2px solid var(--accent);
  font-size: 16px;
  line-height: 26px;
  color: var(--ink);
}}
.foot {{
  margin-top: 48px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  line-height: 20px;
  color: var(--faint);
}}
.proj {{
  padding: 20px 0;
  border-top: 1px solid var(--line);
}}
.proj:last-of-type {{ border-bottom: 1px solid var(--line); }}
.proj-top {{
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 12px;
}}
.proj h3 {{ font-size: 16px; line-height: 24px; font-weight: 600; }}
.proj p {{ margin-top: 4px; font-size: 14px; line-height: 20px; color: var(--muted); }}
.proj .chips {{ display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }}
.proj .links {{ display: flex; gap: 8px; margin-top: 14px; }}
.pgrid {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 8px;
}}
.pcard {{
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
}}
.pcard .preview {{
  height: 128px;
  display: block;
  width: 100%;
}}
.pcard .body {{ padding: 12px 12px 14px; }}
.pcard h3 {{
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}}
.pcard p {{
  margin-top: 4px;
  font-size: 13px;
  line-height: 18px;
  color: var(--muted);
}}
.techs {{ display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }}
.tech {{
  width: 32px;
  height: 32px;
  border-radius: 9px;
  border: 1px dashed var(--line);
  background: var(--bg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}}
.heat {{
  margin-top: 12px;
  display: flex;
  gap: 3px;
}}
.heat .col {{ display: flex; flex-direction: column; gap: 3px; }}
.heat i {{
  width: 9px;
  height: 9px;
  border-radius: 2px;
  display: block;
}}
.qcard {{
  margin-top: 40px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 22px 20px 18px;
  position: relative;
}}
.qcard .mark {{
  position: absolute;
  left: 16px;
  top: 8px;
  font-size: 56px;
  line-height: 1;
  color: var(--line);
  font-family: Georgia, serif;
}}
.qcard .doodle {{
  position: absolute;
  right: 16px;
  top: 12px;
}}
.qcard p {{
  font-size: 14px;
  line-height: 22px;
  font-style: italic;
  color: var(--muted);
  text-align: center;
  padding: 8px 28px 0;
}}
.qcard .attr {{
  margin-top: 8px;
  font-size: 12px;
  color: var(--faint);
  text-align: right;
  font-style: normal;
}}
.contact {{
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}}
"""


DRIVE = "https://drive.google.com"

TECH = {
    "ts": ('#3178C6', '<svg width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="16" rx="2" fill="#3178C6"/><text x="8" y="12" text-anchor="middle" font-size="7" font-weight="700" font-family="system-ui" fill="#fff">TS</text></svg>'),
    "react": ('#149ECA', '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="2" fill="#149ECA"/><ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#149ECA" stroke-width="1.2"/><ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#149ECA" stroke-width="1.2" transform="rotate(60 8 8)"/><ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#149ECA" stroke-width="1.2" transform="rotate(-60 8 8)"/></svg>'),
    "pg": ('#336791', '<svg width="16" height="16" viewBox="0 0 16 16"><ellipse cx="8" cy="9" rx="5" ry="6" fill="#336791"/><circle cx="6.2" cy="7" r="1" fill="#fff"/></svg>'),
    "redis": ('#DC382D', '<svg width="16" height="16" viewBox="0 0 16 16"><rect x="2" y="4" width="12" height="3" rx="1" fill="#DC382D"/><rect x="3" y="8" width="10" height="2.2" rx="1" fill="#A41E11"/><rect x="4" y="11" width="8" height="2" rx="1" fill="#DC382D"/></svg>'),
    "py": ('#3776AB', '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 2c2.5 0 3 .5 3 2.5V6H6.5C4.5 6 4 6.8 4 8.5S4.5 11 6.5 11H7V9h5.5c2 0 2.5-.8 2.5-2.5S14.5 4 12.5 4H11V3.5C11 2 10 2 8 2z" fill="#3776AB"/><circle cx="6.8" cy="4.2" r=".7" fill="#FFD43B"/><path d="M8 14c-2.5 0-3-.5-3-2.5V10h4.5c2 0 2.5-.8 2.5-2.5S11.5 5 9.5 5H9v2H3.5C1.5 7 1 7.8 1 9.5S1.5 12 3.5 12H5v.5C5 14 6 14 8 14z" fill="#FFD43B"/><circle cx="9.2" cy="11.8" r=".7" fill="#3776AB"/></svg>'),
    "node": ('#5FA04F', '<svg width="16" height="16" viewBox="0 0 16 16"><polygon points="8,1 14.5,4.5 14.5,11.5 8,15 1.5,11.5 1.5,4.5" fill="#5FA04F"/></svg>'),
    "go": ('#00ADD8', '<svg width="16" height="16" viewBox="0 0 16 16"><text x="8" y="12" text-anchor="middle" font-size="8" font-weight="700" font-family="system-ui" fill="#00ADD8">Go</text></svg>'),
    "ws": ('#111111', '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8h3l1.5 4L10 4l1.5 4H13" fill="none" stroke="#111" stroke-width="1.4" stroke-linecap="round"/></svg>'),
    "llm": ('#7C5CFC', '<svg width="16" height="16" viewBox="0 0 16 16"><rect x="3" y="3" width="10" height="10" rx="3" fill="#7C5CFC"/></svg>'),
    "ext": ('#EA4335', '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="#EA4335"/><circle cx="8" cy="8" r="2.4" fill="#fff"/></svg>'),
    "nse": ('#F7931A', '<svg width="16" height="16" viewBox="0 0 16 16"><polyline points="2,12 6,7 9,10 14,4" fill="none" stroke="#F7931A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'),
    "web": ('#E34F26', '<svg width="16" height="16" viewBox="0 0 16 16"><polygon points="2,2 3.2,14 8,15.5 12.8,14 14,2" fill="#E34F26"/><path d="M8 3.2h4.4l-.9 9.2L8 13.6V3.2z" fill="#F06529"/></svg>'),
    "cursor": ('#111111', '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.5" fill="#111"/><circle cx="8" cy="8" r="3" fill="#fff"/></svg>'),
}


def tech_row(keys):
    bits = []
    for k in keys:
        _bg, svg = TECH[k]
        bits.append(f'<span class="tech">{svg}</span>')
    return '<div class="techs">' + "".join(bits) + "</div>"


def quote_card():
    doodle = '<svg class="doodle" width="28" height="18" viewBox="0 0 28 18" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M4 11c2-5 6-7 10-6 3 .6 5 3 8 2 2-.4 3 1 3 2 0 3-4 6-10 6S3 14 4 11z"/><circle cx="10" cy="9" r="0.8" fill="currentColor"/><path d="M20 7c2-2 5-2 6 0"/></svg>'
    return f"""
    <div class="qcard">
      <span class="mark">“</span>
      {doodle}
      <p>"The layout can still be tight. The buttons can still be good. The sentences have to come from a person who has actually been in the room."</p>
      <div class="attr">a note to myself</div>
    </div>
    """


def heatmap(t):
    import random
    rng = random.Random(42)
    cols = []
    for w in range(52):
        cells = []
        for d in range(7):
            weights = [0.5, 0.22, 0.16, 0.08, 0.04] if d >= 5 else [0.22, 0.26, 0.26, 0.16, 0.1]
            lvl = rng.choices([0, 1, 2, 3, 4], weights)[0]
            cells.append(f'<i style="background:{t["heat"][lvl]}"></i>')
        cols.append('<div class="col">' + "".join(cells) + "</div>")
    return '<div class="heat">' + "".join(cols) + "</div>"


def preview_svg(kind, t):
    ink, mute, line, paper, acc, ok = t["ink"], t["muted"], t["line"], t["paper"], t["accent"], t["ok"]
    if kind == "chat":
        return f'''<svg class="preview" viewBox="0 0 320 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="320" height="128" fill="{t["bg"]}"/>
          <rect x="12" y="14" width="140" height="22" rx="11" fill="{paper}" stroke="{line}"/>
          <rect x="168" y="42" width="140" height="22" rx="11" fill="{ink}"/>
          <rect x="12" y="70" width="110" height="22" rx="11" fill="{paper}" stroke="{line}"/>
          <circle cx="28" cy="110" r="6" fill="{ok}"/>
          <rect x="42" y="104" width="80" height="12" rx="6" fill="{line}"/>
        </svg>'''
    if kind == "cards":
        return f'''<svg class="preview" viewBox="0 0 320 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="320" height="128" fill="{t["bg"]}"/>
          <rect x="14" y="16" width="90" height="96" rx="10" fill="{paper}" stroke="{line}"/>
          <rect x="24" y="28" width="70" height="8" rx="4" fill="{ink}"/>
          <rect x="24" y="44" width="54" height="6" rx="3" fill="{line}"/>
          <rect x="115" y="16" width="90" height="96" rx="10" fill="{paper}" stroke="{line}"/>
          <rect x="125" y="28" width="70" height="8" rx="4" fill="{ink}"/>
          <rect x="216" y="16" width="90" height="96" rx="10" fill="{acc}"/>
        </svg>'''
    if kind == "chart":
        return f'''<svg class="preview" viewBox="0 0 320 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="320" height="128" fill="{t["bg"]}"/>
          <polyline points="16,96 56,72 96,80 136,40 176,52 216,28 256,36 304,18" fill="none" stroke="{acc}" stroke-width="3" stroke-linejoin="round"/>
          <line x1="16" y1="110" x2="304" y2="110" stroke="{line}"/>
        </svg>'''
    if kind == "bars":
        return f'''<svg class="preview" viewBox="0 0 320 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="320" height="128" fill="{t["bg"]}"/>
          <rect x="24" y="28" width="200" height="14" rx="7" fill="{line}"/>
          <rect x="24" y="28" width="150" height="14" rx="7" fill="{acc}"/>
          <rect x="24" y="56" width="200" height="14" rx="7" fill="{line}"/>
          <rect x="24" y="56" width="90" height="14" rx="7" fill="{ok}"/>
          <rect x="24" y="84" width="200" height="14" rx="7" fill="{line}"/>
          <rect x="24" y="84" width="170" height="14" rx="7" fill="{ink}"/>
        </svg>'''
    if kind == "notes":
        return f'''<svg class="preview" viewBox="0 0 320 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <rect width="320" height="128" fill="{t["bg"]}"/>
          <rect x="20" y="16" width="280" height="96" rx="10" fill="{paper}" stroke="{line}"/>
          <rect x="36" y="32" width="160" height="8" rx="4" fill="{ink}"/>
          <rect x="36" y="50" width="240" height="6" rx="3" fill="{line}"/>
          <rect x="36" y="66" width="210" height="6" rx="3" fill="{line}"/>
          <rect x="36" y="82" width="180" height="6" rx="3" fill="{line}"/>
        </svg>'''
    return f'''<svg class="preview" viewBox="0 0 320 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="128" fill="{t["bg"]}"/>
      <rect x="40" y="24" width="70" height="80" rx="8" fill="{paper}" stroke="{line}"/>
      <rect x="124" y="24" width="70" height="80" rx="8" fill="{line}"/>
      <rect x="208" y="24" width="70" height="80" rx="8" fill="{paper}" stroke="{line}"/>
    </svg>'''


def header(active, t):
    items = [
        ("Home", "#home", False),
        ("Blog", "#blog", False),
        ("Projects", "#projects", False),
        ("Resume", DRIVE, True),
    ]
    nav = ""
    for label, href, external in items:
        key = label.lower()
        on = "on" if (not external and key == active) else ""
        extra = ' target="_blank" rel="noreferrer"' if external else ""
        nav += f'<a class="{on}" href="{href}"{extra}>{label}</a>'
    icon = ICONS[t["theme_icon"]]
    brand = "" if active == "home" else '<a class="brand" href="#home">sk</a>'
    home_cls = " home" if active == "home" else ""
    return f"""
    <header class="site-header{home_cls}">
      {brand}
      <nav class="nav">{nav}</nav>
      <div class="tools">
        <div class="search">{ICONS['search']}<kbd>⌘K</kbd></div>
        <div class="icon-btn">{icon}</div>
      </div>
    </header>
    """


def home(t):
    return f"""
<section class="artboard" id="home">
  <div class="wrap">
    {header("home", t)}
    <div class="hero">
      <img class="avatar" src="data:image/jpeg;base64,{AVATAR}" alt="" />
      <a class="brand" href="#home">sk</a>
      <div>
        <h1>Shubham Khakha</h1>
        <p class="role">I write software · <a href="#">khakhashubham@gmail.com</a></p>
      </div>
    </div>
    <p class="lede">I build things until I understand them. I still don't share food.</p>
    <ul class="facts">
      <li>On <strong>Huddle</strong>, a live team chat I started because I wanted a websocket to fail in my own terminal.</li>
      <li><strong>SkillSync</strong> matches project ideas to a stack. The generated todo app was getting old.</li>
      <li><strong>Artify</strong> died in public. The repo is still there.</li>
    </ul>
    <div class="cta">
      <a class="btn solid" href="#">{ICONS['mail']} Send an email</a>
      <a class="btn" href="#">{ICONS['github']} GitHub</a>
      <a class="btn" href="#">{ICONS['x']} Twitter</a>
      <a class="btn" href="#">{ICONS['in']} LinkedIn</a>
    </div>
    <section class="section">
      <h2>Work</h2>
      <div class="job">
        <div>
          <div class="org">Huddle <span class="chip ok">now</span></div>
          <div class="roleline">Live team chat</div>
        </div>
        <div class="when">2026</div>
      </div>
      <div class="job">
        <div>
          <div class="org">SkillSync</div>
          <div class="roleline">Project ideas matched to a stack</div>
        </div>
        <div class="when">2025 to 2026</div>
      </div>
      <div class="job">
        <div>
          <div class="org">InvestRight</div>
          <div class="roleline">NSE / BSE analysis bot</div>
        </div>
        <div class="when">2026</div>
      </div>
      <div class="more"><a class="btn soft" href="#projects">Show all projects</a></div>
    </section>
    <section class="section">
      <h2>Writing</h2>
      <a class="card" href="#post">
        <div>
          <h3>I asked an agent to write my site. Then I deleted it.</h3>
          <p class="dek">The copy was smooth, interchangeable, and sounded like nobody.</p>
        </div>
        <span class="go">Read more {ICONS['arrow']}</span>
      </a>
      <a class="card" href="#post">
        <div>
          <h3>Websockets make more sense when the room is empty</h3>
          <p class="dek">Huddle started as how does this protocol work, then became a chat app.</p>
        </div>
        <span class="go">Read more {ICONS['arrow']}</span>
      </a>
      <a class="card" href="#post">
        <div>
          <h3>The startup that failed miserably</h3>
          <p class="dek">Artify. First draft. Public, because hiding it would be worse.</p>
        </div>
        <span class="go">Read more {ICONS['arrow']}</span>
      </a>
      <div class="more"><a class="btn soft" href="#blog">Show all posts</a></div>
    </section>
    <section class="section">
      <h2>GitHub</h2>
      {heatmap(t)}
    </section>
    {quote_card()}
    <footer class="foot"><span>© 2026 Shubham Khakha</span><span>shubhook</span></footer>
  </div>
</section>
"""


def blog(t):
    posts = [
        ("I asked an agent to write my site. Then I deleted it.", "The copy was smooth, interchangeable, and sounded like nobody.", ["agents", "writing"], "Oct 4, 2026"),
        ("Websockets make more sense when the room is empty", "Huddle started as how does this protocol work, then became a chat app so the bugs had somewhere to live.", ["building"], "Jun 5, 2026"),
        ("Stop generating the same project", "SkillSync exists because build a todo app is not a stack. Matching ideas to what you already know is the job.", ["building"], "Aug 8, 2025"),
        ("Claude usage, locally, because I don't trust dashboards", "claude-meter never leaves the machine. Their UI still doesn't show context per chat.", ["agents"], "Sep 6, 2026"),
        ("The startup that failed miserably", "Artify. First draft. Public, because hiding it would be worse.", ["notes"], "Mar 11, 2025"),
        ("Notes from an allocator I am not finished with", "Learning memory the slow way. Write it, watch it leak, then read the chapter I skipped.", ["notes"], "Jan 12, 2026"),
    ]
    items = ""
    for title, dek, tags, date in posts:
        chips = "".join(f'<span class="chip">{x}</span>' for x in tags)
        items += f"""
        <a class="card" href="#post">
          <div>
            <h3>{title}</h3>
            <p class="dek">{dek}</p>
            <div class="meta">{chips}<span class="date">{ICONS['cal']} {date}</span></div>
          </div>
          <span class="go">Read more {ICONS['arrow']}</span>
        </a>
        """
    return f"""
<section class="artboard" id="blog">
  <div class="wrap">
    {header("blog", t)}
    <div class="page-head">
      <h1>Blog</h1>
      <p>Notes on building, agents, and the parts that only stick after I implement them badly once.</p>
    </div>
    <div class="toolbar">
      <div class="pills">
        <a class="pill on" href="#">Latest <span class="n">6</span></a>
        <a class="pill" href="#">Building <span class="n">2</span></a>
        <a class="pill" href="#">Agents <span class="n">2</span></a>
        <a class="pill" href="#">Notes <span class="n">2</span></a>
      </div>
      <a class="btn soft" href="#">RSS</a>
    </div>
    {items}
    {quote_card()}
    <footer class="foot"><span>6 posts</span><span>khakha.dev</span></footer>
  </div>
</section>
"""


def post(t):
    return f"""
<section class="artboard" id="post">
  <div class="wrap">
    {header("blog", t)}
    <div class="page-head">
      <a class="btn soft" href="#blog">{ICONS['back']} Blog</a>
      <h1 style="margin-top:24px">I asked an agent to write my site. Then I deleted it.</h1>
    </div>
      <div class="article">
        <div class="byline">
          <span class="date">{ICONS['cal']} Oct 4, 2026</span>
          <span class="chip">agents</span>
          <span class="chip">writing</span>
          <span>6 min</span>
        </div>
        <p>It wrote a hero that could sit on anyone's domain. Passionate about crafting digital experiences. Full stack, of course. A list of skills in little rounded boxes. I sounded employable and imaginary.</p>
        <p>The tell is not the vocabulary. It is the missing specific. There is no websocket that failed at 1am. No repo named artify that I am still a bit ashamed of. No opinion about food.</p>
        <div class="quote">The layout can still be tight. The buttons can still be good. The sentences have to come from a person who has actually been in the room.</div>
        <p>So I threw the draft out and wrote this instead. If an agent helps me ship Huddle faster, fine. If it writes the about section, I will delete that too.</p>
      </div>
    <section class="section">
      <h2>Next</h2>
      <a class="card" href="#post">
        <div>
          <h3>Websockets make more sense when the room is empty</h3>
          <p class="dek">Huddle started as how does this protocol work.</p>
        </div>
        <span class="go">Read more {ICONS['arrow']}</span>
      </a>
    </section>
    {quote_card()}
    <footer class="foot"><span>Oct 4, 2026</span><span>khakhashubham@gmail.com</span></footer>
  </div>
</section>
"""


def resume(t):
    return f"""
<section class="artboard" id="resume">
  <div class="wrap">
    {header("resume", t)}
    <div class="page-head split">
      <div>
        <h1>Resume</h1>
        <p>Work I shipped. Tools I actually use.</p>
      </div>
      <a class="btn solid" href="#">{ICONS['dl']} Download PDF</a>
    </div>
    <div class="contact">
      <a class="btn" href="#">{ICONS['mail']} khakhashubham@gmail.com</a>
      <a class="btn" href="#">{ICONS['github']} shubhook</a>
      <a class="btn" href="#">{ICONS['x']} Twitter</a>
      <a class="btn" href="#">{ICONS['in']} LinkedIn</a>
    </div>
    <section class="section">
      <h2>Work</h2>
      <div class="job">
        <div>
          <div class="org">Huddle</div>
          <div class="roleline">Realtime team chat</div>
        </div>
        <div class="when">2026</div>
        <ul>
          <li>Rooms, presence, Postgres, Redis. Built so a websocket handshake can fail where I can see it.</li>
          <li>TypeScript throughout. Still the thing I open first in the morning.</li>
        </ul>
      </div>
      <div class="job">
        <div>
          <div class="org">SkillSync</div>
          <div class="roleline">Project ideas matched to a stack</div>
        </div>
        <div class="when">2025 to 2026</div>
        <ul>
          <li>Stops people generating the same CRUD app by matching ideas to what they already know.</li>
          <li>Live. TypeScript, React.</li>
        </ul>
      </div>
      <div class="job">
        <div>
          <div class="org">InvestRight</div>
          <div class="roleline">Market analysis bot</div>
        </div>
        <div class="when">2026</div>
        <ul>
          <li>Autonomous analysis for NSE and BSE. Python.</li>
          <li>I would not give it my money yet, which is why the repo is public.</li>
        </ul>
      </div>
      <div class="job">
        <div>
          <div class="org">claude-meter</div>
          <div class="roleline">Browser extension</div>
        </div>
        <div class="when">2026</div>
        <ul>
          <li>Tracks Claude context on-device. Nothing leaves the machine.</li>
          <li>Built after the official UI hid the one number I needed.</li>
        </ul>
      </div>
    </section>
    <section class="section">
      <h2>Elsewhere</h2>
      <div class="job">
        <div>
          <div class="org">AMD Developer Hackathon, Act II</div>
          <div class="roleline">Shipped on AMD Developer Cloud, ROCm, Gemma</div>
        </div>
        <div class="when">Jul 2026</div>
      </div>
    </section>
    <section class="section">
      <h2>Tools</h2>
      <div class="pills">
        <a class="pill" href="#">TypeScript</a>
        <a class="pill" href="#">React</a>
        <a class="pill" href="#">Node</a>
        <a class="pill" href="#">Postgres</a>
        <a class="pill" href="#">Redis</a>
        <a class="pill" href="#">Python</a>
        <a class="pill" href="#">Go</a>
        <a class="pill" href="#">Git</a>
        <a class="pill" href="#">Cursor</a>
      </div>
    </section>
    <footer class="foot"><span>Available for work</span><span>github.com/shubhook</span></footer>
  </div>
</section>
"""


def projects(t):
    data = [
        ("Huddle", "ok", "now", "A live team chat I built to understand websockets.", ["ts", "pg", "redis", "ws"], True, False, "chat"),
        ("SkillSync", "accent", "live", "Project ideas matched to a stack, not another CRUD app.", ["ts", "react", "llm"], True, True, "cards"),
        ("InvestRight", "warn", "bot", "Autonomous analysis for NSE and BSE. Python.", ["py", "nse"], True, False, "chart"),
        ("claude-meter", "accent", "live", "Tracks Claude context on-device. Nothing leaves the machine.", ["ext", "ts"], True, False, "bars"),
        ("marginal", "", "notes", "Personal notes. Written when every other notes app felt like a product.", ["ts", "react"], True, False, "notes"),
        ("Artify", "dead", "dead", "First draft of a startup that failed miserably. Left public.", ["web", "react"], True, False, "gallery"),
    ]
    blocks = ""
    for name, kind, status, dek, tags, code, live, preview in data:
        cls = f"chip {kind}".strip()
        links = ""
        if live:
            links += '<a class="btn accent" href="#">Live</a>'
        if code:
            links += '<a class="btn soft" href="#">Code</a>'
        blocks += f"""
        <article class="pcard">
          {preview_svg(preview, t)}
          <div class="body">
            <h3>{name} <span class="{cls}">{status}</span></h3>
            <p>{dek}</p>
            {tech_row(tags)}
            <div class="links" style="display:flex;gap:8px;margin-top:12px">{links}</div>
          </div>
        </article>
        """
    return f"""
<section class="artboard" id="projects">
  <div class="wrap">
    {header("projects", t)}
    <div class="page-head">
      <h1>Projects</h1>
      <p>Shipped, still learning, and one that died in public.</p>
    </div>
    <div class="toolbar">
      <div class="pills">
        <a class="pill on" href="#">All <span class="n">6</span></a>
        <a class="pill" href="#">Live <span class="n">2</span></a>
        <a class="pill" href="#">Learning <span class="n">1</span></a>
        <a class="pill" href="#">Dead <span class="n">1</span></a>
      </div>
      <a class="btn soft" href="#">{ICONS['github']} GitHub</a>
    </div>
    <div class="pgrid">
      {blocks}
    </div>
    {quote_card()}
    <footer class="foot"><span>6 listed</span><span>github.com/shubhook</span></footer>
  </div>
</section>
"""


def build(theme):
    t = THEMES[theme]
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>{t['title']}</title>
<style>{css(t)}</style>
</head>
<body>
{home(t)}
{blog(t)}
{post(t)}
{projects(t)}
</body>
</html>
"""
    (ROOT / f"screens-{theme}.html").write_text(html)
    print("wrote", f"screens-{theme}.html", len(html))


if __name__ == "__main__":
    build("light")
    build("dark")
