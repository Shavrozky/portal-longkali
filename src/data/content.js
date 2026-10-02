// src/data/content.js
// Master data statis Portal Long Kali — dipisah dari komponen agar JSX tetap bersih.

/* ------------------------------------------------------------------ */
/* Navigasi                                                            */
/* ------------------------------------------------------------------ */

export const navMenus = [
  { label: 'Beranda', href: '#beranda' },
  {
    label: 'Profil',
    dropdown: [
      { label: 'Sejarah', href: '#sejarah' },
      { label: 'Visi dan Misi', href: '#visi-misi' },
      { label: 'Kepala Daerah', href: '#kepala-daerah' },
      { label: 'Peta Wilayah', href: '#peta-wilayah' },
    ]
  },
  { label: 'Program Kerja', href: '#program-kerja' },
  {
    label: 'Layanan',
    dropdown: [
      { label: 'Administrasi Kependudukan', href: '#layanan-adminduk' },
      { label: 'Ketenagakerjaan', href: '#layanan-tenagakerja' },
      { label: 'Perizinan', href: '#layanan-perizinan' },
      { label: 'Kesehatan', href: '#layanan-kesehatan' },
      { label: 'IMTN (Izin Membuka Tanah Negara)', href: '#layanan-imtn' },
    ]
  },
  { label: 'Info Penting', href: '#info-penting' }
];

/* ------------------------------------------------------------------ */
/* Identitas & seksi Beranda                                           */
/* ------------------------------------------------------------------ */

export const heroContent = {
  badge: 'Gerbang Utara Bumi Daya Taka',
  titleTop: 'Layanan & Informasi Terpadu',
  titleHighlight: 'Desa & Kelurahan Long Kali',
  lead: 'Pusat layanan digital kependudukan, keterbukaan informasi publik, serta pelestarian warisan budaya masyarakat Paser Telake.',
  primary: { label: 'Layanan Warga', href: '#layanan-adminduk' },
  secondary: { label: 'Jelajahi Profil', href: '#sejarah' },
};

/* ------------------------------------------------------------------ */
/* Seksi Sejarah & fakta wilayah                                       */
/* ------------------------------------------------------------------ */

export const sejarahContent = {
  eyebrow: 'Akar Peradaban',
  heading: 'Sungai Telake & Warisan Paser Telake',
  paragraphs: [
    'Long Kali tumbuh dan mengakar di sepanjang Daerah Aliran Sungai (DAS) Telake, jalur urat nadi transportasi tradisional sejak masa swapraja Kesultanan Paser.',
    'Masyarakat adat Paser Telake di kawasan ini memiliki corak dialek dan adat tradisi tersendiri, dengan nilai kebersamaan Oso Man Sampeang Labo Bepekat yang terus dirawat berdampingan dengan masyarakat pendatang.',
  ],
  faktaTitle: 'Fakta Wilayah',
  fakta: [
    { label: 'Pusat Pemerintahan', value: 'Kelurahan Long Kali' },
    { label: 'Sungai Utama', value: 'Sungai Telake' },
    { label: 'Karakteristik Wilayah', value: 'Penyangga Pangan & IKN' },
    { label: 'Sektor Unggulan', value: 'Perkebunan & Padi Rawa' },
  ],
};

/* ------------------------------------------------------------------ */
/* Seksi Budaya                                                        */
/* ------------------------------------------------------------------ */

export const budayaContent = {
  eyebrow: 'Warisan Tak Benda',
  heading: 'Adat, Bahasa & Tradisi Paser',
  lead: 'Paser Telake dikenal dengan kearifan lokal yang hidup dalam keseharian warga — dari bahasa hingga gotong royong.',
  items: [
    {
      title: 'Bahasa Paser Dialek Telake',
      desc: 'Dialek khas warga pesisir Sungai Telake yang tetap dipakai dalam percakapan harian dan upacara adat.',
      icon: 'Music',
    },
    {
      title: 'Oso Man Sampeang Labo Bepekat',
      desc: 'Falsafah kebersamaan: berat sama dipikul, ringan sama dijinjing — pondasi gotong royong antarwarga.',
      icon: 'Sparkles',
    },
    {
      title: 'Tradisi Sungai & Perkebunan',
      desc: 'Siklus hidup warga selaras dengan pasang surut Sungai Telake dan musim panen padi rawa serta perkebunan.',
      icon: 'Landmark',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Layanan                                                             */
/* ------------------------------------------------------------------ */

export const layananContent = {
  heading: 'Portal Layanan Terpadu',
  lead: 'Akses formulir dan pengurusan dokumen administratif warga secara transparan.',
};

export const layananList = [
  {
    title: 'Administrasi Kependudukan',
    desc: 'Pengurusan surat pengantar KTP, Kartu Keluarga, dan Surat Pindah.',
    icon: 'Users'
  },
  {
    title: 'Pelayanan IMTN',
    desc: 'Verifikasi dan permohonan Izin Membuka Tanah Negara di wilayah Long Kali.',
    icon: 'FileText'
  },
  {
    title: 'Ketenagakerjaan',
    desc: 'Rekomendasi pencari kerja dan informasi bursa kerja perkebunan/industri.',
    icon: 'Briefcase'
  },
  {
    title: 'Perizinan Usaha Mikro',
    desc: 'Surat Keterangan Usaha (SKU) dan izin keramaian lingkungan warga.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Layanan Kesehatan',
    desc: 'Jadwal Posyandu terpadu, rujukan Puskesmas Long Kali, dan sanitasi.',
    icon: 'Activity'
  }
];

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const siteIdentity = {
  shortName: 'LK',
  name: 'Portal Long Kali',
  tagline: 'Kabupaten Paser • Daya Taka',
};

export const footerContent = {
  about: 'Portal informasi dan layanan publik resmi wilayah Long Kali, Kabupaten Paser, Kalimantan Timur.',
  address: 'Kecamatan Long Kali, Kabupaten Paser, Kalimantan Timur',
  phone: '(0543) 000-0000',
  email: 'layanan@longkali.paser.go.id',
  quickLinkTitle: 'Tautan Cepat',
  layananTitle: 'Layanan',
  contactTitle: 'Kontak',
  quickLinks: [
    { label: 'Sejarah', href: '#sejarah' },
    { label: 'Visi dan Misi', href: '#visi-misi' },
    { label: 'Program Kerja', href: '#program-kerja' },
    { label: 'Info Penting', href: '#info-penting' },
  ],
  serviceLinks: [
    { label: 'Administrasi Kependudukan', href: '#layanan-adminduk' },
    { label: 'Ketenagakerjaan', href: '#layanan-tenagakerja' },
    { label: 'Perizinan', href: '#layanan-perizinan' },
    { label: 'Kesehatan', href: '#layanan-kesehatan' },
    { label: 'IMTN', href: '#layanan-imtn' },
  ],
  copyright:
    'Pemerintah Kecamatan & Desa Long Kali, Kabupaten Paser, Kalimantan Timur.',
};
