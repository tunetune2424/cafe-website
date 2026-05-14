import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import newsRouter from './routes/news.js'
import authRouter from './routes/auth.js'


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/news', newsRouter)
app.use('/api/auth', authRouter)

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB 接続成功'))
  .catch((err) => console.error('MongoDB 接続失敗:', err))

app.listen(process.env.PORT, () => {
  console.log(`サーバー起動: http://localhost:${process.env.PORT}`)
})
