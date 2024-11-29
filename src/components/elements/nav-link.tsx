import Image from 'next/image'
import Link from 'next/link'

export default function NavLink({
  children,
  dropdown
}: {
  children: React.ReactNode
  dropdown?: boolean
}) {
  return (
    <li className='font-MaisonNeueDemi flex gap-2 text-lg'>
      <Link href='#' className={`${!dropdown && 'hover:underline'}`}>
        {children}
      </Link>
      {dropdown && (
        <Image src='/arrow-down.svg' width={16} height={16} alt='arrow down' />
      )}
    </li>
  )
}
