---
weight: 302
title: Membuat User Profile Hotspot untuk Voucher
date: 2023-10-23T01:54:00.000Z
lastmod: 2023-10-23T01:54:00.000Z
---

Sebelum anda membuat sebuah Voucher di EZ NOM, anda perlu membuat User Profile Hotspot yang sesuai dengan limit voucher hotspot yang anda buat.

Contoh, di sini kita akan membuat Voucher hotspot dengan ketentuan:

* 7 hari,
* Bandwidth 1500K/1500K,
* Maksimal user login pada 1 kode voucher ada 2. 
* Setelah masa aktif habis, hapus voucher dari Mikrotik

Maka langkah untuk membuat User Profile Hotspot sesuai ketentuan diatas adalah sebagai berikut.

1. Masuk ke menu **Hotspot** > **User Profile**.

   ![](</assets/menu user-profile.png>)
2. Selanjutnya klik tombol "**BUAT BARU**" untuk membuat User Profile Hotspot baru.

   ![](</assets/klik buat baru.png>)
3. Setelah masuk ke halaman untuk membuat User Profile Hotspot. Isi kolom yang tersedia.
   1. Nama, berikan nama yang sesuai dengan limit yang akan diberikan untuk kemudahan memilih pada saat pembuatan voucher, untuk contoh maka kita akan memberikan nama "**7Hari 1500K/1500K**"
   2. Rate limit, sesuai contoh kita akan memberi bandwidth **1500K**.
   3. User Time Limit, kita isi dengan **7d**.
   4. IP Pool, ini dapat dikosongkan dengan memilih opsi "None".
   5. Script, silahkan pilih opsi "Hapus user setelah time limit terpenuhi".

      ![](/assets/kolom-user-profile.png)
4. Setelah semua diisi, klik tombol "CREATE".

Maka User Profile baru untuk Hotspot akan ditambahkan pada mikrotik.

![](</assets/Screenshot from 2023-10-23 10-28-33.png>)

Setelah tahap ini langkah selanjutnya adalah **Membuat Voucher Profile Hotspot**.
