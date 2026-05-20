// Iconography — small, hand-rolled SVG glyphs. 1.5px stroke, square 24x24 viewBox.
// Keep style consistent across all icons: rounded caps, no fills (except chips).

const Icon = ({ children, size = 18, stroke = 1.6, className = '' }) => (
  <svg
    viewBox="0 0 24 24" width={size} height={size}
    fill="none" stroke="currentColor"
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
    className={className} aria-hidden="true"
  >
    {children}
  </svg>
);

const I = {
  pin: (p) => <Icon {...p}><path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></Icon>,
  mail: (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 7 8.5-7" /></Icon>,
  github: (p) => <Icon {...p}><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a4 4 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7a4 4 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></Icon>,
  linkedin: (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></Icon>,
  download: (p) => <Icon {...p}><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /></Icon>,
  ext: (p) => <Icon {...p}><path d="M14 4h6v6M20 4l-9 9M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" /></Icon>,
  arrow: (p) => <Icon {...p}><path d="M5 12h14m-6-6 6 6-6 6" /></Icon>,
  code: (p) => <Icon {...p}><path d="m9 7-5 5 5 5m6-10 5 5-5 5" /></Icon>,
  layers: (p) => <Icon {...p}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5M3 18l9 5 9-5" /></Icon>,
  server: (p) => <Icon {...p}><rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><path d="M7 7.5h.01M7 16.5h.01" /></Icon>,
  database: (p) => <Icon {...p}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></Icon>,
  cloud: (p) => <Icon {...p}><path d="M7 18a4 4 0 0 1-.5-7.9 6 6 0 0 1 11.5 1.4A4 4 0 0 1 17 18H7Z" /></Icon>,
  spark: (p) => <Icon {...p}><path d="M12 3v3m0 12v3M3 12h3m12 0h3m-3.2-6.8-2.1 2.1m-7.4 7.4-2.1 2.1m11.6 0-2.1-2.1m-7.4-7.4L5.2 5.2" /></Icon>,
  cap: (p) => <Icon {...p}><path d="m3 9 9-5 9 5-9 5-9-5Z" /><path d="M7 11v5c2 1.5 8 1.5 10 0v-5M21 9v5" /></Icon>,
  brush: (p) => <Icon {...p}><path d="M4 20s2-1 3-1 2 1 4 1 3-1 4-1M14 4l6 6-9 9H5v-6l9-9Z" /></Icon>,
  briefcase: (p) => <Icon {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></Icon>,
  flag: (p) => <Icon {...p}><path d="M4 21V4m0 0h13l-3 4 3 4H4" /></Icon>,
  star: (p) => <Icon {...p}><path d="m12 3 2.7 5.5 6 .9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1L3.3 9.4l6-.9L12 3Z" /></Icon>,
  zap: (p) => <Icon {...p}><path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" /></Icon>,
  users: (p) => <Icon {...p}><circle cx="9" cy="9" r="3.5" /><path d="M3 20a6 6 0 0 1 12 0M16 11a3 3 0 0 0 0-6m5 15a5 5 0 0 0-3-4.6" /></Icon>,
  net: (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></Icon>,
  wrench: (p) => <Icon {...p}><path d="M14.5 3.5a5 5 0 0 1 6 6L18 12l-6 6-6.5 2.5L4 19l2.5-1.5L13 11l1-2.5 .5-5Z" /></Icon>,
  copy: (p) => <Icon {...p}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></Icon>,
  check: (p) => <Icon {...p}><path d="m5 12 5 5 9-11" /></Icon>,
};

window.I = I;
