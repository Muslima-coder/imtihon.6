import { useCookies } from "react-cookie"
import {  DashboardRoutes, LoginRoutes } from "./routes"

const App = () => {
  const [cookies] = useCookies(['token'])
  return cookies?.token ? <DashboardRoutes/> : <LoginRoutes/>
}

export default App
