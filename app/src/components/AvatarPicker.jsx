const OPTIONS = [
  { key: 'male', label: 'Laki-laki', tint: '#DCEAFB' },
  { key: 'female', label: 'Perempuan', tint: '#FCE0EA' },
  { key: 'hijab', label: 'Berhijab', tint: '#E6F3E1' },
];

// Simple monoline silhouette shown until a real photo exists at
// /public/avatars/<key>.png (see public/avatars/README.md).
function Silhouette({ tint }) {
  return (
    <svg viewBox="0 0 84 84" width="100%" height="100%" style={{ display: 'block' }}>
      <circle cx="42" cy="42" r="42" fill={tint} />
      <circle cx="42" cy="33" r="14" fill="rgba(16,39,90,.25)" />
      <path d="M12 80c3-18 16-29 30-29s27 11 30 29" fill="rgba(16,39,90,.25)" />
    </svg>
  );
}

export default function AvatarPicker({ value, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      {OPTIONS.map((o) => {
        const active = value === o.key;
        return (
          <button
            key={o.key}
            type="button"
            onClick={() => onChange(o.key)}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}
          >
            <div
              style={{
                width: 84,
                height: 84,
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                border: `3px solid ${active ? '#10275A' : 'rgba(16,39,90,.15)'}`,
                boxShadow: active ? '0 0 0 3px rgba(16,39,90,.12)' : 'none',
                transition: 'border-color .15s, box-shadow .15s',
              }}
            >
              <Silhouette tint={o.tint} />
              {/* Real photo, if present at public/avatars/<key>.png, draws over the silhouette. */}
              <img
                src={`/avatars/${o.key}.png`}
                alt=""
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {active && (
                <div style={{ position: 'absolute', bottom: 1, right: 1, width: 24, height: 24, borderRadius: '50%', background: '#10275A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, border: '2px solid #fff' }}>✓</div>
              )}
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: active ? '#10275A' : 'rgba(16,39,90,.55)' }}>{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}
