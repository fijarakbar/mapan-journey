import { VPARTS } from '../data.js';

export default function VehicleDiagram({ color, points }) {
  const vparts = points.map((p, i) => ({ h: p.h, b: p.b, ...VPARTS[i] }));
  return (
    <div style={{ margin: '20px 0 0', padding: '14px 8px', borderRadius: 20, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
      <div style={{ position: 'relative', width: 300, height: 258, margin: '0 auto' }}>
        <svg width="300" height="258" viewBox="0 0 300 258" fill="none" style={{ position: 'absolute', left: 0, top: 0 }}>
          <path d="M82 168 H218" stroke="rgba(16,39,90,.14)" strokeWidth="2" strokeLinecap="round" />
          <path d="M88 150 q1-20 11-23 l13-18 q4-5 10-5 h56 q6 0 10 5 l13 18 q10 3 11 23" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M88 150 H212" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M115 108 H185" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
          <path d="M150 105 V127" stroke={color} strokeWidth="1.4" />
          <circle cx="114" cy="150" r="14" stroke={color} strokeWidth="2" />
          <circle cx="114" cy="150" r="5" stroke={color} strokeWidth="1.6" />
          <circle cx="186" cy="150" r="14" stroke={color} strokeWidth="2" />
          <circle cx="186" cy="150" r="5" stroke={color} strokeWidth="1.6" />
          <path d="M208 137 h5" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
          {vparts.map((p, i) => (
            <path key={i} d={p.lineD} stroke={color} strokeWidth="1.2" strokeDasharray="2 3" opacity="0.5" />
          ))}
        </svg>
        {vparts.map((p, i) => (
          <div key={i} style={{ position: 'absolute', left: p.left, top: p.top, width: 80, textAlign: p.align }}>
            <div style={{ fontSize: 13, fontWeight: 800, lineHeight: 1.2, color }}>{p.h}</div>
            <div style={{ fontSize: 12, lineHeight: 1.3, color: 'rgba(16,39,90,.65)', marginTop: 2 }}>{p.b}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
