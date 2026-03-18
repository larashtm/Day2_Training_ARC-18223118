"# 📱 Website Daftar Produk

Proyek website katalog produk sederhana yang menampilkan daftar produk dari API eksternal dengan desain responsif dan modern.

## 📋 Deskripsi Proyek

Website ini merupakan tugas mata kuliah **Pengembangan Teknologi Terintegrasi (PT2)** yang bertujuan untuk menerapkan konsep dasar web development menggunakan teknologi web standar (HTML5, CSS3, Vanilla JavaScript). Aplikasi ini mengambil data produk dari API publik dan menampilkannya dalam format card grid yang menarik.

## ✨ Fitur Utama

- ✅ **Pengambilan Data Dinamis** - Mengintegrasikan API eksternal (DummyJSON) untuk mendapatkan data produk real-time
- ✅ **Desain Responsif** - Layout yang sempurna di desktop, tablet, dan mobile
- ✅ **Loading State** - Menampilkan status "Memuat produk..." saat data sedang diambil
- ✅ **Error Handling** - Penanganan error yang baik dengan fallback UI
- ✅ **SEO-Friendly** - Meta tag dan struktur HTML yang optimal untuk SEO
- ✅ **No Memory Leak** - Tidak ada event listener yang tertinggal di memory
- ✅ **Clean Code** - Kode yang terstruktur, mudah dibaca, dan maintainable

## 🛠️ Teknologi yang Digunakan

| Teknologi | Deskripsi |
|-----------|-----------|
| **HTML5** | Markup struktur semantik dan accessibility |
| **CSS3** | Styling responsif dengan Flexbox dan media queries |
| **Vanilla JavaScript** | Fetch API, DOM manipulation, Event listeners |
| **DummyJSON API** | Sumber data produk external |

## 📁 Struktur Direktori

```
Day2_Training_ARC-18223118/
├── index.html          # File HTML utama
├── style.css           # File styling CSS
├── script.js           # File JavaScript logic
├── README.md           # Dokumentasi proyek (file ini)
├── .gitignore          # File untuk mengabaikan file tertentu di git
└── assets/             # Folder berisi background image
    ├── background.jpg  # Background image untuk halaman
    ├── 1.jpg - 10.jpg  # Placeholder gambar produk (tidak digunakan)
    └── 6s.webp
```

## 🚀 Cara Menjalankan Proyek

### Persyaratan
- Browser modern (Chrome, Firefox, Safari, Edge)
- Koneksi internet (untuk mengambil data dari API)
- Text editor (VS Code, Sublime Text, dll)

### Instalasi & Menjalankan Lokal

1. **Clone Repository**
   ```bash
   git clone https://github.com/larashtm/Day2_Training_ARC-18223118.git
   cd Day2_Training_ARC-18223118
   ```

2. **Buka dengan Live Server (Recommended)**
   - Gunakan VS Code Extension "Live Server"
   - Klik kanan pada `index.html` → "Open with Live Server"
   - Browser akan otomatis membuka di `http://localhost:5500`

3. **Atau buka langsung di browser**
   - Buka file `index.html` secara langsung dengan browser
   - Atau gunakan simple HTTP server:
   ```bash
   python -m http.server 8000
   # Kemudian akses http://localhost:8000
   ```

4. **Verifikasi Fungsionalitas**
   - Halaman akan menampilkan loading state awalnya
   - Setelah beberapa detik, 10 produk akan muncul
   - Setiap produk menampilkan: gambar, judul, deskripsi, harga, dan rating

## 📊 API Reference

Proyek menggunakan **DummyJSON API** untuk data produk:
- **Endpoint:** `https://dummyjson.com/products`
- **Respons:** JSON array berisi informasi produk (title, description, price, rating, images, thumbnail)
- **Dokumentasi:** https://dummyjson.com

## 🔍 Code Review & Best Practices

### ✅ HTML5 (index.html)
- Menggunakan semantic HTML dengan struktur yang jelas
- Meta tag lengkap untuk SEO dan responsiveness
- Fallback loading state untuk user experience yang lebih baik
- Struktur aksesibel dengan proper heading hierarchy

### ✅ CSS3 (style.css)
- Menggunakan **Flexbox** untuk layout yang responsive
- **Media queries** untuk adaptasi di berbagai ukuran layar
- Shadow dan border-radius untuk visual yang modern
- Optimasi performa dengan background-size: cover dan object-fit

### ✅ JavaScript (script.js)
- **DOMContentLoaded event** untuk memastikan DOM sudah siap
- **Fetch API** dengan promise chaining yang jelas
- **Error handling** dengan `.catch()` untuk menangani network error
- **Vanilla JS** tanpa dependency eksternal
- **Memory-safe**: Tidak ada global variable yang berlebihan
- **Performance**: Hanya render 10 produk first, dapat di-extend untuk pagination

### ⚠️ Saran Perbaikan Tambahan

| Aspek | Rekomendasi | Prioritas |
|-------|-------------|-----------|
| **Loading Delay** | Tambahkan minimum delay 500ms untuk loading state terlihat lebih baik | Medium |
| **Error Message** | Tampilkan pesan error ke UI, bukan hanya console | High |
| **Pagination** | Implementasi pagination atau infinite scroll untuk produk lebih dari 10 | Low |
| **Caching** | Cache data produk ke localStorage untuk mengurangi API calls | Low |
| **Image Lazy Loading** | Implementasi lazy loading untuk image gambar produk | Medium |

## 📝 Git Commit History (Recommended)

Berikut adalah 5 commit messages menggunakan Conventional Commits format untuk riwayat pengerjaan proyek:

```
1. feat: setup initial project structure dan semantic HTML5
   Menambahkan struktur dasar HTML5 dengan meta tag, header, dan section
   yang siap untuk menampilkan produk dinamis.

2. feat: implement CSS responsive design dengan Flexbox
   Menambahkan styling untuk product cards dengan layout Flexbox, gradient
   backgrounds, dan media queries untuk responsiveness di berbagai devices.

3. feat: integrate DummyJSON API untuk fetch data produk
   Mengimplementasikan Fetch API dengan error handling untuk mengambil
   data produk dari endpoint DummyJSON dan menampilkannya dinamis di DOM.

4. fix: remove unnecessary CSS rules dan correct path assets
   Menghapus CSS rules yang tidak berfungsi (content: url pada img tag)
   dan memperbaiki path background asset dari typo 'asstes' menjadi 'assets'.

5. feat: add SEO optimization dan improve UX dengan loading state
   Menambahkan meta description tag untuk SEO, subtitle di header, loading
   state UI, dan footer untuk meningkatkan user experience dan aksesibilitas.
```

## 📜 Lisensi

Proyek ini dibuat untuk keperluan akademis sebagai bagian dari mata kuliah Pengembangan Teknologi Terintegrasi (PT2).

## 👨‍💻 Author

- **Nama:** Lara SHM
- **Repository:** https://github.com/larashtm/Day2_Training_ARC-18223118
- **Tanggal:** 2026

