function Footer() {
    return (
      <footer className="bg-[#2C1A0E] text-[rgba(250,246,239,0.7)] text-center py-12 px-8">
        <p className="font-serif text-base text-[#FAF6EF] tracking-[0.15em] mb-2">
          やちむん喫茶 シーサー園
        </p>
        <div className="my-5">
          <a
            href="https://www.instagram.com/yachimunkissa.shisaen/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[rgba(250,246,239,0.6)] tracking-[0.15em] border border-[rgba(250,246,239,0.3)] px-5 py-1.5 hover:border-[#C1603A] hover:text-[#C1603A] transition-colors no-underline"
          >
            Instagram @yachimunkissa.shisaen
          </a>
        </div>
        <p className="text-[11px] tracking-[0.1em]">
          © 2026 やちむん喫茶 シーサー園. All rights reserved.
        </p>
      </footer>
    )
  }
  
  export default Footer
  