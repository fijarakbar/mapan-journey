import { STAGES } from '../data.js';

export default function StagesDiagram({ color }) {
  return (
    <div style={{ margin: '20px 0 0', padding: '20px 16px', borderRadius: 20, background: '#fff', border: '1px solid rgba(16,39,90,.10)', display: 'flex', flexDirection: 'column', gap: 2 }}>
      {STAGES.map((st, i) => (
        <div key={st.t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <div style={{ flex: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'stretch' }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', border: `3px solid ${color}`, background: '#fff' }} />
            {i < STAGES.length - 1 && <div style={{ flex: 1, minHeight: 26, width: 0, borderLeft: '2px dashed rgba(16,39,90,.22)' }} />}
          </div>
          <div style={{ paddingBottom: 18 }}>
            <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: 1, color }}>{st.t}</div>
            <div style={{ fontSize: 15, lineHeight: 1.45, color: 'rgba(16,39,90,.7)', marginTop: 3 }}>{st.b}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
