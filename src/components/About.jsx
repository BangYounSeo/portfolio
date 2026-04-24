import profileImg from '../assets/방윤서.png'
import { Mail, GitBranch, MapPin } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { useState } from 'react'

const skillGroups = [
  { category: 'Frontend', skills: [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: '컴포넌트 UI · REST API 연동' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: '이벤트 처리 · 로직 구현' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', desc: '반응형 UI 스타일링' },
    { name: 'MUI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', desc: '컴포넌트 기반 UI 구성' },
  ]},
  { category: 'Backend', skills: [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', desc: '객체지향 기능 구현' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', desc: 'REST API 개발' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', desc: 'API 서버 구현' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', desc: '서버 환경 구현' },
  ]},
  { category: 'Data & AI', skills: [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', desc: '데이터 처리 · API 연동' },
    { name: 'Streamlit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg', desc: '데이터 시각화 구현' },
  ]},
  { category: 'Database', skills: [
    { name: 'OracleDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', desc: '테이블 설계 · SQL 작성' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', desc: 'CRUD · 데이터 구조 설계' },
    { name: 'MariaDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg', desc: 'DB 연동 및 관리' },
  ]},
  { category: 'Design', skills: [
    { name: 'Adobe Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', desc: '이미지 편집 · 웹 디자인' },
    { name: 'Adobe Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg', desc: '그래픽 · 아이콘 제작' },
  ]},
  { category: 'DevOps & Tools', skills: [
    { name: 'AWS S3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', desc: '이미지 업로드 · 파일 관리' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', desc: '버전 관리 · 협업' },
  ]},
]

function SkillBadge({ skill }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='relative px-3 py-1 border text-base rounded-full transition-all duration-300 cursor-default'
      style={{ borderColor: hovered ? '#2dd4bf' : '#e5e7eb', height: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {/* 설명이 너비 기준 — 항상 공간 차지, 호버 시 보임 */}
      <span className='text-sm text-teal-500 whitespace-nowrap transition-all duration-200' style={{ opacity: hovered ? 1 : 0 }}>{skill.desc}</span>
      {/* 이름은 위에 absolute — 기본 보임, 호버 시 사라짐 */}
      <span className='absolute inset-0 flex items-center justify-center text-neutral-600 whitespace-nowrap transition-all duration-200' style={{ opacity: hovered ? 0 : 1 }}>{skill.name}</span>
    </span>
  )
}

function About() {
  const h2Ref       = useScrollAnimation(0.05)
  const labelRef    = useScrollAnimation(0.15)
  const profileRef  = useScrollAnimation(0.15)
  const textInfoRef = useScrollAnimation(0.15)
  const introRef     = useScrollAnimation(0.15)
  const skillTagsRef = useScrollAnimation(0.15)
  const skillsRef    = useScrollAnimation(0.15)

  return (
    <section id='about' className='w-full bg-white'>

      {/* 상단 본문 */}
      <div className='px-8 sm:px-12 md:px-20 pt-24 pb-12 md:pt-32 md:pb-20'>
        <div className='max-w-screen-2xl mx-auto'>
          <div className='flex flex-col md:flex-row gap-20 sm:gap-20 md:gap-16'>

            {/* 왼쪽 - 사진 + 텍스트정보 */}
            <div className='md:w-[35%] flex-shrink-0 flex flex-col md:border-r md:border-dashed md:border-neutral-300 md:pr-12'>
              <div className='w-full pb-4 mb-6'>
                <p ref={labelRef} className='text-xs tracking-[0.3em] text-neutral-400 uppercase mb-3 sm:mb-4 fade-up delay-2'>
                  01 — About Me
                </p>
              </div>
              <div ref={profileRef} className='w-full max-w-[280px] md:max-w-[320px] mx-auto md:mx-0 fade-up delay-2'>
                <img src={profileImg} alt='방윤서' className='w-full object-cover' />
              </div>
              <div ref={textInfoRef} className='w-full max-w-[280px] md:max-w-[320px] mx-auto md:mx-0 flex flex-col gap-4 text-left mt-6 md:mt-8 fade-up delay-3'>
                <div className='flex flex-col gap-0.5 items-center md:items-start'>
                  <p className='text-2xl font-semibold text-neutral-900'>방윤서</p>
                  <p className='text-base text-neutral-400 tracking-widest'>BANG YUNSEO</p>
                </div>
                <span className='inline-block w-fit mx-auto md:mx-0 bg-neutral-900 text-white text-sm px-4 py-2 tracking-wide rounded-full'>
                  Front-end &amp; Web Designer
                </span>
                <div className='flex flex-col gap-3'>
                  <div className='flex items-center gap-2 justify-center md:justify-start'>
                    <Mail size={14} className='text-neutral-400 flex-shrink-0' />
                    <a href='mailto:ysosob@naver.com' className='text-lg text-neutral-600 hover:text-teal-400 transition-colors'>ysosob@naver.com</a>
                  </div>
                  <div className='flex items-center gap-2 justify-center md:justify-start'>
                    <GitBranch size={14} className='text-neutral-400 flex-shrink-0' />
                    <a href='https://github.com/BangYounSeo' target='_blank' rel='noopener noreferrer' className='text-lg text-neutral-600 hover:text-teal-400 transition-colors'>
                      github.com/BangYounSeo
                    </a>
                  </div>
                  <div className='flex items-center gap-2 justify-center md:justify-start'>
                    <MapPin size={14} className='text-neutral-400 flex-shrink-0' />
                    <span className='text-lg text-neutral-600'>Suwon, South Korea</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 오른쪽 - 소개글 */}
            <div className='md:flex-1 min-w-0 flex flex-col gap-3 md:pt-20'>
              <h2 ref={h2Ref} className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-normal text-neutral-900 leading-none fade-up' style={{ fontFamily: "'Permanent Marker', cursive" }}>
                Bang Yun Seo
              </h2>
              <div ref={introRef} className='flex flex-col gap-4 mt-6 md:mt-0 fade-up delay-2'>
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
              <div ref={skillTagsRef} className='flex flex-col gap-5 mt-10 fade-up delay-3'>
                {skillGroups.map(({ category, skills }) => (
                  <div key={category} className='flex flex-col gap-2'>
                    <span className='text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase'>{category}</span>
                    <div className='flex flex-wrap gap-2'>
                      {skills.map((skill) => (
                        <SkillBadge key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 하단 스킬 마퀴 - 섹션 전체 너비 */}
      <div className='w-full py-16 mb-12 bg-white'>
        <div className='overflow-hidden'>
          <div className='marquee-track'>
            {skillGroups.flatMap(({ skills }) => skills).map((skill, i) => (
              <span key={'a-' + i} className='mx-12 flex flex-col items-center gap-1.5 cursor-default'>
                <img src={skill.icon} alt={skill.name} className='w-20 h-20 object-contain' />
                <span className='text-base text-neutral-400 tracking-wide whitespace-nowrap'>{skill.name}</span>
              </span>
            ))}
            {skillGroups.flatMap(({ skills }) => skills).map((skill, i) => (
              <span key={'b-' + i} className='mx-12 flex flex-col items-center gap-1.5 cursor-default'>
                <img src={skill.icon} alt={skill.name} className='w-20 h-20 object-contain' />
                <span className='text-base text-neutral-400 tracking-wide whitespace-nowrap'>{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default About