'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, Users } from 'lucide-react';
import { trackView } from '@/lib/analytics';

interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  vibeCodeUrl: string;
  thumbnail?: string;
  views: number;
  visitors: number;
  categoryEmoji?: string;
}

export function ToolCard({
  id,
  name,
  description,
  vibeCodeUrl,
  thumbnail,
  views,
  visitors,
  categoryEmoji = '⭐',
}: ToolCardProps) {
  const handleClick = async () => {
    await trackView(id);
    window.open(vibeCodeUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={handleClick}
        className='w-full text-left group'
      >
        <div className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition h-full flex flex-col'>
          {/* Thumbnail */}
          <div className='w-full h-40 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform'>
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={name}
                className='w-full h-full object-cover'
              />
            ) : (
              <div className='text-5xl'>{categoryEmoji}</div>
            )}
          </div>

          {/* Content */}
          <div className='p-4 flex-1 flex flex-col'>
            <h3 className='font-semibold text-lg text-gray-900 mb-2 line-clamp-2'>
              {name}
            </h3>
            <p className='text-sm text-gray-600 mb-4 line-clamp-2 flex-1'>
              {description}
            </p>

            {/* Stats */}
            <div className='flex gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3'>
              <div className='flex items-center gap-1'>
                <Eye className='w-4 h-4' />
                <span>{views.toLocaleString()}</span>
              </div>
              <div className='flex items-center gap-1'>
                <Users className='w-4 h-4' />
                <span>{visitors.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
