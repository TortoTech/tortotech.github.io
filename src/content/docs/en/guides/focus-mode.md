---
title: Focus Mode
description: How to use Torto's Focus mode — paragraph-by-paragraph centered reading, keyboard-driven navigation, per-paragraph AI chat and inline notes for immersive close reading.
---

Focus mode is a paragraph-by-paragraph close-reading mode: the text switches to vertical scrolling, the current paragraph is automatically centered and highlighted, and everything else (sidebar, AI panel, …) is tucked away — so you can focus on one paragraph at a time.

## Turning It On and Off

- **Reader menu**: click the menu button in the top-right corner of the reader and choose "Focus mode"; click "Classic mode" to switch back.
- **Settings**: go to **Settings → Reading → Reading mode** and select "Focus". The reading mode is a global setting and applies to all books.

:::tip[PDF books]
Focus mode requires reflowable text. For scanned PDFs, switch to the **OCR layout** in the reader first; switching a PDF back to the original view automatically exits Focus mode.
:::

## Paragraph-by-Paragraph Navigation

In Focus mode, the book is split into "focus units" — one per paragraph, with images and tables each taking a unit. The current unit is always vertically centered and marked with a soft green background:

| Action | Effect |
| --- | --- |
| `↑` / `↓` | Previous / next paragraph |
| `←` / `→` | Previous / next chapter |
| Mouse wheel | Scroll one paragraph per notch |
| Click a paragraph | Make it the current focus unit |
| Drag the scrollbar | Snaps to the nearest paragraph |

`Esc` closes floating layers (the action bar, sidebar, or paragraph chat) — it does not exit Focus mode. Use the menu or the Settings toggle to leave the mode.

## Per-Paragraph Actions

Quick actions for the current paragraph:

| Shortcut | Action |
| --- | --- |
| `Space` | Open the floating action bar next to the paragraph |
| `Tab` | Open the AI chat for this paragraph |
| `1` | Highlight the current paragraph |
| `2` | Add a note to the current paragraph |

- **Paragraph chat**: each paragraph gets its own AI chat session, opened with the paragraph automatically attached as a reference (shown as "Paragraph N · Chapter title"). Follow-up questions, translations and summaries stay within that paragraph's context. Paragraphs with an existing chat or note show a small icon on the right edge — click it to revisit.
- **Search and table of contents**: `Ctrl+F` full-text search and TOC navigation work as usual in Focus mode; jumping re-anchors the focus to the target.
- Image units do not support highlighting or notes; table units are marked with a border instead.

## Why Focus Mode

- **Fewer distractions**: the sidebar and panels are tucked away, leaving only the text and the current paragraph.
- **Steady pace**: paragraph-by-paragraph movement with auto-centering means your eyes never have to hunt for the next line — ideal for dense or demanding material.
- **Think as you read**: highlights, notes and AI chats all attach to paragraphs, so your thoughts stay anchored to the exact passage that inspired them.
