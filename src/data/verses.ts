// Verses shown on /verses/ and highlighted on the home page.
// Korean and English wording here is a plain-language draft made for this site, not a published
// translation. Every entry must be checked against the Arabic by a scholar before `reviewed` is set.
// ref = chapter:verse in the Quran.

export type VerseTheme = 'near' | 'comfort' | 'mercy' | 'people';

export interface Verse {
  ref: string;
  theme: VerseTheme;
  ko: string;
  en: string;
  featured?: boolean;
  reviewed: boolean;
}

export const THEMES: Record<VerseTheme, { ko: string; en: string; koSub: string; enSub: string }> = {
  near: { ko: '가까이 계신 분', en: 'A God who is near', koSub: '멀리 있는 신이 아니라, 부르면 들으시는 분', enSub: 'Not a distant God, but one who hears when called' },
  comfort: { ko: '힘든 날의 위로', en: 'Comfort on hard days', koSub: '지치고 막막할 때 무슬림들이 떠올리는 구절', enSub: 'Verses Muslims turn to when they are tired or lost' },
  mercy: { ko: '자비와 용서', en: 'Mercy and forgiveness', koSub: '꾸란의 거의 모든 장은 자비로 시작해요', enSub: 'Almost every chapter of the Quran opens with mercy' },
  people: { ko: '사람과 사람 사이', en: 'Between people', koSub: '가족, 이웃, 그리고 나와 다른 사람들', enSub: 'Family, neighbours and people unlike ourselves' },
};

export const VERSES: Verse[] = [
  {
    ref: '2:186', theme: 'near', featured: true, reviewed: false,
    ko: '나의 종들이 나에 대해 그대에게 묻거든, 나는 가까이 있노라. 나를 부르는 이가 나를 부를 때 나는 그 부름에 답하노라.',
    en: 'When My servants ask you about Me, I am near. I answer the call of the one who calls, whenever he calls on Me.',
  },
  {
    ref: '50:16', theme: 'near', reviewed: false,
    ko: '우리는 사람을 창조하였고 그의 마음이 속삭이는 것을 아노라. 우리는 그의 목의 핏줄보다 그에게 더 가까이 있노라.',
    en: 'We created the human being and We know what his soul whispers to him. We are closer to him than his jugular vein.',
  },
  {
    ref: '2:152', theme: 'near', reviewed: false,
    ko: '그러니 나를 기억하라. 나도 너희를 기억하리라.',
    en: 'So remember Me, and I will remember you.',
  },
  {
    ref: '94:5-6', theme: 'comfort', featured: true, reviewed: false,
    ko: '진실로 어려움과 함께 쉬움이 있노라. 진실로 어려움과 함께 쉬움이 있노라.',
    en: 'Surely with hardship comes ease. Surely with hardship comes ease.',
  },
  {
    ref: '13:28', theme: 'comfort', featured: true, reviewed: false,
    ko: '진실로 하나님을 기억할 때 마음은 평안을 얻노라.',
    en: 'Surely it is in the remembrance of God that hearts find rest.',
  },
  {
    ref: '2:286', theme: 'comfort', reviewed: false,
    ko: '하나님께서는 어떤 영혼에게도 감당할 수 없는 짐을 지우지 않으시니라.',
    en: 'God does not burden any soul with more than it can bear.',
  },
  {
    ref: '93:3-5', theme: 'comfort', reviewed: false,
    ko: '그대의 주님께서는 그대를 버리지 않으셨고 미워하지도 않으셨노라. 훗날은 그대에게 지금보다 더 나으리라. 그대의 주님께서 그대에게 베푸시리니 그대는 흡족하리라.',
    en: 'Your Lord has not abandoned you, nor is He displeased with you. What comes after will be better for you than what came before. Your Lord will surely give to you, and you will be content.',
  },
  {
    ref: '39:53', theme: 'mercy', featured: true, reviewed: false,
    ko: '스스로에게 잘못을 저지른 나의 종들아, 하나님의 자비에 절망하지 말라. 진실로 하나님께서는 모든 죄를 용서하시니, 그분은 용서하시는 분, 자비로우신 분이시라.',
    en: 'O My servants who have wronged themselves, do not despair of the mercy of God. God forgives all sins. He is the Forgiving, the Merciful.',
  },
  {
    ref: '7:156', theme: 'mercy', reviewed: false,
    ko: '나의 자비는 모든 것을 감싸노라.',
    en: 'My mercy encompasses all things.',
  },
  {
    ref: '49:13', theme: 'people', featured: true, reviewed: false,
    ko: '사람들아, 우리는 너희를 한 남자와 한 여자로부터 창조하였고, 너희가 서로를 알도록 여러 민족과 부족으로 만들었노라. 하나님 앞에서 가장 귀한 이는 너희 가운데 가장 의로운 이라.',
    en: 'O humankind, We created you from a male and a female, and made you into peoples and tribes so that you may know one another. The most honoured of you in the sight of God is the most righteous of you.',
  },
  {
    ref: '41:34', theme: 'people', reviewed: false,
    ko: '선과 악은 같지 않노라. 더 좋은 것으로 악을 물리치라. 그러면 그대와 원수였던 이가 가까운 벗처럼 되리라.',
    en: 'Good and evil are not equal. Repel evil with what is better, and the one who was your enemy will become like a close friend.',
  },
  {
    ref: '30:21', theme: 'people', reviewed: false,
    ko: '그분의 징표 가운데 하나는, 너희가 그 곁에서 평온을 얻도록 너희 자신들 가운데서 배우자를 창조하시고 너희 사이에 사랑과 자비를 두신 것이라.',
    en: 'Among His signs is that He created for you spouses from among yourselves, so that you may find tranquillity in them, and He placed love and mercy between you.',
  },
  {
    ref: '17:24', theme: 'people', reviewed: false,
    ko: '자비로운 마음으로 부모에게 겸손의 날개를 낮추고 이렇게 말하라. "주님, 제가 어렸을 때 두 분이 저를 길러 주셨듯이 두 분에게 자비를 베푸소서."',
    en: 'Lower to your parents the wing of humility, out of mercy, and say: "My Lord, have mercy on them, as they raised me when I was small."',
  },
  {
    ref: '5:32', theme: 'people', reviewed: false,
    ko: '한 사람의 생명을 구한 이는 온 인류를 구한 것과 같으니라.',
    en: 'Whoever saves a life, it is as if he had saved all of humankind.',
  },
];
