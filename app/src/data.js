// Ported 1:1 from "MAPAN Journey.dc.html" (Component logic, lines 858-1021).
export const NAVY = '#10275A';

export const ICON = {
  person: 'M12 4.4a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2M12 8.6v5.6M6.4 10.8h11.2M12 14.2 8.4 20.2M12 14.2l3.6 6',
  wallet: 'M5.2 7.4h11a3 3 0 0 1 3 3v5.8a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-5.8a3 3 0 0 1 3-3ZM5.2 7.4V6.6a2 2 0 0 1 2.5-1.94l8 1.74M14.6 12.6h4.6v3.6h-4.6a1.8 1.8 0 0 1 0-3.6Z',
  brain: 'M12 5.6a3.3 3.3 0 0 0-5.7 2.1A2.9 2.9 0 0 0 4.5 11a3 3 0 0 0 1.3 2.5A3 3 0 0 0 9 18.7a3.1 3.1 0 0 0 3-1.5ZM12 5.6a3.3 3.3 0 0 1 5.7 2.1A2.9 2.9 0 0 1 19.5 11a3 3 0 0 1-1.3 2.5A3 3 0 0 1 15 18.7a3.1 3.1 0 0 1-3-1.5ZM12 5.6v11.6',
  compass: 'M12 3.3a8.7 8.7 0 1 0 0 17.4 8.7 8.7 0 0 0 0-17.4ZM15.4 8.6l-2.1 4.7-4.7 2.1 2.1-4.7Z',
  plane: 'M20.8 4.2 3.4 11.1l7.2 2.6M20.8 4.2 13.5 20l-2.9-6.3M10.6 13.7 20.8 4.2',
  pin: 'M12 21.2s6.4-6.9 6.4-11A6.4 6.4 0 0 0 5.6 10.2c0 4.1 6.4 11 6.4 11ZM12 12.4a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z',
  shop: 'M3.6 9.6h16.8v9.4a1.6 1.6 0 0 1-1.6 1.6H5.2a1.6 1.6 0 0 1-1.6-1.6ZM3.6 9.6 5.6 4.6h12.8l2 5M9.2 20.6v-5h5.6v5',
  briefcase: 'M3.6 8.6h16.8v9.6a1.6 1.6 0 0 1-1.6 1.6H5.2a1.6 1.6 0 0 1-1.6-1.6ZM9.2 8.6V6.2a1.6 1.6 0 0 1 1.6-1.6h2.4a1.6 1.6 0 0 1 1.6 1.6v2.4M3.6 13.2h16.8',
  book: 'M12 7.2C10 5.6 7 5.2 4 5.6v12c3-.4 6 0 8 1.6 2-1.6 5-2 8-1.6v-12c-3-.4-6 0-8 1.6ZM12 7.2v12',
  heart: 'M12 19.6c-3.5-2.7-6.6-4.7-6.6-8.1A3.6 3.6 0 0 1 12 9.3a3.6 3.6 0 0 1 6.6 2.2c0 3.4-3.1 5.4-6.6 8.1Z',
  chart: 'M4.4 19.6h15.2M7.6 19.6v-5.2M12 19.6v-9.2M16.4 19.6v-6.6',
  house: 'M4 11.6 12 5l8 6.6M6.6 10.1v9.5h10.8v-9.5M10 19.6v-5h4v5',
  walk: 'M12.6 4.4a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12.2 8.8 11.2 14.3M11.2 14.3 7.4 19.8M11.2 14.3l3.8 5.5M13.4 10.4l3.6 1.8M10.6 10.6 7 12.4',
};

export const VPARTS = [
  { left: 220, top: 6, align: 'left', lineD: 'M218 30 C206 58 200 86 196 108' },
  { left: 0, top: 6, align: 'right', lineD: 'M82 30 C92 58 96 86 100 108' },
  { left: 0, top: 198, align: 'right', lineD: 'M82 200 C90 186 96 176 104 164' },
  { left: 220, top: 198, align: 'left', lineD: 'M218 200 C210 186 202 176 192 164' },
  { left: 220, top: 104, align: 'left', lineD: 'M218 120 L210 136' },
];

export const LEAF_SLOTS = [[112, 104], [188, 100], [130, 86], [170, 84], [100, 96], [200, 92], [145, 78], [118, 72], [182, 70], [150, 60]];

export const COMPASS_DIRS = [
  { label: 'NILAI', sub: 'yang saya pegang', left: 75, top: 46, w: 150 },
  { label: 'ORANG', sub: 'yang saya jaga', left: 218, top: 134, w: 82 },
  { label: 'KONTRIBUSI', sub: 'yang saya beri', left: 75, top: 222, w: 150 },
  { label: 'KEYAKINAN', sub: 'menguatkan', left: 0, top: 134, w: 82 },
];

export const STAGES = [
  { t: 'MELEPAS', b: 'Peran & rutinitas lama' },
  { t: 'MASA ANTARA', b: 'Terasa kosong, dan itu wajar' },
  { t: 'MEMULAI', b: 'Peran baru tumbuh perlahan' },
];

export const FINZONES = [
  { t: 'ASET', b: 'Rumah, tanah, tabungan', left: 6, top: 84, w: 96 },
  { t: 'KEWAJIBAN', b: 'Utang & cicilan', left: 198, top: 84, w: 96 },
  { t: 'ARUS BULANAN', b: 'Masuk & keluar', left: 102, top: 186, w: 96 },
];

export const C = {
  fitland: { color: '#1E8A4C', tint: '#EAF4EC', border: 'rgba(30,138,76,.25)', icon: ICON.person },
  assetland: { color: '#C9871A', tint: '#FDF3DF', border: 'rgba(201,135,26,.28)', icon: ICON.wallet },
  mindland: { color: '#6C4FB6', tint: '#F0EBFA', border: 'rgba(108,79,182,.25)', icon: ICON.brain },
  soulland: { color: '#D9662F', tint: '#FDEEE4', border: 'rgba(217,102,47,.25)', icon: ICON.compass },
};

export function tone(id) {
  return C[id] || { color: NAVY, tint: '#EEF1F7', border: 'rgba(16,39,90,.14)', icon: ICON.compass };
}

function mk(t, lead, pts, reflect, kind) {
  return { t, lead, points: pts.map((p) => ({ h: p[0], b: p[1] })), reflect, kind: kind || 'plain' };
}

export const TERMINALS = [
  {
    id: 'fitland', name: 'FITLAND', nameTitle: 'Fitland', tag: 'Sehat Tanpa Obat', support: 'Kesehatan',
    q: 'Apakah tubuh saya siap untuk perjalanan ini?', visa: 'FIT TO TRAVEL',
    visaQ: 'Kebiasaan apa yang akan saya jaga secara konsisten agar kendaraan ini tetap siap menemani saya menikmati bab kehidupan berikutnya?',
    modules: [
      mk('Health Check-In', 'Mulai dari gambaran jujur tentang kondisi tubuhmu hari ini. Tidak ada nilai, hanya kesadaran.', [['Energi harian', 'Seberapa sering kamu merasa cukup bertenaga sampai malam?'], ['Keluhan berulang', 'Nyeri, sesak, atau lelah yang sering datang.'], ['Pemeriksaan terakhir', 'Kapan terakhir kamu memeriksa tekanan darah dan gula?']], 'Apa satu hal tentang tubuhmu yang paling kamu syukuri hari ini?'),
      mk('Body as Your Vehicle', 'Tubuh adalah kendaraanmu menuju bab kehidupan berikutnya. Rawatlah dengan baik agar perjalananmu nyaman dan lancar.', [['Mesin', 'Jantung & paru-paru'], ['Bahan Bakar', 'Nutrisi & hidrasi'], ['Ban', 'Otot, mobilitas & keseimbangan'], ['Rem', 'Istirahat & recovery'], ['Lampu', 'Pikiran positif & awareness']], 'Bagian mana dari kendaraanmu yang paling ingin kamu rawat mulai sekarang?', 'vehicle'),
      mk('Healthy Aging', 'Menua adalah proses alami. Yang bisa kita pilih adalah menua dengan tetap kuat dan mandiri.', [['Kekuatan bisa dijaga', 'Massa otot menurun setelah usia 40, tetapi latihan ringan yang rutin menahannya.'], ['Kebiasaan kecil menang', 'Konsisten sepuluh menit setiap hari lebih berpengaruh daripada usaha besar sesekali.'], ['Tidak perlu ekstrem', 'Target yang realistis lebih mungkin kamu jalani bertahun-tahun.']], 'Kebiasaan kecil apa yang bisa kamu mulai minggu ini?'),
      mk('Move to Stay Independent', 'Tujuan bergerak di usia ini bukan penampilan, tetapi kemandirian: bisa naik tangga, menggendong cucu, bepergian sendiri.', [['Jalan kaki', '20 sampai 30 menit, hampir setiap hari.'], ['Latihan kekuatan', 'Dua kali seminggu, cukup dengan beban tubuh sendiri.'], ['Keseimbangan', 'Berdiri satu kaki saat menyikat gigi sudah membantu.']], 'Gerakan apa yang paling mungkin kamu lakukan secara rutin?'),
      mk('Eat for Your Next Chapter', 'Makan bukan soal pantangan ketat, tetapi soal pola yang bisa kamu jalani terus.', [['Protein cukup', 'Untuk menjaga otot dan daya tahan.'], ['Kurangi gula & gorengan', 'Cukup kurangi porsinya, tidak harus berhenti total.'], ['Air yang cukup', 'Rasa lapar sering hanya rasa haus.']], 'Satu perubahan pola makan yang realistis untukmu?'),
      mk('Sleep & Recovery', 'Pemulihan adalah bagian dari kebugaran, bukan kemalasan.', [['Tujuh jam', 'Jam tidur yang teratur lebih penting daripada jumlahnya saja.'], ['Rutinitas malam', 'Kurangi layar dan kopi menjelang tidur.'], ['Jeda siang', 'Istirahat singkat dua puluh menit menyegarkan tanpa mengganggu malam.']], 'Apa yang paling sering mengganggu istirahatmu, dan apa langkah kecil untuk memperbaikinya?'),
      mk('Prevent, Don\'t Wait', 'Mencegah jauh lebih murah dan nyaman daripada mengobati.', [['Angka dasar', 'Tekanan darah, gula darah, kolesterol.'], ['Skrining sesuai usia', 'Diskusikan dengan dokter mana yang relevan untukmu.'], ['Kenali tanda bahaya', 'Nyeri dada, sesak, pusing berat jangan ditunda.']], 'Pemeriksaan apa yang ingin kamu jadwalkan bulan ini?'),
      mk('My Fit to Travel Plan', 'Rangkum semuanya menjadi rencana sederhana yang bisa kamu jalani tiga bulan ke depan.', [['Gerak', 'Jenis, durasi, dan harinya.'], ['Makan', 'Satu perubahan saja, dijalani konsisten.'], ['Tidur & cek kesehatan', 'Jam tidur dan jadwal pemeriksaan.']], 'Tuliskan rencana sehatmu untuk tiga bulan ke depan.'),
    ],
  },
  {
    id: 'assetland', name: 'ASSETLAND', nameTitle: 'Assetland', tag: 'Bekal Saya Cukup?', support: 'Keuangan',
    q: 'Apakah bekal saya cukup untuk menikmati perjalanan ini?', visa: 'FINANCIALLY READY',
    visaQ: 'Prioritas keuangan apa yang akan saya jaga agar bekal perjalanan ini tetap cukup dan tenang?',
    modules: [
      mk('Financial Check-In', 'Gambaran kasar sudah cukup untuk mulai. Ketelitian bisa menyusul.', [['Pemasukan setelah purna tugas', 'Pensiun, sewa, usaha, atau lainnya.'], ['Pengeluaran bulanan', 'Perkirakan yang benar-benar rutin.'], ['Kewajiban', 'Cicilan atau tanggungan yang masih berjalan.']], 'Apa satu hal tentang keuanganmu yang paling ingin kamu perjelas?'),
      mk('Defining Enough', 'Cukup bukan angka yang sama untuk semua orang. Cukup adalah angka yang membuatmu tenang.', [['Biaya hidup pokok', 'Rumah, makan, listrik, transportasi.'], ['Biaya kesehatan', 'Bagian yang paling sering diremehkan.'], ['Biaya menikmati hidup', 'Hobi, perjalanan, keluarga. Ini bukan pemborosan.']], 'Menurutmu, seperti apa hidup yang sudah bisa disebut cukup?'),
      mk('My Financial Map', 'Peta sederhana: apa yang kamu miliki, apa yang kamu bayar, dan apa yang mengalir setiap bulan.', [['Aset', 'Rumah, tanah, tabungan, investasi.'], ['Kewajiban', 'Utang dan cicilan.'], ['Arus bulanan', 'Masuk dan keluar.']], 'Setelah melihat petamu, bagian mana yang paling perlu dirapikan?', 'finmap'),
      mk('Packing Your Financial Luggage', 'Pilih bekal yang paling penting untukmu. Ini latihan kesadaran, bukan perhitungan investasi.', [], 'Mengapa tiga bekal teratas itu yang paling penting bagimu?', 'chips'),
      mk('Protect Your Journey', 'Proteksi menjaga rencana tetap utuh ketika ada kejadian tak terduga.', [['Kesehatan', 'Jaminan atau asuransi kesehatan setelah tidak lagi bekerja.'], ['Jiwa', 'Terutama bila masih ada tanggungan.'], ['Dana darurat', 'Simpanan yang mudah dicairkan.']], 'Perlindungan apa yang belum kamu siapkan?'),
      mk('The Second Journey', 'Sebagian orang ingin tetap berpenghasilan setelah purna tugas. Sebagian memilih berhenti. Keduanya sah.', [['Dari keahlian', 'Konsultasi atau mengajar.'], ['Dari hobi', 'Usaha kecil yang menyenangkan.'], ['Dari aset', 'Sewa atau usaha yang dikelola orang lain.']], 'Kalau ingin tetap berpenghasilan, dari mana kamu ingin memulainya?'),
      mk('Avoid Financial Turbulence', 'Sebagian risiko keuangan pascapensiun bisa dihindari hanya dengan berhati-hati.', [['Tawaran untung besar', 'Semakin tinggi janji hasilnya, semakin besar risikonya.'], ['Menanggung terlalu banyak', 'Bantuan keluarga tetap perlu batas.'], ['Modal habis di awal', 'Jangan taruh seluruh dana pensiun pada satu usaha baru.']], 'Risiko keuangan mana yang paling perlu kamu waspadai?'),
      mk('My Financial Flight Plan', 'Rangkum menjadi tiga keputusan keuangan yang akan kamu jalankan.', [['Yang saya jaga', 'Dana darurat dan kesehatan.'], ['Yang saya kurangi', 'Pengeluaran yang tidak lagi penting.'], ['Yang saya siapkan', 'Satu langkah dalam tiga bulan ke depan.']], 'Tuliskan rencana keuanganmu secara singkat.'),
    ],
  },
  {
    id: 'mindland', name: 'MINDLAND', nameTitle: 'Mindland', tag: 'Hati & Identitas Siap?', support: 'Psikologis',
    q: 'Apakah hati dan identitas saya siap memasuki bab baru?', visa: 'EMOTIONALLY READY',
    visaQ: 'Sikap apa yang akan saya jaga agar hati saya tetap tenang saat memasuki bab baru?',
    modules: [
      mk('Emotional Check-In', 'Perasaan menjelang purna tugas biasanya bercampur. Itu normal.', [['Lega dan lelah', 'Keduanya bisa hadir bersamaan.'], ['Cemas', 'Biasanya tentang peran dan penghasilan.'], ['Penasaran', 'Tanda kamu sudah melihat ke depan.']], 'Perasaan apa yang paling sering muncul ketika kamu memikirkan purna tugas?'),
      mk('Retirement as Life Transition', 'Purna tugas bukan akhir karier, tetapi perpindahan peran. Setiap perpindahan butuh waktu.', [], 'Di tahap mana kamu merasa berada sekarang?', 'stages'),
      mk('Letting Go with Grace', 'Melepaskan dengan tenang meninggalkan kesan yang jauh lebih panjang daripada jabatan.', [['Selesaikan dengan baik', 'Serah terima yang rapi.'], ['Ucapkan terima kasih', 'Kepada orang yang menemani perjalananmu.'], ['Lepaskan kendali', 'Penggantimu punya caranya sendiri.']], 'Apa yang ingin kamu selesaikan dengan baik sebelum purna tugas?'),
      mk('Rediscovering My Identity', 'Kamu bukan jabatanmu. Ada banyak hal yang layak dibawa, dan beberapa yang lebih baik ditinggalkan.', [], 'Setelah memilih, siapa dirimu di luar pekerjaan?', 'twocol'),
      mk('Finding New Purpose', 'Tujuan baru biasanya kecil dan dekat, bukan besar dan dramatis.', [['Apa yang kamu nikmati', 'Kegiatan yang membuat waktu terasa cepat.'], ['Apa yang kamu kuasai', 'Pengalaman yang bisa dibagikan.'], ['Apa yang dibutuhkan sekitar', 'Di keluarga atau komunitas.']], 'Kegiatan apa yang membuatmu merasa berguna?'),
      mk('Staying Connected', 'Relasi kerja sering ikut berhenti bersama pekerjaan. Relasi lain perlu dirawat sejak sekarang.', [['Keluarga', 'Kualitas waktu, bukan hanya keberadaan.'], ['Sahabat lama', 'Hubungan yang tidak bergantung jabatan.'], ['Komunitas baru', 'Hobi, ibadah, kegiatan sosial.']], 'Siapa yang ingin kamu prioritaskan di bab berikutnya?'),
      mk('Building Emotional Resilience', 'Ketahanan bukan berarti tidak pernah sedih, tetapi bisa pulih.', [['Kenali pemicunya', 'Situasi yang membuatmu tertekan.'], ['Punya penyangga', 'Orang, kebiasaan, atau keyakinan.'], ['Minta bantuan', 'Bukan tanda lemah.']], 'Apa yang biasanya membantumu pulih ketika sedang berat?'),
      mk('Boarding to My Next Chapter', 'Rangkum kesiapan hatimu menjadi satu kalimat yang bisa kamu ingat.', [['Yang saya bawa', 'Nilai dan pengalaman.'], ['Yang saya tinggalkan', 'Beban yang tidak lagi perlu.'], ['Identitas baru', 'Sebutkan dalam satu kalimat.']], 'Tuliskan satu kalimat tentang dirimu di bab berikutnya.'),
    ],
  },
  {
    id: 'soulland', name: 'SOULLAND', nameTitle: 'Soulland', tag: 'Makna & Tujuan Hidup', support: 'Makna Hidup',
    q: 'Untuk apa saya menjalani perjalanan ini?', visa: 'INNER PEACE',
    visaQ: 'Makna atau nilai apa yang akan menjadi kompas saya di bab kehidupan berikutnya?',
    modules: [
      mk('Spiritual Check-In', 'Bagian ini terbuka untuk semua keyakinan. Isi sesuai caramu sendiri.', [['Ketenangan', 'Seberapa sering kamu merasa tenang.'], ['Sumber makna', 'Keluarga, keyakinan, karya, atau pelayanan.'], ['Ruang hening', 'Kapan terakhir kamu punya waktu untuk diam?']], 'Apa yang paling memberi ketenangan bagimu saat ini?'),
      mk('What Truly Matters?', 'Setelah karier tidak lagi menjadi pusat, apa yang tinggal? Empat arah ini bisa menjadi kompasmu.', [], 'Tiga hal apa yang paling penting dalam hidupmu?', 'compass'),
      mk('Gratitude Changes Perspective', 'Syukur tidak menghapus masalah, tetapi mengubah cara kita melihatnya.', [['Perjalanan karier', 'Hal yang ternyata layak disyukuri.'], ['Orang di sekitar', 'Yang menemani tanpa banyak bicara.'], ['Hal sederhana', 'Kesehatan, waktu, rumah.']], 'Tuliskan tiga hal yang kamu syukuri hari ini.'),
      mk('Legacy Beyond Position', 'Yang diingat orang biasanya bukan jabatanmu, tetapi caramu memperlakukan mereka.', [], 'Bagaimana kamu ingin diingat oleh orang terdekatmu?', 'tree'),
      mk('Serving Beyond Career', 'Pengalamanmu masih dibutuhkan, hanya dalam bentuk yang berbeda.', [['Mentoring', 'Membimbing yang lebih muda.'], ['Kegiatan sosial', 'Komunitas atau rumah ibadah.'], ['Lingkungan terdekat', 'Kadang cukup di tingkat keluarga.']], 'Di mana kamu ingin memberi kontribusi?'),
      mk('Reconnecting with Yourself', 'Setelah puluhan tahun sibuk, perlu waktu untuk mengenal diri sendiri kembali.', [['Waktu hening', 'Sedikit saja setiap hari.'], ['Menulis', 'Membantu merapikan pikiran.'], ['Alam dan gerak', 'Menenangkan tanpa banyak kata.']], 'Kapan kamu merasa paling dekat dengan dirimu sendiri?'),
      mk('Faith as Strength', 'Bagi banyak orang, keyakinan menjadi sumber kekuatan di masa transisi. Bentuknya bisa berbeda-beda.', [['Sumber ketenangan', 'Ibadah, doa, atau perenungan.'], ['Komunitas', 'Tempat bertumbuh bersama.'], ['Arah', 'Membantu memilih apa yang penting.']], 'Dari mana kamu memperoleh kekuatan ketika menghadapi perubahan besar?'),
      mk('My Meaningful Journey', 'Rangkum kompas hidupmu menjadi satu pernyataan yang sederhana.', [['Nilai', 'Yang saya pegang.'], ['Orang', 'Yang saya jaga.'], ['Kontribusi', 'Yang saya berikan.']], 'Tuliskan misi hidupmu dalam satu atau dua kalimat.'),
    ],
  },
];

export const LUGGAGE = ['Dana Darurat', 'Dana Kesehatan', 'Rumah', 'Proteksi', 'Investasi', 'Hobi', 'Bisnis', 'Liburan', 'Dana Keluarga', 'Warisan'];
export const CARRY = ['Pengalaman', 'Kebijaksanaan', 'Persahabatan', 'Integritas', 'Humor', 'Rasa ingin tahu'];
export const LEAVE = ['Ego jabatan', 'Perfeksionisme', 'Takut gagal', 'Terlalu sibuk', 'Membandingkan diri'];

export const QUESTIONS = [
  // A. Dimensi Keuangan -> assetland
  { area: 'KEUANGAN', id: 'assetland', text: 'Saya memahami dengan baik berapa jumlah dana yang saya butuhkan untuk hidup nyaman setelah pensiun.' },
  { area: 'KEUANGAN', id: 'assetland', text: 'Saya memiliki pengetahuan yang cukup tentang produk keuangan (tabungan, investasi, asuransi) yang relevan untuk masa pensiun.' },
  { area: 'KEUANGAN', id: 'assetland', text: 'Saya terbiasa membuat anggaran dan mengontrol pengeluaran saya secara rutin.' },
  { area: 'KEUANGAN', id: 'assetland', text: 'Saya merasa yakin mampu mengelola keuangan saya sendiri setelah tidak lagi menerima gaji tetap.' },
  { area: 'KEUANGAN', id: 'assetland', text: 'Saya sudah memiliki sumber penghasilan pasca pensiun yang jelas (manfaat pensiun, investasi, usaha, dan lain-lain).' },
  { area: 'KEUANGAN', id: 'assetland', text: 'Saya merasa yakin dan tenang saat harus mengambil keputusan keuangan penting.' },

  // B. Dimensi Psikologis -> mindland
  { area: 'PSIKOLOGIS', id: 'mindland', text: 'Saya sudah memiliki rencana konkret tentang apa yang akan saya lakukan setelah pensiun.' },
  { area: 'PSIKOLOGIS', id: 'mindland', text: 'Saya telah menetapkan tujuan yang jelas untuk kehidupan saya pasca pensiun.' },
  { area: 'PSIKOLOGIS', id: 'mindland', text: 'Saya merasa tenang memikirkan kehidupan sehari-hari saya setelah pensiun nanti.' },
  { area: 'PSIKOLOGIS', id: 'mindland', text: 'Saya merasa siap menghadapi perubahan rutinitas harian setelah pensiun.' },
  { area: 'PSIKOLOGIS', id: 'mindland', text: 'Saya sudah mendiskusikan rencana pensiun saya dengan keluarga/pasangan.' },
  { area: 'PSIKOLOGIS', id: 'mindland', text: 'Saya merasa yakin dapat beradaptasi dengan hal-hal yang belum saya ketahui di masa pensiun nanti.' },

  // C. Dimensi Kesehatan -> fitland
  { area: 'KESEHATAN', id: 'fitland', text: 'Saya secara rutin menjaga pola makan dan aktivitas fisik saya.' },
  { area: 'KESEHATAN', id: 'fitland', text: 'Saya melakukan pemeriksaan kesehatan secara berkala.' },
  { area: 'KESEHATAN', id: 'fitland', text: 'Secara umum, saya menilai kondisi kesehatan fisik saya saat ini baik.' },
  { area: 'KESEHATAN', id: 'fitland', text: 'Saya mampu menjaga ketenangan pikiran dalam menjalani aktivitas sehari-hari.' },
  { area: 'KESEHATAN', id: 'fitland', text: 'Saya memiliki cara yang efektif untuk mengelola stres.' },
  { area: 'KESEHATAN', id: 'fitland', text: 'Saya cukup tidur dan istirahat setiap hari.' },

  // D. Dimensi Sosial -> sosial (berdiri sendiri)
  { area: 'SOSIAL', id: 'sosial', text: 'Saya memiliki hubungan yang dekat dengan keluarga dan/atau pasangan.' },
  { area: 'SOSIAL', id: 'sosial', text: 'Saya aktif dalam komunitas atau kelompok sosial di luar pekerjaan.' },
  { area: 'SOSIAL', id: 'sosial', text: 'Saya memiliki teman atau kerabat yang dapat saya andalkan saat membutuhkan dukungan.' },
  { area: 'SOSIAL', id: 'sosial', text: 'Saya yakin hubungan sosial saya akan tetap terjaga setelah saya tidak lagi bekerja.' },
  { area: 'SOSIAL', id: 'sosial', text: 'Saya merasa memiliki peran yang berarti dalam keluarga/komunitas saya.' },
  { area: 'SOSIAL', id: 'sosial', text: 'Saya sudah memiliki rencana untuk membangun atau memperluas jejaring sosial baru setelah pensiun.' },

  // E. Dimensi Spiritual/Makna Hidup -> soulland
  { area: 'SPIRITUAL', id: 'soulland', text: 'Saya merasa hidup saya memiliki makna dan tujuan yang jelas.' },
  { area: 'SPIRITUAL', id: 'soulland', text: 'Saya rutin meluangkan waktu untuk refleksi diri, doa, atau ibadah sesuai keyakinan saya.' },
  { area: 'SPIRITUAL', id: 'soulland', text: 'Saya merasa tenang secara batin ketika menghadapi ketidakpastian hidup.' },
  { area: 'SPIRITUAL', id: 'soulland', text: 'Saya mampu menerima hal-hal dalam hidup yang berada di luar kendali saya.' },
  { area: 'SPIRITUAL', id: 'soulland', text: 'Saya merasa terhubung dengan sesuatu yang lebih besar dari diri saya sendiri (Tuhan/alam semesta).' },
  { area: 'SPIRITUAL', id: 'soulland', text: 'Saya percaya fase kehidupan setelah pensiun dapat menjadi kesempatan untuk berkontribusi bagi orang lain.' },
  { area: 'SPIRITUAL', id: 'soulland', text: 'Saya merasa bersyukur atas perjalanan hidup yang telah saya lalui sejauh ini.' },
  { area: 'SPIRITUAL', id: 'soulland', text: 'Saya memiliki nilai-nilai atau prinsip hidup yang menjadi pegangan dalam mengambil keputusan penting.' },
];

// Domain metadata for the check-in instrument specifically. 'sosial' is a
// standalone 5th dimension -- distinct from the 4 journey Terminals -- so it
// needs its own label/color here rather than reusing tone()/TERMINALS.
export const CHECKIN_DOMAINS = [
  { id: 'assetland', label: 'Keuangan', color: '#C9871A' },
  { id: 'mindland', label: 'Psikologis', color: '#6C4FB6' },
  { id: 'fitland', label: 'Kesehatan', color: '#1E8A4C' },
  { id: 'sosial', label: 'Sosial', color: '#2E86AB' },
  { id: 'soulland', label: 'Spiritual / Makna Hidup', color: '#D9662F' },
];

export const ARCHETYPES = [
  { id: 'wirausaha', title: 'WIRAUSAHA', sub: 'Bangun usaha dari passion & peluang', color: '#1E8A4C', tint: '#EAF4EC', icon: ICON.shop, body: 'Menjalankan usaha sendiri setelah purna tugas, dalam skala yang kamu nikmati dan mampu kelola.', examples: ['Usaha dari hobi', 'Usaha dari keahlian', 'Usaha keluarga', 'Usaha digital atau online'] },
  { id: 'konsultan', title: 'KONSULTAN / PROFESIONAL PARUH WAKTU', sub: 'Berbagi keahlian secara fleksibel', color: '#10275A', tint: '#EEF1F7', icon: ICON.briefcase, body: 'Tetap bekerja di bidang yang kamu kuasai, dengan waktu dan beban yang kamu tentukan sendiri.', examples: ['Konsultan bidang lama', 'Freelancer', 'Advisor atau komisaris', 'Kontrak paruh waktu'] },
  { id: 'edukator', title: 'EDUKATOR / MENTOR', sub: 'Mengajar dan membimbing generasi berikutnya', color: '#6C4FB6', tint: '#F0EBFA', icon: ICON.book, body: 'Menurunkan pengalaman kepada orang lain melalui pengajaran, pelatihan, atau tulisan.', examples: ['Pengajar', 'Trainer', 'Mentor', 'Penulis atau content creator'] },
  { id: 'sosial', title: 'KONTRIBUTOR SOSIAL', sub: 'Berkontribusi pada masyarakat & isu sosial', color: '#D9662F', tint: '#FDEEE4', icon: ICON.heart, body: 'Memberi waktu dan pengalaman untuk kegiatan sosial, komunitas, atau keagamaan.', examples: ['Relawan', 'Organisasi sosial atau keagamaan', 'Komunitas', 'Kegiatan masyarakat'] },
  { id: 'investor', title: 'INVESTOR / PENGELOLA ASET', sub: 'Mengembangkan aset & perencanaan keuangan', color: '#C9871A', tint: '#FDF3DF', icon: ICON.chart, body: 'Fokus mengelola dan menjaga aset agar bekal perjalanan tetap aman dan bertumbuh wajar.', examples: ['Properti', 'Portofolio investasi', 'Pemilik usaha pasif', 'Pengelolaan aset keluarga'] },
  { id: 'purna', title: 'PURNA TUGAS UTUH', sub: 'Menikmati hidup berkualitas dengan keluarga & diri sendiri', color: '#1E6E42', tint: '#EDF3EE', icon: ICON.house, body: 'Memilih tidak mencari penghasilan baru dan menikmati waktu dengan penuh. Pilihan ini sama berharganya.', examples: ['Keluarga', 'Kesehatan', 'Hobi', 'Perjalanan', 'Spiritual', 'Menikmati hidup tanpa agenda ketat'] },
];

export const SUMMARY_FIELDS = [
  { key: 'identitas', label: 'Identitas Baru Saya' },
  { key: 'nilai', label: 'Nilai yang Akan Saya Jaga' },
  { key: 'orang', label: 'Orang yang Akan Saya Prioritaskan' },
  { key: 'kebiasaan', label: 'Kebiasaan yang Ingin Saya Pertahankan' },
  { key: 'keuangan', label: 'Prioritas Keuangan Saya' },
  { key: 'misi', label: 'Misi Hidup Saya' },
  { key: 'legacy', label: 'Legacy yang Ingin Saya Tinggalkan' },
];

export const NC_FIELDS = [
  { key: 'menjadi', label: 'Saya ingin menjadi...' },
  { key: 'melakukan', label: 'Saya ingin melakukan...' },
  { key: 'kontribusi', label: 'Saya ingin memberi kontribusi kepada...' },
  { key: 'menjaga', label: 'Saya ingin tetap menjaga...' },
  { key: 'langkah', label: 'Langkah pertama yang ingin saya lakukan...' },
];

export const STATUSES = ['Belum Dimulai', 'Sedang Berjalan', 'Selesai'];
// 120 ide (6 arketipe x 20 ide) dari Next Chapter Playbook. Format
// gampang diedit: n=nama ide, d=deskripsi, p=kelebihan (plus), m=tantangan (minus).
export const ARCHETYPE_IDEAS = {
  wirausaha: [
    { n: 'Reseller tanpa stok', d: 'Menjual ulang produk orang lain lewat program reseller resmi Shopee/Tokopedia, tanpa perlu menyetok barang sendiri.', p: 'Modal sangat kecil, risiko rendah, bisa mulai hari ini juga.', m: 'Margin per produk kecil, persaingan harga ketat sesama reseller.' },
    { n: 'Dropshipping niche', d: 'Jual produk niche (herbal, fashion muslim, perlengkapan rumah tangga) dari supplier yang kirim langsung ke pembeli.', p: 'Tidak perlu gudang, cocok dikerjakan dari rumah.', m: 'Tidak kontrol kualitas & pengiriman, komplain pembeli tetap tanggung jawab kita.' },
    { n: 'Shopee Affiliate', d: 'Membagikan tautan produk Shopee ke media sosial/grup WA, dapat komisi tiap ada transaksi lewat tautan itu.', p: '100% gratis daftar, tanpa syarat minimal follower untuk kategori reguler, komisi cair mingguan.', m: 'Penghasilan tidak pasti, sangat bergantung besar & aktifnya jaringan sosial kita.' },
    { n: 'TikTok Affiliate/Shop', d: 'Mempromosikan produk TikTok Shop lewat video pendek atau siaran langsung, dapat komisi dari penjualan.', p: 'Bisa mulai tanpa follower banyak, cocok dipadu konten pengalaman hidup.', m: 'Perlu waktu belajar bikin & edit video, algoritma bisa naik-turun performanya.' },
    { n: 'Live shopping host', d: 'Jadi pembawa acara siaran langsung jualan (TikTok Live/Shopee Live) untuk brand atau reseller lain, dibayar per sesi.', p: 'Dibayar per jam tampil, tidak perlu modal produk sendiri.', m: 'Butuh stamina bicara lama & percaya diri di depan kamera.' },
    { n: 'Katering/kuliner rumahan', d: 'Usaha masakan rumahan dipasarkan lewat GoFood/GrabFood, WA, atau komunitas RT/RW.', p: 'Memanfaatkan keahlian memasak yang sudah dimiliki, pasar selalu ada.', m: 'Butuh tenaga fisik harian, margin tergantung harga bahan baku yang naik-turun.' },
    { n: 'Jasa titip (jastip)', d: 'Menitipkan pembelian barang dari kota/negara yang sering dikunjungi, dengan fee jasa titip.', p: 'Menyenangkan bagi yang suka bepergian, modal fleksibel sesuai pesanan.', m: 'Perlu modal talangan di muka, tergantung frekuensi bepergian.' },
    { n: 'Warung modern berbasis digital', d: 'Warung kelontong dengan sistem kasir digital, QRIS, dan pembukuan aplikasi (bukan warung konvensional biasa).', p: 'Pasar harian yang stabil di sekitar rumah, bisa dibantu anggota keluarga.', m: 'Butuh modal awal lebih besar untuk stok & tempat, kompetisi dengan minimarket.' },
    { n: 'Kemitraan UMKM skala mikro', d: 'Ikut kemitraan/franchise modal kecil (minuman kekinian, laundry kiloan, dsb).', p: 'Sistem & brand sudah teruji, tinggal jalankan operasional.', m: 'Ada biaya kemitraan/royalti, keuntungan dibagi dengan pemilik brand.' },
    { n: 'Kerajinan tangan', d: 'Membuat & menjual produk kerajinan (rajut, anyaman, dekorasi) lewat marketplace atau pameran lokal.', p: 'Bisa jadi penyaluran hobi sekaligus penghasilan, produk unik sulit ditiru massal.', m: 'Produksi memakan waktu, sulit dipasarkan dalam skala besar.' },
    { n: 'Kebun/hidroponik rumahan', d: 'Menanam sayur/buah skala rumah, dijual ke tetangga atau lewat grup sayur online.', p: 'Sehat sebagai kegiatan fisik, hasil bisa dikonsumsi sendiri juga.', m: 'Butuh lahan/space, hasil panen tidak selalu konsisten.' },
    { n: 'Sewa aset pribadi', d: 'Menyewakan aset yang dimiliki (gudang kosong, alat pesta, kendaraan) lewat platform sewa online.', p: 'Penghasilan pasif dari aset yang sudah ada, tidak perlu operasional harian.', m: 'Perlu perawatan aset, risiko kerusakan/kehilangan saat disewa.' },
    { n: 'Jasa event memanfaatkan relasi', d: 'Menjadi MC, among tamu, atau among catering untuk acara pernikahan/kantor, memanfaatkan relasi & pengalaman lama.', p: 'Memanfaatkan jaringan luas dari karier sebelumnya, honor per acara cukup baik.', m: 'Sifatnya musiman, tidak setiap minggu ada acara.' },
    { n: 'Kemitraan bimbel/pendidikan', d: 'Membuka cabang bimbingan belajar franchise di lingkungan rumah.', p: 'Permintaan pendidikan anak selalu ada, sistem pengajaran sudah disediakan pusat.', m: 'Butuh modal & tempat, ketergantungan pada jumlah murid yang mendaftar.' },
    { n: 'Laundry kiloan rumahan', d: 'Usaha cuci-setrika kiloan skala rumah untuk lingkungan sekitar (kos-kosan, kompleks perumahan).', p: 'Permintaan stabil terutama dekat area kos/kampus, modal mesin cuci relatif terjangkau.', m: 'Butuh air & listrik dalam jumlah besar, capek secara fisik jika dikerjakan sendiri.' },
    { n: 'Mitra pengemudi/kurir paruh waktu', d: 'Menjadi mitra pengantaran (GoSend, kurir logistik) di jam-jam senggang, jika kondisi fisik masih prima.', p: 'Fleksibel jam kerja, modal cuma kendaraan yang sudah dimiliki.', m: 'Menuntut fisik & konsentrasi di jalan, kurang cocok untuk yang punya keterbatasan kesehatan.' },
    { n: 'Toko online produk sendiri', d: 'Membangun toko online sendiri (bukan reseller) untuk produk yang diproduksi sendiri, pakai platform seperti Shopify/toko di marketplace.', p: 'Kontrol penuh atas merek dan margin keuntungan.', m: 'Butuh effort marketing & operasional lebih besar dibanding reseller.' },
    { n: 'Jadi pemasok untuk reseller lain', d: 'Alih-alih jadi reseller, memproduksi/memasok barang untuk dijual reseller lain (posisi upstream).', p: 'Potensi margin lebih besar karena berada di rantai atas.', m: 'Butuh modal produksi & manajemen stok yang lebih rumit.' },
    { n: 'Produk digital (template/printable)', d: 'Membuat & menjual produk digital seperti template Excel, planner cetak, atau preset foto di marketplace digital.', p: 'Sekali dibuat, bisa dijual berulang tanpa produksi ulang (passive income).', m: 'Butuh riset pasar & skill desain, penjualan awal bisa lambat sebelum dikenal.' },
    { n: 'Konsultan pemasaran UMKM lokal', d: 'Membantu UMKM di sekitar rumah menyusun strategi jualan online sederhana (foto produk, deskripsi, harga).', p: 'Memanfaatkan pengalaman kerja kantoran untuk membantu usaha kecil sekitar.', m: 'Skala klien terbatas pada lingkup lokal, honor tidak selalu besar di awal.' },
  ],
  konsultan: [
    { n: 'Konsultan lepas sesuai bidang lama', d: 'Menjual jasa konsultasi (HR, pajak, hukum, teknik, dll) lewat platform expert atau jaringan pribadi.', p: 'Memanfaatkan keahlian yang sudah teruji puluhan tahun, tarif per jam bisa tinggi.', m: 'Perlu membangun ulang portofolio/reputasi di luar institusi lama.' },
    { n: 'Virtual assistant UMKM/startup', d: 'Membantu tugas administratif (balas chat, atur jadwal, input data) untuk pemilik usaha kecil dari rumah.', p: 'Jam kerja fleksibel, permintaan tinggi dari UMKM yang kekurangan SDM.', m: 'Honor per jam relatif kecil dibanding konsultasi spesialis.' },
    { n: 'Bookkeeping UMKM', d: 'Mengelola pembukuan sederhana UMKM lewat Excel atau software seperti Jurnal.id/Accurate.', p: 'Sangat cocok untuk latar belakang keuangan/akuntansi, kebutuhan pasar besar.', m: 'Perlu update ilmu pajak & software terbaru secara berkala.' },
    { n: 'Data entry & riset online', d: 'Mengerjakan tugas input data atau riset kecil lewat platform freelance (Fastwork, Freelancer Indonesia, Sribulancer).', p: 'Pekerjaan sederhana, cocok untuk pemanasan masuk dunia freelance.', m: 'Bayaran per proyek kecil, persaingan freelancer pemula cukup ramai.' },
    { n: 'Penerjemah/proofreader', d: 'Menerjemahkan atau menyunting dokumen berbahasa asing untuk klien lewat platform freelance.', p: 'Bisa dikerjakan kapan saja, tarif menarik untuk bahasa yang jarang dikuasai orang.', m: 'Butuh kemampuan bahasa yang benar-benar kuat & konsisten.' },
    { n: 'Customer service remote', d: 'Bekerja paruh waktu sebagai CS perusahaan yang membuka lowongan kerja jarak jauh dengan shift fleksibel.', p: 'Penghasilan rutin bulanan, tidak perlu keluar rumah.', m: 'Terikat jadwal shift tertentu, kurang fleksibel dibanding freelance murni.' },
    { n: 'Moderator komunitas online', d: 'Mengelola & menjaga grup Facebook/Discord/Telegram milik brand atau komunitas tertentu, dibayar bulanan.', p: 'Kerja santai, cocok sambil mengisi waktu luang di rumah.', m: 'Perlu online cukup rutin memantau percakapan grup.' },
    { n: 'Voice-over/podcast guest', d: 'Mengisi suara untuk iklan/e-learning, atau menjadi bintang tamu podcast berbagi pengalaman karier.', p: 'Memanfaatkan suara & pengalaman bicara publik yang sudah terlatih.', m: 'Peluang tidak selalu rutin, tergantung permintaan proyek.' },
    { n: 'Freelance writer/ghostwriter', d: 'Menulis artikel, opini, atau naskah untuk klien yang butuh konten berkualitas.', p: 'Bisa dikerjakan kapan saja, honor per artikel lumayan untuk penulis berpengalaman.', m: 'Butuh riset topik baru terus-menerus, deadline bisa ketat.' },
    { n: 'Desain grafis sederhana', d: 'Membuat materi promosi sederhana (poster, feed Instagram) untuk UMKM lewat Canva.', p: 'Skill mudah dipelajari, permintaan UMKM terus ada.', m: 'Harga jasa sering ditawar rendah oleh klien UMKM.' },
    { n: 'Pembicara webinar korporat', d: 'Menjadi narasumber webinar/pelatihan internal perusahaan sesuai bidang keahlian dulu.', p: 'Honor per sesi menarik, memperluas jaringan profesional baru.', m: 'Perlu effort menyiapkan materi presentasi yang relevan & update.' },
    { n: 'Auditor/reviewer paruh waktu', d: 'Membantu audit internal atau review laporan untuk firma/organisasi kecil yang tidak punya tim tetap.', p: 'Cocok untuk latar belakang akuntan/auditor, proyek biasanya musiman (akhir tahun/pajak).', m: 'Beban kerja menumpuk di periode tertentu (musim laporan/pajak).' },
    { n: 'Mentor karier/CV reviewer', d: 'Membantu fresh graduate atau profesional muda menyiapkan CV dan strategi karier lewat platform mentoring.', p: 'Memberi dampak nyata ke generasi muda, jadwal fleksibel per sesi.', m: 'Tarif per sesi umumnya tidak besar di platform mentoring pemula.' },
    { n: 'Legal advisor lepas UMKM', d: 'Membantu UMKM menyusun kontrak sederhana atau legalitas usaha (khusus latar belakang hukum).', p: 'Kebutuhan legalitas UMKM makin meningkat seiring formalisasi usaha kecil.', m: 'Tanggung jawab hukum tetap melekat, perlu tetap update regulasi terbaru.' },
    { n: 'Trainer korporat freelance', d: 'Memberi pelatihan soft skill/leadership untuk perusahaan lain secara lepas (bukan karyawan tetap).', p: 'Tarif per hari pelatihan bisa tinggi, memanfaatkan pengalaman manajerial.', m: 'Perlu terus mengasah materi pelatihan agar tetap relevan dengan tren terkini.' },
    { n: 'Notulen/rapporteur profesional', d: 'Menjadi pencatat resmi rapat/acara organisasi yang membutuhkan dokumentasi formal.', p: 'Pekerjaan ringan, cocok dikombinasi dengan kegiatan lain.', m: 'Peluang kerja tidak selalu tersedia rutin.' },
    { n: 'Quality control/inspektur lepas', d: 'Melakukan inspeksi kualitas produk/proyek untuk perusahaan manufaktur secara paruh waktu (sesuai latar belakang teknik).', p: 'Memanfaatkan keahlian teknis spesifik yang langka.', m: 'Kadang perlu kunjungan lapangan/site visit.' },
    { n: 'Penilai aset (appraiser) lepas', d: 'Menilai harga properti/kendaraan/aset untuk kebutuhan jual-beli atau agunan bank.', p: 'Permintaan stabil dari sektor properti & perbankan.', m: 'Umumnya butuh sertifikasi resmi penilai untuk hasil yang diakui.' },
    { n: 'Fractional executive/advisor', d: 'Menjadi penasihat atau "direktur paruh waktu" untuk beberapa perusahaan kecil sekaligus.', p: 'Bisa pegang beberapa klien sekaligus, honor per klien menarik.', m: 'Butuh reputasi & jaringan kuat agar dipercaya perusahaan lain.' },
    { n: 'Asesor sertifikasi profesi (BNSP)', d: 'Menjadi asesor kompetensi untuk sertifikasi profesi sesuai bidang keahlian di lembaga sertifikasi resmi.', p: 'Kontribusi nyata ke standar profesi, honor per sesi asesmen jelas.', m: 'Perlu mengikuti pelatihan & sertifikasi asesor terlebih dahulu.' },
  ],
  edukator: [
    { n: 'Guru les privat online', d: 'Mengajar akademik (matematika, bahasa, dll) lewat Zoom/WA sesuai jadwal yang disepakati murid.', p: 'Jadwal fleksibel, bisa mengajar murid dari kota mana saja.', m: 'Butuh kesabaran ekstra mengajar via layar, kadang kendala koneksi internet.' },
    { n: 'Mengajar ngaji/tahsin online', d: 'Membimbing bacaan Al-Qur\'an secara online untuk anak-anak maupun dewasa.', p: 'Bernilai ibadah sekaligus penghasilan, permintaan cukup stabil.', m: 'Perlu kompetensi tahsin/tajwid yang mumpuni dan diakui.' },
    { n: 'Mengajar bahasa asing', d: 'Mengajar bahasa Inggris/Mandarin/lainnya secara privat atau kelompok kecil online.', p: 'Permintaan tinggi terutama untuk persiapan sekolah/kerja anak muda.', m: 'Persaingan dengan platform bahasa besar yang tarifnya lebih murah.' },
    { n: 'Instruktur musik/vokal', d: 'Mengajar alat musik atau vokal secara privat, online maupun tatap muka.', p: 'Menyalurkan hobi seni sekaligus penghasilan.', m: 'Butuh alat/space latihan yang memadai.' },
    { n: 'Mentor UMKM pemula', d: 'Membimbing pelaku UMKM baru soal manajemen dasar usaha (keuangan, pemasaran sederhana).', p: 'Dampak sosial besar, banyak program pemerintah/CSR yang butuh mentor.', m: 'Kadang bersifat sukarela/honor kecil di program tertentu.' },
    { n: 'Dosen/pembicara tamu', d: 'Menjadi pembicara tamu di kampus atau sekolah vokasi berbagi pengalaman industri.', p: 'Prestise & jaringan akademik baru, honor per sesi cukup baik.', m: 'Frekuensi undangan tidak menentu.' },
    { n: 'Membuat kursus online', d: 'Merekam & menjual kursus di platform seperti Udemy, Skill Academy, atau Kelas.com.', p: 'Setelah dibuat, bisa menghasilkan berulang tanpa mengajar langsung tiap sesi.', m: 'Butuh waktu & skill produksi video di awal, penjualan tidak instan.' },
    { n: 'Mentor di platform mentoring', d: 'Bergabung sebagai mentor bersertifikat di platform mentoring karier/bisnis.', p: 'Sistem pencarian klien sudah disediakan platform.', m: 'Ada potongan komisi platform dari honor mentor.' },
    { n: 'Pelatih ekstrakurikuler sekolah', d: 'Melatih ekstrakurikuler (pramuka, olahraga, seni) di sekolah sekitar rumah.', p: 'Jadwal terstruktur, biasanya mingguan.', m: 'Honor umumnya mengikuti standar sekolah, tidak terlalu tinggi.' },
    { n: 'Penulis buku/modul pelatihan', d: 'Menulis buku ajar atau modul pelatihan berdasarkan pengalaman kerja/mengajar.', p: 'Bisa jadi warisan ilmu sekaligus sumber royalti jangka panjang.', m: 'Proses penulisan & penerbitan memakan waktu cukup lama.' },
    { n: 'Fasilitator pelatihan vokasi', d: 'Menjadi fasilitator di BLK (Balai Latihan Kerja) atau komunitas pelatihan keterampilan.', p: 'Dampak langsung ke kesiapan kerja peserta, honor dari lembaga jelas.', m: 'Terikat jadwal & kurikulum yang ditetapkan lembaga.' },
    { n: 'Pendamping UMKM program CSR', d: 'Menjadi pendamping program pemberdayaan UMKM yang didanai CSR perusahaan.', p: 'Biasanya ada honor tetap dari program, jaringan CSR luas.', m: 'Durasi program biasanya terbatas per tahun anggaran.' },
    { n: 'Mentor Program Kartu Prakerja', d: 'Menjadi pengajar/pembuat materi pelatihan di platform mitra Kartu Prakerja (jika memenuhi syarat).', p: 'Skala peserta besar karena program nasional.', m: 'Proses menjadi mitra/pengajar resmi cukup ketat persyaratannya.' },
    { n: 'Konten edukasi YouTube/TikTok', d: 'Membuat video tutorial atau penjelasan topik keahlian secara rutin.', p: 'Bisa menjangkau audiens sangat luas, berpotensi monetisasi iklan.', m: 'Butuh konsistensi upload & waktu untuk membangun audiens.' },
    { n: 'Relawan pengajar Taman Baca', d: 'Mengajar membaca/berhitung dasar di taman baca atau komunitas literasi lingkungan.', p: 'Kegiatan sosial yang sangat bermakna, jadwal fleksibel.', m: 'Umumnya sukarela tanpa honor, murni kontribusi sosial.' },
    { n: 'Pembimbing skripsi/tugas akhir', d: 'Membimbing mahasiswa menyusun skripsi/tesis lepas (untuk lulusan S2/S3 sesuai bidang).', p: 'Honor per bimbingan menarik, jadwal fleksibel sesuai kesepakatan.', m: 'Perlu waktu ekstra membaca & mengoreksi naskah mahasiswa.' },
    { n: 'Instruktur senam/olahraga lansia', d: 'Memandu kelas senam ringan atau olahraga khusus lansia di lingkungan sekitar (terhubung juga ke topik Fitland).', p: 'Sekaligus menjaga kebugaran sendiri sambil membantu sesama lansia aktif.', m: 'Butuh sertifikasi instruktur untuk kelas yang lebih formal.' },
    { n: 'Trainer public speaking', d: 'Melatih kemampuan bicara di depan umum untuk komunitas atau karyawan perusahaan.', p: 'Memanfaatkan pengalaman presentasi/rapat selama berkarier.', m: 'Perlu portofolio/testimoni dulu untuk meyakinkan klien baru.' },
    { n: 'Mentor kewirausahaan anak muda', d: 'Membimbing anak muda yang ingin mulai usaha, berbagi pengalaman bisnis atau manajerial.', p: 'Bisa terhubung dengan program inkubator bisnis/kampus.', m: 'Butuh update tren bisnis digital yang terus berubah.' },
    { n: 'Kolumnis/penulis opini media', d: 'Menulis kolom opini di media massa atau platform online berbagi pandangan sebagai edukator publik.', p: 'Membangun personal branding sebagai pakar di bidangnya.', m: 'Honor menulis opini umumnya kecil, lebih untuk membangun reputasi.' },
  ],
  sosial: [
    { n: 'Relawan panti asuhan/jompo', d: 'Membantu kegiatan rutin di panti asuhan atau panti jompo terdekat.', p: 'Dampak sosial langsung terasa, jadwal fleksibel sesuai ketersediaan.', m: 'Sepenuhnya sukarela, tanpa kompensasi finansial.' },
    { n: 'Pendamping posyandu lansia', d: 'Membantu kegiatan pemeriksaan kesehatan rutin lansia di posyandu.', p: 'Kontribusi kesehatan masyarakat, dekat dengan rumah.', m: 'Butuh koordinasi dengan jadwal puskesmas setempat.' },
    { n: 'Relawan bencana', d: 'Bergabung dengan organisasi seperti PMI untuk kesiapsiagaan & respons bencana.', p: 'Pelatihan resmi tersedia, jaringan relawan nasional luas.', m: 'Butuh kesiapan fisik & mental menghadapi situasi darurat.' },
    { n: 'Pengurus RT/RW aktif', d: 'Terlibat aktif dalam kepengurusan lingkungan untuk program-program sosial warga.', p: 'Dampak langsung ke lingkungan terdekat, mempererat relasi tetangga.', m: 'Kadang menyita waktu untuk urusan administratif warga.' },
    { n: 'Fundraiser kampanye sosial', d: 'Menggalang dana untuk kampanye/komunitas sosial tertentu (kesehatan, pendidikan, bencana).', p: 'Memanfaatkan jaringan luas & kepercayaan yang sudah dibangun lama.', m: 'Perlu transparansi ekstra dalam pengelolaan dana agar tetap dipercaya.' },
    { n: 'Relawan literasi keuangan', d: 'Mengajarkan dasar menabung & mengelola uang untuk masyarakat prasejahtera.', p: 'Cocok memanfaatkan latar belakang kerja di bidang keuangan.', m: 'Butuh materi yang disederhanakan agar mudah dipahami awam.' },
    { n: 'Inisiator bank sampah', d: 'Mendirikan atau mengelola program bank sampah di lingkungan RT/RW.', p: 'Dampak lingkungan nyata, bisa menghasilkan insentif kecil dari daur ulang.', m: 'Butuh effort mengorganisir warga secara konsisten.' },
    { n: 'Mentor anak yatim/dhuafa', d: 'Memberikan bimbingan belajar gratis untuk anak-anak kurang mampu.', p: 'Dampak jangka panjang ke pendidikan anak, sangat bermakna secara personal.', m: 'Sepenuhnya sukarela, butuh komitmen waktu rutin.' },
    { n: 'Relawan kesehatan keliling', d: 'Membantu program kesehatan keliling bekerja sama dengan puskesmas setempat.', p: 'Kontribusi langsung ke akses kesehatan masyarakat.', m: 'Bergantung pada jadwal & program puskesmas.' },
    { n: 'Aktivis lingkungan', d: 'Ikut kegiatan penghijauan, bersih pantai/sungai, atau kampanye lingkungan lain.', p: 'Kegiatan fisik ringan yang sehat sekaligus berdampak.', m: 'Umumnya kegiatan insidental, bukan penghasilan rutin.' },
    { n: 'Pengurus koperasi simpan pinjam', d: 'Mengelola koperasi simpan pinjam komunitas untuk membantu warga sekitar.', p: 'Membantu akses keuangan warga secara adil, ada peran formal & kadang honor.', m: 'Tanggung jawab pengelolaan dana warga cukup besar.' },
    { n: 'Advokasi kebijakan lansia', d: 'Terlibat dalam advokasi kebijakan publik terkait hak & kesejahteraan lansia/purna tugas.', p: 'Dampak sistemik yang lebih luas dari kegiatan individual.', m: 'Prosesnya panjang & butuh jejaring advokasi yang kuat.' },
    { n: 'Relawan pendamping difabel', d: 'Mendampingi penyandang disabilitas dalam kegiatan sehari-hari atau pelatihan keterampilan.', p: 'Kontribusi sosial yang sangat dibutuhkan namun sering luput perhatian.', m: 'Butuh pemahaman khusus soal kebutuhan difabel.' },
    { n: 'Mediator konflik komunitas', d: 'Menjadi penengah dalam konflik warga/RT/RW memanfaatkan kematangan & kebijaksanaan.', p: 'Dihormati posisinya di komunitas, dampak menjaga kerukunan.', m: 'Perlu kenetralan tinggi agar dipercaya semua pihak.' },
    { n: 'Inisiator CSR bareng eks-kolega', d: 'Mengorganisir program CSR mini bersama mantan rekan kerja/kantor lama.', p: 'Memanfaatkan jaringan profesional untuk dampak sosial terorganisir.', m: 'Butuh koordinasi banyak pihak & waktu perencanaan.' },
    { n: 'Relawan pengajar keterampilan', d: 'Mengajarkan keterampilan (menjahit, tata boga) untuk ibu-ibu prasejahtera agar bisa berwirausaha.', p: 'Dampak ekonomi jangka panjang ke keluarga penerima manfaat.', m: 'Butuh kesabaran melatih dari nol & evaluasi berkala.' },
    { n: 'Penggerak donor darah', d: 'Menjadi pendonor rutin sekaligus menggerakkan kampanye donor darah di lingkungan.', p: 'Kontribusi kesehatan yang sangat konkret dan mudah dilakukan.', m: 'Ada syarat kesehatan tertentu untuk bisa mendonor rutin.' },
    { n: 'Pengurus tempat ibadah', d: 'Aktif dalam kepengurusan masjid/gereja/pura di bidang sosial-kemasyarakatan.', p: 'Kegiatan bermakna spiritual sekaligus sosial, jaringan jamaah luas.', m: 'Tanggung jawab bisa cukup menyita waktu tergantung peran.' },
    { n: 'Relawan pendataan komunitas', d: 'Membantu pendataan/sensus warga untuk program bantuan pemerintah.', p: 'Kontribusi ke akurasi data yang menentukan bantuan tepat sasaran.', m: 'Bersifat musiman mengikuti jadwal program pemerintah.' },
    { n: 'Orang tua asuh pendidikan', d: 'Menjadi "orang tua asuh" yang membiayai/mendampingi pendidikan anak kurang mampu.', p: 'Dampak transformatif jangka panjang bagi satu anak/keluarga.', m: 'Perlu komitmen finansial & waktu dalam jangka panjang.' },
  ],
  investor: [
    { n: 'Deposito & reksadana pasar uang', d: 'Instrumen risiko rendah yang cocok untuk dana darurat pensiun.', p: 'Risiko sangat rendah, likuiditas tinggi (mudah dicairkan).', m: 'Imbal hasil relatif kecil, bisa kalah dari inflasi jangka panjang.' },
    { n: 'Obligasi negara ritel (ORI/SBR)', d: 'Instrumen surat utang resmi pemerintah yang dijual langsung ke masyarakat.', p: 'Dijamin negara, kupon/bunga lebih tinggi dari deposito.', m: 'Dana terkunci sampai jatuh tempo (kecuali ada fasilitas early redemption).' },
    { n: 'Reksadana saham/campuran', d: 'Instrumen dengan potensi pertumbuhan lebih tinggi untuk sebagian dana jangka panjang.', p: 'Dikelola manajer investasi profesional, diversifikasi otomatis.', m: 'Nilai bisa turun signifikan dalam jangka pendek, perlu horizon panjang.' },
    { n: 'Emas fisik/digital', d: 'Investasi emas lewat Pegadaian, Antam, atau aplikasi tabungan emas digital.', p: 'Cenderung stabil sebagai lindung nilai inflasi jangka panjang.', m: 'Harga bisa fluktuatif jangka pendek, emas fisik perlu penyimpanan aman.' },
    { n: 'Properti sewa', d: 'Kos-kosan atau ruko yang disewakan sebagai sumber passive income bulanan.', p: 'Pendapatan rutin & nilai aset cenderung naik jangka panjang.', m: 'Modal besar di awal, butuh effort mengelola penyewa & perawatan.' },
    { n: 'P2P lending terdaftar OJK', d: 'Memberi pinjaman ke UMKM lewat platform peer-to-peer lending yang berizin resmi.', p: 'Imbal hasil lebih tinggi dari deposito, bisa mulai dari nominal kecil.', m: 'Ada risiko gagal bayar peminjam, pastikan platform legal & berizin OJK.' },
    { n: 'Reksadana indeks/ETF', d: 'Instrumen investasi pasif yang mengikuti kinerja indeks pasar dengan biaya rendah.', p: 'Biaya kelola lebih murah dibanding reksadana aktif.', m: 'Return mengikuti pasar, tidak bisa mengalahkan indeks.' },
    { n: 'Angel investor mikro', d: 'Ikut memodali usaha kecil milik anak/cucu atau UMKM terpercaya di lingkungan sendiri.', p: 'Sekaligus mendukung generasi muda berwirausaha.', m: 'Risiko modal hilang jika usaha gagal, sulit dicairkan sewaktu-waktu.' },
    { n: 'Saham dividen (blue-chip)', d: 'Berinvestasi di saham perusahaan besar yang rutin membagikan dividen.', p: 'Bisa jadi sumber penghasilan pasif rutin dari dividen.', m: 'Harga saham tetap bisa fluktuatif, perlu pemahaman dasar analisis saham.' },
    { n: 'Bisnis passive (kemitraan)', d: 'Modal di usaha kemitraan/waralaba yang dijalankan pihak lain (tidak mengurus operasional harian).', p: 'Tidak menyita waktu operasional harian.', m: 'Kontrol atas usaha terbatas, tergantung kejujuran pengelola.' },
    { n: 'Join modal usaha keluarga', d: 'Menyuntik modal ke usaha yang dijalankan anak/menantu dengan skema bagi hasil jelas.', p: 'Mempererat sekaligus mendukung ekonomi keluarga.', m: 'Perlu kesepakatan tertulis yang jelas agar tidak mengganggu hubungan keluarga.' },
    { n: 'Simpanan di koperasi resmi', d: 'Menyimpan sebagian dana di koperasi simpan pinjam yang legal dan diawasi.', p: 'Bisa memberi manfaat berbunga sekaligus mendukung ekonomi anggota.', m: 'Pastikan legalitas koperasi jelas untuk menghindari koperasi bodong.' },
    { n: 'Konsultasi Perencana Keuangan (CFP)', d: 'Menyusun ulang rencana keuangan pensiun bersama perencana keuangan bersertifikat.', p: 'Rencana keuangan disusun sesuai profil risiko & kebutuhan personal.', m: 'Ada biaya jasa konsultasi, perlu memilih perencana yang benar-benar bersertifikat.' },
    { n: 'Sewa alat/kendaraan', d: 'Menyewakan aset produktif (mobil, alat berat kecil) untuk penghasilan pasif tambahan.', p: 'Memanfaatkan aset yang sudah dimiliki agar tidak menganggur.', m: 'Risiko kerusakan/penyalahgunaan aset saat disewa.' },
    { n: 'Asuransi/tabungan pendidikan cucu', d: 'Menyisihkan dana khusus untuk pendidikan cucu lewat produk tabungan/asuransi pendidikan.', p: 'Memberi kepastian finansial untuk generasi berikutnya.', m: 'Dana terikat jangka panjang, perlu cek biaya & manfaat produk dengan teliti.' },
    { n: 'Reksadana syariah', d: 'Alternatif investasi sesuai prinsip syariah untuk yang mengutamakan aspek ini.', p: 'Sesuai prinsip syariah, tetap dikelola profesional.', m: 'Pilihan instrumen sedikit lebih terbatas dibanding reksadana konvensional.' },
    { n: 'Kelas literasi investasi OJK', d: 'Mengikuti edukasi dasar analisis risiko investasi lewat program resmi OJK (Sikapi Uangmu).', p: 'Gratis, materi resmi dan tepercaya, membantu menghindari investasi bodong.', m: 'Sifatnya edukasi umum, bukan pengganti nasihat personal dari ahli.' },
    { n: 'Cek legalitas sebelum investasi', d: 'Membiasakan mengecek legalitas produk investasi/pinjaman di kanal resmi OJK sebelum menempatkan dana.', p: 'Langkah pencegahan penting menghindari skema investasi bodong yang marak menyasar pensiunan.', m: 'Butuh kedisiplinan mengecek setiap kali ada tawaran investasi baru.' },
    { n: 'Sewa properti lewat platform', d: 'Menyewakan rumah kedua/kamar lewat platform penyewaan seperti RedDoorz atau Airbnb.', p: 'Bisa menghasilkan lebih tinggi dari sewa bulanan konvensional bila lokasi strategis.', m: 'Butuh effort mengelola tamu & kebersihan lebih intensif.' },
    { n: 'Komisaris independen/advisory UMKM', d: 'Menjadi penasihat atau komisaris independen bagi UMKM yang sedang berkembang, memanfaatkan pengalaman manajerial.', p: 'Kontribusi strategis tanpa terlibat operasional harian.', m: 'Butuh jaringan & reputasi kuat agar dipercaya memegang peran ini.' },
  ],
  purna: [
    { n: 'Kelas hobi personal', d: 'Mengikuti kelas melukis, fotografi, berkebun, atau memasak murni untuk kesenangan diri.', p: 'Menjaga otak tetap aktif & memberi rasa pencapaian baru.', m: 'Perlu biaya kursus tergantung jenis hobinya.' },
    { n: 'Traveling terjadwal', d: 'Bepergian dalam & luar negeri bersama komunitas sepantaran secara rutin.', p: 'Memperluas wawasan & menjaga semangat hidup.', m: 'Butuh anggaran khusus, perlu mempertimbangkan kondisi kesehatan saat bepergian.' },
    { n: 'Klub buku/diskusi', d: 'Bergabung atau membentuk klub buku dan diskusi rutin dengan sesama lansia.', p: 'Menjaga ketajaman berpikir & memperluas relasi sosial.', m: 'Butuh komitmen jadwal rutin agar klub tetap hidup.' },
    { n: 'Senam/yoga/jalan pagi rutin', d: 'Kegiatan fisik ringan terjadwal bersama komunitas sekitar rumah.', p: 'Langsung berdampak ke kebugaran fisik (terhubung ke Fitland juga).', m: 'Perlu konsistensi & motivasi agar tidak putus di tengah jalan.' },
    { n: 'Kegiatan spiritual rutin', d: 'Pengajian, kebaktian, atau kegiatan keagamaan lain secara rutin.', p: 'Memberi ketenangan batin & rasa komunitas yang kuat.', m: 'Tidak berlaku universal, tergantung keyakinan masing-masing.' },
    { n: 'Merawat cucu terjadwal', d: 'Meluangkan waktu khusus mendampingi tumbuh kembang cucu.', p: 'Momen kebersamaan keluarga yang sangat berharga.', m: 'Perlu keseimbangan agar tidak menggantikan peran penuh orang tua cucu.' },
    { n: 'Komunitas alumni', d: 'Aktif di komunitas alumni sekolah/kampus untuk reuni dan kegiatan rutin.', p: 'Menyambung kembali relasi lama yang berharga.', m: 'Kadang butuh effort mengorganisir jadwal semua anggota.' },
    { n: 'Belajar hal baru untuk kesenangan', d: 'Belajar bahasa asing atau alat musik baru murni karena ingin, tanpa target komersial.', p: 'Menstimulasi otak & memberi rasa pencapaian personal.', m: 'Butuh kesabaran karena belajar di usia lanjut punya tantangan tersendiri.' },
    { n: 'Berkebun/tanaman hias', d: 'Merawat kebun atau koleksi tanaman hias di rumah sebagai kegiatan harian.', p: 'Menenangkan, aktivitas fisik ringan, mempercantik rumah.', m: 'Butuh waktu & perhatian rutin agar tanaman terawat baik.' },
    { n: 'Menulis memoar keluarga', d: 'Menulis jurnal atau memoar berisi kisah hidup untuk diwariskan ke keturunan.', p: 'Warisan tak ternilai bagi keluarga, sekaligus terapi reflektif diri.', m: 'Butuh waktu & disiplin menulis secara konsisten.' },
    { n: 'Klub olahraga ringan', d: 'Bergabung klub golf, bulu tangkis, atau renang komunitas sepantaran.', p: 'Kombinasi kebugaran fisik & sosialisasi yang menyenangkan.', m: 'Beberapa olahraga (seperti golf) memerlukan biaya yang tidak kecil.' },
    { n: 'Eksplorasi kuliner & tempat baru', d: 'Rutin mencoba tempat makan atau destinasi baru di kota sendiri.', p: 'Kegiatan ringan yang menyenangkan & terjangkau.', m: 'Perlu pengaturan pola makan agar tetap sehat.' },
    { n: 'Kursus memasak sesuai minat', d: 'Mengikuti kelas memasak singkat sesuai masakan favorit yang ingin dikuasai.', p: 'Menyenangkan sekaligus bisa berbagi hasil masakan ke keluarga.', m: 'Biaya kursus & bahan bervariasi.' },
    { n: 'Renovasi/dekorasi rumah', d: 'Merancang ulang & mendekorasi rumah sebagai proyek personal jangka panjang.', p: 'Memberi rasa pencapaian & rumah yang lebih nyaman ditinggali.', m: 'Butuh anggaran yang perlu direncanakan dengan cermat.' },
    { n: 'Arsip foto & cerita keluarga', d: 'Menyusun album foto keluarga dan mendokumentasikan cerita-cerita penting keluarga.', p: 'Warisan sejarah keluarga yang berharga untuk generasi mendatang.', m: 'Bisa memakan waktu lama jika arsip foto sangat banyak.' },
    { n: 'Komunitas pecinta satwa/tanaman', d: 'Bergabung komunitas hobi memelihara hewan atau tanaman tertentu.', p: 'Menyalurkan hobi sekaligus memperluas relasi sosial baru.', m: 'Ada biaya perawatan hewan/tanaman yang perlu diperhitungkan.' },
    { n: 'Kakek-nenek asuh aktif di sekolah', d: 'Terlibat aktif dalam kegiatan sekolah cucu (menjemput, mendampingi acara sekolah).', p: 'Mempererat kedekatan dengan cucu & keluarga.', m: 'Perlu koordinasi dengan orang tua cucu agar peran tidak tumpang tindih.' },
    { n: 'Medical check-up & wellness retreat', d: 'Rutin melakukan pemeriksaan kesehatan menyeluruh dan sesekali mengikuti program wellness retreat.', p: 'Deteksi dini masalah kesehatan, menjaga kualitas hidup jangka panjang.', m: 'Butuh anggaran khusus, terutama untuk wellness retreat yang cenderung premium.' },
    { n: 'Arisan/silaturahmi rutin', d: 'Menjaga silaturahmi rutin dengan mantan kolega lewat arisan atau pertemuan berkala.', p: 'Menjaga jaringan sosial & rasa memiliki komunitas dari masa kerja dulu.', m: 'Perlu komitmen waktu & kadang biaya arisan/patungan acara.' },
    { n: 'Menyusun & mewujudkan bucket list', d: 'Membuat daftar hal-hal yang ingin dicapai/dilakukan di masa purna tugas dan mewujudkannya bertahap.', p: 'Memberi arah & motivasi hidup yang jelas di fase baru ini.', m: 'Perlu evaluasi realistis terhadap kondisi kesehatan & keuangan saat menyusun target.' },
  ],
};