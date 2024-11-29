import Image from 'next/image'
import { CardProps } from '@/types/types'

export default function ScaleCard({
  className,
  imageSrc,
  title,
  description
}: CardProps) {
  return (
    <div className={`${className} relative h-full w-full rounded-[36px]`}>
      <div className='absolute left-[-16px] top-[45%] flex h-9 w-9 items-center justify-center rounded-full border bg-white bg-opacity-70 drop-shadow-md md:hidden'>
        <Image
          src='/arrow-right.svg'
          alt='arrow'
          width={13}
          height={13}
          className='scale-x-[-1] opacity-50'
        />
      </div>
      <div className='absolute right-[-16px] top-[45%] flex h-9 w-9 items-center justify-center rounded-full border bg-white bg-opacity-70 drop-shadow-md md:hidden'>
        <Image
          src='/arrow-right.svg'
          alt='arrow'
          width={13}
          height={13}
          className='opacity-50'
        />
      </div>
      <Image
        src={imageSrc}
        alt='slace image'
        width={500}
        height={200}
        className='mt-[-70px] md:ml-20 lg:ml-0 xl:mt-[-100px]'
      />
      <div className='flex flex-col items-start gap-4 px-10 pb-28 pt-20 lg:pb-10'>
        <h3 className='font-MaisonNeueExtendedBold text-4xl font-black'>
          {title}
        </h3>
        <p className='font-MaisonNeueBook text-xs leading-tight lg:text-base'>
          {description}
        </p>
      </div>
    </div>
  )
}
