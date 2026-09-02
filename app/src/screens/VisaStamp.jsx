import { useId } from 'react';
import { TERMINALS, ICON, tone } from '../data.js';

export default function VisaStamp({ app }) {
  const { params } = app;
  const tid = params.t || 'fitland';
  const T = app.term(tid);
  const tc = tone(tid);
  const arcId = useId();
  const idx = TERMINALS.map((x) => x.id).indexOf(tid);
  const afterVisaLabel = tid === 'soulland' ? 'Lanjut ke Immigration' : 'Lanjut ke ' + TERMINALS[idx + 1].nameTitle;

  return (
    <div style={{ padding: '26px 24px 32px', background: '#FDF8EE', minHeight: '100%', textAlign: 'center' }}>
      <div style={{ fontSize: 15, fontWeight: 700, color: 'rgba(16,39,90,.6)' }}>Visa Terminal</div>
      <div style={{ fontSize: 24, fontWeight: 700, margin: '22px 0 0' }}>Selamat!</div>
      <div style={{ fontSize: 27, fontWeight: 800, lineHeight: 1.25, letterSpacing: -0.4, margin: '6px 0 0', color: tc.color }}>
        Visa {T.visa}<br />Telah Diperoleh
      </div>
      <div style={{ position: 'relative', margin: '26px auto 0', width: 200, height: 200, animation: 'stampIn .7s cubic-bezier(.2,.8,.2,1) both' }}>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <defs>
            <path id={arcId} d="M 38 100 A 62 62 0 0 1 162 100" fill="none" />
          </defs>
          <circle cx="100" cy="100" r="92" fill="none" stroke={tc.color} strokeWidth="4" />
          <circle cx="100" cy="100" r="78" fill="none" stroke={tc.color} strokeWidth="2" strokeDasharray="3 5" />
          <circle cx="100" cy="100" r="44" fill="none" stroke={tc.color} strokeWidth="2" />
          <g transform="translate(100 91) scale(1.5) translate(-12 -12)">
            <path d={ICON.plane} fill="none" stroke={tc.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <path d="M82 114q4.5-4.5 9 0t9 0 9 0" fill="none" stroke={tc.color} strokeWidth="2" strokeLinecap="round" />
          <path d="M82 122q4.5-4.5 9 0t9 0 9 0" fill="none" stroke={tc.color} strokeWidth="2" strokeLinecap="round" />
          <text fill={tc.color} fontFamily="Plus Jakarta Sans" fontSize="13" fontWeight="800" letterSpacing="1.4">
            <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">{T.visa}</textPath>
          </text>
        </svg>
      </div>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(16,39,90,.75)', margin: '24px 0 0', textWrap: 'pretty' }}>
        Kamu telah menyelesaikan {T.name} dan siap melanjutkan perjalanan ke terminal berikutnya.
      </p>
      <button
        onClick={() => app.go('transition', { t: tid })}
        style={{ width: '100%', height: 56, margin: '24px 0 0', border: 'none', borderRadius: 16, background: '#E0A32A', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}
      >
        {afterVisaLabel}
      </button>
    </div>
  );
}
