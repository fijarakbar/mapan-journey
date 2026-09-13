// A tinted, shaded card for module illustrations — matches the Terminal.jsx
// header language (color tint + diagonal hatch) instead of a bare floating
// image, and keeps the image modestly sized rather than edge-to-edge.
export default function ModuleIllustration({ src, tc, maxWidth = 210, widthPct = '56%' }) {
  return (
    <div
      style={{
        margin: '18px 0 0',
        borderRadius: 20,
        background: tc.tint,
        border: `1px solid ${tc.border}`,
        position: 'relative',
        overflow: 'hidden',
        padding: '16px 0',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(120deg,rgba(255,255,255,.5) 0 10px,rgba(255,255,255,0) 10px 20px)' }} />
      <img
        src={src}
        alt=""
        style={{ position: 'relative', width: widthPct, maxWidth, height: 'auto', display: 'block', margin: '0 auto' }}
      />
    </div>
  );
}
