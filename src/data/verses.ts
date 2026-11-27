// Verses shown on /verses/ and highlighted on the home page.
// Korean and English wording here is a plain-language draft made for this site, not a published
// translation. Every entry must be checked against the Arabic by a scholar before `reviewed` is set.
// ref = chapter:verse in the Quran. Entries with `hadith` are sayings of the Prophet Muhammad, not Quran verses;
// `hadith` names the collections that record them and is shown in place of the Quran reference.

export type VerseTheme = 'near' | 'comfort' | 'mercy' | 'purpose' | 'family' | 'parents' | 'neighbours' | 'animals' | 'peace';

export interface Verse {
  ref: string;
  hadith?: { ko: string; en: string };
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
  purpose: { ko: '삶의 목적', en: 'The purpose of life', koSub: '우리는 왜 여기에 있을까요', enSub: 'Why are we here?' },
  family: { ko: '가족', en: 'Family', koSub: '서로에게 평온이 되어 주는 사람들', enSub: 'People who are a place of rest for one another' },
  parents: { ko: '부모님을 대하는 마음', en: 'Treating your parents', koSub: '꾸란은 부모에 대한 효를 하나님을 섬기는 일 바로 다음에 말해요', enSub: 'The Quran places kindness to parents right after the worship of God' },
  neighbours: { ko: '이웃을 대하는 마음', en: 'Treating your neighbours', koSub: '가까운 이웃, 먼 이웃 모두에게', enSub: 'For the neighbour who is near and the neighbour who is far' },
  animals: { ko: '동물을 대하는 마음', en: 'Treating animals', koSub: '동물도 하나님이 지으신 공동체예요', enSub: 'Animals, too, are communities made by God' },
  peace: { ko: '평화', en: 'Peace', koSub: '무슬림의 인사말은 "평화가 당신에게"예요', enSub: 'The Muslim greeting means "peace be upon you"' },
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
    ref: '49:13', theme: 'peace', featured: true, reviewed: false,
    ko: '사람들아, 우리는 너희를 한 남자와 한 여자로부터 창조하였고, 너희가 서로를 알도록 여러 민족과 부족으로 만들었노라. 하나님 앞에서 가장 귀한 이는 너희 가운데 가장 의로운 이라.',
    en: 'O humankind, We created you from a male and a female, and made you into peoples and tribes so that you may know one another. The most honoured of you in the sight of God is the most righteous of you.',
  },
  {
    ref: '41:34', theme: 'peace', reviewed: false,
    ko: '선과 악은 같지 않노라. 더 좋은 것으로 악을 물리치라. 그러면 그대와 원수였던 이가 가까운 벗처럼 되리라.',
    en: 'Good and evil are not equal. Repel evil with what is better, and the one who was your enemy will become like a close friend.',
  },
  {
    ref: '30:21', theme: 'family', reviewed: false,
    ko: '그분의 징표 가운데 하나는, 너희가 그 곁에서 평온을 얻도록 너희 자신들 가운데서 배우자를 창조하시고 너희 사이에 사랑과 자비를 두신 것이라.',
    en: 'Among His signs is that He created for you spouses from among yourselves, so that you may find tranquillity in them, and He placed love and mercy between you.',
  },
  {
    ref: '17:24', theme: 'parents', reviewed: false,
    ko: '자비로운 마음으로 부모에게 겸손의 날개를 낮추고 이렇게 말하라. "주님, 제가 어렸을 때 두 분이 저를 길러 주셨듯이 두 분에게 자비를 베푸소서."',
    en: 'Lower to your parents the wing of humility, out of mercy, and say: "My Lord, have mercy on them, as they raised me when I was small."',
  },
  {
    ref: '5:32', theme: 'peace', reviewed: false,
    ko: '한 사람의 생명을 구한 이는 온 인류를 구한 것과 같으니라.',
    en: 'Whoever saves a life, it is as if he had saved all of humankind.',
  },
  {
    ref: '51:56', theme: 'purpose', reviewed: false,
    ko: '나는 진과 사람을 오직 나를 섬기도록 창조하였노라.',
    en: 'I created jinn and humankind only so that they would worship Me.',
  },
  {
    ref: '67:2', theme: 'purpose', reviewed: false,
    ko: '그분은 너희 가운데 누가 더 선하게 행하는지 시험하시려고 죽음과 삶을 창조하신 분이시라.',
    en: 'He is the One who created death and life to test which of you is best in deeds.',
  },
  {
    ref: '23:115', theme: 'purpose', reviewed: false,
    ko: '너희는 우리가 너희를 아무 뜻 없이 창조하였고, 너희가 우리에게 돌아오지 않으리라 생각하였느냐?',
    en: 'Did you think that We created you without purpose, and that you would not be returned to Us?',
  },
  {
    ref: '3:191', theme: 'purpose', reviewed: false,
    ko: '그들은 하늘과 땅의 창조를 깊이 생각하며 말하노라. "주님, 당신께서는 이것을 헛되이 창조하지 않으셨습니다."',
    en: 'They reflect on the creation of the heavens and the earth, saying: "Our Lord, You have not created this in vain."',
  },
  {
    ref: '25:74', theme: 'family', reviewed: false,
    ko: '"주님, 저희의 배우자와 자손이 저희 눈의 기쁨이 되게 하소서."',
    en: '"Our Lord, let our spouses and our children be a joy to our eyes."',
  },
  {
    ref: '2:187', theme: 'family', reviewed: false,
    ko: '그들은 너희의 옷이요, 너희는 그들의 옷이라.',
    en: 'They are a garment for you, and you are a garment for them.',
  },
  {
    ref: '17:23', theme: 'parents', reviewed: false,
    ko: '그대의 주님께서는 그분만을 섬기고 부모에게 잘하라고 명하셨노라. 부모 중 한 분이나 두 분 모두 그대 곁에서 늙으시거든, 그분들에게 "에이" 하는 말조차 하지 말고 꾸짖지도 말며, 공손한 말로 대하라.',
    en: 'Your Lord has decreed that you worship none but Him, and that you be good to your parents. If one or both of them reach old age with you, do not say even "uff" to them, and do not scold them, but speak to them with respect.',
  },
  {
    ref: '31:14', theme: 'parents', reviewed: false,
    ko: '우리는 사람에게 부모에 대하여 당부하였노라. 그의 어머니는 쇠약함에 쇠약함을 더하며 그를 품었고, 젖을 떼기까지 두 해가 걸렸노라. 그러니 나와 네 부모에게 감사하라.',
    en: 'We have charged the human being concerning his parents. His mother carried him through weakness upon weakness, and his weaning took two years. So give thanks to Me and to your parents.',
  },
  {
    ref: '4:36', theme: 'neighbours', reviewed: false,
    ko: '하나님을 섬기고 그분께 아무것도 견주지 말라. 그리고 부모와 친척, 고아와 가난한 이, 가까운 이웃과 먼 이웃, 곁에 있는 동료와 나그네에게 잘하라.',
    en: 'Worship God and associate nothing with Him. And be good to parents, relatives, orphans and the poor, to the neighbour who is near and the neighbour who is far, to the companion at your side and to the traveller.',
  },
  {
    ref: '', hadith: { ko: '예언자 무함마드(그분께 하나님의 평화가 깃들기를)의 말씀 (부카리, 무슬림 전승)', en: 'Saying of the Prophet Muhammad (pbuh), recorded by Bukhari and Muslim' }, theme: 'neighbours', reviewed: false,
    ko: '천사 가브리엘이 이웃에게 잘하라고 내게 거듭 당부하여, 나는 이웃이 상속자가 되는 줄 알았을 정도였다.',
    en: 'The angel Gabriel kept urging me to treat the neighbour well, until I thought he would make the neighbour an heir.',
  },
  {
    ref: '', hadith: { ko: '예언자 무함마드(그분께 하나님의 평화가 깃들기를)의 말씀 (부카리, 무슬림 전승)', en: 'Saying of the Prophet Muhammad (pbuh), recorded by Bukhari and Muslim' }, theme: 'neighbours', reviewed: false,
    ko: '하나님과 마지막 날을 믿는 사람은 이웃에게 너그럽게 대하라.',
    en: 'Whoever believes in God and the Last Day, let him be generous to his neighbour.',
  },
  {
    ref: '6:38', theme: 'animals', reviewed: false,
    ko: '땅 위를 다니는 어떤 짐승도, 두 날개로 나는 어떤 새도 너희와 같은 공동체가 아닌 것이 없노라.',
    en: 'There is no creature that moves on the earth, nor bird that flies on its two wings, but they are communities like you.',
  },
  {
    ref: '24:41', theme: 'animals', reviewed: false,
    ko: '하늘과 땅에 있는 모든 것과 날개를 펴고 나는 새들이 하나님을 찬미하는 것을 보지 못하였느냐? 저마다 자신의 기도와 찬미를 아노라.',
    en: 'Do you not see that all who are in the heavens and the earth glorify God, and the birds with wings outspread? Each one knows its own prayer and praise.',
  },
  {
    ref: '', hadith: { ko: '예언자 무함마드(그분께 하나님의 평화가 깃들기를)의 말씀 (부카리, 무슬림 전승)', en: 'Saying of the Prophet Muhammad (pbuh), recorded by Bukhari and Muslim' }, theme: 'animals', reviewed: false,
    ko: '목마른 개에게 물을 떠다 준 한 사람을 하나님께서 용서하셨다. 사람들이 물었다. "동물에게 잘해도 저희에게 보상이 있습니까?" 그분이 답했다. "살아 있는 모든 것에게 베푼 선에는 보상이 있다."',
    en: 'A man gave water to a thirsty dog, and God forgave him for it. People asked, "Is there a reward for us in kindness to animals?" He said, "There is a reward for kindness to every living creature."',
  },
  {
    ref: '25:63', theme: 'peace', reviewed: false,
    ko: '자비로우신 분의 종들은 땅 위를 겸손하게 걷는 이들이며, 무지한 이들이 말을 걸어올 때 "평화를" 하고 답하는 이들이라.',
    en: 'The servants of the Most Merciful are those who walk gently upon the earth, and when the ignorant address them, they answer, "Peace."',
  },
  {
    ref: '8:61', theme: 'peace', reviewed: false,
    ko: '그들이 평화로 기울거든 그대도 평화로 기울고, 하나님께 의지하라.',
    en: 'If they incline towards peace, then incline towards it too, and put your trust in God.',
  },
  {
    ref: '2:256', theme: 'peace', reviewed: false,
    ko: '종교에는 강요가 없노라.',
    en: 'There is no compulsion in religion.',
  },
];
