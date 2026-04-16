function Header() {
  return (
    <header className='fixed top-3 left-0 w-full z-50 flex items-center justify-between px-10 py-3 border-t border-b border-black'>

      {/* 좌측: 이름 */}
      <div className='text-sm font-bold tracking-widest text-neutral-900'>
        BANG YUNSEO
      </div>

      {/* 가운데: 이메일 */}
      <a 
        href='mailto:ysosob@naver.com'
        className='hidden sm:block text-base tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors'
      >
        ysosob@naver.com
      </a>

      {/* 우측: 상태 */}
      <div className='flex items-center gap-2'>
        <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
        <span className='text-sm tracking-widest text-neutral-500'>Available Now</span>
      </div>

    </header>
  )
}

export default Header
