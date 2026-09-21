'use client'

import dynamic from 'next/dynamic'

/* Loads the canvas portrait only on the client, after hydration — it never
   touches the server render or the initial JS critical path. The responsive
   box keeps its footprint so there's zero layout shift (CLS = 0) when it mounts. */
const AsciiPortrait = dynamic(() => import('./AsciiPortrait'), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden
      className="h-[155px] w-[155px] sm:h-[240px] sm:w-[240px] lg:h-[380px] lg:w-[380px] xl:h-[430px] xl:w-[430px] 2xl:h-[480px] 2xl:w-[480px]"
    />
  ),
})

export default function AsciiPortraitLazy() {
  return <AsciiPortrait />
}
