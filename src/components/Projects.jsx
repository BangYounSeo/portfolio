import homeScanChatBotVideo from '../assets/projects/HomeScan/HomeScan_ChatBot.mp4'
import homeScanChatBot      from '../assets/projects/HomeScan/HomeScanChatBot.png'
import homeScanContent1     from '../assets/projects/HomeScan/HomeScanContent_1.png'
import homeScanContent2     from '../assets/projects/HomeScan/HomeScanContent_2.png'
import homeScanContent3     from '../assets/projects/HomeScan/HomeScanContent_3.png'

import novaTripImg1 from '../assets/projects/NovaTrip/NovaTrip_1.png'
import novaTripImg2 from '../assets/projects/NovaTrip/NovaTrip_2.png'
import novaTripImg3 from '../assets/projects/NovaTrip/NovaTrip_3.png'

import baroFarmMain     from '../assets/projects/barofarm/BaroFarmMain.png'
import baroFarmList     from '../assets/projects/barofarm/BaroFarmList.png'
import baroFarmProject1 from '../assets/projects/barofarm/BaroFarmProject_1.png'
import baroFarmProject2 from '../assets/projects/barofarm/BaroFarmProject_2.png'
import baroFarmProject3 from '../assets/projects/barofarm/BaroFarmProject_3.png'
import baroFarmBa       from '../assets/projects/barofarm/BaroFarmBa.png'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

const projects = [
  {
    num: '01',
    title: "Home'Scan",
    year: '2026',
    desc: 'AI 기반 부동산 임대차 관리 플랫폼. 계약서·등기부등본 AI 분석, 챗봇, 문서 동의 관리.',
    role: '플로팅 챗봇 UI 및 스트리밍 응답 연동 · 문서 보관·처리 동의 페이지 설계 및 구현 · 동의 상태에 따른 문서 기능 진입 제어',
    badges: ['UI', '퍼블리싱', 'API'],
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'FastAPI', 'MariaDB'],
    link: 'https://github.com/BangYounSeo/AI_HomeMatch',
    images: [
      { src: homeScanChatBotVideo, type: 'video', label: '챗봇 시연' },
      { src: homeScanChatBot,   label: '챗봇' },
      { src: homeScanContent1,  label: '문서 동의 설정' },
      { src: homeScanContent2,  label: '문서 저장 동의' },
      { src: homeScanContent3,  label: '동의 처리 내용' },
    ],
    details: [
      {
        label: '챗봇 시연',
        desc: 'LLM 기반 챗봇 구현·웹 사이트 구조 설계',
        desc2: '사이트 가이드 JSON 주입 및 파인튜닝용 데이터 · 패턴 설계 · 웹 사이트 구조 설계 · 사용자 친화적 UX/UI 설계',
      },
      {
        label: '챗봇',
        desc: 'LLM 기반 챗봇 구현·웹 사이트 구조 설계·사용자 친화적 UX/UI 설계',
        desc2: '사이트 가이드 JSON 주입 및 파인튜닝용 데이터 · 패턴 설계',
      },
      {
        label: '문서 동의 설정',
        desc: '동의 상태 표시, 동의 내용 보기(새 창), 동의 철회 처리 기능 구현. 마이페이지 탭으로 연동.',
      },
      {
        label: '문서 저장 동의',
        desc: '문서 저장·분석 처리 동의 문구 노출, 체크 후 동의 저장. 동의 여부를 API로 확인 후 미동의 시 동의 페이지로 리다이렉트하고 완료 후 원래 기능으로 복귀하는 흐름 설계.',
      },
      {
        label: '동의 처리 내용',
        desc: '계약서 점검, 등기부등본 분석 등에서 업로드/분석 전 동의 여부 확인. 미동의 시 동의 페이지로 리다이렉트 후 원래 기능으로 복귀하는 구조 구현.',
      },
    ],
  },
  {
    num: '02',
    title: 'BaroFarm',
    year: '2025',
    desc: '메인 페이지, 상품 리스트, 상품 등록, 배너 관리 등 사용자·관리자 화면을 직접 설계하고 구현한 농산물 직거래 플랫폼 프로젝트',
    role: '메인 페이지 및 공통 레이아웃 구성 · 상품 필터링/카테고리 리스트업 구현 · 상품 등록 및 옵션/임시저장 기능 구현 · AWS S3 이미지 업로드 구축 · 배너 등록 페이지 제작 · 전반적인 UI/UX 개선',
    badges: ['UI', '퍼블리싱', '반응형', 'API', 'AWS S3'],
    tags: ['React 19', 'MUI', 'Spring Boot', 'Oracle DB', 'AWS S3'],
    link: 'https://github.com/BangYounSeo/barofarm',
    images: [
      { src: baroFarmMain,     label: '메인 페이지' },
      { src: baroFarmList,     label: '상품 필터링·리스트' },
      { src: baroFarmProject1, label: '상품 등록 01' },
      { src: baroFarmProject2, label: '상품 등록 02' },
      { src: baroFarmProject3, label: '상품 등록 03' },
      { src: baroFarmBa,       label: '배너 관리' },
    ],
    details: [
      {
        label: '메인 페이지',
        desc: '사용자가 실제로 사용했을 때 불편함이 없는지, 다시 방문하고 싶은 서비스인지 고민하며 화면을 설계 · 직관적인 흐름과 불필요한 요소를 줄인 깔끔한 UI를 구현.',
        desc2: '메인 페이지 및 공통 레이아웃 구성 · 상품 필터링/카테고리 리스트업 구현 · 상품 등록 및 옵션/임시저장 기능 구현 · AWS S3 이미지 업로드 구축 · 배너 등록 페이지 제작 · 전반적인 UI/UX 개선',
      },
      {
        label: '상품 필터링·리스트',
        desc: '카테고리·소분류·키워드 필터링 및 페이징 로직 개발.',
      },
      {
        label: '상품 등록 01',
        desc: '상품 등록 중 임시저장 기능 구현. 사용자 설정에 따라 옵션 값을 쉽게 생성할 수 있도록 구현.',
      },
      {
        label: '상품 등록 02',
        desc: '사용자의 설정에 따라 쉽게 옵션 값을 생성할 수 있도록 구현.',
      },
      {
        label: '상품 등록 03',
        desc: '상품·배너 이미지 업로드 시 AWS S3에 직접 저장하고, 반환된 URL만 DB에 저장하는 구조로 설계하여 서버와 파일 저장소를 분리한 확장 가능한 업로드 환경을 구현.',
        desc2: '사용자 친화적인 상품 등록 경험을 위해 네이버의 등록 흐름을 참고하여, 입력 단계와 옵션 설정 구조를 직관적으로 재설계.',
      },
      {
        label: '배너 관리',
        desc: '관리자 페이지 내 배너 위치·정렬 순서 등 입력 후 플랫폼에 여러 배너를 송출할 수 있도록 구현.',
      },
    ],
  },
  {
    num: '03',
    title: 'NovaTrip',
    year: '2025',
    desc: '서울 기반 여행 정보 공유 커뮤니티 플랫폼.',
    role: '커뮤니티 게시판 CRUD · 댓글·대댓글 시스템 · UI/UX 개선 및 반응형 처리',
    badges: ['UI', '반응형','API'],
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/BangYounSeo/novatrip',
    thumbnail: novaTripImg3,
    images: [
      { src: novaTripImg1, label: '게시글 상세 페이지' },
      { src: novaTripImg2, label: '댓글 기능' },
      { src: novaTripImg3, label: '반응형 UI' },
    ],
    details: [
      {
        label: '게시글 상세 페이지',
        desc: '공지·동행·일반 게시글 타입에 따라 화면을 분기 처리. 이미지 슬라이더, 여행 일정·장소·동행 조건 표시, 작성자 정보 영역을 통합 구성하여 사용자 상호작용 흐름이 자연스럽게 이어지도록 구현.',
        desc2: '사용자가 함께 여행할 동행자를 모집하거나 참여할 수 있는 게시글 상세 화면 · 단순한 게시판을 넘어선 사용자 중심 여행 플랫폼 구현 · 여행 일정, 조건, 유형, 태그, 장소를 구조적으로 표시하여 여행 성향 매칭 강화 · 서울 지역 축제·이벤트 중심 커뮤니티 참여 확대',
      },
      {
        label: '반응형 UI',
        desc: '화면 크기에 따라 자동으로 구성요소가 재배치되는 반응형 UI 구현. 모바일·태블릿·데스크탑 환경에서 일관된 사용자 경험 제공.',
      },
      {
        label: '댓글 기능',
        desc: '댓글·대댓글 작성/수정/삭제 API 구현. 그룹·깊이·순서 기반 정렬 및 신고 기능 연동. REST API 기반 CRUD 및 대댓글 구조를 설계하고, 신고 플래그 처리와 관리자 숨김 로직을 연동해 사용자 상호작용 흐름을 안정적으로 구현.',
      },
    ],
  },
]


function ProjectModal({ project, onClose }) {
  const [imgIdx, setImgIdx] = useState(0)
  const images  = project.images  || []
  const details = project.details || []

  const currentLabel  = images[imgIdx]?.label ?? ''
  const currentDetail = details.find((d) => d.label === currentLabel) ?? null

  const prevImg = () => setImgIdx((i) => (i - 1 + images.length) % images.length)
  const nextImg = () => setImgIdx((i) => (i + 1) % images.length)

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return createPortal(
  <div
    className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3'
    onClick={onClose}
  >
    <div
      className='relative w-full max-w-[calc(100vw-24px)] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl bg-white max-h-[calc(100dvh-32px)] overflow-hidden rounded-xl sm:rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.18)] flex flex-col'
      style={{ margin: 'auto' }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className='overflow-y-auto overflow-x-hidden flex flex-col max-h-[calc(100dvh-32px)]'>
        <button
          onClick={onClose}
          className='absolute top-3 right-6 z-10 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-900 transition-all duration-200 text-base sm:text-lg'
          aria-label='닫기'
        >
          ✕
        </button>

        {/* 상단: 프로젝트 정보 */}
        <div className='px-3 pt-3 pb-3 sm:px-9 sm:pt-10 sm:pb-7 border-b border-neutral-100'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-start'>

            {/* 왼쪽: 제목 + GitHub + 배지 + 태그 */}
            <div className='pr-7 sm:pr-0 flex flex-col gap-2 sm:gap-3'>
              <div>
                <div className='flex items-end gap-2 sm:gap-3 flex-wrap min-w-0'>
                  <h3 className='text-xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight min-w-0'>
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1 text-xs sm:text-sm font-medium tracking-widest text-neutral-500 hover:text-neutral-900 border border-neutral-200 hover:border-neutral-900 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-full transition-all duration-200'
                  >
                    GitHub <span className='text-sm sm:text-base leading-none'>→</span>
                  </a>
                </div>
              </div>
              <div className='flex flex-wrap gap-1 sm:gap-2'>
                {project.badges.map((b) => (
                  <span key={b} className='px-2.5 sm:px-4 py-1 sm:py-1.5 bg-neutral-900 text-white text-xs sm:text-sm tracking-wider rounded-full'>
                    {b}
                  </span>
                ))}
              </div>
              <div className='flex flex-wrap gap-2'>
                {project.tags.map((t) => (
                  <span key={t} className='text-xs sm:text-sm text-neutral-400 tracking-widest uppercase border border-neutral-100 bg-white px-3 py-1 rounded-md'>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 오른쪽: 설명 텍스트 */}
            <div className='mt-3 sm:mt-5'>
              {currentDetail ? (
                <div>
                  <p className='text-sm sm:text-base tracking-[0.35em] text-neutral-400 uppercase mb-1 sm:mb-1.5 font-medium'>
                    {currentDetail.label}
                  </p>
                  {currentDetail.desc.split('\n\n').map((text, i) => (
                    <p key={i} className='text-sm sm:text-base text-neutral-600 leading-[1.7] sm:leading-[1.8] mt-1 first:mt-0'>{text}</p>
                  ))}
                  {currentDetail.desc2 && (
                    <div className='mt-1.5 sm:mt-2'>
                      {currentDetail.desc2.split('\n\n').map((text, i) => (
                        <p key={i} className='text-sm sm:text-base text-neutral-400 leading-[1.7] sm:leading-[1.8] mt-1 first:mt-0'>{text}</p>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <p className='text-sm sm:text-base tracking-[0.35em] text-neutral-400 uppercase mb-1 sm:mb-1.5 font-medium'>Overview</p>
                  <p className='text-sm sm:text-base text-neutral-600 leading-[1.7] sm:leading-[1.8]'>{project.desc}</p>
                  {project.role && (
                    <p className='text-sm sm:text-base text-neutral-400 leading-[1.7] sm:leading-[1.8] mt-1.5 sm:mt-3'>{project.role}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 하단: 이미지 슬라이더 */}
        {images.length > 0 && (
          <div className='px-3 py-2 sm:px-9 sm:py-7 border-t border-neutral-100'>
            <div className='relative flex items-center gap-2 sm:gap-4'>
              <button
                onClick={prevImg}
                className='shrink-0 w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-all duration-200 shadow-sm leading-none'
                aria-label='이전 이미지'
              >
                <span className='block text-2xl sm:text-3xl leading-none -translate-y-0.5'>‹</span>
              </button>
              <div className='flex-1 aspect-[2/1] sm:aspect-video bg-white rounded-lg sm:rounded-2xl overflow-hidden ring-1 ring-neutral-100'>
                {images[imgIdx].type === 'video' ? (
                  <video
                    key={images[imgIdx].src}
                    src={images[imgIdx].src}
                    className='w-full h-full object-contain'
                    autoPlay
                    muted
                    loop
                    controls
                  />
                ) : (
                  <img
                    src={images[imgIdx].src}
                    alt={images[imgIdx].label}
                    className='w-full h-full object-contain'
                  />
                )}
              </div>
              <button
                onClick={nextImg}
                className='shrink-0 w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-all duration-200 shadow-sm leading-none'
                aria-label='다음 이미지'
              >
                <span className='block text-2xl sm:text-3xl leading-none -translate-y-0.5'>›</span>
              </button>
            </div>
          </div>
        )}

      </div>
      </div>
    </div>,
    document.body
  )
}


function ProjectSlider() {
  const [current, setCurrent] = useState(1)
  const [modalProject, setModalProject] = useState(null)
  const total = projects.length

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])

  const handleCardClick = (idx) => {
    if (idx === current) setModalProject(projects[idx])
    else setCurrent(idx)
  }

  const getOffset = (idx) => {
    const diff = idx - current
    if (diff === 0) return 0
    if (diff === 1  || diff === -(total - 1)) return  1
    if (diff === -1 || diff === total - 1)   return -1
    return null
  }

  return (
    <>
      <div className='relative flex items-center justify-center w-full'>

        {/* 좌 화살표 */}
        <button
          onClick={prev}
          className='absolute left-0 z-30 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 rounded-full transition-all duration-200 shadow-sm select-none'
          aria-label='이전 프로젝트'
        >
          <span className='block text-2xl sm:text-3xl leading-none -translate-y-0.5'>‹</span>
        </button>

        {/* 카드 트랙 */}
        <div className='w-full overflow-hidden px-14 sm:px-16'>
          <div className='relative flex items-center justify-center h-[520px] sm:h-[600px]'>
            {projects.map((project, idx) => {
              const offset = getOffset(idx)
              if (offset === null) return null

              const isCenter  = offset === 0
              const thumbnail = project.thumbnail ?? project.images?.[0]?.src ?? null

              const transformMap = {
                '-1': 'translateX(-102%) scale(0.88)',
                '0':  'translateX(0%)   scale(1)',
                '1':  'translateX(102%)  scale(0.88)',
              }

              return (
                <div
                  key={project.num}
                  onClick={() => handleCardClick(idx)}
                  style={{
                    transform: transformMap[String(offset)],
                    opacity:   isCenter ? 1 : 0.68,
                    zIndex:    isCenter ? 20 : 10,
                  }}
                  className={[
                    'absolute cursor-pointer',
                    'transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
                    'w-full max-w-[420px]',
                    'bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl',,
                    'hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:scale-[1.02]',
                    isCenter ? '' : 'blur-[0.5px]',
                  ].join(' ')}
                >
                  {/* ── 상단: 대표 썸네일 이미지 ── */}
                  <div className='aspect-[4/3] w-full overflow-hidden rounded-t-[2rem]'>
                    {thumbnail ? (
                      project.images[0].type === 'video' ? (
                        <video
                          src={thumbnail}
                          className='w-full h-full object-contain rounded-t-[2rem]'
                          autoPlay
                          muted
                          loop
                        />
                      ) : (
                        <img
                          src={thumbnail}
                          alt={project.title}
                          className='w-full h-full object-contain rounded-t-[2rem]'
                        />
                      )
                    ) : (
                      <div className='w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-end p-5 sm:p-6 rounded-t-[2rem]'>
                        <span className='text-2xl sm:text-3xl font-black text-neutral-300 tracking-tight leading-none'>
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* ── 하단: 텍스트 정보 ── */}
                  <div className='px-5 pt-3 pb-5 sm:px-6 sm:pt-3 sm:pb-6'>

                    {/* 연도 */}
                    <p className='text-[10px] tracking-[0.35em] text-neutral-400 uppercase mb-3'>
                      {project.year}
                    </p>

                    {/* 제목 */}
                    <div className='mb-3'>
                      <h3 className='text-xl sm:text-2xl font-black text-neutral-900 tracking-tight leading-tight'>
                        {project.title}
                      </h3>
                    </div>

                    {/* 뱃지 */}
                    <div className='flex flex-wrap gap-1.5 mb-3'>
                      {project.badges.map((b) => (
                        <span
                          key={b}
                          className='px-2.5 py-0.5 bg-neutral-900 text-white text-[11px] tracking-wider rounded-full'
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    {/* 설명 */}
                    <p className='text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-2'>
                      {project.desc}
                    </p>

                    {/* 태그 */}
                    <div className='flex flex-wrap gap-1.5'>
                      {project.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className='text-[10px] text-neutral-400 tracking-widest uppercase bg-white border border-neutral-100 px-2.5 py-1 rounded-md'
                        >
                          {t}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className='text-[10px] text-neutral-300 tracking-widest uppercase bg-white border border-neutral-100 px-2.5 py-1 rounded-md'>
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* 중앙 카드 클릭 힌트 */}
                    {isCenter && (
                      <div className='mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between'>
                        <span className='text-[11px] tracking-[0.25em] text-neutral-400 uppercase'>
                          자세히 보기
                        </span>
                        <span className='text-neutral-300 text-base'>→</span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 우 화살표 */}
        <button
          onClick={next}
          className='absolute right-0 z-30 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 rounded-full transition-all duration-200 shadow-sm select-none'
          aria-label='다음 프로젝트'
        >
          <span className='block text-2xl sm:text-3xl leading-none -translate-y-0.5'>›</span>
        </button>
      </div>

      {/* 인디케이터 */}
      <div className='flex justify-center gap-2 mt-5 items-center'>
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-teal-400 w-6 h-1.5'
                : 'bg-teal-200 w-1.5 h-1.5 hover:bg-teal-300'
            }`}
            aria-label={`프로젝트 ${i + 1}`}
          />
        ))}
      </div>

      {modalProject && (
        <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </>
  )
}


function Projects() {
  return (
    <section id='projects' className='w-full bg-gradient-to-b from-white to-neutral-100 py-20'>
      <div className='w-full px-6 sm:px-12 md:px-20'>

        {/* 섹션 헤더 */}
        <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 border-b border-neutral-300 pb-6 gap-3'>
          <div>
            <p className='text-xs tracking-[0.3em] text-neutral-400 uppercase mb-4'>02 — Work</p>
            <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] font-black text-teal-400 leading-none tracking-tighter'>
              Projects
            </h2>
          </div>
          <p className='text-neutral-400 text-xs sm:text-sm tracking-widest sm:pb-4'>
            Selected Works
          </p>
        </div>

        <ProjectSlider />

      </div>
    </section>
  )
}

export default Projects