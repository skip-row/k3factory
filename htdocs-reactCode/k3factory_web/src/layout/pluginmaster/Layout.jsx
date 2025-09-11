import { Outlet } from "react-router-dom"

import TotalHeader from "layout/total/Header"
import TotalFooter from "layout/total/Footer"

export default function Layout() {
  return (
    <div className="layoutWrap">
        <TotalHeader />
        <main id="main">
            <Outlet />
        </main>
        <TotalFooter />
    </div>
  )
}
