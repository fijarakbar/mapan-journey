import { ICON } from '../data.js';

// Monoline scene: a couple walking a mountain trail toward a summit flag —
// matches the app's existing SVG diagram language (thin strokes, single
// accent colors, no photographic assets).
export default function HeroIllustration({ height = 190, style }) {
  return (
    <div
      style={{
        height,
        borderRadius: 20,
        border: '1px solid rgba(16,39,90,.10)',
        background: '#EAF4EC',
        overflow: 'hidden',
        position: 'relative',
        ...style,
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 335 190" preserveAspectRatio="xMidYMax slice" style={{ display: 'block' }}>
        <circle cx="272" cy="40" r="15" fill="#E0A32A" />
        <path d="M14 152 C50 92 74 60 96 60 C118 60 146 98 172 152" fill="none" stroke="rgba(16,39,90,.20)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M120 152 C158 84 186 54 208 54 C232 54 262 96 316 152" fill="none" stroke="rgba(16,39,90,.38)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M0 152 H335" stroke="rgba(16,39,90,.14)" strokeWidth="1.6" />
        <path d="M169 178 C160 158 176 138 165 118 C154 100 174 84 182 62" fill="none" stroke="#1E8A4C" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="1 8" />
        <line x1="182" y1="62" x2="182" y2="38" stroke="#10275A" strokeWidth="2" strokeLinecap="round" />
        <path d="M182 38 L182 24 L198 32 Z" fill="#E0A32A" />
        <g transform="translate(140,158) scale(1.15)">
          <path d={ICON.walk} fill="none" stroke="#10275A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g transform="translate(160,160) scale(1.05)">
          <path d={ICON.walk} fill="none" stroke="#1E8A4C" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}
