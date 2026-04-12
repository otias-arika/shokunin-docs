# 職人.new ドキュメントサイト — Claude Code 引き継ぎ文書

## プロジェクト概要

**プロジェクト名：** 職人.new ドキュメントサイト
**作業ディレクトリ：** `D:\Claude_win\shokunin-docs`
**フレームワーク：** VitePress v1.6.4
**Node.js：** v22.18.0
**OS：** Windows

### プロダクト概要
「職人.new」は建設・施設管理・保守点検業界向けのLINEベースの建設AIアシスタント。
AIアシスタントの名前は「あずさ」（生年月日：2001年4月5日、22歳）。
LINEで写真を送るだけで工事写真報告書が自動生成される（無料）。
i-Reporter と連携している。

### 参考資料
- 紹介スライド（PDF）：`D:\Claude_win\shokunin-docs\職人.new 紹介資料.pdf`
- 元のGoogle Slides：https://docs.google.com/presentation/d/16ZvRatmLpLA0-RiPwTPAq2j8ldRvkxOPrsClU3UU6XQ/

---

## 公開URL（GitHub Pages）

```
https://otias-arika.github.io/shokunin-docs/
```

**GitHubリポジトリ：** https://github.com/otias-arika/shokunin-docs
**GitHubユーザー名：** otias-arika
**デプロイ方式：** GitHub Actions（mainブランチにpushで自動デプロイ）

---

## 開発サーバーの起動方法

```bash
D:
cd Claude_win\shokunin-docs
npm run docs:dev
# ブラウザで http://localhost:5173/shokunin-docs/ を開く
```

---

## フォルダ構成

```
D:\Claude_win\shokunin-docs\
├── package.json
├── HANDOVER.md                         ← この引き継ぎ文書
├── 職人.new 紹介資料.pdf               ← 元のGoogle Slides PDF
├── .github\
│   └── workflows\
│       └── deploy.yml                  ← GitHub Actions 自動デプロイ設定
└── docs\
    ├── index.md                        ← トップページ（ホーム）
    ├── .vitepress\
    │   ├── config.mjs                  ← サイト設定（重要）
    │   └── theme\
    │       ├── index.js                ← テーマ読み込み
    │       └── custom.css              ← ティールグリーンのカスタムCSS
    ├── public\
    │   ├── logo.png                    ← 背景透過済みロゴ
    │   ├── azusa.png                   ← あずさキャラクター画像（PDF抽出・背景透過済み）
    │   ├── video\
    │   │   └── concept-movie.mp4       ← コンセプトムービー（24MB）
    │   │                                  ※元ファイル名：職人new紹介動画ーあずさー.m4v.mp4
    │   │                                  ※Viteが日本語ファイル名を解決できないためASCII名に変更
    │   └── manual\
    │       ├── line_worker_01.png      ← 職人向けスクリーンショット①（友達追加）
    │       ├── line_worker_02.png      ← 職人向けスクリーンショット②（手配通知）
    │       ├── line_worker_03.png      ← 職人向けスクリーンショット③（写真アップ）
    │       ├── manager_login_line.png                 ← 管理者向けログイン画面（LINE）
    │       ├── manager_login_qr.png                   ← 管理者向けログイン画面（QRコード）
    │       ├── manager_login_line_clicked.png         ← LINEログイン押下後のPC画面
    │       ├── manager_login_pc_verification.png      ← 本人確認待ちのPC画面
    │       ├── manager_login_mobile_verify_01.jpg     ← モバイル本人確認画面①
    │       ├── manager_login_mobile_verify_02.jpg     ← モバイル本人確認画面②
    │       ├── manager_login_mobile_verify_03.jpg     ← モバイル本人確認画面③（許可）
    │       ├── manager_login_pc_after_mobile_auth.png ← 認証完了後のPC画面
    │       ├── manager_profile.png                    ← プロフィール画面
    │       ├── manager_dashboard.png                  ← 管理者向けダッシュボード
    │       ├── manager_report_history.png             ← 報告履歴画面
    │       ├── manager_dispatch.png                   ← 管理者向け手配管理画面
    │       ├── manager_user.png                       ← 管理者向けユーザー管理画面
    │       ├── manager_tenant.png                     ← 管理者向けテナント設定画面
    │       └── manager_qr_poster.png                  ← 管理者向けQRポスター画面
    ├── guide\
    │   ├── introduction.md             ← 職人.newとは（あずさ画像・コンセプトムービー含む）
    │   ├── getting-started.md          ← はじめ方
    │   ├── quickstart.md               ← クイックスタート
    │   ├── vision.md                   ← ビジョン
    │   ├── social-issues.md            ← 解決する社会課題
    │   ├── for-worker.md               ← 職人さん向けガイド
    │   ├── for-manager.md              ← 現場管理者向けガイド
    │   └── roadmap.md                  ← アップデート予定
    ├── manual\
    │   ├── for-worker.md               ← 職人さん向けマニュアル
    │   └── for-manager.md              ← 現場管理者向けマニュアル（PC管理画面ベースで作成済み）
    └── features\
        ├── overview.md                 ← 機能一覧（サイドバー登録済み）
        ├── ai.md                       ← AI機能
        ├── dispatch.md                 ← 手配管理機能
        ├── map.md                      ← マップ機能
        ├── calendar.md                 ← カレンダービュー
        ├── signature.md                ← 署名機能
        ├── qr-poster.md                ← 現場QRポスター
        ├── invitation.md               ← 招待・ユーザー承認システム
        ├── multilingual.md             ← 多言語対応
        ├── i-reporter.md               ← i-Reporter連携
        ├── report-download.md          ← 報告書ダウンロード
        └── multi-tenant.md             ← 複数現場・企業の管理
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
    └── 機能一覧（← ここから各機能ページへリンク）
```

**注意：** features/ 配下の各機能ページはサイドバーに個別登録していない。
「機能一覧」ページのテーブルリンク経由でアクセスする設計（意図的）。

---

## サイト更新方法

ファイルを編集後、以下のコマンドで自動デプロイされる：

```bash
git add .
git commit -m "変更内容の説明"
git push
```

pushするだけでGitHub Actionsが自動的にビルド＆デプロイする（約1分）。

**注意：** 画像・動画ファイルを変更・追加した場合も都度pushが必要。
まとめて変更してから1回pushでOK（都度pushする必要はない）。

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

### base設定について
`config.mjs` に `base: '/shokunin-docs/'` が設定されている。
これはGitHub Pages用の設定で、**ローカル開発時も有効**。
ローカルでは `http://localhost:5173/shokunin-docs/` でアクセスする。

### publicフォルダのファイル名について
Vite（VitePressのビルドエンジン）は**日本語・全角文字のファイル名を解決できない**場合がある。
`docs/public/` 配下のファイルは必ずASCII（半角英数字・ハイフン・アンダースコア）で命名すること。
- NG例：`職人new紹介動画ーあずさー.m4v.mp4`
- OK例：`concept-movie.mp4`

### distフォルダについて
`docs/.vitepress/dist/` は VitePress のビルド生成物。
ローカル確認で `npm run docs:build` や `npm run docs:dev` を実行すると更新されるが、**Git管理しない**。
差分確認時にノイズになるため、必要に応じて削除してから再生成してよい。

---

## 今後の作業（未完了）

### 優先度：高
- [ ] 職人向けスクリーンショットを実画面に差し替え
  - **職人向け**（LINE画面）：`docs/public/manual/line_worker_01.png` ～ `03.png`
  - 同じファイル名で上書きするだけでOK
- [x] 管理者向けスクリーンショットを実画面に差し替え済み
  - **管理者向け**（PC画面）：`manager_login_line.png` `manager_login_qr.png` `manager_dashboard.png` `manager_dispatch.png` `manager_user.png` `manager_tenant.png` `manager_qr_poster.png`
  - **認証フロー追加分**：`manager_login_line_clicked.png` `manager_login_pc_verification.png` `manager_login_mobile_verify_01.jpg` `manager_login_mobile_verify_02.jpg` `manager_login_mobile_verify_03.jpg` `manager_login_pc_after_mobile_auth.png`
  - **画面追加分**：`manager_profile.png` `manager_report_history.png`
- [ ] concept-movie.mp4 を GitHub Pages にpush（必要があれば差し替え時のみ）
  - 現在の公開サイトでは反映確認済み

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
| `manager_login_line.png` | 管理者：LINEログイン画面 |
| `manager_login_qr.png` | 管理者：QRコードログイン画面 |
| `manager_login_line_clicked.png` | 管理者：LINEログイン押下後のPC画面 |
| `manager_login_pc_verification.png` | 管理者：本人確認待ちのPC画面 |
| `manager_login_mobile_verify_01.jpg` | 管理者：モバイル本人確認画面① |
| `manager_login_mobile_verify_02.jpg` | 管理者：モバイル本人確認画面② |
| `manager_login_mobile_verify_03.jpg` | 管理者：モバイル本人確認画面③（許可画面） |
| `manager_login_pc_after_mobile_auth.png` | 管理者：認証完了後のPC画面 |
| `manager_profile.png` | 管理者：プロフィール画面 |
| `manager_dashboard.png` | 管理者：ダッシュボード全体（PC画面） |
| `manager_report_history.png` | 管理者：報告履歴画面 |
| `manager_dispatch.png` | 管理者：手配作成フォーム（PC画面） |
| `manager_user.png` | 管理者：ユーザー管理画面（PC画面） |
| `manager_tenant.png` | 管理者：テナント設定画面（PC画面） |
| `manager_qr_poster.png` | 管理者：QRポスター生成画面（PC画面） |

---

## 作業履歴

### 2026-04-02
- Google Slides PDF（職人.new 紹介資料.pdf）をもとに内容を確認
- `guide/introduction.md` にあずさの生年月日を追加
- `guide/vision.md` と `guide/social-issues.md` の重複を解消
- `features/multi-tenant.md` を新規作成（マルチテナントアーキテクチャ）
- GitHub Pages へのデプロイ完了
  - リポジトリ：https://github.com/otias-arika/shokunin-docs
  - 公開URL：https://otias-arika.github.io/shokunin-docs/
  - GitHub Actions による自動デプロイ設定済み

### 2026-04-05
- 未使用の `line_manager_01.png` ～ `03.png` を削除（管理者向け画像は `manager_*.png` に移行済み）
- `HANDOVER.md` を現行の画像構成と公開状況に合わせて更新
- `manual/for-manager.md` を認証フロー込みの9ステップ構成へ更新
  - LINEログイン → 本人確認 → プロフィール → ダッシュボード → 報告履歴 → 手配管理 → QRポスター → ユーザー管理 → テナント設定
- `docs/.vitepress/theme/custom.css` に管理者マニュアル用の共通画像フレームと認証フローカード用スタイルを追加
- 管理者向け追加画像を配置
  - `manager_login_line_clicked.png`
  - `manager_login_pc_verification.png`
  - `manager_login_mobile_verify_01.jpg`
  - `manager_login_mobile_verify_02.jpg`
  - `manager_login_mobile_verify_03.jpg`
  - `manager_login_pc_after_mobile_auth.png`
  - `manager_profile.png`
  - `manager_report_history.png`

### 2026-04-04
- `manual/for-manager.md` をPC管理画面ベースで全面改訂（6ステップ構成）
  - Notion ページ参照：https://www.notion.so/1c9de81e42af807ea8c8f2e1c1b3e735
- `docs/public/azusa.png` を追加（PDF抽出 → Python Pillowで黒背景透過処理）
- `guide/introduction.md` にあずさ画像を追加（flexレイアウトでプロフィールと並列表示）
- `guide/introduction.md` にコンセプトムービーを追加（タイトル直下）
  - 動画ファイル：`docs/public/video/concept-movie.mp4`（24MB）
  - ファイル名を日本語→ASCII に変更（Vite解決エラー回避）
  - ローカル表示確認済み・GitHub Pages反映確認済み

---

## Claude Codeへの引き継ぎ時の最初のメッセージ例

```
D:\Claude_win\shokunin-docs にVitePressのドキュメントサイトがあります。
この引き継ぎ文書（HANDOVER.md）を読んで内容を把握した上で、
作業を続けてください。
```
