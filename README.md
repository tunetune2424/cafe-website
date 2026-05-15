# 縁側喫茶 むすび庵 — カフェホームページ

長野の里山にある古民家カフェをイメージした架空のホームページです。お知らせ管理・JWT認証・予約機能を実装しています。

## デモ

- **サイト**: https://cafe-website-three-theta.vercel.app
- **管理画面**: https://cafe-website-three-theta.vercel.app/login

## 技術スタック

| カテゴリ | 技術 |
|---|---|
| フロントエンド | React 19 / Vite / Tailwind CSS v4 / React Router |
| バックエンド | Node.js / Express |
| データベース | MongoDB Atlas / Mongoose |
| 認証 | JWT (jsonwebtoken) / bcrypt |
| デプロイ（フロント） | Vercel |
| デプロイ（バックエンド） | Railway |

## 主な機能

| 機能 | 状態 |
|---|---|
| ホームページ（Hero / About / Menu / Gallery / お知らせ / Access） | ✅ 実装済み |
| お知らせ表示（MongoDB 連携） | ✅ 実装済み |
| 管理画面（お知らせ投稿・削除） | ✅ 実装済み |
| JWT 認証（ログイン・保護ルート） | ✅ 実装済み |
| 予約フォーム（名前・日時・人数等） | 🔨 実装中 |
| 予約 API（POST / GET） | 🔨 実装中 |
| 予約確認メール（Nodemailer） | 📋 予定 |
| 管理画面 — 予約一覧・ステータス管理 | 📋 予定 |

## ディレクトリ構成

```
cafe-website/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # トップページ
│   │   ├── Reservation.jsx   # 予約ページ（実装中）
│   │   ├── Admin.jsx         # 管理画面
│   │   └── Login.jsx         # ログインページ
│   └── components/
│       ├── Header.jsx
│       └── Footer.jsx
├── server/
│   ├── index.js              # Express サーバー
│   ├── models/
│   │   ├── News.js           # お知らせスキーマ
│   │   ├── Reservation.js    # 予約スキーマ
│   │   └── User.js           # ユーザースキーマ（bcrypt ハッシュ化）
│   ├── routes/
│   │   ├── news.js           # お知らせ API（CRUD）
│   │   ├── reservation.js    # 予約 API（実装中）
│   │   └── auth.js           # 認証 API
│   ├── middleware/
│   │   └── auth.js           # JWT 検証ミドルウェア
│   └── seed.js               # 管理者ユーザー初期登録スクリプト
└── vercel.json               # Vercel SPA ルーティング設定
```

## API エンドポイント

| メソッド | パス | 説明 | 認証 |
|---|---|---|---|
| GET | /api/news | お知らせ一覧取得 | 不要 |
| GET | /api/news/admin | お知らせ一覧取得（管理用） | 必要 |
| POST | /api/news/admin | お知らせ作成 | 必要 |
| PUT | /api/news/admin/:id | お知らせ更新 | 必要 |
| DELETE | /api/news/admin/:id | お知らせ削除 | 必要 |
| POST | /api/auth/login | ログイン・トークン発行 | 不要 |
| POST | /api/reservations | 予約作成 | 不要 |
| GET | /api/reservations | 予約一覧取得 | 必要 |
| PATCH | /api/reservations/:id | 予約ステータス更新 | 必要 |

## ローカル開発環境の構築

### 必要なもの

- Node.js 18 以上
- MongoDB Atlas アカウント（または MongoDB ローカル）

### 手順

1. リポジトリをクローン

```bash
git clone https://github.com/tunetune2424/cafe-website.git
cd cafe-website
```

2. フロントエンドの依存関係をインストール

```bash
npm install
```

3. バックエンドの依存関係をインストール

```bash
cd server
npm install
```

4. 環境変数を設定

```bash
# cafe-website/.env
VITE_API_URL=http://localhost:3001

# cafe-website/server/.env
PORT=3001
MONGODB_URI=mongodb+srv://<ユーザー名>:<パスワード>@<クラスター>.mongodb.net/<DB名>
JWT_SECRET=任意の文字列
```

5. 管理者ユーザーを作成

```bash
cd server
node seed.js
```

6. サーバーを起動（ターミナル 2 つ）

```bash
# バックエンド
cd server && npm run dev

# フロントエンド
npm run dev
```

7. ブラウザで確認

```
http://localhost:5173
```
