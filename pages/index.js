import Banner from '@/components/Banner'
import Header from '@/components/Header'
import MediumCard from '@/components/MediumCard'
import SmallCard from '@/components/SmallCard'
import Image from 'next/image'

export default function Home({exploreData,cardsData}) {
  return (
    <div
    >
     <Header />
     <Banner/>
     <main className='max-w-7xl mx-auto px-8 sm:px-16'>
      <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
        {/* data from api with server side rendering */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {exploreData.map(({img,distance,location})=>(
          <SmallCard 
          key={img}
          img={img}
          distance={distance}
          location={location}
          />
        ))}
        </div>

      </section>
      <section>
        <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
        {cardsData?.map(({img,title}) =>{
          <MediumCard 
          key={img} 
          img={img}
          title={title}/>
        })}
      </section>
     </main>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  )
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  )
  return {
    props: {
      exploreData,
      cardsData,
    }
  }
}
