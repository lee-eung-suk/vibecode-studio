'use client';

import { ToolCard } from './ToolCard';

interface Tool {
  id: string;
  name: string;
  description: string;
  vibeCodeUrl: string;
  thumbnail?: string;
  views: number;
  visitors: number;
  category?: string;
}

interface ToolGridProps {
  tools: Tool[];
  selectedCategory: string;
}

const CATEGORY_EMOJIS: Record<string, string> = {
  math: '📐',
  science: '🔬',
  korean: '📚',
  english: '🌍',
  social: '🌏',
  art: '🎨',
  music: '🎵',
};

export function ToolGrid({ tools, selectedCategory }: ToolGridProps) {
  const filtered =
    selectedCategory === 'all'
      ? tools
      : tools.filter((tool) => tool.category === selectedCategory);

  if (filtered.length === 0) {
    return (
      <div className='text-center py-12'>
        <p className='text-gray-600'>등록된 도구가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {filtered.map((tool) => (
        <ToolCard
          key={tool.id}
          id={tool.id}
          name={tool.name}
          description={tool.description}
          vibeCodeUrl={tool.vibeCodeUrl}
          thumbnail={tool.thumbnail}
          views={tool.views}
          visitors={tool.visitors}
          categoryEmoji={CATEGORY_EMOJIS[tool.category || 'all'] || '⭐'}
        />
      ))}
    </div>
  );
}
