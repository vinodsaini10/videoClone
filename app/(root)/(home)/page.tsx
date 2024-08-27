import MettingTypeList from '@/components/MettingTypeList';
import React from 'react'

const Home = () => {
  const now = new Date();
  const time= now.toLocaleTimeString('en-us',{hour:'2-digit',minute:'2-digit'});
  const date= (new Intl.DateTimeFormat('en-us',{dateStyle:'full'})).format(now);
  return (
    <section className='flex size-full flex-col gap-10'>
      
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>

<div className="flex h-full flex-col justify-between
max-md:px-5 max-md:py-8 lg:p-11
">
  <h2 className=' glassmorphism shadow-md max-w-[270] *:
  rounded py-2 text-center text-base font-normal '>

    Upcoming Meeting at:12:30 PM
  </h2>
  <div className=' flex flex-col gap-2'>

    <h1 className='text-3xl font-extrabold lg:text-5xl'>
{time}
    </h1>
    <p className='text-lg font-medium text-gray-300 lg:text-2xl'>
      {date}
    </p>
  </div>
</div>

      </div>
      <MettingTypeList/>
      </section>
  )
}

export default Home