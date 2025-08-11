import { Route, Routes } from "react-router-dom"
import { Footer, Header, Navbar } from "../modules"
import { Billing, DashboardHome, RTL, Tables } from "../pages"

const DashboardRoutes = () => {
  return (
    <div className="home-nav-wrapper flex justify-between">
      <Navbar/>
      <div className=" w-[80%] h-[100vh] overflow-y-auto ">
      <Header/>
        <Routes>
          <Route path='/' element={<DashboardHome/>} />
          <Route path='/tables' element={<Tables/>} />
          <Route path='/billing' element={<Billing/>} />
          <Route path='/rtl' element={<RTL/>} />
        </Routes>
      <Footer/>
      </div>
    </div>

  )
}

export default DashboardRoutes
