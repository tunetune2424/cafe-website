import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'

function App() {
  const token = localStorage.getItem('token')
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<div>Menu</div>} />
      <Route path='/access' element={<div>Access</div>} />
      <Route path='/login' element={<Login />} />
      <Route path='/admin' element={token ? <Admin /> : <Navigate to='/login' />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
export default App