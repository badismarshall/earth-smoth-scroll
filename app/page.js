import styles from './page.module.scss'
import React from 'react';
import dynamic from 'next/dynamic';
import SmoothScroll from '@/app/components/smothScroll'; 
import Projects from '@/app/components/projects';

const Earth = dynamic(() => import('@/app/components/earth'), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png"></img>
})



export default function Home() {

  return (
    <SmoothScroll>
      <main className={styles.main}>
          <Earth />
          <Projects />
      </main>
    </SmoothScroll>
  )
}