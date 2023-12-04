import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

function search() {
  return (
    <div className='h-screen'>
        <Header />
       <main className='flex'>
        <section>
            <p className='text-sm'>300+ stays for 5 number of guests</p>
            <h1 className=' text-3xl font-semibold mt-2 mb-6'>stays in mass</h1>
            <div className=''>
                <p className='button'>Cancelation Flexibility</p>
                <p className='button'>Type of Place</p>
                <p className='button'>Price</p>
                <p className='button'>Rooms and Beds</p>
                <p className='button'>More Filters</p>
            </div>
        </section>
       </main>

        <Footer/>
    </div>
  )
}

export default search