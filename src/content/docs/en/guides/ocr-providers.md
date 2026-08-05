---
title: OCR Providers
description: Set up PaddleOCR or MinerU for Torto's PDF OCR feature — including how to register and obtain your API token.
---

Torto's **PDF OCR / Reflow** feature turns a scanned PDF into reflowable, searchable text. It relies on a cloud OCR service. Two providers are currently supported:

| Provider | Highlights | What you enter in Torto |
| --- | --- | --- |
| **PaddleOCR** (default) | Official Baidu PaddlePaddle service with a free daily quota on AI Studio | API URL, Access Token |
| **MinerU** | Document parsing by OpenDataLab, great on complex layouts | API Token |

Open **Settings → OCR** in Torto to pick a provider and enter credentials. Tokens are stored in your OS credential manager, never in config files.

## PaddleOCR

PaddleOCR's cloud service is hosted on [PaddlePaddle AI Studio](https://aistudio.baidu.com/paddleocr/task). Every registered user gets a personal API endpoint and access token, with a free daily quota (see the official page for current limits).

### Register & Get Your Token

1. Open the [PaddleOCR task page on AI Studio](https://aistudio.baidu.com/paddleocr/task) and sign in with a Baidu account (register one first if needed).
2. Click the **「API」** button in the top-left corner of the page.
3. In the API usage example, find **PaddleOCR-VL** and copy two values:
   - **API_URL** — your personal endpoint, e.g. `https://xxxxxxxx.aistudio-app.com/...`
   - **TOKEN** — a 40-character hexadecimal access token.

### Configure in Torto

1. Go to **Settings → OCR** and select **PaddleOCR**.
2. Paste the **API_URL** into "API URL" (or keep the built-in default) and the **TOKEN** into "Access Token".
3. Pick a model — `PaddleOCR-VL-1.6` is the default; `PaddleOCR-VL-1.5` and `PaddleOCR-VL` are also available.
4. Open any scanned PDF and run OCR. Results are cached locally, and you can switch between the Original and Reflow views.

:::tip[Quota]
AI Studio grants a free daily quota for PaddleOCR-VL (thousands of pages). Once exhausted, requests are throttled until the next day — OCR large books in batches.
:::

## MinerU

[MinerU](https://mineru.net) is a document-parsing service by OpenDataLab that handles multi-column layouts, tables and formulas well.

### Register & Get Your Token

1. Open [mineru.net](https://mineru.net), sign up and log in.
2. Go to **User Center → API Management** (or directly to the [API management page](https://mineru.net/apiManage/docs)) and create an **API Token**.
3. Copy the token and keep it safe.

:::caution[Token expiry]
MinerU API tokens expire (check the notice on the platform). When a token expires, API calls fail with auth errors — request a new one and update it in Torto.
:::

### Configure in Torto

1. Go to **Settings → OCR** and select **MinerU**.
2. Keep the default API URL `https://mineru.net/api/v4` (or point it at your self-hosted service).
3. Paste the token into "API Token".
4. Pick a model: `vlm` (default, better quality) or `pipeline` (faster).

## FAQ

**OCR jobs stuck or failing?**
Check that the token is correct and unexpired. For PaddleOCR, confirm you haven't used up the daily free quota. Your network must be able to reach the provider's API domain.

**Where are results stored?**
OCR output is cached locally per page — the same book never consumes quota twice, and switching between Original/Reflow views makes no new requests.

**Can I self-host an OCR service?**
Yes. Both providers support self-hosting: just change the API URL in Torto to your own endpoint (for a self-hosted MinerU, any placeholder works as the token).
