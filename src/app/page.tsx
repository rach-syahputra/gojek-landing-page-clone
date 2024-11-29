import Career from '@/components/sections/career'
import CareerList from '@/components/sections/career-list'
import Hero from '@/components/sections/hero'
import Scale from '@/components/sections/scale'
import ScaleList from '@/components/sections/scale-list'

export default function Home() {
  return (
    <main className='bg-background'>
      <Hero />
      <Career />
      <CareerList />
      <Scale />
      <ScaleList />
    </main>
  )
}
