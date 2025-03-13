import { Outlet } from "react-router-dom"
import Header from "./header"

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {/* You can add a Footer component here if needed */}
    </div>
  )
}

export default Layout

