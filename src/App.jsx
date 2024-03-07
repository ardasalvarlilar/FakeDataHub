import {Route,Routes} from 'react-router-dom'
import Home from './view/Home'
import FetchDetail from './view/FetchDetail'
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:param' element={<FetchDetail/>} />
      </Routes>
    </div>
  )
}

export default App
