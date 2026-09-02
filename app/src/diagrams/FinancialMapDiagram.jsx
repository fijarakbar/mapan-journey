import { FINZONES } from '../data.js';

export default function FinancialMapDiagram({ color }) {
  return (
    <div style={{ margin: '20px 0 0', padding: '14px 8px', borderRadius: 20, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
      <div style={{ position: 'relative', width: 300, height: 244, margin: '0 auto' }}>
        <svg width="300" height="244" viewBox="0 0 300 244" fill="none" style={{ position: 'absolute', left: 0, top: 0 }}>
          <path d="M150 40 V128" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M60 40 H240" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <circle cx="150" cy="40" r="4.5" fill={color} />
          <path d="M60 40 L38 74 H82 Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M240 40 L218 74 H262 Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M128 170 H172 L150 128 Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M110 178 H190" stroke="rgba(16,39,90,.14)" strokeWidth="2" strokeLinecap="round" />
        </svg>
        {FINZONES.map((z) => (
          <div key={z.t} style={{ position: 'absolute', left: z.left, top: z.top, width: z.w, textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1, color }}>{z.t}</div>
            <div style={{ fontSize: 12, lineHeight: 1.3, color: 'rgba(16,39,90,.65)', marginTop: 2 }}>{z.b}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.5, color: 'rgba(16,39,90,.62)', textAlign: 'center', padding: '0 14px' }}>
        Kerangka ini kamu isi lewat refleksi di bawah, dengan angka kasar sekalipun.
      </div>
    </div>
  );
}
