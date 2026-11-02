# PAW-WEAKK7-TanyaPAI-AI

Project individu PAW Week 7: Integrasi Frontend, REST API, dan Middleware Logger.
TanyaPAI-Ai adalah asisten AI untuk pembelajaran Pendidikan Agama Islam (PAI) SD Negeri Bagelen.

## Menjalankan
```bash
npm install
npm start        # http://localhost:5173
```

## Endpoint
| Method | Path          | Keterangan                       |
| ------ | ------------- | -------------------------------- |
| GET    | `/`           | Halaman frontend (EJS)           |
| GET    | `/api/status` | Status server (JSON)             |
| GET    | `/api/produk` | Daftar produk/fitur (array JSON) |

## Middleware Logger
Setiap request dicatat di terminal dan di `log/access.log`: timestamp, method, path, status, durasi.

## Struktur Folder
```
config/  controller/  log/  middleware/  model/  route/  view/  app.js  package.json
```
