import { lazy } from "react"

import Login from "./Auth/Login"
import Home from "./Auth/Home"
import Register from "./Auth/Register"


import Tables from "./Dashboard/Tables"
import Billing from "./Dashboard/Billing"
import RTL from "./Dashboard/RTL"

const DashboardHome = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Dashboard/Home")), 2000);
}))


export {Login, Home, Register, DashboardHome, Tables, Billing, RTL}