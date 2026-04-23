'use client';

import { motion } from 'framer-motion';

const CATEGORIES = [
  { id: 'all', name: '전체', emoji: '⭐' },
  { id: 'math', name: '수학', emoji: '📐' },
  { id: 'science', name: '과학', emoji: '🔬' },
  { id: 'korean', name: '국어', emoji: '📚' },
  { id: 'english', name: '영어', emoji: '🌍' },
  { id: 'social', name: '사회', emoji: '🌏' },
  { id: 'art', name: '미술', emoji: '🎨' },
  { id: 'music', name: '음악', emoji: '🎵' },
];

interface CategoryNavProps {
  selected: string;
  onSelect: (id: string) => void;
}

export function CategoryNav({ selected, onSelect }: CategoryNavProps) {
  return (
    <section className='border-b border-gray-200 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex overflow-x-auto gap-2 py-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:gap-4 sm:justify-center'>
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition ${
                selected === cat.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className='mr-2'>{cat.emoji}</span>
              {cat.name}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
