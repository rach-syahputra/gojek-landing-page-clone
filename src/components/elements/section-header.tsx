export default function SectionHeader({
  children,
  color
}: {
  children: React.ReactNode
  color?: 'white' | 'black'
}) {
  return (
    <h1
      className={`font-MaisonNeueExtendedBold text-center text-[26px] ${color === 'black' ? 'text-black' : 'text-white'} md:text-4xl xl:text-5xl`}
    >
      {children}
    </h1>
  )
}
