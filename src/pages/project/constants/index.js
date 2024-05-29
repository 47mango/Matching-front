export const PROJECTS = [
  {
    id: 1,
    nm: '개발자국',
    desc: 'WBS기반의 프로젝트 관리 협업 툴 입니다. 프론트 개발이 상당히 난이도가 될 거 같아서 실력있는 프론트 개발자를 원합니다.',
    startDt: '2024-06-01',
    endDt: '2024-09-30',
    leaderNm: '홍길동',
    status: '모집중',
    stacks: [
      'Java',
      'Spring',
      'SpringBoot',
      'React',
      'JavaScript',
      'TypeScript',
      'Aws',
      'MySQL',
    ],
    img: 'https://via.placeholder.com/200x100?text=project 1',
    currentCnt: 6,
    expectCnt: 11,
    hasLeaderRole: true,
  },
  {
    id: 2,
    nm: '프로젝트명',
    desc: '프로젝트에 대한 설명',
    startDt: '2024-06-01',
    endDt: '2024-09-30',
    leaderNm: '홍길동',
    status: '진행중',
    stacks: [
      'Java',
      'Spring',
      'SpringBoot',
      'React',
      'JavaScript',
      'TypeScript',
      'Aws',
    ],
    img: 'https://via.placeholder.com/200x100?text=project 2',
    currentCnt: 6,
    expectCnt: 11,
    hasLeaderRole: false,
  },
  {
    id: 3,
    nm: '프로젝트명',
    desc: '프로젝트에 대한 설명',
    startDt: '2023-05-01',
    endDt: '2023-10-30',
    leaderNm: '홍길동',
    status: '종료',
    stacks: [
      'Java',
      'Spring',
      'SpringBoot',
      'React',
      'JavaScript',
      'TypeScript',
      'Aws',
    ],
    img: 'https://via.placeholder.com/200x100?text=project 3',
    currentCnt: 6,
    expectCnt: 11,
    hasLeaderRole: false,
  },
];

export const STACKS_OPTIONS = [
  { title: 'HTML' },
  { title: 'JavaScript' },
  { title: 'TypeScript' },
  { title: 'CSS' },
  { title: 'Java' },
  { title: 'Swift' },
  { title: 'Dart' },
  { title: 'Kotlin' },
  { title: 'Spring' },
  { title: 'Android' },
  { title: 'iOS' },
  { title: 'React Native' },
  { title: 'Flutter' },
];

export const RECOMMEND_MEMBERS = [
  {
    name: '김민수',
    introduction: '혁신적인 아이디어를 추구하는 프론트엔드 개발자',
    photo: '',
    experience: true,
    company_experience: [
      { company_name: 'c회사', duration: '2018.5 ~ 2021.8 / 3년 3개월' },
      { company_name: 'd회사', duration: '2021.10 ~ 2023.4 / 1년 6개월' },
    ],
    skills: ['React', 'Angular', 'Vue.js', 'JavaScript'],
    interests: ['TypeScript', 'UI/UX 디자인', 'React Native', 'Next.js'],
    url: 'https://www.minsu.com',
  },
  {
    name: '최수영',
    introduction: '사용자 경험을 중시하는 풀스택 개발자',
    photo: '',
    experience: false,
    skills: ['Python', 'Django', 'Flask', 'PostgreSQL'],
    interests: ['데이터 분석', 'AI', '머신러닝', '데이터 시각화'],
    url: 'https://www.suyeong.com',
  },
  {
    name: '이상훈',
    introduction: '고객 중심의 솔루션을 제공하는 백엔드 개발자',
    photo: '',
    experience: true,
    company_experience: [
      { company_name: 'e회사', duration: '2019.2 ~ 2022.7 / 3년 5개월' },
      { company_name: 'f회사', duration: '2022.9 ~ 2024.2 / 1년 5개월' },
    ],
    skills: ['Java', 'Spring Boot', 'Node.js', 'Nest.js'],
    interests: ['Microservices', '클라우드 컴퓨팅', 'DevOps'],
    url: 'https://www.sanghoon.com',
  },
  {
    name: '김영희',
    introduction: '창의적인 솔루션을 제공하는 프론트엔드 개발자',
    photo: '',
    experience: false,
    skills: ['Vue.js', 'Next.js', 'JavaScript', 'HTML', 'CSS'],
    interests: ['UI/UX 디자인', '인터랙티브 웹', '애니메이션', '웹 접근성'],
    url: 'https://www.younghee.com',
  },
  {
    name: '박준형',
    introduction: '데이터 중심의 솔루션을 제공하는 데이터 엔지니어',
    photo: 'photo_url',
    experience: true,
    company_experience: [
      { company_name: 'g회사', duration: '2017.3 ~ 2020.6 / 3년 3개월' },
      { company_name: 'h회사', duration: '2020.8 ~ 2023.1 / 2년 5개월' },
    ],
    skills: ['Python', 'SQL', 'Apache Spark'],
    interests: ['빅데이터', '데이터 시각화', '머신러닝'],
    url: 'https://www.junhyung.com',
  },
  {
    name: '윤서진',
    introduction: '고성능 시스템을 구축하는 백엔드 개발자',
    photo: 'photo_url',
    experience: true,
    company_experience: [
      { company_name: 'i회사', duration: '2016.4 ~ 2019.9 / 3년 5개월' },
      { company_name: 'j회사', duration: '2019.11 ~ 2022.3 / 2년 4개월' },
    ],
    skills: ['Golang', 'Kubernetes', 'Docker'],
    interests: ['클라우드 인프라', '마이크로서비스', 'DevOps'],
    url: 'https://www.seojin.com',
  },
  {
    name: '최은서',
    introduction: '창의적 문제 해결을 위한 프론트엔드 개발자',
    photo: 'photo_url',
    experience: false,
    skills: ['React', 'Next.js', 'JavaScript'],
    interests: ['UI/UX 디자인', '프론트엔드 성능 최적화', '웹 접근성'],
    url: 'https://www.eunseo.com',
  },
  {
    name: '이상민',
    introduction: '데이터 기반의 결정을 내리는 데이터 과학자',
    photo: 'photo_url',
    experience: true,
    company_experience: [
      { company_name: 'k회사', duration: '2017.1 ~ 2019.6 / 2년 5개월' },
      { company_name: 'l회사', duration: '2019.8 ~ 2022.2 / 2년 6개월' },
    ],
    skills: ['R', 'Python', 'SQL'],
    interests: ['데이터 분석', '머신러닝', 'AI'],
    url: 'https://www.sangmin.com',
  },
  {
    name: '정다혜',
    introduction: '사용자 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자',
    photo: 'photo_url',
    experience: false,
    skills: ['Angular', 'TypeScript', 'JavaScript'],
    interests: ['UI/UX 디자인', '웹 성능 최적화', '모바일 웹 개발'],
    url: 'https://www.dahey.com',
  },
  {
    name: '오지훈',
    introduction: '복잡한 문제를 해결하는 알고리즘 전문가',
    photo: 'photo_url',
    experience: true,
    company_experience: [
      { company_name: 'm회사', duration: '2015.5 ~ 2018.10 / 3년 5개월' },
      { company_name: 'n회사', duration: '2018.12 ~ 2021.6 / 2년 6개월' },
    ],
    skills: ['C++', 'Python', 'Java'],
    interests: ['알고리즘', '자료 구조', '인공지능'],
    url: 'https://www.jihoon.com',
  },
  {
    name: '김은비',
    introduction: '프론트엔드와 UI/UX 디자인을 겸하는 개발자',
    photo: 'photo_url',
    experience: false,
    skills: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    interests: ['웹 디자인', '모바일 UI/UX', 'CSS 애니메이션'],
    url: 'https://www.eunbi.com',
  },
];
