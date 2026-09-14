const NAVY = '#10275A';
const INACTIVE = 'rgba(16,39,90,.45)';

const ITEMS = [
  { key: 'home', label: 'Beranda', path: 'M4 11 L12 4 L20 11 V20 H4 Z', extra: null },
  { key: 'journey', label: 'Perjalanan', path: 'M4 6 L9 4 L15 6 L20 4 V18 L15 20 L9 18 L4 20 Z', extra: ['M9 4 V18', 'M15 6 V20'] },
  { key: 'jadwal', label: 'Jadwal', rect: true },
  { key: 'catatan', label: 'Catatan', notes: true },
  { key: 'profil', label: 'Profil', person: true },
];

function NavIcon({ item, color }) {
  const common = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2 };
  if (item.rect) {
    return (
      <svg {...common}>
        <rect x="4" y="6" width="16" height="14" rx="3" />
        <path d="M4 11 H20" />
        <path d="M9 4 V7" />
        <path d="M15 4 V7" />
      </svg>
    );
  }
  if (item.notes) {
    return (
      <svg {...common}>
        <rect x="5" y="4" width="14" height="16" rx="3" />
        <path d="M9 9 H15" />
        <path d="M9 13 H15" />
        <path d="M9 17 H12" />
      </svg>
    );
  }
  if (item.person) {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20 C5 16 8 14.5 12 14.5 C16 14.5 19 16 19 20" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d={item.path} strokeLinejoin="round" />
      {(item.extra || []).map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export default function BottomNav({ show, screen, onGo }) {
  if (!show) return null;
  return (
    <div style={{ flex: 'none', display: 'flex', alignItems: 'stretch', background: '#fff', borderTop: '1px solid rgba(16,39,90,.10)', padding: '8px 6px calc(10px + env(safe-area-inset-bottom))' }}>
      {ITEMS.map((item) => {
        const active = screen === item.key;
        const color = active ? NAVY : INACTIVE;
        return (
          <button
            key={item.key}
            onClick={() => { if (!active) onGo(item.key); }}
            style={{ flex: 1, border: 'none', background: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '6px 0', minHeight: 52, color }}
          >
            <NavIcon item={item} color={color} />
            <span style={{ fontSize: 11, fontWeight: active ? 700 : 500 }}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
