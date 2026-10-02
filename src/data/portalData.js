// src/data/portalData.js

export const visiMisiData = {
  semboyan: "Oso Man Sampeang Labo Bepekat",
  artiSemboyan:
    "Seia sekata, melangkah bersama dalam musyawarah mufakat demi kemaslahatan bersama.",
  visi: "Terwujudnya Wilayah Long Kali yang Berdaulat Adat, Tangguh Lingkungan, dan Berdaya Saing sebagai Gerbang Penyangga Poros Kalimantan Timur.",
  misi: [
    "Menjaga kelestarian Daerah Aliran Sungai (DAS) Telake dan ruang ulayat masyarakat Paser Telake.",
    "Meningkatkan tata kelola pelayanan administrasi tanah (IMTN) dan kependudukan yang transparan tanpa birokrasi berbelit.",
    "Mendorong ketahanan ekonomi berbasis pertanian pasang surut, perkebunan rakyat, dan perikanan air tawar lokal.",
    "Memperkuat mitigasi bencana banjir musiman dan kesiapsiagaan infrastruktur jalan penghubung pedalaman.",
  ],
};

export const layananDetail = [
  {
    id: "imtn",
    label: "IMTN (Tanah Negara)",
    kategori: "Agraria & Tata Ruang",
    ringkasan:
      "Izin Membuka Tanah Negara untuk kepastian hukum perladangan, kebun rakyat, dan tapak perumahan sebelum sertifikasi BPN.",
    syarat: [
      "Surat pernyataan penguasaan fisik bidang tanah bermaterai (diketahui saksi batas)",
      "Peta sketsa lokasi dan titik koordinat batas bidang tanah",
      "Fotokopi KTP & KK pemohon yang berdomisili di Long Kali",
      "Berita acara peninjauan lapangan oleh tim verifikasi kecamatan/kelurahan",
    ],
  },
  {
    id: "adminduk",
    label: "Administrasi Kependudukan",
    kategori: "Kependudukan",
    ringkasan:
      "Pengurusan pengantar KTP-el, pembaruan Kartu Keluarga warga baru/pindah, dan pelaporan kelahiran/kematian.",
    syarat: [
      "Surat pengantar RT setempat",
      "Kartu Keluarga lama asli",
      "Dokumen pendukung (Akta Kelahiran, Surat Nikah, atau Surat Keterangan Pindah)",
    ],
  },
  {
    id: "ketenagakerjaan",
    label: "Ketenagakerjaan",
    kategori: "Sosial & Ekonomi",
    ringkasan:
      "Penerbitan surat rekomendasi pencari kerja lokal dan fasilitasi verifikasi kerja sama kemitraan perkebunan sawit sekitarnya.",
    syarat: [
      "Fotokopi ijazah pendidikan terakhir dan transkrip",
      "Fotokopi KTP domisili Long Kali",
      "Pasfoto terbaru ukuran 3x4 (2 lembar)",
    ],
  },
  {
    id: "perizinan",
    label: "Perizinan & SKU",
    kategori: "Ekonomi Mikro",
    ringkasan:
      "Penerbitan Surat Keterangan Usaha (SKU) mikro untuk pedagang pasar tumpah, warung sembako, dan nelayan sungai Telake.",
    syarat: [
      "Fotokopi KTP pemilik usaha",
      "Surat rekomendasi RT tentang keberadaan fisik usaha",
      "Foto dokumentasi tempat usaha berjalan",
    ],
  },
  {
    id: "kesehatan",
    label: "Layanan Kesehatan",
    kategori: "Kesehatan Masyarakat",
    ringkasan:
      "Jadwal posyandu balita & lansia bulanan, skrining air bersih pasca luapan sungai, dan rujukan Puskesmas Rawat Inap Long Kali.",
    syarat: [
      "Membawa Buku KIA (Kesehatan Ibu dan Anak) atau KMS Lansia",
      "Kartu BPJS Kesehatan / KIS aktif",
      "KTP atau NIK anak yang terdaftar",
    ],
  },
];

export const peringatanSungai = {
  sungai: "DAS Telake",
  status: "Normal Terkendali",
  debit: "2.8 Meter",
  pembaruan: "Hari ini, Pukul 06.00 WITA",
  catatan:
    "Curah hujan di hulu perbukitan relatif stabil. Warga bantaran sungai diimbau tetap memperhatikan pasang surut harian.",
};

export const khazanahBudaya = [
  {
    judul: "Ikan Baung & Tapah Telake",
    tipe: "Kuliner & Hasil Alam",
    uraian:
      "Hasil tangkapan air tawar khas Sungai Telake yang diolah menjadi masakan asam pedas atau pindang bumbu kuning khas Paser.",
  },
  {
    judul: "Petung Temui Taun",
    tipe: "Ritus Adat",
    uraian:
      "Musyawarah adat tahunan sekaligus ritual tolak bala dan rasa syukur bersama setelah masa panen ladang dan kebun.",
  },
  {
    judul: "Perahu Ketinting Jalur Hilir",
    tipe: "Kearifan Transportasi",
    uraian:
      "Moda transportasi legendaris yang masih menghubungkan permukiman terpencil di belokan sungai sebelum terjangkau jalan poros.",
  },
];
