import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
function Header() {
  return (
    
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
        {/* left */}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png'
            layout='fill'
            objectFit='contain'
            objectPosition='left'
            />
        </div>
        {/* middle */}
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm '>
            <input type="text" 
            placeholder='start your search'
            className='pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400 text-sm'
            />
            <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
        </div>
        {/* right */}
        <div></div>
    </header>
    
    
  )
}

export default Header