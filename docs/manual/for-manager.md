# 現場管理者向けマニュアル

管理画面はPC（ブラウザ）から操作します。LINE認証でログインし、職人さんの承認、手配、報告確認、QRポスター発行まで一通り管理できます。

> **管理画面URL：** [https://snewdev-cnf5heg2bwfqhgfm.japaneast-01.azurewebsites.net/](https://snewdev-cnf5heg2bwfqhgfm.japaneast-01.azurewebsites.net/)

---

## Step 1：ログイン画面を開く

まず管理画面へアクセスします。ログイン方法は2種類あります。

### LINEでログイン

<div class="manual-screen-frame">
  <div class="manual-screen-frame__header">LINEログイン画面</div>
  <div class="manual-screen-frame__viewport">
    <img src="/manual/manager_login_line.png" alt="LINEログイン画面">
  </div>
</div>

LINEアカウントと連携してログインする方法です。はじめて使う場合はこちらが分かりやすいです。

### QRコードでログイン

<div class="manual-screen-frame">
  <div class="manual-screen-frame__header">QRコードログイン画面</div>
  <div class="manual-screen-frame__viewport">
    <img src="/manual/manager_login_qr.png" alt="QRコードログイン画面">
  </div>
</div>

PC画面に表示されたQRコードを、LINEの読み取り機能でスキャンしてログインする方法です。

---

## Step 2：モバイル端末で本人確認する

「LINEでログイン」を押すと、PC側では認証待ち画面に切り替わります。モバイル端末側で本人確認を進めると、認証完了後にPC画面が次へ遷移します。

**認証の流れ：**

1. PCで「LINEでログイン」をクリック
2. スマホ側のLINE認証画面で本人確認
3. 「許可する」を押す
4. PC側のプロフィール画面へ自動遷移

<div class="manual-auth-sequence">
  <div class="manual-auth-card">
    <div class="manual-auth-card__title">PC側 1. LINEでログインをクリック</div>
    <div class="manual-auth-card__body">
      <div class="manual-auth-desktop">
        <img src="/manual/manager_login_line_clicked.png" alt="LINEでログインをクリックした画面">
      </div>
    </div>
  </div>

  <div class="manual-auth-card">
    <div class="manual-auth-card__title">PC側 2. 本人確認待ち画面に切り替わる</div>
    <div class="manual-auth-card__body">
      <div class="manual-auth-desktop">
        <img src="/manual/manager_login_pc_verification.png" alt="本人確認待ち画面">
      </div>
    </div>
  </div>

  <div class="manual-auth-card">
    <div class="manual-auth-card__title">モバイル端末側 3. LINEで本人確認を進める</div>
    <div class="manual-auth-card__body">
      <p class="manual-auth-note">スマホ側では確認画面が順に表示されます。左右の2枚のあと、最後に「許可する」画面が出ます。</p>
      <div class="manual-auth-phone-row">
        <div class="manual-auth-phone">
          <img src="/manual/manager_login_mobile_verify_01.jpg" alt="モバイル端末の本人確認画面 1">
        </div>
        <div class="manual-auth-phone">
          <img src="/manual/manager_login_mobile_verify_02.jpg" alt="モバイル端末の本人確認画面 2">
        </div>
      </div>
      <div class="manual-auth-phone manual-auth-phone--single">
        <img src="/manual/manager_login_mobile_verify_03.jpg" alt="モバイル端末の本人確認画面 3">
      </div>
    </div>
  </div>

  <div class="manual-auth-card">
    <div class="manual-auth-card__title">PC側 4. 認証が終わると次画面へ遷移</div>
    <div class="manual-auth-card__body">
      <div class="manual-auth-desktop manual-auth-desktop--scroll">
        <img src="/manual/manager_login_pc_after_mobile_auth.png" alt="認証完了後のPC画面">
      </div>
    </div>
  </div>
</div>

> 管理画面へのログインは、PCとモバイル端末を連携させて行う流れです。PCだけで完結せず、スマホ側の許可操作が完了するとプロフィール画面へ進みます。

---

## Step 3：プロフィール画面を確認する

本人確認が終わるとプロフィール画面へ進みます。ここからダッシュボードへ移動して管理業務を開始します。

<div class="manual-screen-frame">
  <div class="manual-screen-frame__header">プロフィール画面</div>
  <div class="manual-screen-frame__viewport">
    <img src="/manual/manager_profile.png" alt="プロフィール画面">
  </div>
</div>

**ここで確認すること：**

- ログインユーザー情報
- テナントへの所属状態
- ダッシュボードへの導線

---

## Step 4：ダッシュボードで全体を把握する

ログイン後の起点になるのがダッシュボードです。現場全体の状況や最近の動きがすぐ分かります。

<div class="manual-screen-frame">
  <div class="manual-screen-frame__header">ダッシュボード</div>
  <div class="manual-screen-frame__viewport">
    <img src="/manual/manager_dashboard.png" alt="ダッシュボード">
  </div>
</div>

**ダッシュボードで確認できること：**

- 報告書の総数
- 活動中の現場数
- 手配済み・完了の件数
- 進行中案件の一覧

---

## Step 5：報告履歴を確認する

報告履歴では、職人さんから提出された報告内容を時系列で確認できます。写真付きの報告がどの現場から上がっているかを追いやすい画面です。

<div class="manual-screen-frame">
  <div class="manual-screen-frame__header">報告履歴画面</div>
  <div class="manual-screen-frame__viewport">
    <img src="/manual/manager_report_history.png" alt="報告履歴画面">
  </div>
</div>

**主な確認ポイント：**

- どの現場の報告か
- いつ報告されたか
- 写真やコメントが揃っているか
- 未確認の報告が残っていないか

---

## Step 6：手配管理で作業を依頼する

職人さんへ作業内容をLINEで送信します。

<div class="manual-screen-frame">
  <div class="manual-screen-frame__header">手配管理画面</div>
  <div class="manual-screen-frame__viewport">
    <img src="/manual/manager_dispatch.png" alt="手配管理画面">
  </div>
</div>

**手配作成の入力項目：**

1. **担当ユーザー** — 職人さんを選択
2. **工事名** — 作業内容の名称
3. **工事番号** — 管理番号
4. **発注者** — お客様の名前
5. **報告者** — 担当職人の名前
6. **工事予定日** — 作業予定日
7. **工事住所** — 現場の住所（Google Mapsリンクが自動生成）

入力後「**更新する**」で保存します。通知を送ると、職人さんのLINEに手配内容が届きます。

> 「下書き保存」で後から送信することもできます。

---

## Step 7：QRポスターを生成する

現場掲示用のQRポスターを発行できます。職人さんはこのQRからLINEに入り、対象工事へスムーズに参加できます。

<div class="manual-screen-frame">
  <div class="manual-screen-frame__header">QRポスター生成画面</div>
  <div class="manual-screen-frame__viewport">
    <img src="/manual/manager_qr_poster.png" alt="QRポスター生成画面">
  </div>
</div>

**手順：**

1. 管理画面で工事情報を入力
2. 「**QRポスターを生成**」をクリック
3. 印刷して現場へ掲示
4. 職人さんがスマホで読み取る

---

## Step 8：ユーザー管理で承認する

職人さんの登録・承認を管理します。

<div class="manual-screen-frame">
  <div class="manual-screen-frame__header">ユーザー管理画面</div>
  <div class="manual-screen-frame__viewport">
    <img src="/manual/manager_user.png" alt="ユーザー管理画面">
  </div>
</div>

### 主な操作

1. 「ユーザー管理」を開く
2. 承認待ちユーザーを確認
3. 「**承認**」または「**却下**」を実行
4. 必要に応じて保留や削除を行う

### 画面でできること

- 名前・メール・電話番号・会社名で検索
- 承認待ち / 承認済み / 却下 で絞り込み
- 3点メニューから保留・却下・削除
- 管理者権限の付与

---

## Step 9：テナント設定を確認する

現場や企業単位の設定はテナント設定で管理します。

<div class="manual-screen-frame">
  <div class="manual-screen-frame__header">テナント設定画面（枠内をスクロールして全体を確認できます）</div>
  <div class="manual-screen-frame__viewport">
    <img src="/manual/manager_tenant.png" alt="テナント設定画面">
  </div>
</div>

**設定できる内容：**

- LINE Bot の接続設定
- i-Reporter の接続設定
- AI関連の設定
- 招待リンクの生成
- テナント情報の編集

---

## まとめ

管理者向け画面では、

- LINE認証でログイン
- 現場全体の進捗を把握
- 手配を作成して通知
- 報告履歴を確認
- ユーザー承認とテナント設定を管理

という流れで日々の運用ができます。

::: tip 補足
Notion の「実践 ScreenShot 管理画面 シームレス版」に合わせて、ログインから各管理画面までの流れが追える構成にしています。
:::
