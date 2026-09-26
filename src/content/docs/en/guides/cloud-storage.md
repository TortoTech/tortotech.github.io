---
title: Cloud Storage & WebDAV Setup Guide
description: Configure private WebDAV sync for Torto using cstcloud (Recommended), Nutstore (坚果云), InfiniCLOUD, Koofr, STRATO HiDrive, Yandex Disk, or custom WebDAV servers.
---

Torto syncs your book library, reading progress, highlights, inline notes and reading statistics across desktop and mobile devices via standard **WebDAV**; OCR reflow layouts generated on the desktop for scanned PDFs are synced too, so your phone can keep reading them. All data is encrypted and transferred directly between your device and your personal cloud storage, with zero relay through any Torto server.

The app includes **6 built-in presets** and supports any standard custom WebDAV endpoint.

---

## Supported Provider Presets

| Provider | Free Quota | Preset WebDAV Endpoint |
| :--- | :--- | :--- |
| **cstcloud (Recommended)** | **20GB Free** (Fast in China, no monthly bandwidth cap) | `https://data.cstcloud.cn/dav` |
| **Nutstore / 坚果云** | 1GB Upload / 3GB Download monthly traffic cap | `https://dav.jianguoyun.com/dav` |
| **InfiniCLOUD** (TeraCLOUD) | 20GB ~ 25GB Free | `https://higa.teracloud.jp/dav` |
| **Koofr** | 10GB Free | `https://app.koofr.net/dav/Koofr` |
| **Yandex Disk** | 10GB Free | `https://webdav.yandex.com` |
| **STRATO HiDrive** | Paid subscription | `https://webdav.hidrive.strato.com` |
| **Custom WebDAV** | Depends on private NAS | Any HTTPS WebDAV URL |

---

## Quick Setup Steps

In Torto, open **Settings → Cloud Sync** (Shortcut `Ctrl + ,`):
1. Check **"Enable Cloud Sync"**.
2. Select your cloud provider from the dropdown (recommended: *cstcloud* or *Nutstore*).
3. Enter your **Username** and **Password / App Password**.
4. (Optional) Set a friendly **Device Name** (e.g. *ThinkPad* or *MacBook Pro*) to identify devices in sync logs.
5. Save settings. Books, reading progress, and annotations will sync automatically.

---

## Provider Setup Instructions

### 1. cstcloud (China Science & Technology Cloud) 🌟 Top Recommendation
1. Log in to [data.cstcloud.cn](https://data.cstcloud.cn/).
2. In Torto, choose **cstcloud** (preset address `https://data.cstcloud.cn/dav` is filled automatically).
3. Enter your cstcloud account ID and password. Torto includes built-in compatibility headers for the CSTCloud service.

---

### 2. Nutstore (坚果云)
1. Open the Nutstore mobile app or desktop client.
2. Go to **"Account" → "Settings" → "Third-Party App Management"**.
3. Click **"Add App Password"**, name it `Torto`, and generate the password.
4. In Torto, select **坚果云**, enter your email and the generated password.

---

### 3. InfiniCLOUD (TeraCLOUD)
1. Log in to [infini-cloud.net](https://infini-cloud.net/en/) and go to **"My Page"**.
2. Under **"Apps Connection"**, turn on WebDAV access.
3. Note your **Connection ID** and **Apps Password**.
4. In Torto, select **InfiniCLOUD**, enter your Connection ID and Apps Password. If you use a dedicated endpoint node, choose *Custom* and enter your personal WebDAV connection URL.

---

### 4. Koofr
1. Log in to [app.koofr.net](https://app.koofr.net).
2. Go to **"Preferences" → "Password" → "App passwords"**.
3. Generate a password named `Torto` and copy it into Torto's settings.

---

### 5. Custom WebDAV (Synology NAS, Nextcloud, QNAP, etc.)
If you host your own private cloud:
1. Select **"Custom"** as the provider.
2. Enter your full HTTPS WebDAV URL (e.g., `https://nas.example.com:5006/webdav/books`).
3. Enter your username and password.
