import { Route ,Routes } from "react-router-dom"
import { HomePages , ProductList , ProductDetails} from "../pages"
export const AllRoute=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<HomePages/>}/>
            <Route path="products" element={<ProductList/>}/>
            <Route path="products/:id" element={<ProductDetails/>}/>

        </Routes>

        </>
    )
}