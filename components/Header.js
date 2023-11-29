import React from 'react'
import Image from 'next/image'
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
        <div>
            <input type="text" />
        </div>
        {/* right */}
        <div></div>
    </header>
    
    
  )
}

export default Header