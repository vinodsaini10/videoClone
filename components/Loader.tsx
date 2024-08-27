import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen '>

        <Image
        src={'/icons/loading-circle.svg'}
        alt='loading'
        width={30}
        height={30}
        />
    </div>
  )
}

export default Loader