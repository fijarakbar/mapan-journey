import { useState } from 'react';
import AvatarPicker from '../components/AvatarPicker.jsx';

const inputStyle = { width: '100%', height: 54, marginTop: 8, padding: '0 16px', fontSize: 17, borderRadius: 14, border: '1px solid rgba(16,39,90,.18)', background: '#fff', color: '#10275A' };

export default function ProfileForm({ app }) {
  const prof = app.data.participantProfile;
  const [code, setCode] = useState('');
  const [joining, setJoining] = useState(false);
  const [joinError, setJoinError] = useState('');
  const set = (key) => (e) => {
    const v = e.target.value;
    app.upd((x) => { x.participantProfile[key] = v; });
  };

  const doJoin = async () => {
    if (!code.trim()) return;
    setJoining(true);
    setJoinError('');
    const res = await app.joinBatch(code);
    setJoining(false);
    if (res.error) { setJoinError(res.error); return; }
    app.upd((x) => { x.participantProfile.instansi = res.instansi; });
  };

  return (
    <div style={{ padding: '22px 24px 32px' }}>
      <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.5, margin: 0 }}>Kenalan sebentar</h1>
      <p style={{ fontSize: 16, lineHeight: 1.55, color: 'rgba(16,39,90,.7)', margin: '10px 0 0' }}>Hanya beberapa hal. Progresmu tersimpan aman di akunmu.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, margin: '24px 0 0' }}>
        <label style={{ display: 'block' }}>
          <span style={{ fontSize: 15, fontWeight: 700 }}>Avatar</span>
          <div style={{ marginTop: 10 }}>
            <AvatarPicker value={prof.avatar} onChange={(v) => app.upd((x) => { x.participantProfile.avatar = v; })} />
          </div>
        </label>
        <label style={{ display: 'block' }}>
          <span style={{ fontSize: 15, fontWeight: 700 }}>Nama / Nama Panggilan</span>
          <input value={prof.nama} onChange={set('nama')} placeholder="Budi" style={inputStyle} />
        </label>
        <label style={{ display: 'block' }}>
          <span style={{ fontSize: 15, fontWeight: 700 }}>Kode Undangan dari HR/Instansi <span style={{ fontWeight: 500, color: 'rgba(16,39,90,.5)' }}>(opsional)</span></span>
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="misal: ABC-PRO-X7K2"
              style={{ ...inputStyle, marginTop: 0, flex: 1, textTransform: 'uppercase' }}
            />
            <button
              onClick={doJoin}
              disabled={joining}
              style={{ flex: 'none', padding: '0 20px', borderRadius: 14, border: 'none', background: '#10275A', color: '#fff', fontWeight: 700, fontSize: 15, cursor: joining ? 'default' : 'pointer' }}
            >
              {joining ? '...' : 'Gabung'}
            </button>
          </div>
          {!!joinError && <div style={{ fontSize: 13, color: '#B3261E', marginTop: 6 }}>{joinError}</div>}
          {!!prof.instansi && !joinError && (
            <div style={{ fontSize: 13, color: '#1E8A4C', fontWeight: 700, marginTop: 6 }}>
              Bergabung sebagai {prof.instansi}{app.packageTier ? ` - Paket ${app.packageTier}` : ''}
            </div>
          )}
          <div style={{ fontSize: 12.5, color: 'rgba(16,39,90,.5)', marginTop: 6 }}>Nggak ada kode? Lewati aja, bisa diisi belakangan lewat Profil.</div>
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
      <div style={{ fontSize: 13, color: 'rgba(30,138,76,.9)', fontWeight: 600, margin: '14px 0 0', height: 18 }}>{app.saved ? 'Tersimpan' : ''}</div>
      <button onClick={() => app.go('checkin')} style={{ width: '100%', height: 56, margin: '12px 0 0', border: 'none', borderRadius: 16, background: '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
        Lanjutkan
      </button>
    </div>
  );
}
