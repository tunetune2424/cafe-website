import { useState, useEffect } from 'react'

const TOKEN = () => localStorage.getItem('token')
const API = import.meta.env.VITE_API_URL

function Admin() {
  const [tab, setTab] = useState('news')

  // --- お知らせ ---
  const [newsList, setNewsList] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [publishedAt, setPublishedAt] = useState('')

  const fetchNews = () => {
    fetch(`${API}/api/news/admin`, {
      headers: { Authorization: `Bearer ${TOKEN()}` },
    })
      .then(res => res.json())
      .then(data => setNewsList(data))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${API}/api/news/admin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN()}` },
      body: JSON.stringify({ title, body, publishedAt }),
    }).then(() => {
      setTitle('')
      setBody('')
      setPublishedAt('')
      fetchNews()
    })
  }

  const handleDelete = (id) => {
    fetch(`${API}/api/news/admin/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${TOKEN()}` },
    }).then(() => fetchNews())
  }

  // --- 予約 ---
  const [reservations, setReservations] = useState([])

  const fetchReservations = () => {
    fetch(`${API}/api/reservations`, {
      headers: { Authorization: `Bearer ${TOKEN()}` },
    })
      .then(res => res.json())
      .then(data => setReservations(data))
  }

  const handleStatusChange = (id, status) => {
    fetch(`${API}/api/reservations/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN()}` },
      body: JSON.stringify({ status }),
    }).then(() => fetchReservations())
  }

  useEffect(() => {
    fetchNews()
    fetchReservations()
  }, [])

  const statusLabel = {
    pending:   { text: '未確認',   color: '#B45309' },
    confirmed: { text: '確認済み', color: '#3D5A3E' },
    cancelled: { text: 'キャンセル', color: '#9B1C1C' },
  }

  return (
    <main className="max-w-[720px] mx-auto py-16 px-8">
      <h1 className="font-serif text-2xl mb-8 text-[#2C1A0E]">むすび庵 — 管理画面</h1>

      {/* タブ */}
      <div className="flex gap-4 mb-10 border-b border-[rgba(44,26,14,0.15)]">
        {['news', 'reservation'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="pb-2 text-sm tracking-wide transition-colors"
            style={{
              color: tab === t ? '#C1603A' : '#7A5C42',
              borderBottom: tab === t ? '2px solid #C1603A' : '2px solid transparent',
            }}
          >
            {t === 'news' ? 'お知らせ管理' : '予約管理'}
          </button>
        ))}
      </div>

      {/* お知らせタブ */}
      {tab === 'news' && (
        <>
          <form onSubmit={handleSubmit} className="mb-12 flex flex-col gap-4">
            <input
              type="text"
              placeholder="タイトル"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              className="border border-[rgba(44,26,14,0.2)] px-4 py-2 text-sm"
            />
            <textarea
              placeholder="本文"
              value={body}
              onChange={e => setBody(e.target.value)}
              required
              rows={4}
              className="border border-[rgba(44,26,14,0.2)] px-4 py-2 text-sm"
            />
            <input
              type="date"
              value={publishedAt}
              onChange={e => setPublishedAt(e.target.value)}
              required
              className="border border-[rgba(44,26,14,0.2)] px-4 py-2 text-sm"
            />
            <button type="submit" className="bg-[#C1603A] text-[#FAF6EF] py-2 text-sm tracking-[0.15em]">
              投稿する
            </button>
          </form>

          <div className="border-t border-[rgba(44,26,14,0.15)]">
            {newsList.map(item => (
              <div key={item._id} className="flex items-baseline justify-between py-4 border-b border-[rgba(44,26,14,0.1)]">
                <div>
                  <span className="text-xs text-[#7A5C42] mr-4">{new Date(item.publishedAt).toLocaleDateString('ja-JP')}</span>
                  <span className="text-sm">{item.title}</span>
                </div>
                <button onClick={() => handleDelete(item._id)} className="text-xs text-[#C1603A] ml-4">削除</button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 予約タブ */}
      {tab === 'reservation' && (
        <div className="border-t border-[rgba(44,26,14,0.15)]">
          {reservations.length === 0 && (
            <p className="text-sm text-[#7A5C42] py-8 text-center">予約はありません</p>
          )}
          {reservations.map(r => (
            <div key={r._id} className="py-5 border-b border-[rgba(44,26,14,0.1)]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#7A5C42]">{new Date(r.date).toLocaleDateString('ja-JP')}</span>
                  <span className="text-sm font-medium text-[#2C1A0E]">{r.name}</span>
                  <span className="text-xs text-[#7A5C42]">{r.guests}名</span>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded"
                  style={{
                    color: statusLabel[r.status]?.color,
                    background: `${statusLabel[r.status]?.color}18`,
                  }}
                >
                  {statusLabel[r.status]?.text}
                </span>
              </div>
              <div className="text-xs text-[#7A5C42] mb-3">
                {r.email} / {r.phone}
              </div>
              {r.message && (
                <p className="text-xs text-[#2C1A0E] mb-3 bg-[#FAF6EF] px-3 py-2 rounded">{r.message}</p>
              )}
              <div className="flex gap-2">
                <button
                  onClick={() => handleStatusChange(r._id, 'confirmed')}
                  disabled={r.status === 'confirmed'}
                  className="text-xs px-3 py-1 rounded border transition-opacity disabled:opacity-30"
                  style={{ borderColor: '#3D5A3E', color: '#3D5A3E' }}
                >
                  確認済みにする
                </button>
                <button
                  onClick={() => handleStatusChange(r._id, 'cancelled')}
                  disabled={r.status === 'cancelled'}
                  className="text-xs px-3 py-1 rounded border transition-opacity disabled:opacity-30"
                  style={{ borderColor: '#9B1C1C', color: '#9B1C1C' }}
                >
                  キャンセル
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

export default Admin
