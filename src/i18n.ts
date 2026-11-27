export type Lang = 'ko' | 'en';

// 경로 앞에 언어 접두사를 붙입니다. ko는 루트, en은 /en/
export const localePath = (lang: Lang, path: string) => (lang === 'en' ? `/en${path}` : path);

// 현재 경로(베이스 제외)를 다른 언어의 같은 페이지 경로로 바꿉니다.
export const switchPath = (path: string): { lang: Lang; path: string } =>
  path === '/en/' || path.startsWith('/en/')
    ? { lang: 'ko', path: path.slice(3) || '/' }
    : { lang: 'en', path: `/en${path}` };

export const UI = {
  ko: {
    siteName: '이슬람 이야기',
    brandA: '이슬람 ',
    brandB: '이야기',
    tagline: '이슬람에 대한 솔직한 답, 한국어로',
    description:
      '히잡, 예수, 할랄, 그리고 폭력과 테러에 대한 걱정까지. 한국 사람들이 이슬람에 대해 가장 많이 묻는 질문에 차분하고 솔직하게 답합니다.',
    skip: '본문으로 건너뛰기',
    navLabel: '주요 메뉴',
    nav: { questions: '질문과 답', you: '나와 이슬람', verses: '꾸란 구절', mosques: '가까운 성원', ask: '질문하기', about: '소개' },
    switchLabel: 'English',
    switchTitle: 'Read this page in English',
    footerLine: '한국 독자를 위한 독립 이슬람 안내 사이트',
    footerNoForce: '읽고, 묻고, 판단은 직접 하세요.',
    footerAbout: '운영자와 원칙',
    footerContact: '문의',
    next: {
      eyebrow: '다음 걸음',
      heading: '더 궁금한 점이 있으신가요?',
      body: '글로는 다 전하기 어려운 것이 있어요. 한국어로 편하게 물어보시거나, 가까운 성원(모스크)에 찾아가 보세요. 천천히, 편하신 대로 알아가시면 돼요.',
      kakao: '카카오톡으로 질문하기',
      ask: '질문하기',
      mosque: '가까운 성원 찾기',
    },
    q: {
      section: '질문과 답',
      short: '짧은 답',
      sources: '출처와 참고',
      reviewed: '이 글은 이슬람 학자의 검토를 거쳤습니다.',
      draft: '이 글은 학자 검토를 기다리는 초안입니다. 잘못된 부분이 보이면 알려 주세요.',
      feedback: '의견 보내기',
      related: '함께 읽으면 좋은 질문',
      indexTitle: '질문과 답',
      indexDesc: '한국 사람들이 이슬람에 대해 가장 많이 묻는 질문과 그에 대한 솔직한 답.',
      indexIntro: '한국 분들이 실제로 검색하고 물어보시는 질문들을 모았어요. 하나의 질문에 하나의 페이지, 짧은 답을 먼저 드립니다.',
      searchLabel: '질문 검색',
      searchPlaceholder: '예: 히잡, 예수, 할랄, 라마단',
      empty: '찾는 질문이 없나요?',
      emptyLink: '직접 물어보세요.',
    },
    categories: {
      basics: '기초',
      god: '하나님과 예언자',
      jesus: '예수와 마리아',
      women: '여성과 가족',
      peace: '폭력과 평화',
      life: '일상 (기도·할랄·라마단)',
      korea: '한국의 무슬림',
    },
  },
  en: {
    siteName: 'Islam Iyagi',
    brandA: 'Islam ',
    brandB: 'Iyagi',
    tagline: 'Honest answers about Islam',
    description:
      'Hijab, Jesus, halal, and the hard questions about violence too. Calm, honest answers to the questions Koreans most often ask about Islam. (English version of a Korean site.)',
    skip: 'Skip to content',
    navLabel: 'Main menu',
    nav: { questions: 'Questions', you: 'Islam and you', verses: 'Verses', mosques: 'Find a mosque', ask: 'Ask', about: 'About' },
    switchLabel: '한국어',
    switchTitle: '이 페이지를 한국어로 보기',
    footerLine: 'An independent introduction to Islam for Korean readers',
    footerNoForce: 'Read, ask, and make up your own mind.',
    footerAbout: 'Who we are',
    footerContact: 'Contact',
    next: {
      eyebrow: 'Next step',
      heading: 'Still have questions?',
      body: 'Some things are hard to put in writing. Ask us anything, or visit a mosque near you. Go at your own pace.',
      kakao: 'Ask on KakaoTalk',
      ask: 'Ask a question',
      mosque: 'Find a mosque near you',
    },
    q: {
      section: 'Questions',
      short: 'Short answer',
      sources: 'Sources and references',
      reviewed: 'This page has been reviewed by an Islamic scholar.',
      draft: 'This page is a draft awaiting scholarly review. Please tell us if you spot a mistake.',
      feedback: 'Send feedback',
      related: 'Related questions',
      indexTitle: 'Questions and answers',
      indexDesc: 'The questions Koreans most often ask about Islam, with honest answers.',
      indexIntro: 'These are the questions Koreans actually search for and ask. One question per page, with the short answer first.',
      searchLabel: 'Search questions',
      searchPlaceholder: 'e.g. hijab, Jesus, halal, Ramadan',
      empty: "Can't find your question?",
      emptyLink: 'Ask us directly.',
    },
    categories: {
      basics: 'Basics',
      god: 'God and the prophets',
      jesus: 'Jesus and Mary',
      women: 'Women and family',
      peace: 'Violence and peace',
      life: 'Daily life (prayer, halal, Ramadan)',
      korea: 'Muslims in Korea',
    },
  },
} as const;
