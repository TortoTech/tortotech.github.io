---
title: 云盘服务商配置
description: 为 Torto 的 WebDAV 云同步配置坚果云、InfiniCLOUD、Koofr、STRATO HiDrive、Yandex Disk 或自定义 WebDAV，包含注册与获取应用密码的完整步骤。
---

Torto 通过 **WebDAV** 协议在多设备间同步书库、阅读进度、划线与笔记。应用内置了 5 个常用云盘预设，也支持任意自定义 WebDAV 服务。

| 服务商 | WebDAV 地址（预设） | 用户名 | 密码 |
| --- | --- | --- | --- |
| 坚果云（默认） | `https://dav.jianguoyun.com/dav` | 注册邮箱 | 第三方应用密码 |
| InfiniCLOUD | `https://webdav.infini-cloud.net` | 用户 ID（Connection ID） | Apps Password |
| Koofr | `https://app.koofr.net/dav/Koofr` | 注册邮箱 | 应用专用密码 |
| STRATO HiDrive | `https://webdav.hidrive.strato.com` | 登录邮箱 | 账号密码 |
| Yandex Disk | `https://webdav.yandex.com` | Yandex 账号 | 应用密码 |
| 自定义 | 任意 HTTPS WebDAV 地址 | 视服务而定 | 视服务而定 |

:::tip[安全提示]
除 STRATO HiDrive 外，其余服务商都应使用「应用专用密码」而非登录密码。Torto 会将密码保存在系统凭据管理器中，不会写入任何配置文件。
:::

在 Torto 中打开 **设置 → 云同步**，勾选启用、选择服务商、填写用户名与密码即可。还可以设置设备名称和同步间隔（10 / 30 / 60 / 180 分钟）。

## 坚果云

国内访问稳定，免费档对 WebDAV 有流量限制（上传 1GB/月、下载 3GB/月），同步阅读进度和笔记足够，大书库建议付费档。

### 获取应用密码

自 2025 年底起，坚果云新版网页已移除第三方应用密码的管理入口，需要通过**客户端**生成：

1. 下载并安装坚果云客户端（[官网下载](https://www.jianguoyun.com/s/downloads)，手机 App 或桌面客户端均可），登录你的账号。
2. 以手机 App 为例：进入 **「我的」→「设置」→「第三方应用管理」**。
3. 点击 **「添加应用密码」**，输入名称（如 `Torto`），点击 **「生成密码」**。
4. 记录下：服务器地址（`https://dav.jianguoyun.com/dav`）、账户（你的注册邮箱）、**应用密码**。

:::tip[网页版入口]
部分账号仍可在网页版操作：登录后点击右上角账户名 →「账户信息」→「安全选项」→「第三方应用管理」。如果看不到该入口，可以试试在网页右上角点击用户名，**切换回旧版网页**再查看。
:::

### 在 Torto 中配置

服务商选择「坚果云」，用户名填注册邮箱，密码填上面生成的**应用密码**（不是登录密码）。

## InfiniCLOUD

日本云盘（原 TeraCLOUD），注册即送约 20GB 永久免费容量，填写邀请码还能再加 5GB，适合同步整个书库。

### 获取连接信息

1. 打开 [infini-cloud.net](https://infini-cloud.net/en/) 注册账号，完成邮箱验证。
2. 登录后进入 **「My Page」**（右上角）。
3. 找到 **「Apps Connection」**，勾选并点击 **「Turn on」**。
4. 页面会显示三项信息：**WebDAV Connection URL**、**Connection ID**、**Apps Password**。

:::caution[Apps Password 只显示一次]
生成的 Apps Password 仅显示一次，请立即复制保存。如果遗失，点击 **「Reissue」** 重新生成（旧密码随即失效）。
:::

### 在 Torto 中配置

服务商选择「InfiniCLOUD」，用户名填 **Connection ID**（即你的用户 ID），密码填 **Apps Password**。预设地址为 `https://webdav.infini-cloud.net`；如果连接失败，请切换为「自定义」，把 My Page 中显示的个人 **WebDAV Connection URL**（形如 `https://xxxx.infini-cloud.net/dav/`）填进去。

## Koofr

欧洲（斯洛文尼亚）云盘，免费 10GB，还可以聚合你的 OneDrive / Google Drive / Dropbox，通过一个 WebDAV 端点访问。

### 获取应用密码

1. 打开 [koofr.eu](https://koofr.eu) 或 [app.koofr.net](https://app.koofr.net) 注册并登录。
2. 点击右上角头像 → **「Preferences」** → **「Password」**。
3. 滚动到 **「App passwords」**，输入一个名称（如 `Torto`），点击 **「Generate」**。
4. 复制生成的应用专用密码。

### 在 Torto 中配置

服务商选择「Koofr」，用户名填注册邮箱，密码填**应用专用密码**（不是登录密码）。

## STRATO HiDrive

德国付费云盘，WebDAV 直接使用账号凭据，无需单独生成应用密码。

### 在 Torto 中配置

1. 在 [strato.de](https://www.strato.de/) 开通 HiDrive 服务。
2. Torto 中服务商选择「STRATO HiDrive」，用户名填**登录邮箱**，密码填 **HiDrive 账号密码**。

## Yandex Disk

俄罗斯云盘，免费 10GB。开启两步验证的账号必须使用应用密码。

### 获取应用密码

1. 打开 [disk.yandex.com](https://disk.yandex.com) 注册并登录。
2. 访问 [Yandex ID 管理页面](https://id.yandex.com/security/app-passwords)，点击 **「创建新应用密码」**。
3. 为 WebDAV 访问设置一个名称（如 `WebDAV` 或 `Torto`），生成并复制密码。

### 在 Torto 中配置

服务商选择「Yandex Disk」，用户名填 Yandex 账号，密码填**应用密码**。

## 自定义 WebDAV

任何支持 WebDAV 协议的服务都可以接入，例如 NAS（群晖、威联通）、Nextcloud、Alist 等：

1. 服务商选择「自定义」。
2. 填写 WebDAV 地址（**必须是 HTTPS**，本机 `localhost` 除外）、用户名和密码。

## 常见问题

**同步的数据放在云盘哪里？**
Torto 会在 WebDAV 根目录下创建 `Rebook/v1/` 目录存放同步数据（该路径为历史遗留命名）。书籍按内容哈希存储，多设备上传同一本书不会占用双倍空间。

**多台设备会怎样合并？**
阅读进度按「最新事件优先」合并；划线与笔记带版本向量，冲突时会生成确定性副本，不会丢数据。

**提示鉴权失败？**
绝大多数情况是把登录密码当成了应用密码。请回到上方对应服务商的步骤，确认生成并填写的是应用专用密码。
