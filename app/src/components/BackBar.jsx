export default function BackBar({ show, label, onBack }) {
  if (!show) return null;
  return (
    <div style={{ padding: '12px 20px 0' }}>
      <button
        onClick={onBack}
        style={{ minHeight: 44, padding: '0 16px', borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', color: 'rgba(16,39,90,.72)', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
      >
        {label}
      </button>
    </div>
  );
}
