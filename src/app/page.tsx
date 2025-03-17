'use client';

import dynamic from 'next/dynamic';

const GemstonePalace = dynamic(() => import('../components/GemstonePalace'), {
  ssr: false
});

export default function Home() {
  return <GemstonePalace />;
}
