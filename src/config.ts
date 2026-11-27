// 사이트 전체 설정. 실제 연락처가 정해지면 여기만 바꾸면 됩니다.
export const SITE = {
  name: '이슬람 이야기',
  tagline: '이슬람에 대한 솔직한 답, 한국어로',
  description:
    '히잡, 예수, 할랄, 그리고 폭력과 테러에 대한 걱정까지. 한국 사람들이 이슬람에 대해 가장 많이 묻는 질문에 차분하고 솔직하게 답합니다.',
  // Empty = every KakaoTalk button and mention is hidden site-wide (removed for now at Mustafa's request, 2026-11-27).
  // TODO: 카카오톡 채널 개설 후 실제 주소로 교체 (예: https://pf.kakao.com/_xxxxx/chat)
  kakaoUrl: '',
  // TODO: 질문 폼을 받을 주소 (예: Formspree 등). 비어 있으면 폼 대신 안내문이 보입니다.
  formEndpoint: '',
  // TODO: 공개 연락 이메일
  email: '',
};
