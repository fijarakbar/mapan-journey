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
      mk('Prevent, Don’t Wait', 'Mencegah jauh lebih murah dan nyaman daripada mengobati.', [['Angka dasar', 'Tekanan darah, gula darah, kolesterol.'], ['Skrining sesuai usia', 'Diskusikan dengan dokter mana yang relevan untukmu.'], ['Kenali tanda bahaya', 'Nyeri dada, sesak, pusing berat jangan ditunda.']], 'Pemeriksaan apa yang ingin kamu jadwalkan bulan ini?'),
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
// standalone 5th dimension — distinct from the 4 journey Terminals — so it
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
  { key: 'menjadi', label: 'Saya ingin menjadi…' },
  { key: 'melakukan', label: 'Saya ingin melakukan…' },
  { key: 'kontribusi', label: 'Saya ingin memberi kontribusi kepada…' },
  { key: 'menjaga', label: 'Saya ingin tetap menjaga…' },
  { key: 'langkah', label: 'Langkah pertama yang ingin saya lakukan…' },
];

export const STATUSES = ['Belum Dimulai', 'Sedang Berjalan', 'Selesai'];
