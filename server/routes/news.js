import express from 'express'
import News from '../models/News.js'
import authMiddleware from '../middleware/auth.js' 

const router = express.Router()

// 公開用：タイトルと日付のみ返す
router.get('/', async (req, res) => {
  try {
    const news = await News.find().sort({ publishedAt: -1 })
    res.json(news)
  } catch (err) {
    res.status(500).json({ message: 'サーバーエラー' })
  }
})

// 管理用：全フィールド返す
router.get('/admin',authMiddleware, async (req, res) => {
  try {
    const news = await News.find().sort({ publishedAt: -1 })
    res.json(news)
  } catch (err) {
    res.status(500).json({ message: 'サーバーエラー' })
  }
})

// 新規作成
router.post('/admin',authMiddleware, async (req, res) => {
  try {
    const news = await News.create(req.body)
    res.status(201).json(news)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// 更新
router.put('/admin/:id',authMiddleware, async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(news)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// 削除
router.delete('/admin/:id',authMiddleware,async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id)
    res.json({ message: '削除しました' })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router
