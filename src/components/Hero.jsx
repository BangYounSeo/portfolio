import { useState, useEffect } from 'react'
import heroImg from '../assets/방윤서_포트폴리오.png'

// 공백까지 포함한 이름 배열을 상수로 통일
const NAME = ['B', 'A', 'N', 'G', '\u00A0', 'Y', 'U', 'N', '\u00A0', 'S', 'E', 'O']

function Hero() {
  // visible 배열 대신 몇 글자까지 보일지 숫자로 관리
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    // setTimeout 여러 개 대신 setInterval로 순차 출력
    let i = 0

    const interval = setInterval(() => {
      i += 1
      setVisibleCount(i)

      // 이름 글자가 전부 보이면 interval 정리
      if (i >= NAME.length) {
        clearInterval(interval)
      }
    }, 200)

    // 컴포넌트 언마운트 시 interval 정리
    return () => clearInterval(interval)
  }, [])

  return (
    <section className='relative w-full h-[calc(100vh-64px)] mt-18 bg-neutral-200 flex flex-col items-center justify-center overflow-hidden'>
      <div className='relative z-10 flex flex-col items-center gap-1'>
        <p
          className='text-xs sm:text-sm tracking-[0.3em] text-teal-400 font-medium uppercase transition-opacity duration-700'
          style={{ opacity: visibleCount > 0 ? 1 : 0 }}
        >
          Web Designer &amp; Publisher
        </p>

        <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-neutral-900 leading-none text-center'>
          {NAME.map((char, i) => (
            <span
              key={i}
              className='inline-block'
              style={{
                opacity: visibleCount > i ? 1 : 0,
                transform: visibleCount > i ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>

      <img
        src={heroImg}
        alt='방윤서 포트폴리오'
        className='relative z-10 w-auto object-contain mb-0 h-[32vh] sm:h-[37vh] lg:h-[42vh]'
      />

      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-neutral-400'>
        <span className='text-[10px] tracking-widest uppercase'>Scroll</span>
        <div className='w-px h-6 bg-neutral-400' />
      </div>
    </section>
  )
}

export default Hero