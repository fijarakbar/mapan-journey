const inputStyle = { width: '100%', height: 54, marginTop: 8, padding: '0 16px', fontSize: 17, borderRadius: 14, border: '1px solid rgba(16,39,90,.18)', background: '#fff', color: '#10275A' };

export default function ProfileForm({ app }) {
  const prof = app.data.participantProfile;
  const set = (key) => (e) => {
    const v = e.target.value;
    app.upd((x) => { x.participantProfile[key] = v; });
  };
  return (
    <div style={{ padding: '22px 24px 32px' }}>
      <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.5, margin: 0 }}>Kenalan sebentar</h1>
      <p style={{ fontSize: 16, lineHeight: 1.55, color: 'rgba(16,39,90,.7)', margin: '10px 0 0' }}>Hanya beberapa hal. Semuanya tersimpan di perangkatmu sendiri.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, margin: '24px 0 0' }}>
        <label style={{ display: 'block' }}>
          <span style={{ fontSize: 15, fontWeight: 700 }}>Nama / Nama Panggilan</span>
          <input value={prof.nama} onChange={set('nama')} placeholder="Budi" style={inputStyle} />
        </label>
        <label style={{ display: 'block' }}>
          <span style={{ fontSize: 15, fontWeight: 700 }}>Instansi / Perusahaan <span style={{ fontWeight: 500, color: 'rgba(16,39,90,.5)' }}>(opsional)</span></span>
          <input value={prof.instansi} onChange={set('instansi')} style={inputStyle} />
        </label>
        <label style={{ display: 'block' }}>
          <span style={{ fontSize: 15, fontWeight: 700 }}>Perkiraan Purna Tugas <span style={{ fontWeight: 500, color: 'rgba(16,39,90,.5)' }}>(opsional)</span></span>
          <input value={prof.purna} onChange={set('purna')} placeholder="misal: 2028" style={inputStyle} />
        </label>
        <label style={{ display: 'block' }}>
          <span style={{ fontSize: 15, fontWeight: 700 }}>Harapan Saya Setelah Purna Tugas <span style={{ fontWeight: 500, color: 'rgba(16,39,90,.5)' }}>(opsional)</span></span>
          <textarea value={prof.harapan} onChange={set('harapan')} rows={3} placeholder="Tulis singkat saja..." style={{ ...inputStyle, height: 'auto', padding: '14px 16px', lineHeight: 1.5, resize: 'none' }} />
        </label>
      </div>
      <div style={{ fontSize: 13, color: 'rgba(30,138,76,.9)', fontWeight: 600, margin: '14px 0 0', height: 18 }}>{app.saved ? 'Tersimpan di perangkat' : ''}</div>
      <button onClick={() => app.go('checkin')} style={{ width: '100%', height: 56, margin: '12px 0 0', border: 'none', borderRadius: 16, background: '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
        Lanjutkan
      </button>
    </div>
  );
}
