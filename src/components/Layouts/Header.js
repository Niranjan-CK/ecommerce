import { Link } from 'react-router-dom'
import Logo from '../../assets/shopping-3.jpeg'
import { Search } from '../sections/Search'
import { useEffect, useState } from 'react'
import {DropDownLoggedOut , DropDownLoggedIn} from '../index'
export const Header=()=>{
    const [searchShow , setSearchShow] = useState(false)
    const [dropDown,setDropDown] = useState(false)
    const [user,setUser] = useState([])
    const token = JSON.parse(sessionStorage.getItem("token"))
    const userID = JSON.parse(sessionStorage.getItem("userID"))


    useEffect(()=>{
        async function getUser(){
           
            const response = await fetch(`http://localhost:8000/users/${userID}`,{
                method:"GET",
                headers:{ "content-type" : "application/json" }
            });
            const data = await response.json()
            setUser(data)

        }
        getUser()
    })

    return(
        <header>      
        <nav className="bg-white dark:bg-gray-900">
            <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                <Link to="/" className="flex items-center">
                    <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
                </Link>
                <div className="flex items-center relative">
                {user.name}
                    <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                    <span onClick={()=>setSearchShow(!searchShow)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>

                    <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                        <span className="text-2xl bi bi-cart-fill relative">
                            <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">0</span>
                        </span>                    
                    </Link>
                    <span onClick={()=> setDropDown(!dropDown)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                    { dropDown && (token ? <DropDownLoggedIn/>:<DropDownLoggedOut/>)}
                </div>
            </div>
            { searchShow && <Search setSearchShow={setSearchShow}/> }
            
        </nav>
    </header>
    )
}