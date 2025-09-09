import { Outlet } from "react-router-dom"

import TotalHeader from "./Header"
import TotalFooter from "./Footer"

export default function Layout() {
  console.log(<Dummy />);
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
