import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema(
  {
    title:       { type: String, required: true },
    body:        { type: String, required: true },
    publishedAt: { type: Date,   required: true },
  },
  { timestamps: true }
)

export default mongoose.model('News', newsSchema)
