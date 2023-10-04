---
title: Menghubungkan Mikrotik Dengan Ez Nom
description: ''
summary: ''
date: 2023-10-04T06:30:24.000Z
lastmod: 2023-10-04T06:30:24.000Z
draft: false
images: []
menu:
  docs:
    parent: ''
    identifier: menghubungkan-mikrotik-dengan-ez-nom-c653de1ebf0a1bd23153f7ac319dee0a
weight: 2
toc: true
---

{{< callout context="caution" title="Perlu diperhatikan!" icon="alert-triangle" >}}
Pastikan semua [prasyarat](/docs/mulai-dari-nol/pendahuluan#prasyarat) pada halaman [Pendahuluan](/docs/mulai-dari-nol/pendahuluan/) terpenuhi.
{{< /callout >}}

## Konfigurasi

1. Masuk ke halaman **Settings** .
2. Pilih menu **Router Settings**.
3. Masukan alamat Router, API port, SSH port, User, Password dan contreng SSL (jika anda menerapkan SSL pada port service API anda).
4. Klik "TEST CONNECTION" untuk uji coba apakah konfigurasi sudah benar. Jika muncul seperti gambar di bawah ini, berarti EZ NOM dan Router sudah dapat terhubung.

   ![](/assets/terhubung-dengan-router.png)
5. Klik "SAVE" untuk menyimpan konfigurasi.

{{< callout context="note" title="SSH Port" icon="info-circle" >}}
EZ NOM menggunakan SSH port untuk fitur Remote modem user PPPoE.
{{< /callout >}}

Sampai tahap ini Anda sudah dapat menggunakan semua fitur pada EZ NOM.

## Gagal Terhubung

Beberapa faktor dapat menyebabkan Mikrotik tidak dapat terhubung dengan EZ sebagai berikut:

### Salah Port

Kesalahan port yang dimasukan pada tahap [Konfigurasi](#konfigurasi). Jika anda menggunakan VPN Remote, pastikan anda memasukan port API yang diberikan oleh penyedian VPN Remote (bukan port API bawaan Mikrotik).

### Service API Port Tidak Aktif

Pastikan service API port Mikrotik *enable*. Perlu diperhatikan juga, jika anda menggunakan SSL, maka service `api-ssl` yang harus anda *enable*.

### Diblokir Firewall

Untuk kasus ini jarang terjadi namun dapat menjadi salah satu faktor yang menyebabkan Mikrotik tidak dapat terhubung dengan EZ NOM.
