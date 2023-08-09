import { Route ,Routes } from "react-router-dom"
import { HomePages , ProductList , ProductDetails , Login , Register} from "../pages"
import { ProtectedRoutes } from "./ProtectedRoute"
export const AllRoute=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<HomePages/>}/>
            <Route path="products" element={<ProductList/>}/>
            <Route path="products/:id" element={<ProtectedRoutes> <ProductDetails/> </ProtectedRoutes>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>



        </Routes>

        </>
    )
}