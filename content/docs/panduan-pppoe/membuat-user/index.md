---
title: "Membuat User"
description: ""
summary: ""
date: 2023-10-02T10:52:07+08:00
lastmod: 2023-10-02T10:52:07+08:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "membuat-user-04bb13b2720905217ff78adea62814cd"
weight: 999
toc: true
---

1. Untuk membuat User PPPoE yang baru anda bisa akses menu (klik ikon <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg> jika pada handphone) lalu pilih [PPPoE > User](https://noahresource.tech/pppoe/user).
2. Klik tombol **BUAT BARU** lalu pilih **User**
{{< picture src="buat-baru-user.png" alt="buat-baru-user" >}}
3. Selanjutnya anda akan ditampilkan *form* untuk menambahkan user baru dengan kolom-kolom sebagai berikut:
    - [Harga Jual](#harga-jual)
    - [User Name](#user-name)
    - [Password](#password)
    - [Local Address](#local-address) (Opsional)
    - [Remote Address](#remote-address) (Opsional)
    - [Profile](#profile)
    - [Nama Pelanggan](#nama-pelanggan)
    - [Nomor Whatsapp](#nomer-whatsapp)
    - [Lokasi](#lokasi)
    - [Foto Modem](#foto-modem)
    - [Foto Rumah](#foto-rumah)
4. Silahkan isi setiap kolom seusai data pelanggan.
5. Klik *CREATE* untuk membuat user baru. User akan langsung tercatat pada keuangan (menu Revenue) dengan status **Tempo**.

{{< callout context="note" title="Isi Data Sebenar-benarnya" icon="info-circle" >}}
Isilah data dengan benar, demi untuk kemudahan dalam pengelolaan jaringan secara berkelanjutan.
{{< /callout >}}

## Contoh Mengisi Form
### Mengisi Data User PPPoE
{{< picture src="contoh-form-pppoe.png" alt="contoh-form-pppoe" >}}

### Mengisi Data Pelanggan
{{< picture src="biodata-pelanggan.png" alt="biodata-pelanggan" >}}

### Mengisi Lokasi
Untuk mengisi koordinat lokasi anda dapat langsung memilih dari Map atau dari *link* Google Maps.
#### Tandai Langsung dari Map
{{< picture src="lokasi-dari-gps.png" alt="lokasi-dari-gps" >}}
#### Link Google Maps
Metode ini untuk menandai lokasi pelanggan bila tidak sedang berada langsung di
lokasi rumah pelanggan.

{{< picture src="lokasi-dari-link-1.png" alt="lokasi-dari-link-1" >}}
<br/><br/>
{{< picture src="lokasi-dari-link-2.png" alt="lokasi-dari-link-2" >}}

## Deskripsi Kolom
### Harga Jual
Harga Jual disini merujuk pada nilai harga per/bulan dari paket yang pelanggan sewa. Misalnya Paket A dengan harga Rp. 100 Ribu. Maka, pada kolom harga jual isi dengan 100000.

### User Name
Kolom ini merujuk pada *username* PPPoE yang akan di-input-kan ke modem pelanggan.

### Password
Kolom ini merujuk pada *password* PPPoE yang akan di-input-kan ke modem pelanggan.

### Local Address
Bila anda menggunakan pool di PPPoE Profile maka kosongkan artinya anda
menggunakan skema PPPoE dynamic.

### Remote Address
Bila anda menggunakan pool di PPPoE Profile maka kosongkan artinya anda menggunakan skema PPPoE dynamic. Bila diperlukan IP Pelanggan yang tidak berubah atau tetap meskipun sempat terjadi *down* maka anda bisa tetapkan Remote Address pada kolom ini. Contoh: Local Address= `10.10.10.1`, maka Remote Address= `10.10.10.173`.

### Profile
Profile ini diperuntukkan untuk memilih paket layanan atau kecepatan yang disewa pelanggan.

### Nama Pelanggan
Usahakan anda mendapatkan informasi nama lengkap pelanggan sehingga data ini digunakan untuk *print* INVOICE.

### Nomer Whatsapp
Pada kolom ini, isikan nomor WA dengan tanpa ada spasi atau tanda apapun; hanya angka dan dengan notasi `08` **bukan** `+62` Misalnya nomor pelanggan adalah `08525887xxxx`. Maka, inputkan pada kolom tersebut `08525887xxxx` **bukan** `+628525887xxxx`.

### Alamat Detail
Pada kolom ini, anda dapat mengisi dengan alamat detail seperti nama jalan, nomer rumah, dan atau RT/RW.

Contoh:

```html
Jl. Voli No. 69 RW 1 RT 2
```

### Lokasi
Terdapat dua metode yang dapat anda gunakan untuk menandai lokasi pelanggan. Metode ini tergantung lokasi anda sebagai peng-input. Jika sedang berada di lokasi pelanggan, dapat menekan tombol **Mark Location by GPS** <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-crosshair" viewBox="0 0 16 16">
  <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7.001 7.001 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7.001 7.001 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7.001 7.001 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7.001 7.001 0 0 0 8.5 1.018V.5Zm-6.48 7A6.001 6.001 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6.001 6.001 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6.002 6.002 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6.001 6.001 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1h-.48ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
</svg> pada sudut kanan bawah peta. Metode lainnya yaitu dengan cara meng-inputkan link google-map. Menggunakan metode ini bila tidak sedang berada dilokasi pelanggan yang akan di tandai lokasi rumahnya.

### Foto Modem
Form ini bermaksud memudahkan dalam proses troubleshooting/pemecahan masalah pada pelanggan ketika admin jaringan mengetahui tipe modem yang digunakan.

### Foto Rumah
Form ini bertujuan untuk memudahkan teknisi dalam mengindentifikasi rumah pelanggan perihal bila dibutuhkan untuk melakukan maintenance atau repair di rumah pelanggan.
