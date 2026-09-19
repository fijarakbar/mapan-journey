import { useState } from 'react';

export default function Login({ app }) {
  const [mode, setMode] = useState('signup'); // 'signup' | 'signin'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [sentConfirm, setSentConfirm] = useState(false);

  const submit = async () => {
    if (!email || !password) { setError('Isi email dan kata sandi dulu ya.'); return; }
    setBusy(true);
    setError('');
    if (mode === 'signup') {
      const res = await app.signUp(email.trim(), password);
      setBusy(false);
      if (res.error) { setError(res.error); return; }
      if (res.session) {
        // Email confirmation is off on this project -- the account is
        // already active, no need to make them wait for an email.
        app.setState({ screen: 'intro', params: {}, stack: [] });
      } else {
        setSentConfirm(true);
      }
      return;
    }
    const err = await app.signIn(email.trim(), password);
    setBusy(false);
    if (err) { setError(err); return; }
    // Jump straight to Intro with an empty stack (not app.go) so Login
    // never sits in the back-history -- otherwise pressing back right
    // after signing in would dump the user right back on this form.
    app.setState({ screen: 'intro', params: {}, stack: [] });
  };

  return (
    <div style={{ padding: '26px 24px 32px', animation: 'fadeUp .4s ease both' }}>
      <button onClick={() => app.go('welcome')} style={{ width: 44, height: 44, borderRadius: 14, border: '1px solid rgba(16,39,90,.12)', background: '#fff', fontSize: 19, cursor: 'pointer', color: '#10275A' }}>←</button>

      <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.5, margin: '20px 0 0' }}>
        {mode === 'signup' ? 'Buat akun MAPAN' : 'Masuk ke MAPAN'}
      </h1>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(16,39,90,.7)', margin: '8px 0 0', textWrap: 'pretty' }}>
        {mode === 'signup'
          ? 'Akun ini dipakai supaya progres perjalananmu tersimpan aman di cloud dan bisa dibuka lagi dari perangkat mana pun.'
          : 'Masuk dengan akun yang sudah kamu buat sebelumnya untuk melanjutkan perjalanan.'}
      </p>

      {sentConfirm ? (
        <div style={{ marginTop: 24, padding: 18, borderRadius: 16, background: '#EAF4EC', border: '1px solid rgba(30,138,76,.25)', fontSize: 15, lineHeight: 1.55 }}>
          Akun berhasil dibuat. Cek email <strong>{email}</strong> untuk link konfirmasi, lalu kembali ke sini dan pilih <strong>Masuk</strong>.
          <button
            onClick={() => { setMode('signin'); setSentConfirm(false); }}
            style={{ display: 'block', width: '100%', height: 48, marginTop: 14, border: 'none', borderRadius: 12, background: '#10275A', color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}
          >
            Ke halaman Masuk
          </button>
        </div>
      ) : (
        <>
          <div style={{ marginTop: 22 }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: 'rgba(16,39,90,.7)' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              style={{ width: '100%', height: 52, marginTop: 6, padding: '0 16px', fontSize: 16, borderRadius: 14, border: '1px solid rgba(16,39,90,.18)', background: '#fff' }}
            />
          </div>
          <div style={{ marginTop: 14 }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: 'rgba(16,39,90,.7)' }}>Kata Sandi</label>
            <div style={{ position: 'relative', marginTop: 6 }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 6 karakter"
                style={{ width: '100%', height: 52, padding: '0 92px 0 16px', fontSize: 16, borderRadius: 14, border: '1px solid rgba(16,39,90,.18)', background: '#fff' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                style={{ position: 'absolute', right: 6, top: 6, bottom: 6, padding: '0 12px', borderRadius: 10, border: 'none', background: 'rgba(16,39,90,.06)', color: '#10275A', fontSize: 12.5, fontWeight: 700, cursor: 'pointer' }}
              >
                {showPassword ? 'Sembunyikan' : 'Lihat'}
              </button>
            </div>
          </div>

          {!!error && <div style={{ marginTop: 12, fontSize: 14, color: '#B3261E' }}>{error}</div>}

          <button
            onClick={submit}
            disabled={busy}
            style={{ width: '100%', height: 56, margin: '22px 0 0', border: 'none', borderRadius: 16, background: busy ? 'rgba(16,39,90,.4)' : '#10275A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: busy ? 'default' : 'pointer' }}
          >
            {busy ? 'Memproses...' : mode === 'signup' ? 'Buat Akun & Mulai' : 'Masuk'}
          </button>

          <button
            onClick={() => { setMode(mode === 'signup' ? 'signin' : 'signup'); setError(''); }}
            style={{ display: 'block', margin: '16px auto 0', background: 'none', border: 'none', color: '#10275A', fontSize: 14, fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}
          >
            {mode === 'signup' ? 'Sudah punya akun? Masuk' : 'Belum punya akun? Daftar'}
          </button>

          <p style={{ fontSize: 12.5, lineHeight: 1.5, color: 'rgba(16,39,90,.5)', marginTop: 22, textAlign: 'center' }}>
            Dengan mendaftar, kamu setuju data perjalananmu (profil, jawaban refleksi, progres) disimpan di server MAPAN Journey untuk keperluan program.
          </p>
        </>
      )}
    </div>
  );
}
