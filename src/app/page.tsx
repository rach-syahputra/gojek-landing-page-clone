import Career from '@/components/sections/career'
import CareerList from '@/components/sections/career-list'
import Hero from '@/components/sections/hero'

export default function Home() {
  return (
    <main className='bg-background'>
      <Hero />
      <Career />
      <CareerList />
    </main>
  )
}
