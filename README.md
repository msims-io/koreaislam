# 이슬람 이야기 (islamiyagi.com)

Honest answers about Islam, in Korean. A calm, question-led static site for Koreans who are curious or worried about Islam, built from the project research report.

## Stack

- [Astro](https://astro.build) 7, fully static output (`dist/`), no server needed.
- Question pages are Markdown files in `src/content/questions/` (one question per page, short answer in frontmatter).
- Mosque directory data is in `src/data/mosques.ts`.
- Contact placeholders (KakaoTalk channel, form endpoint, email) are in `src/config.ts`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

Set `SITE_URL` (e.g. `SITE_URL=https://example.kr npm run build`) once a domain is chosen so canonical URLs and the sitemap are correct.

## Adding a question

Create `src/content/questions/<slug>.md`:

```markdown
---
title: "질문 제목"
answer: "첫 문단에 보일 짧은 답 (2~3문장)"
category: basics   # basics | god | jesus | women | peace | life | korea
order: 10
keywords: [사람들이 검색하는 표현]
related: [other-slug]
sources: [꾸란 2:256]
reviewed: false    # set true after scholarly review
---

본문 (해요체). 먼저 독자의 걱정을 인정하고, 그다음 답합니다.
```

## Before launch

- [ ] Native Korean editor pass on all copy (drafted by Claude)
- [ ] Scholar review of every question page, then set `reviewed: true`
- [ ] Phone-verify each mosque: address, phone, visitor policy, Korean speaker; set `verified: true`. Hangul addresses outside Seoul were transliterated from English directory entries and may be wrong.
- [ ] KakaoTalk Channel: removed from the site for now (2026-11-27). When a channel exists, set `kakaoUrl` in `src/config.ts` and all buttons return.
- [ ] Question form: the Ask page has no working way to send a question. Connect a form service (set `formEndpoint`) or an email address.
- [ ] About page, "Who makes it?" section: removed for now (2026-11-27). Add it back once there are real people to introduce (writers, editor, reviewing scholar). Do not describe the site as made by Muslims living in Korea unless that becomes true.
- [ ] About page: fill in the funding section
- [ ] Verses page: scholar check of every rendering and reference in `src/data/verses.ts`; consider adding verified Arabic text
- [ ] Fact check of the Ayla section on the Islam-in-Korea page
- [x] Name and domain chosen: 이슬람 이야기, islamiyagi.com
- [ ] Register with Naver Search Advisor and Google Search Console; confirm "Enforce HTTPS" is ticked in GitHub Pages settings
