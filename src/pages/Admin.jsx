import { useState, useEffect } from 'react'

function Admin() {
    const [newsList, setNewsList] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [publishedAt, setPublishedAt] = useState('')

    const fetchNews = () => {
        const token = localStorage.getItem('token')
        fetch(`${import.meta.env.VITE_API_URL}/api/news/admin`, {
            headers: { 'Authorization' : `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => setNewsList(data))
    }

    useEffect(() => {
        fetchNews()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${import.meta.env.VITE_API_URL}/api/news/admin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ title, body, publishedAt })
        })
        
            .then(res => res.json())
            .then(() => {
                setTitle('')
                setBody('')
                setPublishedAt('')
                fetchNews()
            })
    }

    const handleDelete = (id) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/news/admin/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then(() => fetchNews())
    }

    return (
        <main className="max-w-[720px] mx-auto py-16 px-8">
            <h1 className="font-serif text-2xl mb-10 text-[#2C1A0E]">むすび庵 — 管理画面</h1>

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
        </main>
    )
}

export default Admin
