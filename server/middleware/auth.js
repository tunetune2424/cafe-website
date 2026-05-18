import jwt from 'jsonwebtoken'

// Authorization ヘッダーの Bearer トークンを検証し、管理者 API を保護するミドルウェア
export default function authMiddleware(req, res, next) {
  // "Bearer <token>" の形式からトークン部分だけ取り出す
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ message: '認証が必要です' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded // 後続のハンドラーでユーザー情報を参照できるよう付与
    next()
  } catch {
    res.status(401).json({ message: 'トークンが無効です' })
  }
}
