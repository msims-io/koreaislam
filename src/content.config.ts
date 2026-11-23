import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const CATEGORIES = {
  basics: '기초',
  god: '하나님과 예언자',
  jesus: '예수와 마리아',
  women: '여성과 가족',
  peace: '폭력과 평화',
  life: '일상 (기도·할랄·라마단)',
  korea: '한국의 무슬림',
} as const;

const schema = () =>
  z.object({
    title: z.string(),
    // 첫 문단에 보이는 짧은 답 (검색 요약과 FAQ 구조화 데이터에도 쓰임)
    answer: z.string(),
    category: z.enum(Object.keys(CATEGORIES) as [keyof typeof CATEGORIES, ...(keyof typeof CATEGORIES)[]]),
    order: z.number().default(100),
    featured: z.boolean().default(false),
    // 사람들이 실제로 검색하는 표현 (사이트 내 검색에 사용)
    keywords: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    sources: z.array(z.string()).default([]),
    // 학자 검토를 마치면 true로 바꿉니다.
    reviewed: z.boolean().default(false),
  });

// 한국어 원문 (기본)
const questions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/questions' }),
  schema: schema(),
});

// 영어 번역 (같은 파일 이름 = 같은 질문)
const questionsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/questions-en' }),
  schema: schema(),
});

export const collections = { questions, questionsEn };
