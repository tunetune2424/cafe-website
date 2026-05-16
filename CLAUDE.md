# CLAUDE.md — 縁側喫茶 むすび庵

ポートフォリオ用の架空カフェHP。作業時はこのファイルを最初に参照すること。

---

## 店舗情報（架空）

| 項目 | 内容 |
|------|------|
| 店名 | 縁側喫茶 むすび庵 |
| 住所 | 長野県上伊那郡飯島町田切123（架空） |
| 電話 | 0265-00-0000（架空） |
| 営業時間 | 11:00〜LO16:30 / Close17:00 |
| 定休日 | 火・水曜日 |

---

## コンセプト・デザイン方針

**キャッチコピー**: 「時間がゆっくり流れる、里山の隠れ家」

**ターゲット**: 長野観光中の旅行者 / カフェ巡りが好きな人 / 古民家・里山好き

**雰囲気**: 自然・温かみ・手作り感。余白多め、ゆったりした構成。

### カラーパレット

| 役割 | カラーコード |
|------|------------|
| メイン（アイボリー） | `#FAF6EF` |
| アクセント（テラコッタ） | `#C1603A` |
| サブ（深緑） | `#3D5A3E` |
| テキスト（ダークブラウン） | `#2C1A0E` |
| 背景（ベージュ） | `#F3EDE2` |

### フォント

- 見出し: **Noto Serif JP**
- 本文: **Noto Sans JP**

---

## 実装状況

### ページ構成

| パス | 内容 | 状態 |
|------|------|------|
| `/` | トップ（全セクション1ページ完結） | ✅ 実装済み |
| `/login` | 管理者ログイン | ✅ 実装済み |
| `/admin` | 管理画面（お知らせCRUD） | ✅ 実装済み |
| `/reservation` | 予約フォーム | 🔨 実装中 |

### トップページセクション

| セクション | 内容 | 状態 |
|-----------|------|------|
| Hero | 里山写真・キャッチコピー・CTAボタン | ✅ |
| About | お店のストーリー・特徴 | ✅ |
| Menu | 写真付きメニュー4品 | ✅ |
| Gallery | 店内・料理・外観7枚グリッド | ✅ |
| News | お知らせ一覧（MongoDB連携） | ✅ |
| Access | 地図・営業時間・住所 | ✅ |

### バックエンド実装状況

| 機能 | 状態 |
|------|------|
| News CRUD（GET/POST/PUT/DELETE） | ✅ |
| JWT認証（ログイン・保護ルート） | ✅ |
| Reservationモデル定義 | ✅ |
| 予約API（POST/GET/PATCH） | 🔨 実装中 |

---

## API エンドポイント

| メソッド | URL | 認証 | 状態 |
|---------|-----|------|------|
| POST | `/api/auth/login` | 不要 | ✅ |
| GET | `/api/news` | 不要 | ✅ |
| POST | `/api/news` | 必要 | ✅ |
| PUT | `/api/news/:id` | 必要 | ✅ |
| DELETE | `/api/news/:id` | 必要 | ✅ |
| POST | `/api/reservations` | 不要 | 🔨 |
| GET | `/api/reservations` | 必要 | 🔨 |
| PATCH | `/api/reservations/:id` | 必要 | 🔨 |

---

## DB スキーマ（Reservation）

```js
{
  name:    String,   // 予約者名（必須）
  email:   String,   // メール（必須）
  phone:   String,   // 電話（必須）
  date:    Date,     // 予約日時（必須）
  guests:  Number,   // 人数 1〜20（必須）
  message: String,   // 備考（任意、default: ''）
  status:  String,   // 'pending' | 'confirmed' | 'cancelled'（default: 'pending'）
}
```

---

## デプロイ先

| 対象 | サービス | URL |
|------|---------|-----|
| フロントエンド | Vercel | https://cafe-website-three-theta.vercel.app |
| バックエンド | Railway | — |

---

## 環境変数

```bash
# フロントエンド（.env）
VITE_API_URL=http://localhost:3001

# バックエンド（server/.env）
PORT=3001
MONGODB_URI=mongodb+srv://...
JWT_SECRET=任意の文字列
```
