import React from 'react'
import {searchContext} from './SearchContext'
import {useState } from "react";

function SearchProvider() {
    let [searchTerm,setSearch]=useState("")
  return (
    
     <div>
        <searchContext.Provider value={[searchTerm,setSearch]}>
            {children}
        </searchContext.Provider>
    </div>

    
  )
}

export default SearchProvider