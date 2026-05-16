import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Reservation() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 1,
    message: '',
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', phone: '', date: '', guests: 1, message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#F3EDE2' }}>
        <div className="text-center">
          <p className="text-2xl mb-2" style={{ color: '#3D5A3E' }}>ご予約ありがとうございます</p>
          <p className="mb-8" style={{ color: '#2C1A0E' }}>確認後、ご連絡いたします。</p>
          <Link
            to="/"
            className="px-6 py-3 rounded text-white"
            style={{ background: '#C1603A' }}
          >
            トップページへ戻る
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4" style={{ background: '#F3EDE2' }}>
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl text-center mb-10" style={{ fontFamily: 'Noto Serif JP', color: '#2C1A0E' }}>
          ご予約
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col gap-1">
            <span style={{ color: '#2C1A0E' }}>お名前 <span className="text-red-500">*</span></span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="border rounded px-3 py-2 bg-white"
              style={{ borderColor: '#C1603A' }}
            />
          </label>

          <label className="flex flex-col gap-1">
            <span style={{ color: '#2C1A0E' }}>メールアドレス <span className="text-red-500">*</span></span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="border rounded px-3 py-2 bg-white"
              style={{ borderColor: '#C1603A' }}
            />
          </label>

          <label className="flex flex-col gap-1">
            <span style={{ color: '#2C1A0E' }}>電話番号 <span className="text-red-500">*</span></span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="border rounded px-3 py-2 bg-white"
              style={{ borderColor: '#C1603A' }}
            />
          </label>

          <label className="flex flex-col gap-1">
            <span style={{ color: '#2C1A0E' }}>予約日 <span className="text-red-500">*</span></span>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="border rounded px-3 py-2 bg-white"
              style={{ borderColor: '#C1603A' }}
            />
          </label>

          <label className="flex flex-col gap-1">
            <span style={{ color: '#2C1A0E' }}>人数 <span className="text-red-500">*</span></span>
            <input
              type="number"
              name="guests"
              value={form.guests}
              onChange={handleChange}
              min={1}
              max={20}
              required
              className="border rounded px-3 py-2 bg-white"
              style={{ borderColor: '#C1603A' }}
            />
          </label>

          <label className="flex flex-col gap-1">
            <span style={{ color: '#2C1A0E' }}>備考</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="border rounded px-3 py-2 bg-white resize-none"
              style={{ borderColor: '#C1603A' }}
            />
          </label>

          {status === 'error' && (
            <p className="text-red-500 text-sm">送信に失敗しました。もう一度お試しください。</p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="py-3 rounded text-white font-bold transition-opacity hover:opacity-80"
            style={{ background: '#C1603A' }}
          >
            {status === 'loading' ? '送信中...' : '予約する'}
          </button>
        </form>
      </div>
    </div>
  )
}
