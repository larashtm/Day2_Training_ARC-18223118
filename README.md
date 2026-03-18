## Deskripsi Proyek

Website ini merupakan tugas dengan tujuan untuk menerapkan konsep dasar web development menggunakan teknologi web standar (HTML5, CSS3, Vanilla JavaScript). Aplikasi ini mengambil data produk dari API publik dan menampilkannya dalam format card grid yang menarik.

## Fitur Utama

- **Pengambilan Data Dinamis** - Mengintegrasikan API eksternal (DummyJSON) untuk mendapatkan data produk real-time
- **Desain Responsif** - Layout yang sempurna di desktop, tablet, dan mobile
- **Loading State** - Menampilkan status "Memuat produk..." saat data sedang diambil
- **Error Handling** - Penanganan error yang baik dengan fallback UI
- **SEO-Friendly** - Meta tag dan struktur HTML yang optimal untuk SEO
- **No Memory Leak** - Tidak ada event listener yang tertinggal di memory
- **Clean Code** - Kode yang terstruktur, mudah dibaca, dan maintainable

## Teknologi yang Digunakan

| Teknologi | Deskripsi |
|-----------|-----------|
| **HTML5** | Markup struktur semantik dan accessibility |
| **CSS3** | Styling responsif dengan Flexbox dan media queries |
| **Vanilla JavaScript** | Fetch API, DOM manipulation, Event listeners |
| **DummyJSON API** | Sumber data produk external |

## Struktur Direktori

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

## Cara Menjalankan Proyek

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
