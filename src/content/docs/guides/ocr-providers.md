---
title: OCR 服务商配置
description: 为 Torto 的 PDF OCR 功能配置 PaddleOCR 或 MinerU，包含注册与获取 Token 的完整步骤。
---

Torto 的「PDF OCR / 重排」功能可以把扫描版 PDF 整本识别为可重排、可搜索的文本。该功能依赖云端 OCR 服务，目前支持两家服务商：

| 服务商 | 特点 | 免费额度 |
| :--- | :--- | :--- |
| **PaddleOCR**（默认） | 百度飞桨官方服务，适合常规扫描书籍与文档 | 每天 20,000 页免费额度 |
| **MinerU** | OpenDataLab 出品，擅长公式、表格与多栏复杂排版 | 每天 2,000 页免费解析额度（单次最高 600 页） |

在 Torto 中打开 **设置 → OCR** 即可切换服务商并填写凭据。Token 会保存在系统凭据管理器中，不会明文写入任何普通配置文件。

识别完成后，OCR 重排结果会通过云同步（WebDAV）共享到你的 Android 设备，手机上无需重复识别即可直接阅读重排版式。

识别完成后，OCR 重排结果会通过云同步（WebDAV）共享到你的 Android 设备，手机上无需重复识别即可直接阅读重排版式。

---

## PaddleOCR

PaddleOCR 的云端服务托管在[飞桨星河社区](https://aistudio.baidu.com/paddleocr/task)（AI Studio），每个注册用户都能获得专属的 API 地址和访问令牌，享有每天 20,000 页的充裕免费额度。

### 注册与获取 Token

1. 打开 [PaddleOCR 星河社区任务页](https://aistudio.baidu.com/paddleocr/task)，使用百度账号登录（没有账号先注册）。
2. 点击页面左上角的 **「API」** 按钮。
3. 在弹出的 API 调用示例中找到 **PaddleOCR-VL**，复制 **TOKEN**——40 位十六进制字符的星河社区访问令牌。（页面同时会显示专属 API_URL，Torto 已内置服务地址，无需填写。）

### 在 Torto 中配置

1. 打开 **设置 → OCR**，服务商选择 **PaddleOCR**。
2. 将上面复制的 **TOKEN** 填入「Access Token」。
3. 选择模型，默认 `PaddleOCR-VL-1.6`，另有 `PaddleOCR-VL-1.5`、`PaddleOCR-VL` 可选。
4. 打开任意扫描版 PDF，使用「OCR」功能即可开始识别；识别结果会缓存在本地，可在「原版 / 重排」视图间切换。

---

## MinerU

[MinerU](https://mineru.net) 是 OpenDataLab 推出的智能文档解析服务，对多栏排版、表格、公式的识别效果较好。

### 注册与获取 Token

1. 打开 [mineru.net](https://mineru.net)，注册并登录账号。
2. 进入 **用户中心 → API 管理**（或直接访问 [API 管理页面](https://mineru.net/apiManage/docs)），申请并创建 **API Token**。
3. 复制生成的 Token 并妥善保存。

### 在 Torto 中配置

1. 打开 **设置 → OCR**，服务商选择 **MinerU**。
2. 将复制的 Token 填入「API Token」（API 地址已内置，无需填写）。
3. 选择模型：`vlm`（默认，效果好）或 `pipeline`（速度快）。

---

## 常见问题

**OCR 任务一直排队或失败？**
先检查 Token 是否填错或过期；PaddleOCR 请确认免费额度是否充足。网络环境需要能正常访问对应的 API 域名。
