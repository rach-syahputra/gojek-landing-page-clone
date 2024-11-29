import Image from 'next/image'

export default function CareerCard({
  className,
  imageSrc,
  title,
  description
}: {
  className?: string
  imageSrc: string
  title: string
  description: string
}) {
  return (
    <div
      className={`${className} relative flex flex-col items-center justify-center gap-6`}
    >
      <div className='absolute left-0 top-[50%] flex h-9 w-9 items-center justify-center rounded-full border drop-shadow-md md:hidden'>
        <Image
          src='/arrow-right.svg'
          alt='arrow'
          width={13}
          height={13}
          className='scale-x-[-1] opacity-50'
        />
      </div>
      <div className='absolute right-0 top-[50%] flex h-9 w-9 items-center justify-center rounded-full border drop-shadow-md md:hidden'>
        <Image
          src='/arrow-right.svg'
          alt='arrow'
          width={13}
          height={13}
          className='opacity-50'
        />
      </div>
      <Image src={imageSrc} alt='career image' width={140} height={186} />
      <div className='flex flex-col items-center justify-center gap-2 px-5'>
        <h1 className='font-MaisonNeueDemi md:font-MaisonNeueBold text-center text-lg lg:text-2xl'>
          {title}
        </h1>
        <p className='font-MaisonNeueBook text-center leading-tight xl:text-lg'>
          {description}
        </p>
      </div>
      <div className='flex gap-2 md:hidden'>
        <div className='bg-primary h-2 w-2 rounded-full'></div>
        <div className='h-2 w-2 rounded-full bg-gray-500'></div>
        <div className='h-2 w-2 rounded-full bg-gray-500'></div>
        <div className='h-2 w-2 rounded-full bg-gray-500'></div>
      </div>
    </div>
  )
}
