export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className='bg-primary font-MaisonNeueDemi h-11 rounded-full px-6 text-white'>
      {children}
    </button>
  )
}
