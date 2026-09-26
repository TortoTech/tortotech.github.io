---
title: OCR Providers Setup Guide
description: Configure PaddleOCR or MinerU for Torto's scanned PDF OCR and reflow, with complete steps to obtain API tokens.
---

Torto's "PDF OCR & Reflow" feature converts scanned PDF books into reflowable, searchable text. This feature connects to cloud OCR providers, currently supporting two services:

| Provider | Highlights | Free Quota |
| :--- | :--- | :--- |
| **PaddleOCR** (Default) | Official Baidu PaddlePaddle service for scanned books | 20,000 pages / day free quota |
| **MinerU** | OpenDataLab service specializing in formulas & complex layouts | 2,000 pages / day free quota (up to 600 pages / file) |

In Torto, open **Settings → OCR** to switch providers and enter your credentials. Tokens are stored securely in your OS vault.

Once recognized, the OCR reflow layout is shared to your Android devices through cloud sync (WebDAV), so your phone can read the reflowed version without re-running recognition.

---

## PaddleOCR

PaddleOCR cloud service is hosted on [Baidu AI Studio](https://aistudio.baidu.com/paddleocr/task). Every user receives API tokens with a generous free quota of 20,000 pages per day.

### Registration & Token

1. Visit [PaddleOCR AI Studio](https://aistudio.baidu.com/paddleocr/task) and log in with your Baidu account.
2. Click the **"API"** button at the top left.
3. Under **PaddleOCR-VL**, copy your 40-character hexadecimal access **TOKEN**.

### Configuration in Torto

1. Open **Settings → OCR**, select **PaddleOCR**.
2. Paste your token into "Access Token".
3. Select a model (default: `PaddleOCR-VL-1.6`).
4. Open any scanned PDF and trigger the "OCR" tool.

---

## MinerU

[MinerU](https://mineru.net) by OpenDataLab provides specialized parsing for multi-column layouts, tables, and mathematical formulas.

### Registration & Token

1. Sign up and log in to [mineru.net](https://mineru.net).
2. Go to **User Center → API Management**, apply for and create an **API Token**.
3. Copy and save your token.

### Configuration in Torto

1. Open **Settings → OCR**, select **MinerU**.
2. Paste the token into "API Token".
3. Select a model: `vlm` (higher quality) or `pipeline` (faster).
