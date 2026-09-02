function StatusBar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 26px 6px', flex: 'none' }}>
      <span style={{ fontSize: 14, fontWeight: 700 }}>9:41</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2 }}>
          <div style={{ width: 3, height: 5, background: '#10275A', borderRadius: 1 }} />
          <div style={{ width: 3, height: 8, background: '#10275A', borderRadius: 1 }} />
          <div style={{ width: 3, height: 11, background: '#10275A', borderRadius: 1 }} />
        </div>
        <div style={{ width: 14, height: 11, border: '1.6px solid #10275A', borderRadius: 3 }} />
        <div style={{ width: 22, height: 11, border: '1.6px solid #10275A', borderRadius: 3, padding: 1.6 }}>
          <div style={{ width: '100%', height: '100%', background: '#10275A', borderRadius: 1 }} />
        </div>
      </div>
    </div>
  );
}

export default function PhoneFrame({ zoom, nav, children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '26px 16px 40px', fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif", color: '#10275A' }}>
      <div style={{ width: 390, height: 844, background: '#FBF9F5', borderRadius: 42, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 26px 70px rgba(16,39,90,.22)', border: '1px solid rgba(16,39,90,.10)' }}>
        <StatusBar />
        <div data-scroll style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', zoom }}>
          {children}
        </div>
        {nav}
      </div>
    </div>
  );
}
