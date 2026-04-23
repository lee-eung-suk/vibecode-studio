'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CategoryNav } from '@/components/CategoryNav';
import { ToolGrid } from '@/components/ToolGrid';

const DUMMY_TOOLS = [
  {
    id: '1',
    name: '수학 학습 도구',
    description: '초등 수학의 기본 개념을 재미있게 배워요',
    vibeCodeUrl: 'https://vibecode.app/example1',
    views: 1234,
    visitors: 856,
    category: 'math',
  },
  {
    id: '2',
    name: '과학 실험실',
    description: '과학 현상을 직접 관찰하고 학습해요',
    vibeCodeUrl: 'https://vibecode.app/example2',
    views: 2156,
    visitors: 1423,
    category: 'science',
  },
  {
    id: '3',
    name: '국어 문해력',
    description: '재미있는 이야기로 국어 실력을 키워요',
    vibeCodeUrl: 'https://vibecode.app/example3',
    views: 890,
    visitors: 612,
    category: 'korean',
  },
  {
    id: '4',
    name: '영어 회화',
    description: '일상 영어로 자신감 있게 대화해요',
    vibeCodeUrl: 'https://vibecode.app/example4',
    views: 1567,
    visitors: 934,
    category: 'english',
  },
  {
    id: '5',
    name: '미술 창작실',
    description: '다양한 미술 기법으로 창의력을 펼쳐요',
    vibeCodeUrl: 'https://vibecode.app/example5',
    views: 2345,
    visitors: 1678,
    category: 'art',
  },
  {
    id: '6',
    name: '음악 이야기',
    description: '음악의 기초와 감상법을 배워요',
    vibeCodeUrl: 'https://vibecode.app/example6',
    views: 456,
    visitors: 289,
    category: 'music',
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <main className='min-h-screen bg-white'>
      <Header />
      <Hero />
      <CategoryNav selected={selectedCategory} onSelect={setSelectedCategory} />

      <section id='tools' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <ToolGrid tools={DUMMY_TOOLS} selectedCategory={selectedCategory} />
      </section>

      <footer className='border-t border-gray-200 bg-gray-50 py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600'>
          <p>© 2024 Vibecode Studio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
