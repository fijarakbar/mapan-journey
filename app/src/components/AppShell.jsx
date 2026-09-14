// The real device screen IS the frame — this shell just fills it, full
// width/height, respecting the device's own safe areas (notch, Dynamic
// Island, home indicator, gesture bar). No fake status bar, no phone
// bezel, no rounded-corner "card" — that was only ever meant for
// desktop-browser preview and should never ship to real phones.
export default function AppShell({ zoom, nav, children }) {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      <div data-scroll style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', zoom, paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {children}
      </div>
      {nav}
    </div>
  );
}
