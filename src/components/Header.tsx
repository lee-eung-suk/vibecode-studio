'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2'>
          <motion.div
            className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg'
            whileHover={{ scale: 1.05 }}
          />
          <span className='font-semibold text-lg hidden sm:inline'>
            Vibecode Studio
          </span>
        </Link>

        <div className='flex items-center gap-4'>
          <Link href='/#tools' className='text-sm text-gray-600 hover:text-gray-900 transition'>
            도구
          </Link>
          <Link
            href='/admin'
            className='px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition'
          >
            등록
          </Link>
        </div>
      </nav>
    </header>
  );
}
