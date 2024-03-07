import NavItem from './NavItem'
import BrandHeading from './BrandHeading'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isScrolled, setScroll] = useState(false)
  const handleScroll = () => {
    const scrollPosition = window.scrollY
    if(scrollPosition > 30){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  return (
    <header className={`sticky top-0 py-3 transition-all px-4 ${isScrolled ? 'shadow-2xl border-b border-black bg-orange-200 shadow-orange-400' : ''}`}>
      <nav className='flex items-center justify-between'>
        <BrandHeading textSize='text-lg p-1'/>
        <div>
          <ul className='flex items-center gap-3 text-sm'>
            <NavItem text='Home' url='/' style='font-semibold'/>
            <NavItem text='Docs' url='/docs'/>
            <NavItem text='GitHub' url='/github'/>
          </ul>
        </div>
      </nav>
    </header>
  )
}
