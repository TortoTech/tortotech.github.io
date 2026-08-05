---
title: OCR 服务商配置
description: 为 Torto 的 PDF OCR 功能配置 PaddleOCR 或 MinerU，包含注册与获取 Token 的完整步骤。
---

Torto 的「PDF OCR / 重排」功能可以把扫描版 PDF 整本识别为可重排、可搜索的文本。该功能依赖云端 OCR 服务，目前支持两家服务商：

| 服务商 | 特点 | 需要在 Torto 中填写 |
| --- | --- | --- |
| **PaddleOCR**（默认） | 百度飞桨官方服务，星河社区提供每日免费额度 | Access Token |
| **MinerU** | OpenDataLab 出品的文档解析服务，对复杂排版效果好 | API Token |

在 Torto 中打开 **设置 → OCR** 即可切换服务商并填写凭据。Token 会保存在系统凭据管理器中，不会写入配置文件。

## PaddleOCR

PaddleOCR 的云端服务托管在[飞桨星河社区](https://aistudio.baidu.com/paddleocr/task)（AI Studio），每个注册用户都能获得专属的 API 地址和访问令牌，并有每日免费调用额度（具体以官方页面为准）。

### 注册与获取 Token

1. 打开 [PaddleOCR 星河社区任务页](https://aistudio.baidu.com/paddleocr/task)，使用百度账号登录（没有账号先注册）。
2. 点击页面左上角的 **「API」** 按钮。
3. 在弹出的 API 调用示例中找到 **PaddleOCR-VL**，复制 **TOKEN**——40 位十六进制字符的星河社区访问令牌。（页面同时会显示专属 API_URL，Torto 已内置服务地址，无需填写。）

### 在 Torto 中配置

1. 打开 **设置 → OCR**，服务商选择 **PaddleOCR**。
2. 将上面复制的 **TOKEN** 填入「Access Token」。
3. 选择模型，默认 `PaddleOCR-VL-1.6`，另有 `PaddleOCR-VL-1.5`、`PaddleOCR-VL` 可选。
4. 打开任意扫描版 PDF，使用「OCR」功能即可开始识别；识别结果会缓存在本地，可在「原版 / 重排」视图间切换。

:::tip[额度提示]
星河社区为 PaddleOCR-VL 提供每日免费额度（数千页级别），超额后当日会限流，第二天自动恢复。大批量 OCR 建议分批进行。
:::

## MinerU

[MinerU](https://mineru.net) 是 OpenDataLab 推出的智能文档解析服务，对多栏排版、表格、公式的识别效果较好。

### 注册与获取 Token

1. 打开 [mineru.net](https://mineru.net)，注册并登录账号。
2. 进入 **用户中心 → API 管理**（或直接访问 [API 管理页面](https://mineru.net/apiManage/docs)），申请并创建 **API Token**。
3. 复制生成的 Token 并妥善保存。

:::caution[Token 有效期]
MinerU 的 API Token 有有效期限制（以平台提示为准），过期后调用会返回鉴权失败，需要重新在 API 管理页面申请并更新到 Torto 中。
:::

### 在 Torto 中配置

1. 打开 **设置 → OCR**，服务商选择 **MinerU**。
2. 将复制的 Token 填入「API Token」（API 地址已内置，无需填写）。
3. 选择模型：`vlm`（默认，效果好）或 `pipeline`（速度快）。

## 常见问题

**OCR 任务一直排队或失败？**
先检查 Token 是否填错或过期；PaddleOCR 请确认当日免费额度是否已用完。网络环境需要能访问对应的 API 域名。

**识别结果保存在哪里？**
OCR 结果按页缓存到本地，同一本书不会重复消耗额度；在「原版 / 重排」视图间切换也不会重新请求。
