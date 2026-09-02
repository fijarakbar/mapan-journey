export default function IllustrationPlaceholder({ label, height = 190, style }) {
  return (
    <div
      style={{
        height,
        borderRadius: 20,
        border: '1px solid rgba(16,39,90,.10)',
        background: 'repeating-linear-gradient(135deg,#EEF3EC 0 10px,#E6EEE6 10px 20px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 14,
        ...style,
      }}
    >
      <span style={{ fontFamily: 'ui-monospace,Menlo,monospace', fontSize: 11, color: 'rgba(16,39,90,.5)', background: 'rgba(251,249,245,.85)', padding: '5px 9px', borderRadius: 8 }}>
        {label}
      </span>
    </div>
  );
}
