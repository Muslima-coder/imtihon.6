import { Route, Routes } from "react-router-dom"
// import { routeList } from "../components"
import { Navbar } from "../modules"

const DashboardRoutes = () => {
  return (
    <div className="containers flex justify-between">
      <Navbar/>
      <div className="w-[910px] h-[100vh] overflow-x-auto border-x-[1px] border-[#e1e1e1]">
      {/* <Routes>{routeList.map(item => <Route key={item.id} path={item.path} element={item.element} />)}</Routes> */}
      </div>
    </div>

  )
}

export default DashboardRoutes
