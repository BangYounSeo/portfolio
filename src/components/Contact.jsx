import useScrollAnimation from '../hooks/useScrollAnimation'

function Contact() {
  const labelRef = useScrollAnimation()
  const emailRef = useScrollAnimation()
  const gridRef  = useScrollAnimation()

  return (
    <section id='contact' className='w-full'>

      {/* 메인 콘텐츠 */}
      <div className='px-6 sm:px-12 md:px-20 py-24 sm:py-32'>

        {/* 섹션 레이블 */}
        <p ref={labelRef} className='text-xs tracking-[0.3em] text-neutral-400 uppercase mb-6 fade-up'>03 — Contact</p>

        {/* 서브 타이틀 */}
        <p className='text-sm sm:text-base tracking-widest text-neutral-400 mb-4'>
          <br/> 함께 일할 사람을 찾고 계신가요?
        </p>

        {/* 문장 3개 */}
        <div className='mb-10 sm:mb-12'>
          <p className='text-sm md:text-base text-teal-400 mb-2'>밝은 태도와 원활한 소통으로 팀의 흐름을 함께 만들어갑니다.</p>
          <p className='text-sm md:text-base text-teal-400 mb-2'>맡은 일은 끝까지, 함께하는 과정은 유쾌하게! 디자인 감각과 책임감으로 프로젝트의 처음부터 끝까지 함께합니다.</p>
        </div>

        {/* 이메일 대형 텍스트 */}
        <p ref={emailRef} className='block text-5xl sm:text-7xl lg:text-8xl font-black text-neutral-900 leading-none tracking-tighter mb-16 sm:mb-20 break-all fade-up'>
          ysosob@naver.com
        </p>

        {/* 2단 그리드 설명 */}
        <div ref={gridRef} className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 border-t border-neutral-200 pt-10 fade-up'>

          {/* 좌측 */}
          <p className='text-sm sm:text-base text-neutral-500 leading-relaxed'>
            협업 및 채용 제안이 있으시다면 언제든지 연락해 주세요. 메일을 보내주시면 1~2일 내로 답장 드리겠습니다.
          </p>

          {/* 우측 */}
          <div className='flex flex-col justify-between gap-6'>
            <p className='text-sm sm:text-base text-neutral-500 leading-relaxed'>
              포트폴리오나 작업물에 대해 궁금한 점이 있으신가요? 개발 관련이 아닌 내용이어도 좋아요. 편하게 말씀해 주세요 :)
            </p>
            <a
              href='mailto:ysosob@naver.com'
              className='self-start text-sm tracking-widest text-neutral-900 hover:text-teal-400 transition-colors duration-200'
            >
              → 메일 보내기
            </a>
          </div>

        </div>
      </div>

      {/* 푸터 */}
      <div className='w-full bg-neutral-900 py-10 px-6 flex flex-col items-center gap-2'>
        <p className='text-neutral-400 text-sm text-center'>
          비상업적 목적의 개인 포트폴리오용으로 제작되었습니다.
        </p>
        <p className='text-neutral-400 text-sm text-center'>
          © 2026 Bang YunSeo. All Rights Reserved.
        </p>
      </div>

    </section>
  )
}

export default Contact
