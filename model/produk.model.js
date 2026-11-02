// Model: data produk (fitur TanyaPAI-Ai sesuai PRD) memakai array statis, tanpa database.
const produk = [
  {
    id: 1,
    nama: 'Generator Ringkasan Materi PAI',
    kategori: 'Untuk Guru',
    deskripsi: 'Membuat draf ringkasan materi PAI berbentuk poin-poin singkat untuk ditinjau guru.',
    prioritas: 'Must',
  },
  {
    id: 2,
    nama: 'Generator Soal Latihan',
    kategori: 'Untuk Guru',
    deskripsi: 'Membuat soal pilihan ganda beserta kunci jawaban berdasarkan topik yang dipilih.',
    prioritas: 'Must',
  },
  {
    id: 3,
    nama: 'Tanya Jawab Materi PAI',
    kategori: 'Untuk Siswa',
    deskripsi: 'Chatbot teman belajar siswa kelas IV dengan bahasa sederhana dan ramah.',
    prioritas: 'Should',
  },
  {
    id: 4,
    nama: 'Kuis Interaktif',
    kategori: 'Untuk Siswa',
    deskripsi: 'Siswa mengerjakan kuis dari materi yang sudah diperiksa guru.',
    prioritas: 'Should',
  },
  {
    id: 5,
    nama: 'Riwayat Materi dan Soal',
    kategori: 'Untuk Guru',
    deskripsi: 'Menyimpan hasil sebelumnya agar mudah dipakai kembali.',
    prioritas: 'Could',
  },
];

const ProdukModel = {
  getAll() {
    return produk;
  },
  getById(id) {
    return produk.find((p) => p.id === Number(id)) || null;
  },
};

module.exports = ProdukModel;
