// ──────────────────────────────────────────────────────────────────
// App entry — composes the portfolio and wires up Tweaks
// ──────────────────────────────────────────────────────────────────

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#1F4E79",
  "density": "comfortable",
  "paperGrid": true
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  '#1F4E79', // slate blue (default)
  '#2F855A', // pine green
  '#A2453E', // brick red
  '#1A1A1A', // ink (monochrome)
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const accent = t.accent;

  // Apply tweaks live via CSS vars
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', accent);
    root.style.setProperty('--accent-2', accent);
    // accent-soft = 8% mix of accent with white
    root.style.setProperty('--accent-soft', `color-mix(in oklab, ${accent} 9%, #ffffff)`);
  }, [accent]);

  return (
    <React.Fragment>
      <div className={t.paperGrid ? 'paper' : ''}>
        <Hero accent={accent} />
        <CareerBar accent={accent} />
        <TechStack accent={accent} />
        <Experience accent={accent} />
        <Work accent={accent} />
        <Capabilities accent={accent} />
        <Education accent={accent} />
        <Contact accent={accent} />
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Brand">
          <TweakColor
            label="Accent color"
            value={t.accent}
            options={ACCENT_OPTIONS}
            onChange={v => setTweak('accent', v)}
          />
        </TweakSection>
        <TweakSection title="Surface">
          <TweakToggle
            label="Paper grid background"
            value={t.paperGrid}
            onChange={v => setTweak('paperGrid', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
