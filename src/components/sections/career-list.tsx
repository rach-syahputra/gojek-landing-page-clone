import CareerCard from '../partials/career-card'

export default function CareerList() {
  return (
    <section className='flex w-screen items-center justify-center bg-background'>
      <div className='w-full rounded-tl-[80px] rounded-tr-[80px] bg-white pb-12'>
        <div className='mx-auto mt-[-76px] grid items-start md:w-10/12 md:grid-cols-4'>
          <CareerCard
            imageSrc='/achievement-1.svg'
            title='Fortune’s favorite'
            description='Southeast Asia’s only company to make it ro Fortune’s ’Change the  World’ list twice.'
          />
          <CareerCard
            className='hidden md:flex'
            imageSrc='/achievement-2.svg'
            title='$7.1 b contribution'
            description='Value added to the Indonesian economy in 2019.'
          />
          <CareerCard
            className='hidden md:flex'
            imageSrc='/achievement-3.svg'
            title='Tonne times greener'
            description='Saved 11.3 tonnes of plastic in cutlery since October 2020.'
          />
          <CareerCard
            className='hidden md:flex'
            imageSrc='/achievement-4.svg'
            title='Digitising merchants'
            description='Resulted in 80% growth in number of GoFood merchants during pandemic'
          />
        </div>
      </div>
    </section>
  )
}
