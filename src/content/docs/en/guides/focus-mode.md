---
title: Focus Mode Guide
description: In-depth guide to Torto's Focus Mode — paragraph-by-paragraph flow, centered reading anchor, sentence splitting, context-bound AI companion, folded footnotes, and all-keyboard immersion.
---

Focus Mode is the **flagship close-reading experience** of Torto Reader. Rather than dividing digital books into arbitrary page boxes, Focus Mode parses content into natural reading units (paragraphs, lists, quotes, code blocks, tables, images and captions), anchoring the active paragraph to a steady, comfortable reading line.

Peripheral distractions (sidebars, menus) are tucked away by default. Highlights, notes, footnotes, and AI discussions stay directly attached to the active reading passage.

---

## Entering & Toggling Focus Mode

- **Reader Menu**: Click the menu in the top-right corner and select "Focus Mode". Click "Classic Mode" to switch to single-column, two-column, or continuous scroll layout.
- **Global Preferences**: Go to **Settings → Reading → Reading Mode** and choose "Focus". This sets Focus Mode as the default for all opened books.
- **Shortcut**: Press `Ctrl + ,` anytime to open the settings panel.

:::tip[Scanned PDF Ebooks]
Focus Mode requires reflowable text. For scanned PDFs, configure an OCR provider under **Settings → OCR**, then switch to **OCR Layout** in the reader to enjoy Focus Mode. Switching back to original PDF pages returns to classic view.
:::

---

## Navigation & Centered Reading Line

In Focus Mode, navigation advances smoothly paragraph by paragraph:

| Shortcut / Action | Description |
| :--- | :--- |
| `↑` / `↓` | Previous / next reading paragraph |
| `←` / `→` | Jump to previous / next section |
| **Mouse Wheel** | Scroll one paragraph per notch |
| **Click any paragraph** | Focus directly on that passage |
| **Drag scrollbar** | Snaps to the nearest paragraph upon release |
| `F11` | Toggle borderless fullscreen |

:::note[Why Centered Reading Baseline?]
Traditional readers cause eye fatigue when jumping between paragraphs of different lengths. Torto's Focus Mode starts short units at a fixed, centered baseline and expands downward only for tall units, keeping your gaze calm and focused.
:::

---

## Keyboard Close-Reading Toolkit

Focus Mode provides dedicated shortcuts for seamless keyboard-driven reading:

| Shortcut | Action | Description |
| :--- | :--- | :--- |
| `Space` | Action Bar | Open floating action bar beside the active paragraph |
| `Tab` | Context-Bound AI Chat | Open AI chat session attached to the passage with source citations |
| `1` | Highlight | Highlight the active passage |
| `2` | Note | Add an annotation attached directly to the text |
| `3` | **Sentence Splitting** | Split dense paragraphs into readable sentences, preserving paired punctuation and quotes |
| **Left `Alt`** | **Toggle Folded Footnotes** | Folded footnote icons expand instantly upon pressing Left Alt, and collapse when pressed again |
| `Ctrl + H` | **Hide / Show Cursor** | Hide mouse cursor to eliminate screen distraction |
| `Ctrl + F` | Full-Text Search | Fast book search jumping directly to matching paragraphs |
| `Ctrl + T` | Toggle Translation | Switch between original, replaced and bilingual translation |
| `Ctrl + B` / `Ctrl + E` | Sidebars | Toggle the table-of-contents and annotations sidebars |
| `Shift + ↑` / `Shift + ↓` | Extend Selection | Extend the text selection up / down by reading unit |
| `Ctrl + Home` / `Ctrl + End` | First / Last Unit | Jump to the first / last reading unit of the book |
| `Ctrl + Q` | Back to Shelf | Return to the cover shelf |

Every shortcut can be customized under **Settings → Shortcuts**.

:::note[Focus Mode on Android]
Enable "Focus mode" in the Android reader's typography sheet: swipe vertically to switch or scroll the active unit, swipe horizontally to turn pages, and tap a unit to activate it. "Split by sentence" is a separate switch in the same sheet and only applies in Focus mode.
:::

---

## Deep Dive into Key Capabilities

### 1. Intelligent Sentence Splitting (`3`)
When reading dense academic treatises or intricate prose, press `3` to insert breathing room between individual sentences while keeping quotation marks and citations paired.

### 2. Context-Bound AI Chat & Rich Multimodal Rendering (`Tab`)
- **Isolated Context**: Each unit owns its own conversation session, automatically providing exact citation links back to the book.
- **Ask About Images**: You can question the illustrations or image-bearing passages in the active unit, and attached images carry into follow-up questions.
- **Clear Rendering**: AI responses render math formulas, data tables, SVG graphics, and zoomable diagrams cleanly.
- **Slash Commands & Citations**: Type `/` to invoke reading skills — `/summary` summarizes the active chapter, `/search` queries the book, `/rewrite` polishes text live, and `/extract` lists key concepts; type `@` to attach source citations to the conversation.

### 3. Markdown Table Export
Complex tables in Focus Mode can be copied directly as clean, formatted Markdown tables (supporting merged cells and multi-line content) for easy pasting into Obsidian, Logseq, or Notion.

### 4. Zero-Distraction Atmosphere
Combining **Hide Cursor (`Ctrl+H`)** with **Borderless Fullscreen (`F11`)** leaves only the written word and your thoughts.
