import { Route, Routes } from 'react-router-dom'
import { Home, Login, Register } from '../pages'

const LoginRoutes = () => {
  return (
   <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
   </Routes>
  )
}

export default LoginRoutes
