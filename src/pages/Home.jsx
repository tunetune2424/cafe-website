function Home() {
    return (
        <main>
            {/* Hero */}
            <section className="h-screen relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0"
                    style={{
                        background: `
                linear-gradient(160deg, rgba(61,90,62,0.72) 0%, rgba(44,26,14,0.55) 60%, rgba(193,96,58,0.35) 100%),
                repeating-linear-gradient(45deg, #3a5c38 0px, #3a5c38 2px, #4a7a48 2px, #4a7a48 12px)
              `
                    }}
                />
                <div className="relative text-center text-[#FAF6EF] px-6">
                    <p className="text-xs tracking-[0.4em] text-[rgba(250,246,239,0.75)] mb-5">
                        OKINAWA / MOTOBU / YANBARU
                    </p>
                    <h1 className="font-serif text-4xl leading-relaxed tracking-widest mb-3"
                        style={{ textShadow: '0 2px 16px rgba(44,26,14,0.4)' }}>
                        時間がゆっくり流れる、<br />やんばるの隠れ家
                    </h1>
                    <p className="text-sm tracking-[0.35em] text-[rgba(250,246,239,0.85)] mb-12">
                        やちむん喫茶 シーサー園
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
                <div className="max-w-[960px] mx-auto grid grid-cols-2 gap-16 items-center">
                    <div className="aspect-[4/3] bg-[#c8a882] relative overflow-hidden">
                        <span className="absolute inset-0 flex items-center justify-center text-[rgba(250,246,239,0.5)] text-sm tracking-[0.2em]">
                            店内風景
                        </span>
                    </div>
                    <div>
                        <h2 className="font-serif text-[22px] leading-[1.7] mb-6 text-[#3D5A3E]">
                            やんばるの空気と<br />やちむんの器でととのう時間を
                        </h2>
                        <p className="text-[#7A5C42] mb-4 leading-[2]">
                            沖縄の伝統工芸「やちむん」の器に盛られた料理と、深緑に包まれた空間。観光の疲れを癒す隠れ家へようこそ。
                        </p>
                        <p className="text-[#7A5C42] mb-4 leading-[2]">
                            創業1990年。一万坪の広大な敷地に建つ古民家で、約100体のシーサーがお出迎えします。
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            {['古民家カフェ', 'やちむん', 'やんばる', '沖縄工芸'].map(tag => (
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
                    <div className="grid grid-cols-3 gap-6">
                        {[
                            { name: 'ヒラヤーチー', desc: '沖縄の家庭料理。野菜たっぷりのお好み焼き風の一品。やちむんの器でどうぞ。', bg: 'linear-gradient(135deg,#d4a96a,#c8855a)' },
                            { name: '黒糖ぜんざい', desc: '沖縄の定番スイーツ。コクのある黒糖の甘みと金時豆が絶妙な一杯。', bg: 'linear-gradient(135deg,#6b3a2a,#a05c3c)' },
                            { name: 'シークヮーサー生ジュース', desc: '庭で採れた果実を使用。爽やかな酸味が口いっぱいに広がります。', bg: 'linear-gradient(135deg,#7aad5c,#4a8c3c)' },
                            { name: 'シークヮーサーケーキ', desc: '数量限定・売り切れ次第終了。お早めに。', bg: 'linear-gradient(135deg,#e8c87a,#d4a040)' },
                        ].map(({ name, desc, bg }) => (
                            <div key={name} className="bg-[#FAF6EF] overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                                <div className="aspect-[4/3] relative flex items-center justify-center"
                                    style={{ background: bg }}>
                                    <span className="text-[12px] tracking-[0.15em] text-[rgba(250,246,239,0.7)]">料理イメージ</span>
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
                    <div className="grid grid-cols-4 gap-3">
                        {[
                            { label: '店内風景', bg: 'linear-gradient(135deg,#8B7355,#6B5A45)', wide: false },
                            { label: '料理', bg: 'linear-gradient(135deg,#C1603A,#9A4A28)', wide: false },
                            { label: 'やちむん', bg: 'linear-gradient(135deg,#3D5A3E,#2A4030)', wide: false },
                            { label: '外観', bg: 'linear-gradient(135deg,#7A8C6A,#5A6C50)', wide: false },
                            { label: 'テラス席', bg: 'linear-gradient(135deg,#B8956E,#9A7550)', wide: false },
                            { label: '庭の全景', bg: 'linear-gradient(135deg,#4A6B4A,#2C4A2C)', wide: true },
                            { label: 'シーサー', bg: 'linear-gradient(135deg,#8C6040,#6A4428)', wide: false },
                        ].map(({ label, bg, wide }) => (
                            <div
                                key={label}
                                className={`relative overflow-hidden cursor-pointer group ${wide ? 'col-span-2 aspect-[2/1]' : 'aspect-square'}`}
                                style={{ background: bg }}
                            >
                                <div className="absolute inset-0 bg-[rgba(44,26,14,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-[#FAF6EF] text-xs tracking-[0.2em]">
                                    {label}
                                </div>
                                <span className="absolute bottom-3 left-3 text-[11px] text-[rgba(250,246,239,0.8)] tracking-[0.15em]">
                                    {label}
                                </span>
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
                        {[
                            { date: '2026.05.10', title: 'ゴールデンウィーク営業のお知らせ' },
                            { date: '2026.04.25', title: '春の新メニューが登場しました' },
                            { date: '2026.04.01', title: '4月の定休日について' },
                        ].map(({ date, title }) => (
                            <div key={date} className="flex items-baseline gap-8 py-5 border-b border-[rgba(44,26,14,0.1)]">
                                <span className="text-xs text-[#7A5C42] tracking-[0.1em] whitespace-nowrap min-w-[80px]">
                                    {date}
                                </span>
                                <span className="text-sm text-[#2C1A0E] tracking-[0.05em]">{title}</span>
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
                <div className="max-w-[960px] mx-auto grid grid-cols-2 gap-12 items-start">
                    <div className="aspect-[4/3] bg-[linear-gradient(135deg,#c8d8c0_0%,#a8c0a0_100%)] relative flex flex-col items-center justify-center gap-3">
                        <span className="text-4xl">📍</span>
                        <p className="text-xs tracking-[0.15em] text-[#7A5C42]">Google Maps 埋め込みエリア</p>
                        <a
                            href="https://maps.google.com/?q=やちむん喫茶+シーサー園"
                            target="_blank"
                            rel="noreferrer"
                            className="absolute bottom-4 text-[11px] tracking-[0.2em] text-[#C1603A] border-b border-[#C1603A] pb-0.5 no-underline whitespace-nowrap"
                        >
                            Google Maps で開く →
                        </a>
                    </div>
                    <div>
                        <h3 className="font-serif text-lg mb-7 text-[#3D5A3E]">やちむん喫茶 シーサー園</h3>
                        <table className="w-full border-collapse">
                            {[
                                { label: '住所', value: '沖縄県国頭郡本部町伊豆味1439' },
                                { label: '電話', value: '0980-47-2160' },
                                { label: '営業時間', value: '11:00 〜 L.O. 16:30 / Close 17:00' },
                                { label: '定休日', value: '月・火・第3日曜日' },
                            ].map(({ label, value }) => (
                                <tr key={label} className="border-b border-[rgba(44,26,14,0.1)]">
                                    <td className="py-3.5 text-[11px] tracking-[0.15em] text-[#7A5C42] w-20 align-top pt-4">{label}</td>
                                    <td className="py-3.5 text-sm">{value}</td>
                                </tr>
                            ))}
                        </table>
                        <div className="mt-6 text-xs text-[#7A5C42] leading-[1.9] p-4 bg-[rgba(61,90,62,0.06)] border-l-2 border-[#3D5A3E]">
                            駐車場あり。やんばる自然の中に位置するため、カーナビ使用の場合は電話番号での検索を推奨します。
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Home
