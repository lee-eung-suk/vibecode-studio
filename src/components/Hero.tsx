'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className='pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.h1
          className='text-5xl sm:text-6xl font-bold text-gray-900 mb-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          바이브코딩 수업 도구
        </motion.h1>

        <motion.p
          className='text-xl text-gray-600 mb-12 max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          응석쌤의 창의적인 수업 도구들을 한 곳에서 만나보세요.
          <br />
          각 영역별로 정리된 교육 자료와 인터랙티브 학습 경험
        </motion.p>

        <motion.div
          className='flex flex-col sm:flex-row gap-4 justify-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href='/#tools'
            className='px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium'
          >
            도구 둘러보기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
