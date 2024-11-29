import NavLink from '../elements/NavLink'

export default function NavLinks() {
  return (
    <ul className='hidden gap-10 lg:flex'>
      <NavLink>Home</NavLink>
      <NavLink dropdown>Partner with us</NavLink>
      <NavLink>GoCorp</NavLink>
      <NavLink>Careers</NavLink>
      <NavLink dropdown>Company</NavLink>
      <NavLink>Products</NavLink>
      <NavLink>Blog</NavLink>
      <NavLink>Help</NavLink>
      <NavLink dropdown>EN</NavLink>
    </ul>
  )
}
