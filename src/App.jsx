import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<div>Menu</div>} />
      <Route path='/access' element={<div>Access</div>} />
      <Route path='/admin' element={<div>Admin</div>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
export default App