const NAVY = '#10275A';

function toggleStyle(active) {
  return { flex: 1, height: 48, borderRadius: 14, fontSize: 14.5, fontWeight: 700, cursor: 'pointer', border: `1.5px solid ${active ? NAVY : 'rgba(16,39,90,.15)'}`, background: active ? NAVY : '#fff', color: active ? '#fff' : 'rgba(16,39,90,.75)' };
}

export default function Profil({ app }) {
  const { data } = app;
  const nama = data.participantProfile.nama || 'Sahabat';
  const profileMeta = [data.participantProfile.instansi, data.participantProfile.purna ? 'Purna tugas ' + data.participantProfile.purna : ''].filter(Boolean).join(' · ') || 'Data tersimpan di perangkat ini';
  const tsz = data.appPreferences.textSize;

  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.4, margin: 0 }}>Profil</h1>
      <div style={{ margin: '16px 0 0', padding: 18, borderRadius: 18, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
        <div style={{ fontSize: 19, fontWeight: 800 }}>{nama}</div>
        <div style={{ fontSize: 15, color: 'rgba(16,39,90,.65)', marginTop: 4 }}>{profileMeta}</div>
        <button onClick={() => app.go('passport')} style={{ width: '100%', height: 50, margin: '14px 0 0', borderRadius: 14, border: '1px solid rgba(16,39,90,.18)', background: '#FBF9F5', color: '#10275A', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
          Buka MAPAN Passport
        </button>
      </div>
      <div style={{ fontSize: 17, fontWeight: 800, margin: '22px 0 10px' }}>Pengaturan</div>
      <div style={{ padding: 18, borderRadius: 18, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
        <div style={{ fontSize: 16, fontWeight: 700 }}>Ukuran Teks</div>
        <div style={{ display: 'flex', gap: 8, margin: '12px 0 0' }}>
          <button onClick={() => app.upd((x) => { x.appPreferences.textSize = 'kecil'; }, true)} style={toggleStyle(tsz === 'kecil')}>Kecil</button>
          <button onClick={() => app.upd((x) => { x.appPreferences.textSize = 'normal'; }, true)} style={toggleStyle(tsz === 'normal' || !tsz)}>Sedang</button>
          <button onClick={() => app.upd((x) => { x.appPreferences.textSize = 'besar'; }, true)} style={toggleStyle(tsz === 'besar')}>Besar</button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '12px 0 0' }}>
        <button onClick={app.backup} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', textAlign: 'left', padding: 18, borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)', cursor: 'pointer', color: '#10275A', minHeight: 56 }}>
          <span>
            <span style={{ display: 'block', fontSize: 16, fontWeight: 800 }}>Backup Data</span>
            <span style={{ display: 'block', fontSize: 14, color: 'rgba(16,39,90,.65)', marginTop: 3 }}>Simpan satu file JSON ke perangkat</span>
          </span>
          <span style={{ fontSize: 20, color: 'rgba(16,39,90,.35)' }}>↓</span>
        </button>
        <button onClick={() => app.fileRef.current && app.fileRef.current.click()} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', textAlign: 'left', padding: 18, borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)', cursor: 'pointer', color: '#10275A', minHeight: 56 }}>
          <span>
            <span style={{ display: 'block', fontSize: 16, fontWeight: 800 }}>Pulihkan Data</span>
            <span style={{ display: 'block', fontSize: 14, color: 'rgba(16,39,90,.65)', marginTop: 3 }}>Ambil dari file backup MAPAN</span>
          </span>
          <span style={{ fontSize: 20, color: 'rgba(16,39,90,.35)' }}>↑</span>
        </button>
        <input type="file" accept="application/json" ref={app.fileRef} onChange={app.restore} style={{ display: 'none' }} />
        <button onClick={() => app.go('program')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', textAlign: 'left', padding: 18, borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)', cursor: 'pointer', color: '#10275A', minHeight: 56 }}>
          <span>
            <span style={{ display: 'block', fontSize: 16, fontWeight: 800 }}>Program Next Chapter</span>
            <span style={{ display: 'block', fontSize: 14, color: 'rgba(16,39,90,.65)', marginTop: 3 }}>Informasi pendampingan lanjutan</span>
          </span>
          <span style={{ fontSize: 22, color: 'rgba(16,39,90,.35)' }}>›</span>
        </button>
        <button onClick={app.reset} style={{ width: '100%', textAlign: 'left', padding: 18, borderRadius: 16, background: '#fff', border: '1px solid rgba(226,116,58,.35)', cursor: 'pointer', color: '#B0521F', minHeight: 56 }}>
          <span style={{ display: 'block', fontSize: 16, fontWeight: 800 }}>Mulai Ulang Perjalanan</span>
          <span style={{ display: 'block', fontSize: 14, color: 'rgba(16,39,90,.6)', marginTop: 3 }}>Perlu konfirmasi dua kali</span>
        </button>
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(16,39,90,.6)', margin: '20px 0 0' }}>
        <div style={{ fontWeight: 700, color: '#10275A' }}>Tentang MAPAN</div>
        MAPAN Journey membantu persiapan purna tugas melalui empat terminal kesiapan. Semua datamu tersimpan di perangkat ini saja.
        <div style={{ marginTop: 8 }}>Versi Aplikasi {data.appVersion} · Powered by MDI</div>
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: '#1E8A4C', margin: '12px 0 0', height: 18 }}>{app.saved ? 'Tersimpan di perangkat' : ''}</div>
    </div>
  );
}
