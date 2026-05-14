# やちむん喫茶 シーサー園 — カフェホームページ

沖縄テイストのカフェをイメージした架空のホームページです。お知らせの投稿・管理機能とJWT認証を実装しています。

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

- **ホームページ** — Hero / About / Menu / Gallery / お知らせ / Access セクション
- **お知らせ表示** — MongoDB から取得したお知らせをトップページに表示
- **管理画面** — お知らせの投稿・削除（ログイン必須）
- **JWT認証** — ログインするとトークンを発行、管理画面を保護

## ディレクトリ構成

```
cafe-website/
├── src/
│   ├── pages/
│   │   ├── Home.jsx       # トップページ
│   │   ├── Admin.jsx      # 管理画面
│   │   └── Login.jsx      # ログインページ
│   └── components/
│       ├── Header.jsx
│       └── Footer.jsx
├── server/
│   ├── index.js           # Expressサーバー
│   ├── models/
│   │   ├── News.js        # お知らせスキーマ
│   │   └── User.js        # ユーザースキーマ（bcryptハッシュ化）
│   ├── routes/
│   │   ├── news.js        # お知らせAPI（CRUD）
│   │   └── auth.js        # 認証API
│   ├── middleware/
│   │   └── auth.js        # JWT検証ミドルウェア
│   └── seed.js            # 管理者ユーザー初期登録スクリプト
└── vercel.json            # Vercel SPAルーティング設定
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

## ローカル開発環境の構築

### 必要なもの

- Node.js 18以上
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

6. サーバーを起動（ターミナル2つ）

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
