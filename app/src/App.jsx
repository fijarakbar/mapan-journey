import { useJourney } from './store.js';
import PhoneFrame from './components/PhoneFrame.jsx';
import BackBar from './components/BackBar.jsx';
import BottomNav from './components/BottomNav.jsx';

import Welcome from './screens/Welcome.jsx';
import Intro from './screens/Intro.jsx';
import ProfileForm from './screens/ProfileForm.jsx';
import CheckIn from './screens/CheckIn.jsx';
import Result from './screens/Result.jsx';
import Home from './screens/Home.jsx';
import Journey from './screens/Journey.jsx';
import Terminal from './screens/Terminal.jsx';
import Module from './screens/Module.jsx';
import VisaQuestion from './screens/VisaQuestion.jsx';
import VisaStamp from './screens/VisaStamp.jsx';
import Transition from './screens/Transition.jsx';
import Immigration from './screens/Immigration.jsx';
import Passport from './screens/Passport.jsx';
import Summary from './screens/Summary.jsx';
import NextChapter from './screens/NextChapter.jsx';
import Archetype from './screens/Archetype.jsx';
import MyNextChapter from './screens/MyNextChapter.jsx';
import Plan90 from './screens/Plan90.jsx';
import Arrival from './screens/Arrival.jsx';
import Jadwal from './screens/Jadwal.jsx';
import Catatan from './screens/Catatan.jsx';
import Profil from './screens/Profil.jsx';
import Program from './screens/Program.jsx';

const SCREENS = {
  welcome: Welcome,
  intro: Intro,
  profile: ProfileForm,
  checkin: CheckIn,
  result: Result,
  home: Home,
  journey: Journey,
  terminal: Terminal,
  module: Module,
  visaq: VisaQuestion,
  visa: VisaStamp,
  transition: Transition,
  immigration: Immigration,
  passport: Passport,
  summary: Summary,
  nextchapter: NextChapter,
  archetype: Archetype,
  mynext: MyNextChapter,
  plan90: Plan90,
  arrival: Arrival,
  jadwal: Jadwal,
  catatan: Catatan,
  profil: Profil,
  program: Program,
};

const NAV_SCREENS = ['home', 'journey', 'jadwal', 'catatan', 'profil'];
const BACK_NAMES = {
  home: 'Beranda', journey: 'Perjalanan', jadwal: 'Jadwal', catatan: 'Catatan', profil: 'Profil',
  terminal: 'Terminal', module: 'Modul', passport: 'Passport', nextchapter: 'Next Chapter',
  mynext: 'My Next Chapter', plan90: 'Rencana 90 Hari', summary: 'Ringkasan', visa: 'Visa',
  visaq: 'Komitmen Visa', result: 'Titik Awal',
};

export default function App() {
  const app = useJourney();
  const Screen = SCREENS[app.screen] || Welcome;
  const showNav = NAV_SCREENS.includes(app.screen);
  const showBackBar = showNav && app.stack.length > 0;
  const prevEntry = app.stack[app.stack.length - 1] || {};
  const backBarLabel = '← Kembali ke ' + (BACK_NAMES[prevEntry.screen] || 'sebelumnya');
  const ts = app.data.appPreferences.textSize;
  const zoom = ts === 'besar' ? 1.12 : ts === 'kecil' ? 0.92 : 1;

  return (
    <PhoneFrame zoom={zoom} nav={<BottomNav show={showNav} screen={app.screen} onGo={(s) => app.go(s)} />}>
      <BackBar show={showBackBar} label={backBarLabel} onBack={app.back} />
      <Screen app={app} />
    </PhoneFrame>
  );
}
