// 전국 성원(모스크) 목록.
// 출처: Seoulstart 무슬림 디렉터리, Creatrip, 한국이슬람교중앙회 사이트 (2026년 11월 조사).
// 한글 주소 일부는 영문 주소를 옮긴 것이라 정확하지 않을 수 있어요.
// 각 성원에 전화로 확인한 뒤 verified: true 로 바꿔 주세요.

export type VisitorPolicy =
  | 'welcome' // 비무슬림 방문을 환영한다고 공개적으로 안내함 (온라인 확인)
  | 'unknown'; // 방문 정책이 확인되지 않음

export interface Mosque {
  id: string;
  name: string;
  nameEn: string;
  addressEn: string; // 원래 영문 출처의 주소
  visitorNoteEn?: string;
  region: string; // 필터용 지역
  city: string;
  address: string;
  phone: string;
  visitors: VisitorPolicy;
  visitorNote?: string;
  koreanSpeaker?: boolean; // 확인되면 true/false, 모르면 생략
  verified: boolean; // 운영팀이 직접 전화로 주소·연락처를 확인했는지
  founded?: number;
  lat: number; // 도시 단위 대략 좌표 (거리순 정렬용)
  lng: number;
}

export const MOSQUES: Mosque[] = [
  {
    id: 'seoul-central',
    nameEn: 'Seoul Central Mosque (Korea Muslim Federation)',
    addressEn: '39 Usadan-ro 10-gil, Yongsan-gu, Seoul',
    visitorNoteEn: 'Visit requests are taken through the Korea Muslim Federation website. Modest dress, no photos during prayer. Runs Korean-language doctrine classes and an Islamic Culture Day.',
    name: '서울중앙성원 (한국이슬람교중앙회)',
    region: '서울',
    city: '서울 용산구 이태원',
    address: '서울 용산구 우사단로10길 39',
    phone: '02-794-7307',
    visitors: 'welcome',
    visitorNote:
      '한국이슬람교중앙회 홈페이지에서 방문 신청을 받아요. 단정한 옷차림, 기도 중 사진 촬영 금지. 한국어 교리 강좌와 이슬람 문화의 날을 운영해요.',
    koreanSpeaker: true,
    verified: false,
    founded: 1976,
    lat: 37.5335,
    lng: 126.9975,
  },
  {
    id: 'busan-alfatah',
    nameEn: 'Busan Al-Fatah Mosque',
    addressEn: '113-13 Geumdan-ro, Geumjeong-gu, Busan',
    name: '부산 알파타 성원',
    region: '부산·경남',
    city: '부산 금정구',
    address: '부산 금정구 금단로 113-13',
    phone: '051-518-9991',
    visitors: 'unknown',
    verified: false,
    founded: 1980,
    lat: 35.243,
    lng: 129.092,
  },
  {
    id: 'gimhae',
    nameEn: 'Gimhae Masjid',
    addressEn: '1F, 317 Bunseong-ro, Gimhae, Gyeongnam',
    name: '김해 마스지드',
    region: '부산·경남',
    city: '경남 김해시',
    address: '경남 김해시 분성로 317, 1층',
    phone: '010-9563-0161',
    visitors: 'unknown',
    verified: false,
    lat: 35.234,
    lng: 128.889,
  },
  {
    id: 'jeonju',
    nameEn: 'Jeonju Abu Bakr al-Siddiq Mosque',
    addressEn: '31 Baekdong 6-gil, Deokjin-gu, Jeonju',
    name: '전주 아부바크르 앗시디끄 성원',
    region: '전라',
    city: '전북 전주시 덕진구',
    address: '전북 전주시 덕진구 백동6길 31',
    phone: '063-243-1483',
    visitors: 'unknown',
    verified: false,
    founded: 1985,
    lat: 35.846,
    lng: 127.13,
  },
  {
    id: 'gwangju-jeolla',
    nameEn: 'Gwangju Masjid',
    addressEn: '2-12 Yangsanje-ro 137beon-gil, Buk-gu, Gwangju',
    name: '광주 이슬람 성원',
    region: '전라',
    city: '광주 북구',
    address: '광주 북구 양산제로137번길 2-12',
    phone: '062-574-5463',
    visitors: 'unknown',
    verified: false,
    lat: 35.174,
    lng: 126.912,
  },
  {
    id: 'gwangju-gyeonggi',
    nameEn: 'Gwangju (Gyeonggi) Mosque',
    addressEn: '10 Yeokdong-ro 34beon-gil, Gwangju-si, Gyeonggi',
    name: '경기 광주 성원',
    region: '경기·인천',
    city: '경기 광주시',
    address: '경기 광주시 역동로34번길 10',
    phone: '031-761-3424',
    visitors: 'unknown',
    verified: false,
    founded: 1981,
    lat: 37.41,
    lng: 127.255,
  },
  {
    id: 'ansan',
    nameEn: 'Ansan Masjid',
    addressEn: '16-1 Wongokgongwon-ro, Danwon-gu, Ansan',
    visitorNoteEn: 'Friday midday prayers are very busy.',
    name: '안산 마스지드',
    region: '경기·인천',
    city: '경기 안산시 단원구',
    address: '경기 안산시 단원구 원곡공원로 16-1',
    phone: '031-492-1948',
    visitors: 'unknown',
    visitorNote: '금요일 정오 예배에는 사람이 많아요.',
    verified: false,
    founded: 2007,
    lat: 37.331,
    lng: 126.79,
  },
  {
    id: 'bupyeong',
    nameEn: 'Bupyeong Masjid',
    addressEn: '5 Majang-ro, Bupyeong-gu, Incheon',
    name: '부평 마스지드',
    region: '경기·인천',
    city: '인천 부평구',
    address: '인천 부평구 마장로 5',
    phone: '032-512-2612',
    visitors: 'unknown',
    verified: false,
    lat: 37.507,
    lng: 126.722,
  },
  {
    id: 'incheon-gajwa',
    nameEn: 'Incheon Gajwa Masjid',
    addressEn: '23-6 Gajeong-ro 126-gil, Seo-gu, Incheon',
    name: '인천 가좌 마스지드',
    region: '경기·인천',
    city: '인천 서구',
    address: '인천 서구 가정로126번길 23-6',
    phone: '032-873-8200',
    visitors: 'unknown',
    verified: false,
    lat: 37.49,
    lng: 126.676,
  },
  {
    id: 'daejeon',
    nameEn: 'Islamic Center of Daejeon',
    addressEn: '2F, 193 Daehak-ro, Yuseong-gu, Daejeon',
    name: '대전 이슬람센터',
    region: '충청',
    city: '대전 유성구',
    address: '대전 유성구 대학로 193, 2층',
    phone: '010-5947-8304',
    visitors: 'unknown',
    verified: false,
    founded: 2006,
    lat: 36.362,
    lng: 127.356,
  },
  {
    id: 'daegu',
    nameEn: 'Daegu Masjid',
    addressEn: '3 Waryong-ro 54-gil, Dalseo-gu, Daegu',
    visitorNoteEn: 'Online listings say it is open daily from early to late.',
    name: '대구 마스지드',
    region: '대구·경북',
    city: '대구 달서구',
    address: '대구 달서구 와룡로54길 3',
    phone: '053-523-2171',
    visitors: 'unknown',
    visitorNote: '온라인 안내에 따르면 매일 이른 시간부터 늦게까지 열려 있어요.',
    verified: false,
    lat: 35.83,
    lng: 128.533,
  },
  {
    id: 'jeju',
    nameEn: 'Jeju Islamic Cultural Center',
    addressEn: 'Near 42 Noyeon-ro, Jeju City (full address being confirmed)',
    visitorNoteEn: 'Has a prayer room for travellers. Group visits need booking a week ahead; tours on request.',
    name: '제주 이슬람문화센터',
    region: '제주',
    city: '제주시 노형동',
    address: '제주시 노연로 42 일대 (상세 주소 확인 중)',
    phone: '010-3692-3932',
    visitors: 'welcome',
    visitorNote: '여행자를 위한 기도실이 있어요. 단체 방문은 일주일 전 예약, 요청하면 안내해 줘요.',
    verified: false,
    founded: 1992,
    lat: 33.484,
    lng: 126.48,
  },
];

export const REGIONS = ['서울', '경기·인천', '충청', '전라', '대구·경북', '부산·경남', '제주'];
export const REGIONS_EN: Record<string, string> = {
  서울: 'Seoul',
  '경기·인천': 'Gyeonggi & Incheon',
  충청: 'Chungcheong',
  전라: 'Jeolla',
  '대구·경북': 'Daegu & Gyeongbuk',
  '부산·경남': 'Busan & Gyeongnam',
  제주: 'Jeju',
};
