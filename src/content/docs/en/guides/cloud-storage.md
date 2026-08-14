---
title: Cloud Storage Providers
description: Set up WebDAV sync in Torto with Jianguoyun, InfiniCLOUD, Koofr, STRATO HiDrive, Yandex Disk or a custom server — including how to register and get an app password.
---

Torto syncs your library, reading progress, highlights and notes across devices via **WebDAV**. Five presets are built in, and any custom WebDAV server works too.

| Provider | WebDAV URL (preset) | Username | Password |
| --- | --- | --- | --- |
| Jianguoyun (default) | `https://dav.jianguoyun.com/dav` | Account email | Third-party app password |
| InfiniCLOUD | `https://webdav.infini-cloud.net` | User ID (Connection ID) | Apps Password |
| Koofr | `https://app.koofr.net/dav/Koofr` | Account email | App-specific password |
| STRATO HiDrive | `https://webdav.hidrive.strato.com` | Login email | Account password |
| Yandex Disk | `https://webdav.yandex.com` | Yandex account | App password |
| Custom | Any HTTPS WebDAV URL | Depends on service | Depends on service |

:::tip[Security]
Except for STRATO HiDrive, always use an app-specific password instead of your login password. Torto stores passwords in the OS credential manager — never in config files.
:::

In Torto, open **Settings → Cloud Sync**, enable it, pick a provider and enter your credentials. You can also set a device name to tell devices apart.

## Jianguoyun (坚果云)

A popular choice in China with stable access. The free tier limits WebDAV traffic (1 GB/month upload, 3 GB/month download) — plenty for progress and notes, but consider a paid plan for a large library.

### Get an App Password

Since late 2025, Jianguoyun's new web version has removed the app-password management entry for many accounts — you need the **client app** to generate one:

1. Download and install a Jianguoyun client ([official download page](https://www.jianguoyun.com/s/downloads) — mobile app or desktop client both work) and sign in.
2. On the mobile app, for example: go to **「我的」(Me) →「设置」(Settings) →「第三方应用管理」(Third-party Apps)**.
3. Tap **「添加应用密码」(Add App Password)**, enter a name such as `Torto`, and tap **「生成密码」(Generate)**.
4. Note the server address (`https://dav.jianguoyun.com/dav`), your account (registered email) and the generated **app password**.

:::tip[Web version]
Some accounts can still do this on the web: click your account name (top right) →「账户信息」→「安全选项」→「第三方应用管理」. If the entry is missing, click your username in the top-right corner and **switch back to the old web version**, then look again.
:::

### Configure in Torto

Select "Jianguoyun", enter your registered email as the username and the **app password** (not your login password).

## InfiniCLOUD

A Japanese cloud (formerly TeraCLOUD) with ~20 GB of permanent free storage on signup — plus 5 GB extra with a referral code. Great for syncing a whole library.

### Get Connection Details

1. Sign up at [infini-cloud.net](https://infini-cloud.net/en/) and verify your email.
2. Log in and open **"My Page"** (top right).
3. Find **"Apps Connection"**, tick the checkbox and click **"Turn on"**.
4. Three values are shown: **WebDAV Connection URL**, **Connection ID** and **Apps Password**.

:::caution[Apps Password is shown only once]
Copy it immediately. If you lose it, click **"Reissue"** to generate a new one (the old one stops working).
:::

### Configure in Torto

Select "InfiniCLOUD", enter your **Connection ID** (your user ID) as the username and the **Apps Password** as the password. The preset URL is `https://webdav.infini-cloud.net`; if the connection fails, switch to "Custom" and paste your personal **WebDAV Connection URL** from My Page (e.g. `https://xxxx.infini-cloud.net/dav/`).

## Koofr

A European (Slovenian) cloud with 10 GB free. It can also aggregate your OneDrive / Google Drive / Dropbox behind a single WebDAV endpoint.

### Get an App Password

1. Sign up at [koofr.eu](https://koofr.eu) or [app.koofr.net](https://app.koofr.net) and log in.
2. Click your avatar (top right) → **Preferences** → **Password**.
3. Scroll to **"App passwords"**, type a name such as `Torto`, and click **Generate**.
4. Copy the generated app-specific password.

### Configure in Torto

Select "Koofr", enter your registered email as the username and the **app-specific password** (not your login password).

## STRATO HiDrive

A German paid cloud. WebDAV uses your account credentials directly — no separate app password needed.

### Configure in Torto

1. Subscribe to HiDrive at [strato.de](https://www.strato.de/).
2. In Torto, select "STRATO HiDrive", enter your **login email** and your **HiDrive account password**.

## Yandex Disk

A Russian cloud with 10 GB free. Accounts with two-factor authentication must use an app password.

### Get an App Password

1. Sign up at [disk.yandex.com](https://disk.yandex.com) and log in.
2. Open the [Yandex ID management page](https://id.yandex.com/security/app-passwords) and click **"Create a new app password"**.
3. Give it a name (e.g. `WebDAV` or `Torto`), then generate and copy the password.

### Configure in Torto

Select "Yandex Disk", enter your Yandex account name and the **app password**.

## Custom WebDAV

Any WebDAV-capable service works — NAS (Synology, QNAP), Nextcloud, Alist and so on:

1. Select "Custom" as the provider.
2. Enter the WebDAV URL (**HTTPS required**, except for `localhost`), username and password.

## FAQ

**Where does synced data live on the cloud?**
Torto creates a `Rebook/v1/` directory at the WebDAV root (a legacy path name kept after the rename). Books are stored by content hash, so uploading the same book from multiple devices uses no extra space.

**How are multiple devices merged?**
Reading progress merges newest-event-first; highlights and notes carry version vectors, and conflicts produce deterministic copies — nothing is lost.

**Authentication failures?**
Almost always caused by entering your login password instead of an app-specific password. Go back to your provider's steps above and make sure you generated and used an app password.
