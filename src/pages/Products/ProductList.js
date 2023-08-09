import { useEffect, useState } from "react"
import {ProductCard} from "../../components/Elements/ProductCard"
import { FilterBar } from "./components/FilterBar"
import { useLocation } from "react-router-dom"
import { useTitle } from "../../hooks/useTitle"
import { setProductList } from "../../store/filterSlice"
import { useDispatch, useSelector } from "react-redux"

export const ProductList = () => {
  const dispatch = useDispatch()
  useTitle("Products")
  // const [products,setProducts] = useState([])
  const [show ,setShow] = useState(false)
  const search = useLocation().search
  const [errorMessage,setErrorMessage] = useState("")
  const searchTerm =  new URLSearchParams(search).get("q")
 
  useEffect(()=>{

    async function fetchProducts(){
      try{
        const reponse = await fetch(`http://localhost:8000/products?name_like=${searchTerm ? searchTerm : ""}`)
        if(!reponse.ok){
            throw {message : reponse.statusText , status : reponse.status}
        }
        const data = await reponse.json();
        // setProducts(data)
        dispatch(setProductList(data))
      }
      catch(err){
        setErrorMessage(err.message)
      }
    }
    fetchProducts()
    


  })
    const UnFilteredProducts = useSelector(state => state.filterState.productList );
    const FilteredProducts = useSelector(state => state.filterState.filterList );
    let products
    if(FilteredProducts.length!==0){
        products = FilteredProducts
    }else{
      products = UnFilteredProducts
    }


    return (
      <main>
          <section className="my-5">
            <div className="my-5 flex justify-between">
              <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
              <span>
                <button onClick={()=>setShow(!show)  } id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </button>
              </span>            
            </div>    
  
            <div className="flex flex-wrap justify-center lg:flex-row">
              {/* Product Card */}
              {errorMessage}
              {
                products.map((product)=>(
                  <ProductCard key={product.id} product={product}/>
                ))
              }
            </div>  
          </section>
          { show && <FilterBar show={show} setShow={setShow} products={products}/>}
        </main> 
    )
  }