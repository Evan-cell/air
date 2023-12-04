import React,{useState} from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon,GlobeAltIcon,Bars3Icon,UserCircleIcon,UsersIcon } from '@heroicons/react/24/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/navigation';
function Header({placeholder}) {
    const [searchInput,setSearchInput] = useState('')
    const [startDate,setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState(new Date())
    const selectionRange = {
        startDate:startDate,
        endDate:endDate,
        key:'selection'
    }
    const handleSelect = (ranges) =>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
     const [noOfGuests,setNoOfGuests] = useState(1)
     const resetInput = () => {
        setSearchInput('')
     }
     const router = useRouter()
  return (
    
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
        {/* left */}
        <div onClick={()=>router.push("/")} className='relative flex items-center h-10 cursor-pointer my-auto'>
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
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            placeholder={placeholder || 'start your search'}
            className='pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400 text-sm'
            />
            <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
        </div>
        {/* right */}
        <div className='flex items-center justify-end text-gray-500 space-x-4'>
            <p className='hidden md:inline cursor-pointer'>become a host</p>
            <GlobeAltIcon className='h-6'/>
            <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
                <Bars3Icon className='h-6' />
                <UserCircleIcon className='h-6' />
            </div>
        </div>
        {searchInput && (
            <div className='flex flex-col col-span-3 mx-auto'>
                <DateRangePicker 
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
                />
                <div className='flex items-center border-b  mb-4'>
                    <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                    <UsersIcon className='h-5'/>
                    <input 
                    value={noOfGuests}
                    min={1}
                    onChange={(e)=>setNoOfGuests(e.target.value)}
                    type="number" className='w-12 pl-2 text-lg outline-none text-red-400' />
                </div>
                <div onClick={()=>router.push({
                    pathname: '/search',
                    query: {
                        location:searchInput,
                        startDate:startDate.toISOString(),
                        endDate: endDate.toISOString(),
                        noOfGuests,
                    }
                })} className='flex'>
                    <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                    <button className='flex-grow text-red-400'>Search</button>
                </div>
            </div>
        )}
    </header>
    
    
  )
}

export default Header