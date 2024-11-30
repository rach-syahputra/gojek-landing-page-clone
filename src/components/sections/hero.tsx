export default function Hero() {
  return (
    <div className="relative h-[600px] w-full bg-[url('/hero.jpg')] bg-center bg-no-repeat md:bg-cover xl:h-[850px]">
      <div className='absolute left-0 top-0 h-full w-full bg-black bg-opacity-10'></div>
      <div className='mx-auto flex h-full w-2/3 flex-col justify-end py-[60px] md:justify-center lg:w-[80%]'>
        <h1 className='font-MaisonNeueExtendedBold relative z-10 w-full text-2xl text-white md:text-4xl md:leading-snug lg:w-2/3 xl:text-5xl xl:leading-snug'>
          3 countries. 20+ products. 1 leading on-demand platform.
        </h1>
      </div>
    </div>
  )
}
