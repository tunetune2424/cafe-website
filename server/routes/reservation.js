import express from 'express'
import Reservation from '../models/Reservation.js'
import auth from '../middleware/auth.js'

const router = express.Router()

// 予約作成（認証不要・お客様が送信）
router.post('/' ,async (req, res) => {
  try{
    const reservation = new Reservation(req.body)
    await reservation.save()
    res.status(201).json(reservation)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
} )

// 予約一覧取得（管理者のみ・予約日昇順）
router.get('/', auth, async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ date: 1 })
    res.json(reservations)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// 予約ステータス更新（管理者のみ：pending / confirmed / cancelled）
router.patch('/:id', auth, async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true } // 更新後のドキュメントを返す
    )
    res.json(reservation)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router