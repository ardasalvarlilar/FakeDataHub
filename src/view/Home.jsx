import ExampleFetch from '../components/ExampleFetch'
import MainSection from '../components/MainSection'
import Navbar from '../components/Navbar'
import Resources from '../components/Resources'

export default function Home() {
  return (
    <div onScroll={(e) => console.log(e)}>
      <Navbar/>
      <MainSection/>
      <ExampleFetch/>
      <Resources/>
    </div>
  )
}
