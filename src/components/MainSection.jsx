import { useEffect, useState } from 'react'
import BrandHeading from './BrandHeading'
import MainSectionItem from './MainSectionItem'
import axios from 'axios'

export default function MainSection() {
  const [countries, setCountries] = useState([]);
  const [shownData, setShownData] = useState({});
  const [randomNumber, setRandomNumber] = useState(null)

  // her 5 saniyede bir tekrar 0-100 arasında rastgele sayı üret
  useEffect(() => {
    const intevalId = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 100)
      setRandomNumber(randomNum)
    },5000)
    return () => {
      clearInterval(intevalId)
    }
  },[])

  // üretilen rastgele sayıya göre istek at sayı çiftse ülkeler datasına tek ise user datasına istek at
  useEffect(() => {
    async function getApi() {
      try {
        const endpoint = randomNumber % 2 == 0 ? 'countries' : 'users'
        const response = await axios.get(`https://dummy-data-api-production.up.railway.app/${endpoint}`);
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getApi();
  }, [randomNumber]);

  // gelen datadan rastgele bir veri seç ve ekranda göster
  useEffect(() => {
    const randomNumber =  Math.floor(Math.random() * countries.length);
    setShownData(countries[randomNumber])
  },[countries])
  return (
    <main className='flex justify-center min-h-screen px-4 gap-44'>
      <MainSectionItem>
        <BrandHeading textSize='text-5xl px-3 py-2'/>
        <p className='text-2xl font-normal text-center'>Get dummy/fake JSON data to use as placeholder in development or in prototype testing.</p>
      </MainSectionItem>
      <MainSectionItem>
        <div className='px-3 py-5 bg-[#F89A28] border border-black rounded-md'>
          <div className='w-[50%]'>
          {shownData && (
            <div className='p-3 '>
              <pre className='w-full '>
              <code className='text-white'>{JSON.stringify(shownData, null, 2)}</code>
              </pre>
            </div>
          )}
          </div>
        </div>
      </MainSectionItem>
    </main>
  )
}
