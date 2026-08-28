---
title: 私有云同步配置指南
description: 为 Torto 配置 cstcloud（中国科技云·首选推荐）、坚果云、InfiniCLOUD、Koofr、STRATO HiDrive、Yandex Disk 或自定义 WebDAV 云同步。
---

Torto 通过标准的 **WebDAV** 协议在电脑与手机等多设备间无缝同步书库、阅读进度、划线高亮与随段笔记。数据直接在你的设备与私有云盘之间加密传输，不经过任何 Torto 自建中转服务器，安全透明。

应用内置了 **6 个常用云盘预设**，同时也支持任意标准的自定义 WebDAV 服务。

---

## 常用服务商预设一览

| 服务商 | 免费额度 | WebDAV 预设地址 |
| :--- | :--- | :--- |
| **cstcloud（推荐）** | **20GB**（国内极速·无流量限制） | `https://data.cstcloud.cn/dav` |
| **坚果云** | 每月上传 1GB / 下载 3GB 流量 | `https://dav.jianguoyun.com/dav` |
| **InfiniCLOUD** | 20GB ~ 25GB | `https://higa.teracloud.jp/dav` |
| **Koofr** | 10GB | `https://app.koofr.net/dav/Koofr` |
| **Yandex Disk** | 10GB | `https://webdav.yandex.com` |
| **STRATO HiDrive** | 付费订阅 | `https://webdav.hidrive.strato.com` |
| **自定义 WebDAV** | 视私有 NAS 或自建服务而定 | 任意 HTTPS 地址 |

---

## 快速配置步骤

在 Torto 中打开 **设置 → 云同步**（快捷键 `Ctrl + ,`）：
1. 勾选 **「启用云同步」**。
2. 在服务商下拉框中选择你的云盘（首选推荐 **cstcloud** 或 **坚果云**）。
3. 填入对应的 **用户名** 与 **应用密码**。
4. 可自定义当前「设备名称」（如 *ThinkPad* 或 *MacBook Air*），便于在多设备间区分同步日志。
5. 点击保存后，阅读器会在打开书籍或添加笔记时自动同步状态。

---

## 各服务商详细配置指引

### 1. cstcloud（中国科技云 / 科技云盘）🌟 首选推荐
中国科学院计算机网络信息中心提供的学术科研云存储服务，国内访问速度极快，免费提供 20GB 空间，且无月度传输流量限制。

**配置说明**：
1. 访问 [中国科技云盘](https://data.cstcloud.cn/) 注册或登录（支持科技网通行证或常用邮箱注册）。
2. 在 Torto 中服务商直接选择 **cstcloud**，地址已自动填好为 `https://data.cstcloud.cn/dav`。
3. 用户名填科技云通行证账号或注册邮箱，密码填入对应账号密码。Torto 已内置适配科技云盘所需的客户端认证标识。

---

### 2. 坚果云
国内老牌同步网盘，多端同步稳定。免费版每月有 1GB 上传 / 3GB 下载流量限制，适合同步纯文字书、阅读进度与高亮笔记；若存放较多高画质图文电子书建议升级付费档或改用 cstcloud。

**获取应用密码**：
1. 打开坚果云手机 App 或客户端，登录账号。
2. 进入 **「我的」→「设置」→「第三方应用管理」**。
3. 点击 **「添加应用密码」**，命名为 `Torto` 并生成密码。
4. 在 Torto 中选择「坚果云」，填入注册邮箱与刚生成的应用密码。

---

### 3. InfiniCLOUD（原 TeraCLOUD）
日本知名云存储，注册即送约 20GB 永久免费容量，填写邀请码可扩充至 25GB，适合存放较大体积的个人书库。

**获取连接信息**：
1. 登录 [infini-cloud.net](https://infini-cloud.net/en/)，进入右上角 **「My Page」**。
2. 找到 **「Apps Connection」** 区域，勾选开启并点击 **「Turn on」**。
3. 记录页面生成的 **Connection ID** 与 **Apps Password**。
4. 在 Torto 中选择 **InfiniCLOUD**，用户名填 Connection ID，密码填 Apps Password。如果使用的是特定专属接入节点，也可以选择「自定义」填入个人专属 WebDAV URL。

---

### 4. Koofr
欧洲云盘，免费提供 10GB 空间，支持连接其他网盘集中管理。

**获取应用密码**：
1. 登录 [app.koofr.net](https://app.koofr.net)。
2. 点击右上角头像 → **「Preferences」** → **「Password」** → **「App passwords」**。
3. 生成名为 `Torto` 的应用密码，复制并填入 Torto 中。

---

### 5. 自定义 WebDAV 服务（群晖 NAS / 威联通 QNAP / Nextcloud 等）
如果您自建了私有 NAS 或私有云存储：
1. 服务商选择 **「自定义 (Custom)」**。
2. 填入完整的 HTTPS WebDAV 连接地址（如 `https://nas.yourdomain.com:5006/webdav/books`）。
3. 填入相应的用户名与密码即可。
