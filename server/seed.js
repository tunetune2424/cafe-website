import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './models/User.js'

dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)

const existing = await User.findOne({ username: 'admin' })
if (existing) {
  console.log('すでに存在します')
} else {
  await User.create({ username: 'admin', password: 'cafe2026' })
  console.log('管理者ユーザーを作成しました')
}

await mongoose.disconnect()
