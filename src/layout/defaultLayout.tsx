import Header from "@/components/header/header"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default DefaultLayout