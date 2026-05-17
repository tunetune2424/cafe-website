import { useState, useEffect } from 'react'

function Home() {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/news`)
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])

    return (
        <main>
            {/* Hero */}
            <section className="h-screen relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero.webp"
                        alt="縁側喫茶むすび庵の外観 - 長野の里山に佇む古民家カフェ"
                        className="w-full h-full object-cover"
                        fetchpriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(61,90,62,0.5)] via-[rgba(44,26,14,0.4)] to-[rgba(44,26,14,0.6)]" />
                </div>
                <div className="relative text-center text-[#FAF6EF] px-6">
                    <p className="text-xs tracking-[0.4em] text-[rgba(250,246,239,0.75)] mb-5">
                        NAGANO / SATOYAMA / KOMINKA
                    </p>
                    <h1 className="font-serif text-4xl leading-relaxed tracking-widest mb-3"
                        style={{ textShadow: '0 2px 16px rgba(44,26,14,0.4)' }}>
                        時間がゆっくり流れる、<br />里山の隠れ家
                    </h1>
                    <p className="text-sm tracking-[0.35em] text-[rgba(250,246,239,0.85)] mb-12">
                        縁側喫茶 むすび庵
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="#menu"
                            className="px-9 py-3.5 text-xs tracking-[0.25em] bg-[#C1603A] text-[#FAF6EF] border border-[#C1603A] hover:bg-transparent transition-all">
                            メニューを見る
                        </a>
                        <a href="#access"
                            className="px-9 py-3.5 text-xs tracking-[0.25em] text-[#FAF6EF] border border-[rgba(250,246,239,0.6)] hover:bg-[rgba(250,246,239,0.15)] transition-all">
                            アクセス
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-[rgba(250,246,239,0.6)]">
                    SCROLL
                    <span className="block w-px h-10 bg-[rgba(250,246,239,0.4)]" />
                </div>
            </section>

            {/* About */}
            <section className="py-24 px-8">
                <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="aspect-[4/3] relative overflow-hidden">
                        <img
                            src="/images/about-interior.webp"
                            alt="縁側喫茶むすび庵の店内 - 築100年の古民家をリノベーション"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <h2 className="font-serif text-[22px] leading-[1.7] mb-6 text-[#3D5A3E]">
                            里山の空気と縁側で<br />ととのう、ゆるやかな時間を
                        </h2>
                        <p className="text-[#7A5C42] mb-4 leading-[2]">
                            築100年の古民家をリノベーションした隠れ家カフェ。四季折々の里山の景色を眺めながら、手しごとの料理とお茶でゆったりとした時間をお過ごしください。
                        </p>
                        <p className="text-[#7A5C42] mb-4 leading-[2]">
                            創業2010年。地元の農家から直接仕入れた野菜や果物を使い、毎日丁寧に仕込んでいます。
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            {['古民家カフェ', '縁側', '里山', '手しごと'].map(tag => (
                                <span key={tag} className="text-[11px] px-3.5 py-1 border border-[#3D5A3E] text-[#3D5A3E] tracking-[0.15em]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu */}
            <section className="py-24 px-8 bg-[#F3EDE2]">
                <div className="max-w-[1000px] mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xs tracking-[0.35em] text-[#7A5C42]">MENU</p>
                        <span className="block font-serif text-[28px] text-[#2C1A0E] tracking-[0.15em] mt-2">お食事・お飲み物</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: '季節の野菜定食', desc: '地元農家から直送の旬野菜を使った日替わり定食。土の恵みをそのままに。', img: '/images/menu-teishoku.webp' },
                            { name: '自家製あんこのぜんざい', desc: '毎朝丁寧に炊き上げた粒あんと、やわらかいお餅の組み合わせ。', img: '/images/menu-zenzai.webp' },
                            { name: '地元産ハーブティー', desc: '庭で育てたハーブをブレンド。季節によって香りが変わります。', img: '/images/menu-herbtea.webp' },
                            { name: '手作りわらびもち', desc: '数量限定・売り切れ次第終了。きな粉と黒蜜でどうぞ。', img: '/images/menu-warabimochi.webp' },
                        ].map(({ name, desc, img }) => (
                            <div key={name} className="bg-[#FAF6EF] overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <img
                                        src={img}
                                        alt={name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-serif text-[15px] mb-1.5 tracking-[0.08em]">{name}</h3>
                                    <p className="text-xs text-[#7A5C42] leading-[1.7] mb-3">{desc}</p>
                                    <span className="text-[13px] text-[#C1603A]">¥ —</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-6 text-xs text-[#7A5C42] tracking-[0.1em]">
                        ※ 価格は店頭にてご確認ください
                    </p>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 px-8">
                <div className="max-w-[1000px] mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xs tracking-[0.35em] text-[#7A5C42]">GALLERY</p>
                        <span className="block font-serif text-[28px] text-[#2C1A0E] tracking-[0.15em] mt-2">ギャラリー</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { label: '店内風景', img: '/images/gallery-interior.webp', wide: false },
                            { label: '料理', img: '/images/gallery-food.webp', wide: false },
                            { label: 'やちむん', img: '/images/gallery-yachimun.webp', wide: false },
                            { label: '外観', img: '/images/gallery-exterior.webp', wide: false },
                            { label: 'テラス席', img: '/images/gallery-terrace.webp', wide: false },
                            { label: '庭の全景', img: '/images/gallery-garden.webp', wide: true },
                            { label: '置物', img: '/images/gallery-shisa.webp', wide: false },
                        ].map(({ label, img, wide }) => (
                            <div
                                key={label}
                                className={`relative overflow-hidden cursor-pointer group ${wide ? 'col-span-2 aspect-[2/1]' : 'aspect-square'}`}
                            >
                                <img
                                    src={img}
                                    alt={label}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-[rgba(44,26,14,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-[#FAF6EF] text-xs tracking-[0.2em]">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* News */}
            <section className="py-24 px-8 bg-[#F3EDE2]">
                <div className="max-w-[720px] mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xs tracking-[0.35em] text-[#7A5C42]">NEWS</p>
                        <span className="block font-serif text-[28px] text-[#2C1A0E] tracking-[0.15em] mt-2">お知らせ</span>
                    </div>
                    <div className="border-t border-[rgba(44,26,14,0.15)]">
                        {news.map((item) => (
                            <div key={item._id} className="flex items-baseline gap-8 py-5 border-b border-[rgba(44,26,14,0.1)]">
                                <span className="text-xs text-[#7A5C42] tracking-[0.1em] whitespace-nowrap min-w-[80px]">
                                    {new Date(item.publishedAt).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
                                </span>
                                <span className="text-sm text-[#2C1A0E] tracking-[0.05em]">{item.title}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Access */}
            <section className="py-24 px-8">
                <div className="text-center mb-12">
                    <p className="text-xs tracking-[0.35em] text-[#7A5C42]">ACCESS</p>
                    <span className="block font-serif text-[28px] text-[#2C1A0E] tracking-[0.15em] mt-2">アクセス</span>
                </div>
                <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="aspect-[4/3] relative overflow-hidden group">
                        <img
                            src="/images/map-placeholder.webp"
                            alt="縁側喫茶むすび庵の周辺地図 - 長野県上伊那郡飯島町"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[rgba(61,90,62,0.15)]" />
                        <a
                            href="https://maps.google.com/?q=長野県上伊那郡飯島町"
                            target="_blank"
                            rel="noreferrer"
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.2em] text-[#FAF6EF] bg-[#C1603A] px-5 py-2.5 no-underline whitespace-nowrap hover:bg-[#a84f2e] transition-colors"
                        >
                            Google Maps で開く
                        </a>
                    </div>
                    <div>
                        <h3 className="font-serif text-lg mb-7 text-[#3D5A3E]">縁側喫茶 むすび庵</h3>
                        <table className="w-full border-collapse">
                            {[
                                { label: '住所', value: '長野県上伊那郡飯島町田切123（架空）' },
                                { label: '電話', value: '0265-00-0000（架空）' },
                                { label: '営業時間', value: '11:00 〜 L.O. 16:30 / Close 17:00' },
                                { label: '定休日', value: '火・水曜日' },
                            ].map(({ label, value }) => (
                                <tr key={label} className="border-b border-[rgba(44,26,14,0.1)]">
                                    <td className="py-3.5 text-[11px] tracking-[0.15em] text-[#7A5C42] w-20 align-top pt-4">{label}</td>
                                    <td className="py-3.5 text-sm">{value}</td>
                                </tr>
                            ))}
                        </table>
                        <div className="mt-6 text-xs text-[#7A5C42] leading-[1.9] p-4 bg-[rgba(61,90,62,0.06)] border-l-2 border-[#3D5A3E]">
                            駐車場あり。里山の細道に位置するため、カーナビ使用の場合は電話番号での検���を推奨します。
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Home
