import Image from 'next/image'
import NavLinks from '../partials/NavLinks'
import Hamburger from '../elements/Hamburger'

export default function Navbar() {
  return (
    <nav className='flex h-20 items-center justify-between bg-background px-10 text-white lg:h-[100px]'>
      <div className='relative h-full w-[100px] xl:w-[112px]'>
        <Image src='/logo.svg' alt='gojek logo' fill />
      </div>
      <Hamburger />
      <NavLinks />
    </nav>
  )
}
