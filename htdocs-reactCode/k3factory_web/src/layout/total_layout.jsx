import Total_footer from "./total_footer"
import Total_header from "./total_header"
import { Outlet } from "react-router-dom"

export default function total_layout() {
  return (
    <div className="layoutWrap">
        <Total_header />
        <main id="main">
            <Outlet />
        </main>
        <Total_footer />
    </div>
  )
}
