const EVENTS = [
  { day: '24', month: 'MEI', title: 'Webinar Mindland', sub: 'Resiliensi di Bab Baru', time: '19.30 - 21.00 WIB', color: '#6C4FB6', tint: '#F0EBFA' },
  { day: '02', month: 'JUN', title: 'Sesi Fitland', sub: 'Gerak untuk tetap mandiri', time: '08.00 - 09.30 WIB', color: '#1E8A4C', tint: '#EAF4EC' },
  { day: '11', month: 'JUN', title: 'Kelas Assetland', sub: 'Menakar cukup dengan tenang', time: '16.00 - 17.30 WIB', color: '#C9871A', tint: '#FDF3DF' },
];

export default function Jadwal() {
  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.4, margin: 0 }}>Jadwal</h1>
      <p style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(16,39,90,.65)', margin: '6px 0 0' }}>Pengingat lembut untuk perjalananmu.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '18px 0 0' }}>
        {EVENTS.map((e) => (
          <div key={e.title} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 16, borderRadius: 16, background: '#fff', border: '1px solid rgba(16,39,90,.10)' }}>
            <div style={{ width: 56, flex: 'none', textAlign: 'center', padding: '8px 0', borderRadius: 12, background: e.tint }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: e.color }}>{e.day}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: e.color }}>{e.month}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 800, lineHeight: 1.3 }}>{e.title}</div>
              <div style={{ fontSize: 14, color: 'rgba(16,39,90,.65)', marginTop: 2 }}>{e.sub}</div>
              <div style={{ fontSize: 13, color: 'rgba(16,39,90,.55)', marginTop: 4 }}>{e.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ margin: '20px 0 0', padding: 18, borderRadius: 18, background: '#EAF4EC', border: '1px solid rgba(30,138,76,.20)' }}>
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.2, color: '#1E6E42' }}>INSPIRASI HARI INI</div>
        <p style={{ fontSize: 17, lineHeight: 1.55, fontWeight: 600, margin: '8px 0 0', textWrap: 'pretty' }}>
          &ldquo;Perjalanan terbaik adalah ketika kamu menjadi versi terbaik dirimu sendiri.&rdquo;
        </p>
      </div>
    </div>
  );
}
