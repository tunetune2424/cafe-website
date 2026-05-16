import express from 'express'
import Reservation from '../models/Reservation.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/' ,async (req, res) => {
  try{
    const reservation = new Reservation(req.body)
    await reservation.save()
    res.status(201).json(reservation)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
} )



router.get('/', auth, async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ date: 1 })
    res.json(reservations)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.patch('/:id', auth, async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    )
    res.json(reservation)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router