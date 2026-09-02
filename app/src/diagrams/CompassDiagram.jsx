import { COMPASS_DIRS } from '../data.js';

export default function CompassDiagram({ color }) {
  return (
    <div style={{ margin: '20px 0 0', padding: '14px 8px', borderRadius: 20, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
      <div style={{ position: 'relative', width: 300, height: 300, margin: '0 auto' }}>
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" style={{ position: 'absolute', left: 0, top: 0 }}>
          <circle cx="150" cy="150" r="64" stroke={color} strokeWidth="2.4" />
          <path d="M150 86 V100M150 200 V214M86 150 H100M200 150 H214" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M150 120 L160 150 L150 180 L140 150 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
          <path d="M150 120 L160 150 L140 150 Z" fill={color} />
          <circle cx="150" cy="150" r="5" fill={color} />
        </svg>
        {COMPASS_DIRS.map((dir) => (
          <div key={dir.label} style={{ position: 'absolute', left: dir.left, top: dir.top, width: dir.w, textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1, color }}>{dir.label}</div>
            <div style={{ fontSize: 11, lineHeight: 1.3, color: 'rgba(16,39,90,.6)', marginTop: 1 }}>{dir.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
