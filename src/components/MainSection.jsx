import { useEffect, useState } from 'react'
import BrandHeading from './BrandHeading'
import MainSectionItem from './MainSectionItem'
import axios from 'axios'

export default function MainSection() {
  const [countries, setCountries] = useState([]);
  const [shownData, setShownData] = useState({});
  const [randomNumber, setRandomNumber] = useState(0)
  const [endpoint,setEndpoint] = useState('countries')

  // her 5 saniyede bir tekrar 0-100 arasında rastgele sayı üret
  useEffect(() => {
    const intevalId = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 3)
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
        const routes = ['countries','users','products']
        const endpoint = routes[randomNumber]
        setEndpoint(endpoint)
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
    <main className='flex flex-col items-center py-12 md:min-h-screen md:justify-center md:px-4 md:flex-row md:gap-44 md:py-0'>
      <MainSectionItem>
        <BrandHeading textSize='text-2xl text-center md:text-5xl md:px-3 md:py-2 px-2 py-1'/>
        <p className='text-lg font-normal text-center md:text-2xl'>Get dummy/fake JSON data to use as placeholder in development or in prototype testing.</p>
      </MainSectionItem>
      <MainSectionItem>
        <div className='md:px-3 md:h-[650px] h-[500px] md:py-5 bg-[#F89A28] overflow-x-scroll md:w-[50%] w-full border border-black rounded-md'>
          <div className=' md:w-[50%] w-full'>
          {shownData && (
            <div className='md:p-3 '>
              <pre className='w-full '>
              <code className='text-xs text-white md:text-base'>{JSON.stringify(shownData, null, 2)}</code>
              </pre>
            </div>
          )}
          </div>
        </div>
        {shownData && endpoint && <div className='flex gap-5'>
          <span>{endpoint}</span>
          <span>{shownData.name}</span>
          </div>}
      </MainSectionItem>
    </main>
  )
}
