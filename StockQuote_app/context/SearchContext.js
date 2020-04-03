import React, { useState, createContext } from "react";


export const SearchContext = createContext();

export const SearchProvider = (props) => {

    const [searchValye, setSearchValue] = useState('');


    const getSearchValue = (value) => {
        setSearchValue(value)
    }

    return (
        <SearchContext.Provider value={{searchValye, getSearchValue: getSearchValue}}>
            {props.children}
        </SearchContext.Provider>
    )
}