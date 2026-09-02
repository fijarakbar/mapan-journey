// Circular progress ring — mirrors the dc prototype's `stroke-dasharray:"<len> 400"` trick
// against a fixed 400 viewBox-independent dash total, so callers just pass an svg circumference.
export default function RingProgress({ size, radius, strokeWidth, trackColor, valueColor, circumference, pct, center }) {
  const c = center ?? size / 2;
  const dash = ((pct / 100) * circumference).toFixed(1) + ' 400';
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={c} cy={c} r={radius} fill="none" stroke={trackColor} strokeWidth={strokeWidth} />
      <circle
        cx={c}
        cy={c}
        r={radius}
        fill="none"
        stroke={valueColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={dash}
        transform={`rotate(-90 ${c} ${c})`}
      />
    </svg>
  );
}
