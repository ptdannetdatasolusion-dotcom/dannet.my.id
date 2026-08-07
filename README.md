# DANNET ISP SYSTEM v2.0

Sistem manajemen Internet Service Provider (ISP) untuk DANNET Fiber Optik Purwakarta.

## 🎯 Fitur Utama

### Admin Panel
- **Dashboard** - Ringkasan statistik pelanggan, pembayaran, dan gangguan
- **Manajemen Pelanggan** - Tambah, edit, hapus data pelanggan
- **Manajemen Paket** - Kelola paket internet yang ditawarkan
- **Manajemen Pembayaran** - Track riwayat pembayaran pelanggan
- **Manajemen Gangguan** - Monitor laporan gangguan/keluhan pelanggan
- **Manajemen Teknisi** - Kelola data teknisi lapangan
- **Coverage Area** - Visualisasi area jangkauan layanan
- **Pengaturan Sistem** - Konfigurasi sistem dan informasi perusahaan

### Customer Portal
- **Landing Page** - Informasi layanan dan paket internet
- **Lihat Paket** - Daftar lengkap paket dengan harga
- **Pasang Baru** - Form pendaftaran pelanggan baru
- **Lapor Gangguan** - Fitur lapor gangguan/keluhan
- **Kontak** - Halaman kontak perusahaan
- **Coverage** - Cek area jangkauan layanan

## 📋 Struktur Folder

```
DANNET-ISP-SYSTEM/
├── admin/                 # Panel admin
│   ├── login.html        # Halaman login admin
│   ├── dashboard.html    # Dashboard admin
│   ├── pelanggan.html    # Manajemen pelanggan
│   ├── paket.html        # Manajemen paket
│   ├── pembayaran.html   # Manajemen pembayaran
│   ├── gangguan.html     # Manajemen gangguan
│   ├── teknisi.html      # Manajemen teknisi
│   ├── coverage.html     # Coverage area
│   └── setting.html      # Pengaturan sistem
│
├── pages/                 # Halaman customer
│   ├── login.html        # Login pelanggan
│   ├── paket.html        # Lihat paket
│   ├── pasang-baru.html  # Form pasang baru
│   ├── gangguan.html     # Lapor gangguan
│   ├── kontak.html       # Kontak
│   └── coverage.html     # Coverage area
│
├── css/                   # Stylesheet
│   ├── style.css         # Style utama
│   ├── admin.css         # Style admin panel
│   ├── responsive.css    # Style responsive
│   └── animation.css     # Animation
│
├── js/                    # JavaScript
│   ├── config.js         # Konfigurasi aplikasi
│   ├── auth.js           # Manajemen autentikasi
│   ├── api.js            # API client
│   ├── ui.js             # UI utilities
│   └── main.js           # Main script
│
├── assets/               # Asset (gambar, icon)
│   └── img/
│
├── index.html            # Landing page
├── README.md             # Dokumentasi
├── manifest.json         # PWA manifest
└── robots.txt            # SEO robots
```

## 🔐 Autentikasi

### Admin Login
- **Username**: admin
- **Password**: admin123

### Sistem Autentikasi
- LocalStorage untuk session management
- JWT-like token system (ready untuk backend)
- Role-based access control (admin/customer)

## 🚀 Instalasi & Setup

### Persyaratan
- Browser modern (Chrome, Firefox, Safari, Edge)
- Server/hosting dengan support HTML5 + JavaScript
- Backend API (Google Apps Script atau server sendiri)

### Langkah Instalasi

1. **Clone/Download Repository**
   ```bash
   git clone https://github.com/your-repo/dannet-isp-system.git
   cd dannet-isp-system
   ```

2. **Konfigurasi API**
   - Edit `js/config.js`
   - Sesuaikan `API_URL` dengan backend API Anda
   ```javascript
   const CONFIG = {
       API_URL: "https://your-backend-api.com/api"
   };
   ```

3. **Deploy**
   - Upload semua file ke hosting/server
   - Pastikan server support CORS jika menggunakan API eksternal
   - Buka di browser: `https://your-domain.com/index.html`

## 📱 Halaman-halaman

### Admin Panel

#### Login (admin/login.html)
- Form login dengan validasi
- Error handling
- Session management

#### Dashboard (admin/dashboard.html)
- Statistics cards (Total Pelanggan, Pelanggan Aktif, Total Pembayaran, Gangguan Aktif)
- Real-time data dari API
- User info display

#### Manajemen Pelanggan (admin/pelanggan.html)
- Tabel daftar pelanggan
- Search functionality
- Action buttons (Edit/Delete)
- Responsive design

#### Manajemen Paket (admin/paket.html)
- Tabel daftar paket
- Info: Nama, Kecepatan, Harga, FUP
- CRUD operations

#### Manajemen Pembayaran (admin/pembayaran.html)
- Riwayat pembayaran
- Filter by status
- Export functionality (coming soon)

#### Manajemen Gangguan (admin/gangguan.html)
- Laporan gangguan pelanggan
- Status tracking (Pending/Proses/Selesai)
- Assign teknisi (coming soon)

#### Manajemen Teknisi (admin/teknisi.html)
- Daftar teknisi
- Tracking tugas aktif
- Performance metrics (coming soon)

#### Coverage Area (admin/coverage.html)
- Visualisasi area jangkauan
- Interactive map (coming soon)

#### Pengaturan Sistem (admin/setting.html)
- Informasi perusahaan
- System configuration
- Backup/restore (coming soon)

### Customer Pages

#### Landing Page (index.html)
- Hero section
- Paket showcase
- Features highlight
- Call-to-action buttons

#### Paket (pages/paket.html)
- Daftar lengkap paket
- Comparison tools
- Detail paket
- Order button

#### Pasang Baru (pages/pasang-baru.html)
- Form pendaftaran
- Data validation
- Auto-generated customer ID
- Confirmation email

#### Lapor Gangguan (pages/gangguan.html)
- Report form
- Ticket system
- Status tracking
- History

#### Kontak (pages/kontak.html)
- Contact form
- Map location
- Social media links
- Operating hours

#### Coverage (pages/coverage.html)
- Area coverage visualization
- Cek ketersediaan layanan
- Search by address

## 🛠️ Teknologi

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Framework**: Vanilla JS (no dependencies)
- **Icons**: Font Awesome 6.7.2
- **Fonts**: Google Fonts (Poppins)
- **Backend API**: Google Apps Script / Custom Node.js
- **Database**: Google Sheets / MySQL / PostgreSQL

## 📚 API Endpoints

### Authentication
```
POST   /login              - Login user
POST   /logout             - Logout user
GET    /verify-token       - Verify JWT token
```

### Pelanggan
```
GET    /pelanggan          - Get daftar pelanggan
GET    /pelanggan/:id      - Get detail pelanggan
POST   /pelanggan          - Create pelanggan baru
PUT    /pelanggan/:id      - Update pelanggan
DELETE /pelanggan/:id      - Delete pelanggan
```

### Paket
```
GET    /paket              - Get daftar paket
GET    /paket/:id          - Get detail paket
POST   /paket              - Create paket baru
PUT    /paket/:id          - Update paket
DELETE /paket/:id          - Delete paket
```

### Pembayaran
```
GET    /pembayaran         - Get daftar pembayaran
POST   /pembayaran         - Create pembayaran baru
PUT    /pembayaran/:id     - Update status pembayaran
DELETE /pembayaran/:id     - Delete pembayaran
```

### Gangguan
```
GET    /gangguan           - Get daftar gangguan
POST   /gangguan           - Create laporan gangguan
PUT    /gangguan/:id       - Update status gangguan
DELETE /gangguan/:id       - Delete gangguan
```

### Dashboard
```
GET    /dashboard-stats    - Get dashboard statistics
```

## 🎨 Customization

### Warna Theme
Edit file `css/style.css`:
```css
:root {
    --primary: #667eea;
    --secondary: #764ba2;
    --success: #2ecc71;
    --warning: #f39c12;
    --danger: #e74c3c;
}
```

### Logo dan Brand
- Ganti `assets/logo.png` dengan logo Anda
- Update `assets/favicon.png` untuk favicon
- Edit nama perusahaan di `admin/setting.html`

## 🔄 Development Workflow

1. Buat feature branch: `git checkout -b feature/nama-fitur`
2. Make changes dan commit: `git commit -am 'Add feature'`
3. Push ke branch: `git push origin feature/nama-fitur`
4. Buat Pull Request

## 📝 Fitur yang Akan Datang

- [ ] Customer Portal Login
- [ ] Bill/Invoice Management
- [ ] Automated Payment Reminder
- [ ] SMS/Email Notification
- [ ] Advanced Reporting & Analytics
- [ ] Mobile App
- [ ] API Documentation (Swagger)
- [ ] Multi-language Support
- [ ] Dark Mode
- [ ] 2FA Authentication

## 🐛 Bug Report

Jika menemukan bug, silakan buat issue dengan:
- Deskripsi bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/device info

## 📞 Support

- **Email**: support@dannet.id
- **Phone**: 0264-xxx-xxxx
- **Website**: https://dannet.id
- **Live Chat**: Available 24/7

## 📄 License

MIT License - Silakan gunakan untuk proyek komersial dan non-komersial

## 👨‍💻 Author

DANNET Fiber Optik - Purwakarta

---

**Version**: 2.0.0  
**Last Updated**: 2026-07-17  
**Status**: Active Development
"# DANNET-ISP-SYSTEM"  
