import { LEAF_SLOTS } from '../data.js';

export default function TreeDiagram({ color, leafCount }) {
  const dots = LEAF_SLOTS.map(([cx, cy], i) => {
    const on = leafCount > i;
    return { cx, cy, r: on ? 8 : 4.5, fill: on ? color : 'none', stroke: on ? 'none' : 'rgba(16,39,90,.22)' };
  });
  return (
    <div style={{ margin: '16px 0 0', borderRadius: 14, background: '#fff', border: '1px solid rgba(226,116,58,.16)', padding: '8px 0' }}>
      <svg width="300" height="200" viewBox="0 0 300 200" fill="none" style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}>
        <path d="M132 190 H168" stroke="rgba(16,39,90,.14)" strokeWidth="2" strokeLinecap="round" />
        <path d="M144 190 C146 168 146 148 150 122" stroke="#B0521F" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M156 190 C154 168 154 148 150 122" stroke="#B0521F" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M150 150 C132 142 120 128 113 110" stroke="#B0521F" strokeWidth="2" strokeLinecap="round" />
        <path d="M150 144 C168 136 180 122 187 105" stroke="#B0521F" strokeWidth="2" strokeLinecap="round" />
        <path d="M150 130 C140 118 134 104 131 91" stroke="#B0521F" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M150 126 C160 114 166 100 169 88" stroke="#B0521F" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M132 140 C120 134 110 124 104 112" stroke="#B0521F" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M168 136 C180 130 190 120 196 108" stroke="#B0521F" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M150 122 V72" stroke="#B0521F" strokeWidth="1.8" strokeLinecap="round" />
        {dots.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.fill} stroke={d.stroke} strokeWidth="1.6" />
        ))}
      </svg>
    </div>
  );
}
