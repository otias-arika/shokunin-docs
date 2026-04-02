# 職人.new ドキュメントサイト — Claude Code 引き継ぎ文書

## プロジェクト概要

**プロジェクト名：** 職人.new ドキュメントサイト  
**作業ディレクトリ：** `D:\Claude_win\shokunin-docs`  
**フレームワーク：** VitePress v1.6.4  
**Node.js：** v22.18.0  
**OS：** Windows

### プロダクト概要
「職人.new」は建設・施設管理・保守点検業界向けのLINEベースの建設AIアシスタント。
AIアシスタントの名前は「あずさ」。
LINEで写真を送るだけで工事写真報告書が自動生成される（無料）。
i-Reporter と連携している。

---

## 開発サーバーの起動方法

```bash
D:
cd Claude_win\shokunin-docs
npm run docs:dev
# ブラウザで http://localhost:5173/ を開く
```

---

## フォルダ構成

```
D:\Claude_win\shokunin-docs\
├── package.json
└── docs\
    ├── index.md                        ← トップページ（ホーム）
    ├── .vitepress\
    │   ├── config.mjs                  ← サイト設定（重要）
    │   └── theme\
    │       ├── index.js                ← テーマ読み込み
    │       └── custom.css              ← ティールグリーンのカスタムCSS
    ├── public\
    │   ├── logo.png                    ← 背景透過済みロゴ
    │   └── manual\
    │       ├── line_worker_01.png      ← 職人向けダミー画像①（友達追加）
    │       ├── line_worker_02.png      ← 職人向けダミー画像②（手配通知）
    │       ├── line_worker_03.png      ← 職人向けダミー画像③（写真アップ）
    │       ├── line_manager_01.png     ← 管理者向けダミー画像①（ダッシュボード）
    │       ├── line_manager_02.png     ← 管理者向けダミー画像②（手配作成）
    │       └── line_manager_03.png     ← 管理者向けダミー画像③（QRポスター）
    ├── guide\
    │   ├── introduction.md             ← 職人.newとは
    │   ├── getting-started.md          ← はじめ方
    │   └── roadmap.md                  ← アップデート予定
    ├── manual\
    │   ├── for-worker.md               ← 職人さん向けマニュアル
    │   └── for-manager.md              ← 現場管理者向けマニュアル
    └── features\
        └── overview.md                 ← 機能一覧
```

---

## デザイン仕様

### テーマカラー
- メインカラー：`#1abcbc`（ティールグリーン）
- ブランドカラー1：`#2abfbf`
- ブランドカラー2：`#1fa8a8`
- ブランドカラー3：`#178f8f`

### ロゴ
- ファイル：`docs/public/logo.png`
- 元画像（黒背景）をPython Pillowで背景透過処理済み
- ヘッダー左上に表示（白抜き文字のためティールグリーン背景に映える）

### 重要なCSS設定
`docs/.vitepress/theme/custom.css` に以下が含まれている：
- ナビバーをティールグリーンに変更
- ロゴ画像の表示設定（`display: block !important; visibility: visible !important`）
- ヒーローセクションのグラデーションテキスト
- フィーチャーカードのホバーエフェクト

---

## ナビゲーション構成

```
ホーム | はじめに | マニュアル | 機能一覧

サイドバー：
├── ガイド
│   ├── 職人.new とは
│   ├── はじめ方
│   └── アップデート予定
├── マニュアル
│   ├── 職人さん向け
│   └── 現場管理者向け
└── 機能説明
    └── 機能一覧
```

---

## 既知の問題・注意事項

### config.jsが残っていると起動しない
`.vitepress/` フォルダに `config.js` と `config.mjs` が両方存在すると以下のエラーが出る：
```
"vitepress" resolved to an ESM file. ESM file cannot be loaded by `require`.
```
**対処：** `config.js` を削除する
```bash
del docs\.vitepress\config.js
```

### Windowsでのドライブ間移動
```bash
# NG: cd D:\Claude_win  （Cドライブから直接移動できない）
# OK:
D:
cd Claude_win\shokunin-docs
```

### メモ帳でのファイル編集
メモ帳でconfigファイルを編集する際、クリップボードの内容が誤って書き込まれることがある。
編集後は必ず `type ファイル名` で内容を確認すること。

---

## 今後の作業（未完了）

### 優先度：高
- [ ] ダミー画像を実際のLINEスクリーンショットに差し替え
  - 保存先：`docs/public/manual/`
  - ファイル名は既存のダミー画像と同じ名前で上書き
  - スクリーンショットはGoogle Driveに保存予定（Android端末）

### 優先度：中
- [ ] GitHub Pagesでインターネット公開
  - GitHubアカウントが必要
  - `npm run docs:build` でビルド後、GitHub Pagesにデプロイ

### 優先度：低
- [ ] ページ内容の追加・編集
- [ ] トップページのフィーチャーカード内容の見直し

---

## スクリーンショット差し替え時のファイル名対応表

| ファイル名 | 撮影内容 |
|-----------|---------|
| `line_worker_01.png` | 職人：LINEあずさとのトーク画面（友達追加後） |
| `line_worker_02.png` | 職人：工事手配通知が届いた画面 |
| `line_worker_03.png` | 職人：写真アップロード画面 |
| `line_manager_01.png` | 管理者：ダッシュボード全体 |
| `line_manager_02.png` | 管理者：手配作成フォーム |
| `line_manager_03.png` | 管理者：QRポスター生成画面 |

---

## Claude Codeへの引き継ぎ時の最初のメッセージ例

```
D:\Claude_win\shokunin-docs にVitePressのドキュメントサイトがあります。
この引き継ぎ文書（HANDOVER.md）を読んで内容を把握した上で、
作業を続けてください。
```
