import React from 'react'
import { productContext } from "./ProductsContext";
import {useState,useEffect } from "react";

function ContextProvider({children}) {
   
    let [user,setUser]=useState([])
    let [count,setCount]=useState(0)
    let [items,setItem]=useState([]);
   
    
  
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(Userdata=>setUser(Userdata))
        .catch(err=>console.log(err))
    },[])
    



  return (
    <div>
        <productContext.Provider value={[user,setUser,count,setCount,items,setItem]}>
            {children}
        </productContext.Provider>
    </div>
  )
}

export default ContextProvider

