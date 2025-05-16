
import {  Routes, Route } from 'react-router-dom'
import UserLayout from './layout/UserLayout'
import Home from './pages/Home'
import Login from './pages/authentication/Login'
import Register from './pages/authentication/Register'
import Home1 from './pages/Home1'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home1" element={<Home1 />} />
        </Route>
      </Routes>
    </>
  )
}
<Footer />
export default App
