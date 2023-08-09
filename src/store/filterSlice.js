import { createSlice } from "@reduxjs/toolkit";


const filterSlice= createSlice({
    name:"codeBook",
    initialState:{
        productList:[],
        filterList:[],
        onlyInStock:false,
        bestSellerOnly:false,
        ratings:null,
        priceSort:null
    },
    reducers:{
        setProductList(state,action){
            state.productList = action.payload
            // console.log("sd",state.productList)
        },
        setOnlyStock(state, action) {
            state.onlyInStock = !state.onlyInStock
            if(state.onlyInStock){
            const tempList = state.filterList.length===0 ? state.productList : state.filterList
            const updatedList = tempList.filter((item) => item.in_stock === true);
            state.filterList =updatedList;
            console.log(state.filterList)
        
            }
            else{
                state.filterList=[]
            }
           
           
          },
          setBestSellerOnly(state,action){
           state.bestSellerOnly = !state.bestSellerOnly
           console.log(state.bestSellerOnly)
            if(state.bestSellerOnly){
                const tempList = state.filterList.length===0 ? state.productList : state.filterList
               
                const updatedList = tempList.filter((item) => item.best_seller === true);
                state.filterList = updatedList;
                console.log(state.filterList)
            }
            else{
                state.filterList=[]
            }
          },
          applyFilters(state, action) {
           const {priceSort}  = action.payload;
           state.priceSort = action.payload.priceSort
            console.log(priceSort)
            const tempList = state.filterList.length===0 ? [...state.productList] : [...state.filterList]
            if (priceSort === 'lowToHigh') {

                const updatedList = tempList.sort((a, b) => Number(a.price) - Number(b.price));
                state.filterList = updatedList;
                console.log(state.filterList)
            }
            if (priceSort === 'highToLow') {
                const updatedList = tempList.sort((a, b) => Number(b.price) - Number(a.price));
                state.filterList  = updatedList
                console.log(state.filterList)
            }
          },
          setRating(state,action){
            state.ratings = action.payload.rating
            const rating = action.payload.rating
            const tempList = state.filterList.length===0 ? state.productList : state.filterList
            let updatedList
            console.log(rating)
            switch (rating){
                
                case "4star":   updatedList = tempList.filter((item) => item.rating >= 4);
                                state.filterList = updatedList;                    
                                break;
                case "3star":   updatedList = tempList.filter((item) => item.rating >= 3);
                                state.filterList = updatedList;   
                                break;
                case "2star":   updatedList = tempList.filter((item) => item.rating >= 2);
                                state.filterList = updatedList;   
                                break;
                case "1star":   updatedList = tempList.filter((item) => item.rating >= 1);
                                state.filterList = updatedList;   
                                break;
                default : console.log("error")
            }
          },
          clearFilter(state,action){
            state.filterList =[] 
            state.bestSellerOnly = false
            state.onlyInStock = false
            state.priceSort = null
            state.ratings = null
          }

          

    }

})
export const {setProductList ,setOnlyStock , setBestSellerOnly, applyFilters, setRating , clearFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;