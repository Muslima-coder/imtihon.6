import Login from "./Auth/Login"
import Home from "./Auth/Home"
import Register from "./Auth/Register"
import Tables from "./Dashboard/Tables"
import { lazy } from "react"

const Dashboard = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Dashboard/Dashboard")), 2000);
}))


export {Login, Home, Register, Dashboard, Tables}