import Image from 'next/image'
import NavLinks from '../partials/nav-links'
import Hamburger from '../elements/hamburger'

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-20 flex h-20 w-full items-center justify-between bg-background px-10 text-white lg:h-[100px]'>
      <div className='relative h-full w-[100px] xl:w-[112px]'>
        <Image src='/logo.svg' alt='gojek logo' fill />
      </div>
      <Hamburger />
      <NavLinks />
    </nav>
  )
}
