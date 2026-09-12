import { ICON } from '../data.js';

// Monoline scene: a road converging toward a destination pin on the
// horizon, with a walking figure on a dashed trail — the accent color is
// the destination terminal's tone.
export default function TransitionIllustration({ color = '#10275A', height = 170, style }) {
  return (
    <div
      style={{
        height,
        borderRadius: 20,
        border: '1px solid rgba(16,39,90,.10)',
        background: '#EEF1F7',
        overflow: 'hidden',
        position: 'relative',
        ...style,
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 335 170" preserveAspectRatio="xMidYMax slice" style={{ display: 'block' }}>
        <path d="M0 150 H335" stroke="rgba(16,39,90,.14)" strokeWidth="1.6" />
        <path d="M55 150 L155 95 L180 95 L280 150 Z" fill="none" stroke="rgba(16,39,90,.20)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M150 150 C158 128 175 112 167.5 96" fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeDasharray="1 8" />
        <g transform="translate(148.3,61.1) scale(1.6)">
          <path d={ICON.pin} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g transform="translate(150,132) scale(1.1)">
          <path d={ICON.walk} fill="none" stroke="#10275A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}
