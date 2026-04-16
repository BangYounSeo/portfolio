import profileImg from '../assets/방윤서.jpg'
import { Mail, GitBranch, MapPin } from 'lucide-react'

const skillGroups = [
  { category: 'Frontend', skills: ['JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'MUI'] },
  { category: 'Backend',  skills: ['Java', 'Spring Boot', 'Spring Security', 'Node.js', 'Express', 'FastAPI'] },
  { category: 'Database', skills: ['OracleDB', 'MongoDB', 'MariaDB'] },
  { category: 'Design',   skills: ['Adobe Photoshop', 'Adobe Illustrator'] },
  { category: 'DevOps',   skills: ['AWS S3', 'Git', 'Notion'] },
]

function About() {
  return (
    <section id='about' className='w-full bg-white px-8 sm:px-12 md:px-20 py-24 md:py-32'>
      <div className='max-w-screen-2xl mx-auto'>

      {/* 본문 - 좌우 2단 */}
      <div className='flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-28 lg:gap-36'>

        {/* 왼쪽 - 섹션 헤더 + 프로필 카드 */}
        <div className='md:w-1/4 flex flex-col sm:flex-row md:flex-col items-center sm:items-start md:items-start gap-8'>

          {/* 섹션 헤더 */}
          <div className='w-full border-b border-neutral-200 pb-4 mb-6'>
            <p className='text-xs tracking-[0.3em] text-neutral-400 uppercase mb-3 sm:mb-4'>
              01 — About Me
            </p>

            <h2 className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-neutral-900 leading-none tracking-tighter'>
              About
            </h2>
          </div>

          {/* 사진 + 테두리 박스 */}
          <div className='relative flex-shrink-0 self-center md:self-start'>
            <div className='absolute top-2 left-2 w-full h-full border border-neutral-300' />
            <img
              src={profileImg}
              alt='방윤서'
              className='relative w-full object-cover max-w-[200px] md:max-w-[220px]'
            />
          </div>

          {/* 텍스트 정보 */}
          <div className='flex flex-col gap-4 text-center sm:text-left md:text-left mt-6'>

            {/* 이름 */}
            <div className='flex flex-col gap-0.5 items-center sm:items-start md:items-start'>
              <p className='text-2xl font-semibold text-neutral-900'>방윤서</p>
              <p className='text-base text-neutral-400 tracking-widest'>BANG YUNSEO</p>
            </div>

            {/* 배지 */}
            <span className='inline-block w-fit mx-auto sm:mx-0 bg-neutral-900 text-white text-sm px-4 py-2 tracking-wide rounded-full'>
              Front-end &amp; Web Designer
            </span>

            {/* 아이콘 목록 */}
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-2 justify-center sm:justify-start md:justify-start'>
                <Mail size={14} className='text-neutral-400 flex-shrink-0' />
                <a href='mailto:ysosob@naver.com' className='text-lg text-neutral-600 hover:text-teal-400 transition-colors'>ysosob@naver.com</a>
              </div>
              <div className='flex items-center gap-2 justify-center sm:justify-start md:justify-start'>
                <GitBranch size={14} className='text-neutral-400 flex-shrink-0' />
                <a
                  href='https://github.com/BangYounSeo'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-lg text-neutral-600 hover:text-teal-400 transition-colors'
                >
                  github.com/BangYounSeo
                </a>
              </div>
              <div className='flex items-center gap-2 justify-center sm:justify-start md:justify-start'>
                <MapPin size={14} className='text-neutral-400 flex-shrink-0' />
                <span className='text-lg text-neutral-600'>Suwon, South Korea</span>
              </div>
            </div>

          </div>
        </div>

        {/* 오른쪽 - 소개 + 스킬 */}
        <div className='md:flex-1 min-w-0 flex flex-col gap-16 md:gap-0 md:justify-between md:pt-12'>

          {/* 소개글 */}
          <div className='flex flex-col gap-4'>
            <p className='text-2xl font-bold text-neutral-700 leading-relaxed'>
              보이는 것부터 동작하는 것까지, 사용자의 경험을 만듭니다.
            </p>
            <p className='text-lg text-neutral-500 leading-relaxed'>
              디자인 의도를 실제 화면으로 구현하고, 사용자 경험을 고려한 웹 화면을 만드는 것을 지향합니다.<br />
              웹사이트 및 랜딩페이지 작업 시 단순히 보이는 디자인을 넘어서, 사용자 흐름과 사용성을 함께 고민하며 작업해왔습니다.
            </p>
            <p className='text-lg text-neutral-500 leading-relaxed'>
              Java(Spring Boot)와 Python(FastAPI) 기반 프로젝트를 진행하며 REST API 구조를 이해하고, 실제로 동작하는 기능을 구현해왔습니다. 이를 통해 화면과 기능이 어떻게 연결되는지 전체 흐름을 이해하며 개발과 퍼블리싱을 함께 경험했습니다.
            </p>
            <p className='text-lg text-neutral-500 leading-relaxed'>
              새로운 기술을 접하더라도 익숙하지 않은 부분을 피하지 않고 작은 단위부터 직접 구현해보며, 기능의 흐름을 끝까지 이해하고 해결하려는 태도로 학습해왔습니다. 또한 반복되는 작업을 정리하고 개선하는 과정을 통해 문제를 끝까지 해결하는 습관을 기르게 되었으며, 이러한 경험을 바탕으로 디자인과 구현을 함께 고려하는 작업을 지속해 나가고자 합니다.
            </p>
          </div>

          {/* 스킬 */}
          <div className='flex flex-col gap-5 mt-8'>
            <div className='flex items-center gap-4 mb-4'>
              {/* Skills 헤딩에만 민트 포인트 */}
              <span className='text-3xl font-black text-teal-400'>Skills</span>
              <div className='flex-1 h-px bg-neutral-200' />
            </div>
            {skillGroups.map(({ category, skills }) => (
              <div key={category} className='flex flex-col gap-2'>
                <span className='text-base font-bold tracking-widest text-neutral-900 uppercase'>
                  {category}
                </span>
                <div className='flex flex-wrap gap-2'>
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className='px-3 py-1 border border-neutral-200 text-sm text-neutral-600 rounded-full hover:border-teal-400 hover:text-teal-400 transition-all duration-300 cursor-default'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      </div>
    </section>
  )
}

export default About
