import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import DefaultLayout from "./layout/defaultLayout"

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
              <Route path="/" element={<Home />}/>
            </Route>
        </Routes>
    )
}

export default Router